import { useTheme } from '../ThemeContext';
import styled from 'styled-components';

export default function Footer(props) {
  const theme = useTheme();
  return (
    <FooterContainer style={{ backgroundColor: theme.footer.backgroundColor, color: theme.footer.color }}>
      <p>
        &copy; {new Date().getFullYear()} Roberto Mazzalai. All Rights Reserved.
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  /* margin-top: 20px; */
  /* display: flex; */
  justify-content: center;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
  z-index: 1;
`