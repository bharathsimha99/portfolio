import React from 'react'

function Portfolio() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projContent'>
        <div >
          <h3><img width='30px' src='/image/atom.png' />CRUD Application</h3>
          <a href='https://wonderful-cannoli-bf30c2.netlify.app/'><img width='15px' src='/image/external-link.png' />Live link</a>
        </div>

        <div>
          <h3><img width='30px' src='/image/atom.png' />Multi Api Websites</h3>
          <a href='https://cool-squirrel-04b0cf.netlify.app/'><img width='15px' src='/image/external-link.png' />Live link</a>
        </div>

        <div>
          <h3><img width='20px' src='/image/html-5.png' /><img width='20px' src='/image/css-3.png' /><img width='20px' src='/image/js.png' />Covid-19 Statewise Status Website</h3>
          <a href='https://covid19-bharath.netlify.app/'><img width='15px' src='/image/external-link.png' />Live link</a>
        </div>

      </div>

    </div>

  )
}

export default Portfolio
