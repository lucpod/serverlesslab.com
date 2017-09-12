import lucianoPicture from './images/luciano-mammino.jpg'
import podgePicture from './images/padraig-o-brien.jpg'

const data = [
  {
    name: 'Padraig O\'Brien',
    picture: podgePicture,
    description: `Padraig has been working in IT for nearly 20 years, covering all
      areas from engineering, product development, testing , operations and senior
      management.
      He is the organiser of Serverless Dublin, Lean Coffee Dublin and Nodeschool dublin.
      He is currently working on unicorndb.io`,
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
    description: `Luciano is a passionate fullstack software developer, Node.js and JavaScript
      believer and co-author of "Node.js design patterns" (Packt).
      He Recently launched Fullstack Bulletin, a
      semi-automated weekly newsletter, completely open source and built
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
