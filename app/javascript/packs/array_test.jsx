import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Body from './body'



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Body/>,
      document.body.appendChild(document.createElement('div')),
    )
  })