import React from 'react'


const Home = () => {
  return (
    <div >

      <div className='content'>
        <h1><img width='40px' src='image/bye.png'/>Hey,I'm Bharathsimha</h1>
       <marquee direction='left' behaviour='alternat' width='30%' >I'm Web Developer</marquee> 
       
       <div className='links'>
       
        <a href='https://www.linkedin.com/in/bharathsimha-singam-431728239'><img  src='image/linkedin.svg'/></a>
         <a href='https://github.com/bharathsimha99'><img src='image/github.svg'/></a>
   
       
       </div>
        
       
        
      </div>
      <img className='image' alt='no pic' src='image/brown-shirt-me.jpg' />
      
    </div>
  )
}

export default Home
