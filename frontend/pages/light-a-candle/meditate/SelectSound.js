import React, { useState, useRef } from 'react';

import styles from './index.module.scss';
import Dropdown from 'react-dropdown';

import {
    NEXT_BUTTON_TEXT
  } from '../../../constants/text';


/**
 * Component to select the language
 * @param {callback} onSoundSelected  
 * @param {Array} sounds list of languages
 */
const SelectSound = ({ onSoundSelected, sounds = [] })  => {
    const [selectedValue, setSelectedValue] = useState('silence');
    const [soundUrl, setSoundUrl] = useState(null);
    const [cnControlIcon, setcnControlIcon] = useState(styles.audioPause);
    const [isPlaying, setisPlaying] = useState(true)
    const audioRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      onSoundSelected(selectedValue);
    }

    const disableAudio = () => {
      if (isPlaying) {
        audioRef.current.pause();
        setisPlaying(false);
        setcnControlIcon(styles.audioPlay);
      } else {
        audioRef.current.play();
        setisPlaying(true);
        setcnControlIcon(styles.audioPlay);
      }
    };
  
    const onSelectChange = (selectedOption) => {
      setSelectedValue(selectedOption)
  
      const [{sound: {url : soundUrl } = {} } = {}] = sounds.filter( ({value}) => value == selectedOption.value);
      if(!soundUrl){
        setSoundUrl(null);
        return;
      }

      setSoundUrl(soundUrl);
    }

    
    const playingLabel = isPlaying ? 'Pause' : 'Play';

    return (
      <form onSubmit={handleSubmit} className={styles.soundForm}>
        <div>
          <div className={styles.dropdownComponent}>
            <Dropdown
              options={sounds}
              onChange={onSelectChange}
              controlClassName="controlDropDown"
              menuClassName="menuDropDown"
              value={selectedValue}
            />
            <input type="text" className={styles.soundSelected} value={!!selectedValue ? selectedValue : null} required />
          </div>

          <button
            className={cnControlIcon}
            onClick={disableAudio}
            type="button"
            disabled={!soundUrl}
          >
            {playingLabel}
          </button>

          {soundUrl && <audio src={soundUrl} ref={audioRef} autoPlay />}
        </div>

        <div>
          <section>
            <p>As you light your candle, take some time to be with yourself.</p>
            <p>An easy way to do this is to focus on your breath.</p>
            <p>Connect with the silence within.</p>
            <p>Light your candle and sit quietly.</p>
            <p>Listen to the flute or the soothing sounds of nature.</p>
            <p>Watch your candle float on the golden sea beneath the Milky Way.</p>
          </section>
          <button type="submit" className={styles.emailIcon}>
            <div/>
            <span className="caption">Click to light a candle and meditate</span>
          </button>
        </div>
      </form>
    );
  } 

  export default SelectSound;