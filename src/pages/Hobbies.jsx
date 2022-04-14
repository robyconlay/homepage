import slacklineImage from '../slackline.jpg'
import sideflipImage from '../sideflip.jpg'
import Hobby from '../components/Hobby/Hobby'

import styles from './Hobbies.module.css'

export default function Hobbies() {

  return (
    <div className='content-container'>
      <div>
        <Hobby
          title='Parkour and Freerunning'
          imagePath={sideflipImage}
          description='Roberto doing a Sideflip on sand'
          text='Roberto loves learning new difficult tricks and jumps because of the feeling of freedom while flying in the air, while taking head on the challenges aspects of parkour'
        />
        <Hobby title='Slackline'
          imagePath={slacklineImage}
          description='Roberto practicing slacklining'
          text='Likes slacklining, although now it happens rarely because of an injury to the knee caused by said slacklining'
        />
        <Hobby title='Gaming'
          text='Favourite games include Oxygen not Included, Factorio, Valorant'

        />
        <Hobby title='Dungeons and Dragons'
          text='Upcoming Dungeon Master in 5e D&D'
        />
      </div>
    </div>
  )
}