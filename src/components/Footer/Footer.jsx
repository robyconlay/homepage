import styles from './Footer.module.css'

export default function Footer(props) {
  const { theme } = props;
  return (
    <footer className={theme === 'light' ? styles.footer_light : styles.footer_dark}>
      <p>
        &copy; {new Date().getFullYear()} Roberto Mazzalai. All Rights Reserved.
      </p>
    </footer>
  )
}