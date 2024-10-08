import React from 'react'

function Solidity(props) {
  const size = props.size || 32
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="-78.58515 -203.242 681.0713 1219.452">
      <path d="M391.93 0L261.226 232.302H0L130.614 0H391.93" opacity=".35" />
      <path d="M261.226 232.302h261.318L391.93 0H130.614z" opacity=".5" />
      <path d="M130.614 464.514l130.612-232.212L130.614 0 0 232.302z" opacity=".7" />
      <path d="M131.879 812.967l130.704-232.303h261.318L393.196 812.967H131.879" opacity=".35" />
      <path d="M262.582 580.665H1.265l130.613 232.303h261.317z" opacity=".5" />
      <path d="M393.196 348.453L262.582 580.665l130.614 232.303L523.9 580.665z" opacity=".7" />
    </svg>
  )
}

export default Solidity