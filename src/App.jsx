import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    author: {
      avatarUrl: "https://github.com/haaveeni.png",
      name: "Veridiana Lucena",
      role: "FrontEnd Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaaaaa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: <a href=''>jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2025-01-30 20:00:00'),
  },
  {
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaaaaa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: <a href=''>jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2025-01-30 20:00:00')
  }

]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}