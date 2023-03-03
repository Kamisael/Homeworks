import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const FirstApp1 = ({title, sum}) => {
  return (
    
    <>
    <div className= "App">
      <h1>{title}</h1>
      <span>{sum}</span>
      </div>
    </>
  )
}


FirstApp1.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}

FirstApp1.defaultProps = {
  title: 'Primer Challenge',
  sum: 3000
}

export default FirstApp1






