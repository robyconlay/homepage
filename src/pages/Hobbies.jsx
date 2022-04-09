import slacklineImage from '../slackline.jpg'
import sideflipImage from '../sideflip.jpg'
import Hobby from '../components/Hobby/Hobby'

export default function Hobbies() {

  return (
    <div className='content-container'>
      <div>
        <Hobby
          title='Parkour and Freerunning'
          imagePath={sideflipImage}
          description='Roberto doing a Sideflip on sand'
          text=''
        />
        <Hobby title='Slackline'
          imagePath={slacklineImage}
          description='Roberto practicing slacklining'
          text='Likes slacklining, although now it happens rarely because of an injury to the knee caused by said slacklining'
        />
        <Hobby title='Gaming'


        />
        <Hobby title='Dungeons and Dragons'

        />
      </div>
    </div>
  )
}