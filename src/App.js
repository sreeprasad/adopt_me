import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet.js'

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
