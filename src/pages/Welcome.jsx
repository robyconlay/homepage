import sideflipImage from '../sideflip.jpg'
import styles from './Welcome.module.css';

export default function Welcome() {
  return (
    <div className={styles.welcome_container}>
      <img src={sideflipImage} alt='Roberto' className={styles.welcome_image} />
      <p className={styles.text_on_image}>Roberto,<br /> appassionato e entusiasta</p>
    </div>
  )
}