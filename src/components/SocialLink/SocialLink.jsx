import styles from './SocialLink.module.css'

import { useTheme } from '../../ThemeContext';

export default function SocialLinkItem(props) {
  const { url, displayText, icon } = props;
  const theme = useTheme();

  return (
    <li className={styles.social_link_item}>
      <a href={url} target='_blank' className={`${styles.link} ${styles.no_decoration}`} style={{ color: theme.body.color}}>
        {icon}
        <span className={styles.link_text}>
          {displayText}
        </span>
      </a>
    </li>
  )
}