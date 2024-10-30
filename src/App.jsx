import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

function App() {

  return (
    <div>
      <Header />
      <Post
        author="Veridiana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus!" />
      <Post
        author="Lucas"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio odio minima est ea." />
    </div>
  )
}

export default App