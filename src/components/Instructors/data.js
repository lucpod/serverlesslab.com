import lucianoPicture from './images/luciano-mammino.jpg'
import podgePicture from './images/padraig-o-brien.jpg'

const data = [
  {
    name: 'Padraig O\'Brien',
    picture: podgePicture,
    description: `I have been working in IT for nearly 20 years, covering all
      areas from engineering, product development, testing , operations and senior
      management.
      Organiser of serverless dublin, lean coffee dublin and nodeschool dublin.
      Currently working on unicorndb.io`,
    links: {
      website: 'https://padraigobrien.com/',
      twitter: 'https://twitter.com/Podgeypoos79',
      github: 'https://github.com/padraigobrien',
      linkedin: 'https://www.linkedin.com/in/padraigobrien'
    }
  },
  {
    name: 'Luciano Mammino',
    picture: lucianoPicture,
    description: `Passionate fullstack software developer. Node.js and JavaScript
      believer and co-author of "Node.js design patterns" (Packt).
      recently launched Fullstack Bulletin (http://fstack.link), a
      semi-automated weekly newsletter, also completely open source and built
      on top of serverless services.`,
    links: {
      website: 'https://loiege.co/',
      twitter: 'https://twitter.com/loige',
      github: 'https://github.com/lmammino',
      linkedin: 'https://www.linkedin.com/in/lucianomammino'
    }
  }
]

export default data
