import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  checked = false,
  id = 'checkboxId',
  onClick = () => {},
  label = <></>,
  ...otherProps
}) => {
  const handleClick = () => {
    onClick(checked)
  }

  const handleInputChange = () => {
    onClick(!checked)
  }

  return (
    <>
    <label htmlFor={id} className={styles.checkboxContainer}>
      <input
        {...otherProps}
        className={styles.inputCheckbox}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleInputChange}
        required
      />
      <span
        {...otherProps}
        role='button'
        aria-checked={checked}
        className={styles.checkbox}
        onClick={handleClick}
        tabindex='0'
      />
      {label}
    </label>
    </>
  );
};

export default Checkbox
