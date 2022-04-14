import styles from './Footer.module.css'

import { useTheme } from '../../ThemeContext';

export default function Footer(props) {
  const theme = useTheme();
  return (
    <footer style={{ backgroundColor: theme.footer.backgroundColor, color: theme.footer.color }}>
      <p>
        &copy; {new Date().getFullYear()} Roberto Mazzalai. All Rights Reserved.
      </p>
    </footer>
  )
}