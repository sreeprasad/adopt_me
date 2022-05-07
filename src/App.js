/* global React ReactDOM */
// pet component
const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ])
}

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
ReactDOM.render(React.createElement(App), document.getElementById('root'))
