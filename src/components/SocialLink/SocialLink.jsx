import styles from './SocialLink.module.css'

export default function SocialLinkItem(props) {
  const { url, displayText, icon } = props;

  return (
    <li className={styles.social_link_item}>
      <a href={url} target='_blank' className={`${styles.link} ${styles.no_decoration}`}>
        {icon}
        {displayText}
      </a>
    </li>
  )
}