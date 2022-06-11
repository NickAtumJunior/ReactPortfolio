
import React from 'react'
import { useWindupString } from "windups";
function Home() {
     const [text] = useWindupString("I'm NithishKumar Thiruchelvam.", {
     pace: (char) => (char === " " ? 60 : 100),
     });

     const [anotherText] = useWindupString(`I'm FullStackDeveloper who have bachelor's degree in Civil Engineering,the world need a person who update himself daily,I think I'm the person.Because in this technical Society we want to survive we must need some technical skills atleast for safe Browsing. my vision everyone should know programming not a career as a breathe for live safely,Because we stuck up sometimes for being a prey of hackers. Finally trust me i can make anything with cool&calm mind and even better creativity...
     Now I'm working in FocusR 
     Consultancy and Technologies in a designation of junior FullStackDeveloper..and I do 
     Freelancing for who wants to improve their business online in a better way like WebApps,API,
     Business websites...and,Moreover I do teaching for javascript and UI&UX Designing...
     See-More about me in about page`,{
      pace: (char) => (char === " " ? 120 : 10)
     })

     const [welcomeNote] = useWindupString("Hello! There",{
      pace: (char) => (char === " " ? 50 : 80)
     })
  return (
    <div className='home'>
       <div className='home-first'>
          <h2>{welcomeNote}</h2>
          <h1>{text}</h1>
          <p>
            {anotherText} 
          </p>
       </div>
       <div className='home-second'>
          <img alt='user' src='https://drive.google.com/uc?export=download&id=1ug2GBSxtQ7NJ0RFXCVce3CWm_qqDPkFA' />
       </div>
    </div>
  )
}

export default Home