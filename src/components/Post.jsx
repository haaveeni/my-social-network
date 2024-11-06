import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src='https://www.github.com/haaveeni.png' />
          <div className={styles.authorInfo}>
            <strong>Veridiana Lucena</strong>
            <span>FrontEnd Developer</span>
          </div>
        </div>

        <time title='21 de novembro de 2024 às 15:00' dateTime='2024-11-23 15:00:01'>Publicado há 1 h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href=''>jane.design/doctorcare</a>{' '}</p>

        <p>
          <a href=''>#novoprojeto</a> {' '}
          <a href=''> #nlw</a>{' '}
          <a href=''> #rocketseat</a>
        </p>
      </div>

    </article>
  )
}