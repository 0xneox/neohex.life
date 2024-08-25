import React from 'react'

function Web3(props) {
  const size = props.size || 32
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 240">
      <path fill="#808285" d="M85.367 43.784S75.88 49.262 75.88 60.2v54.67s0 10.955-9.487 5.478s-9.487-16.415-9.487-16.415v-54.67c0-.683.034-1.348.102-1.997c1.041-9.623 9.368-14.435 9.368-14.435L47.42 21.892s-.017 0-.034.017c-.563.324-9.453 5.802-9.453 16.398v54.67s0 10.955-9.488 5.478c-9.487-5.477-9.487-16.415-9.487-16.415V27.37c0-10.938 9.487-16.415 9.487-16.415L9.487 0S0 5.477 0 16.415v54.67s0 32.847 28.444 49.262c8.72 5.034 14.76 5.426 18.958 3.566c4.197 6.706 10.238 13.293 18.957 18.326c28.444 16.415 28.444-16.415 28.444-16.415v-54.67c0-10.955 9.488-16.415 9.488-16.415c-2.917-3.668-5.51-6.16-7.78-7.474c-1.935-1.12-5.65-2.28-11.144-3.48Z" />
      <path fill="#BCBEC0" d="M189.641 136.813c0-32.42 28.444-16.415 28.444-16.415L256 142.29v21.893l-37.915-21.893s-.12-.069-.331-.176l-.125-.061c-1.894-.926-9.03-3.784-9.03 5.732c0 10.937 9.486 16.415 9.486 16.415l18.958 10.937S256 186.092 256 218.922s-28.444 16.414-28.444 16.414l-37.915-21.892v-21.892l37.932 21.892s9.487 5.478 9.487-5.477c0-10.938-9.487-16.415-9.487-16.415l-9.488-5.477c-.566-.339-28.444-17.166-28.444-49.262ZM161.197 87.57c5.669.651 9.512 1.56 11.53 2.726c2.195 1.268 4.67 4.011 7.427 8.228c0 0-9.487 5.478-9.487 16.415l-.001 54.757c-.025 1.84-.853 32.251-28.444 16.329c-27.59-15.923-28.419-47.306-28.443-49.175l-.001-.087l18.957 10.955v.036c.01.695.32 11.086 9.487 16.378c9.197 5.31 9.479-4.822 9.487-5.447v-54.7c0-10.938 9.488-16.415 9.488-16.415Zm-47.385 5.596l18.957 10.938v21.892l-18.957-10.937V93.165Z" />
      <path fill="#F16822" d="M218.085 43.784c-8.736-5.05-16.568-7.508-23.24-8.497c-1.74-3.805-6.006-8.276-14.674-13.224c-28.445-16.244-56.872-.17-56.872-.17l-37.932 21.89l18.958 10.938l37.914-21.892s9.487-5.478 18.958 0c9.487 5.477 0 10.954 0 10.954l-37.915 21.892l18.957 10.938l37.949-21.91c.563-.323 9.743-5.289 18.923.018c9.487 5.477 0 10.937 0 10.937l-37.914 21.893l18.957 10.954l47.402-27.37s18.957-10.937-9.47-27.352Z" />
    </svg>
  )
}

export default Web3