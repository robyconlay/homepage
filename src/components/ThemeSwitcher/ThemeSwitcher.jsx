import React, { useState } from 'react';
import styles from './ThemeSwitcher.module.css'

import { MdDarkMode, MdLightMode } from 'react-icons/md'


export default function ThemeSwitcher(props) {

  const { theme, setTheme } = props;

  let isLight = theme === 'light';
  return (
    <div className={styles.theme_switcher_container}>
      <button className={`${styles.theme_switcher} ${isLight ? styles.dark_button : styles.light_button}`} onClick={() => setTheme(isLight ? 'dark' : 'light')}>
        {isLight ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  )
}