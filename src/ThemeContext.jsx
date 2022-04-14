import React, { useState, useContext, useEffect } from "react";

const themes = {
  light: {
    name: 'light',
    body: {
      backgroundColor: '#ffffff80',
      color: 'black'
    },
    header: {
      backgroundColor: 'grey',
      color: 'black',
    },
    header_nav_link: {
      active_color: 'aqua',
      active_bar_backgroundColor: 'aqua'
    },
    footer: {
      backgroundColor: 'grey',
      color: 'black',
    },
    theme_switcher: {
      backgroundColor: '#253246'
    },

  },
  dark: {
    name: 'dark',
    body: {
      backgroundColor: '#262626',
      color: 'white'
    },
    header: {
      backgroundColor: '#202023',
      color: 'white',
    },
    header_nav_link: {
      active_color: 'aqua',
      active_bar_backgroundColor: 'aqua'
    },
    footer: {
      backgroundColor: '#202023',
      color: 'white',
    },
    theme_switcher: {
      backgroundColor: '#FBD38D'
    }
  }
}


const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    
  }

  useEffect(() => {
    document.body.style = `background: ${theme.body.backgroundColor}; color: ${theme.body.color}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}