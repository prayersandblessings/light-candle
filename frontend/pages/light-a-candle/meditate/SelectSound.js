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
    const [selectedValue, setSelectedValue] = useState(0);
    const [soundUrl, setSoundUrl] = useState(null);
    const [cnControlIcon, setcnControlIcon] = useState(styles.audioPause);
    const [isPlaying, setisPlaying] = useState(true)
    const audioRef = useRef();

    const onClickNext = () => {
      onSoundSelected(selectedValue.value);
    }

    const disableAudio = () => {
      if (isPlaying) {
        audioRef.current.pause();
        setisPlaying(false);
      } else {
        audioRef.current.play();
        setisPlaying(true);
      }
    };
  
    const onSelectChange = (selectedOption) => {
      setSelectedValue(selectedOption)
  
      const [{sound: {url : soundUrl } = {} } = {}] = sounds.filter( ({id}) => id == selectedOption.value);
      if(!soundUrl){
        setSoundUrl(null);
        return;
      }

      setSoundUrl(soundUrl);
    }

    const selectOptions = [
      {value: 0, label:'Sit In silence'}, 
      ...sounds.map(({id: value, name: label }) => (
        { value, label }
      )
      )
    ];
    
    const playingLabel = isPlaying ? 'Pause' : 'Play';

    return (
      <>
          <Dropdown
            options={selectOptions}
            onChange={onSelectChange}
            value={selectedValue}
            controlClassName="controlDropDown"
            menuClassName="menuDropDown"
            />

            <button
             className={cnControlIcon}
             onClick={disableAudio}
             type="button"
             disabled={!soundUrl}
             >
                {playingLabel}
            </button>
  
          {soundUrl && (
            <audio src={soundUrl} ref={audioRef} autoPlay/>
          )}
          <br />
          <button onClick={onClickNext} className="next-button">
            <img src='/icon-arrow-right.svg' width='52'></img>
            <span>CLICK TO A CANDLE AND MEDITATE</span>
          </button>
      </>
    )
  } 

  export default SelectSound;