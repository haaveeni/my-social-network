import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar hasBorder src='https://github.com/haaveeni.png' />

        <strong>Veridiana Lucena</strong>
        <span>FrontEnd Developer</span>
      </div>

      <footer>
        <a href="#">< PencilLine size={20} />Editar seu perfil</a>
      </footer>
    </aside>
  )
}