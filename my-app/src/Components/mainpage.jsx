import React from 'react'
import '../Styles/mainpage.scss'

export default function MainPage(){
  return(
    <>
      <div className="main-page">
        <h1>Welcome to My SASS APP</h1>
        <button>Click Here</button>
      </div>
      <div className='body'>
        <h1>Here I will be testing and applying some SASS skills that I am currently learning</h1>
        <p>My goal is to have fun with this page and test new stuff and convert my css to scss files within my project <a href='https://nomnom-project.herokuapp.com/#sign-in'>NomNom</a></p>
      </div>
    </>
  )
}
