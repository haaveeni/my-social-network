import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const publishDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm", { locale: ptBR })

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormat} dateTime={publishedAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p><a href="">{line.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
        </div>

      </form>

    </article>
  )
}