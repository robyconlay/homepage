import React, { useState, useContext } from 'react';
import styles from './ThemeSwitcher.module.css'

import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { useTheme, useThemeUpdate } from '../../ThemeContext';

export default function ThemeSwitcher() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <div className={styles.theme_switcher_container}>
      <button className={styles.theme_switcher}
        style={{ backgroundColor: theme.theme_switcher.backgroundColor }}
        onClick={() => toggleTheme()}
      >
        {theme.name === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  )
}