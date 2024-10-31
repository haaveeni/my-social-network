import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>Sidebar</aside>
        <main>
          <Post
            author="Veridiana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusamus!" />
          <Post
            author="Lucas"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio odio minima est ea." />
        </main>
      </div>

    </div>
  )
}

export default App