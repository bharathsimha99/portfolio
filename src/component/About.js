import React from 'react'

function About() {
  return (
    <div>
      <div>
      <h1><img width='35px' src='image/man.png' />About Me</h1>
      <h5 className='abtcontent'>I am an enthusiastic and driven degree from
        AVN Institute of Engineering and Technology
        .i am currently looking to secure a Graduate
        Web Development position to utilise my
        strong analytical skills and business
        knowledge.</h5>

      </div>
     
     
      <div className='skills'>
      <h1 style={{marginTop:"140px"}}><img width='35px' src='image/online.png' />Skills</h1>
        <ul>
          <li><h4><img width='35px' src='/image/html-5.png' />Html</h4></li>
          <li><h4><img width='35px' src='/image/css-3.png' />CSS</h4></li>
          <li><h4><img width='35px' src='/image/bootstrap.png' />Bootsrap</h4></li>
          <li> <h4><img width='35px' src='/image/js.png' />JavaScript</h4></li>
          <li><h4><img width='35px' src='/image/atom.png' />ReactJs</h4></li>
          <li><h4><img width='35px' src='/image/api.png' />Api</h4></li>
          <li> <h4><img width='35px' src='/image/mongodb.png' />MongoDb</h4></li>
          <li> <h4><img width='35px' src='/image/nodejs.png' />NodeJs</h4></li>

        </ul>

      </div>



    </div>
  )
}

export default About
