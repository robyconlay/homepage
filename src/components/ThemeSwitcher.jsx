import React, { useState, useContext } from 'react';

import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { useTheme, useThemeUpdate } from '../ThemeContext';
import styled from 'styled-components';

export default function ThemeSwitcher() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <Container>
      <Button
        style={{ backgroundColor: theme.theme_switcher.backgroundColor }}
        onClick={() => toggleTheme()}
      >
        {theme.name === 'light' ? <MdDarkMode style={{ color: 'white' }} /> : <MdLightMode color='black'/>}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 100px;
`;

const Button = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  border: none;
  margin: auto;
`;