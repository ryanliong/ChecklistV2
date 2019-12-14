import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Item from './item'
import App from './Test2'



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />,
      document.body.appendChild(document.createElement('div')),
    )
  })