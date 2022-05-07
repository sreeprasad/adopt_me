import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet.js'

const App = () => {
  return (
    <div>
      <h1> Adopt me </h1>
      <Pet name="Tiger" animal="dog" breed="husky" />
      <Pet name="Twitter" animal="bird" breed="parrot" />
      <Pet name="Bond" animal="cat" breed="mixed" />
    </div>
  )
}
/*
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'brand' }, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Tiger', animal: 'Dog', breed: 'Husky' }),
    React.createElement(Pet, {
      name: 'Twitter',
      animal: 'Bird',
      breed: 'Parrot'
    }),
    React.createElement(Pet, { name: 'Bond', animal: 'Cat', breed: 'Mixed' })
  ])
}

render(React.createElement(App), document.getElementById('root'))
*/
render(<App />, document.getElementById('root'))
