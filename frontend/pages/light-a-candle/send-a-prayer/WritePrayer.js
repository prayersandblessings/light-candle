import React, { useState, useRef} from 'react'
import Checkbox from '../../../components/form/Checkbox'
import Link from 'next/link'

import {
    FORM_TEXT,
} from '../../../constants/text';
import { SECONDARY_PAGES } from '../../../constants/routes'

import styles from './WritePrayer.module.scss';

/**
 * Component to writte Prayer
 * @param {callback} onPrayerWritten
 * @param {callback} onCloseForm
 */
const WritePrayer = ({ onPrayerWritten })  => {
    const inputName = useRef(null);
    const inputReceipentName = useRef(null);
    const inputReceipentEmail = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);
    const [regularMailingAccepted, setRegularMailingAccepted] = useState(false);

    const handleRegularMailingAccepted = (value) => {
      setRegularMailingAccepted(value)
    };

    const onHandleSubmit = (event) => {
      event.preventDefault();
      const { current : { value: name = '' }} = inputName;
      const { current : { value: receipentName = '' }} = inputReceipentName;
      const { current : { value: receipentEmail = '' }} = inputReceipentEmail;
      const { current : { value: email = '' }} = inputEmail;
      const { current : { value: message = '' }} = inputMessage;
      onPrayerWritten(name, receipentName, receipentEmail, email, message);
    }

    return (
      <>
        <div className={styles.container + " " + styles.prayerContainter}>
          <span className="caption">{FORM_TEXT.TITLE_1}</span>
          <h2 className={styles.title + ' title'}>{FORM_TEXT.TITLE_2}</h2>
          <form onSubmit={onHandleSubmit} className={styles.prayerForm}>
            <div>
              <span className="caption">{FORM_TEXT.SEND_A_PRAYER}</span>
              <textarea
                ref={inputMessage}
                name="message"
                type="text"
                placeholder={FORM_TEXT.WRITE_PRAYER}
                rows="2"
                required
              />

              <div>
                <input
                  ref={inputName}
                  type="text"
                  name="Sender"
                  placeholder={FORM_TEXT.WRITE_NAME}
                  required
                />
                <input
                  ref={inputEmail}
                  name="receiver_email"
                  type="email"
                  placeholder={FORM_TEXT.WRITE_EMAIL}
                  required
                />
              </div>
              <div>
                <p>Who do you wish to send the prayer to?</p>
                <input
                  ref={inputEmail}
                  name="receiver_email"
                  type="email"
                  placeholder={FORM_TEXT.WRITE_RECEIPENT_NAME}
                  required
                />
                <input
                  ref={inputReceipentEmail}
                  type="email"
                  name="RecipientEmail"
                  placeholder={FORM_TEXT.WRITE_RECEIPENT_EMAIL}
                  required
                />
              </div>
              <Checkbox
                id="regular-mailing"
                label={"Subscribe me to the regular mailing list"}
                checked={regularMailingAccepted}
                onClick={handleRegularMailingAccepted}
              />
              <p>
                <span>
                  Click to read our{" "}
                  <Link
                    as={`${SECONDARY_PAGES.PRIVACY_POLICY.name}`}
                    href={SECONDARY_PAGES.PRIVACY_POLICY.url}
                  >
                    <a>{SECONDARY_PAGES.PRIVACY_POLICY.name}</a>
                  </Link>.
                </span>
              </p>
              <p>
                <span>
                  We never sell, share, or disclose any personal infomation about
                  you or the recipient including email address.
                </span>
              </p>
              <p className={styles.description}>
                The ritual of lighting a candle is ancient and sacred. When we light a candle, we can connect with the light in our own heart.
              </p>
              <p className={styles.description}>
                This ritual is a prayer in itself.
              </p>
              <p className={styles.description}>
                You may wish to ligha a candle for a loved one, to let someone know that you are thinking of them or to call forth the best possible outcome in a situation. You may wish to light a candle to invoke the power within, to manifest light in dark places or as a means to remember the best of humanity.
              </p>
            </div>

            <button type="button" onClick={onHandleSubmit} className={styles.emailIcon}>
              <div />
              <span>TAP TO LIGHT A CANDLE, AND SEND YOUR PRAYER</span>
            </button>
          </form>
        </div>
      </>
    );  
  } 

  export default WritePrayer;
