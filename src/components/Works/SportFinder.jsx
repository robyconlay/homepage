import sport_finder_location from '../../images/works/sport_finder_location.jpg'

export default function SportFinder() {

  return (
    <div>
      <h4>
        Sport Finder
      </h4>
      <span>2021</span>

      <p>
      A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support. The life-time revenue is more than $200k.
      </p>

      <ul>
        <li>
          Website
          <a href="">link</a>
        </li>
        <li>
          Platform
          <span>Android</span>
        </li>
        <li>
          Stack
          <span>Java, Android, Android Studio, ...markup tool</span>
        </li>
      </ul>

      <img src={sport_finder_location} alt="" />
      <img src="" alt="" />
    </div>
  )

}