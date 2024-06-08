import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
     <h1>custom APP  | CHAITU</h1>
    </>
  )

}

   const anotherElement =(
    <a href='https://google.com' target='_blank'> visit google</a>
   )

   const anotherUser="hello chaitu visit the link here"
   const reactElement = React.createElement(
    'a',
    {href: 'htpps://google.com',target:'_blank'},
    'click me to vidit',
    anotherUser
   )
ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
