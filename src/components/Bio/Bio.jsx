import styles from './Bio.module.css'

export default function Bio(props) {
  const { year, text } = props;

  return (
    <li className={styles.bio}>
      <span className={styles.bio_year}>{year}</span>{text}
    </li>
  )

}