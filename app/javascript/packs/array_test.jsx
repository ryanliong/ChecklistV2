import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Item from './item'
import Allitems from './allitems'



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Allitems/>,
      document.body.appendChild(document.createElement('div')),
    )
  })