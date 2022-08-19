import { ThumbsUp, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './comment.module.css'

interface CommentProps {
  content: string;
  onRemove: () => void;
  
}

export const Comment = ({content, onRemove}:CommentProps) => {
  const [thumbsUp, setThumbsUp] = useState(0)

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1)
  }
  return (
    <div className={styles.Container}>
      <Avatar username='maykonsousa' hasBorder={false}/>
      <div className={styles.Content}>
        <div className={styles.ContentBox}>
        <header>
          <div className={styles.Info}>
            <strong>Maykon Sousa</strong>
            <time title="09 de agosto às 10h30min" dateTime="2022-08-09 10:30:00 ">Publicado há 1h</time>
          </div>
          <button title='Deletar comentário' onClick={onRemove}>
            <Trash size={24}  />
          </button>
        </header>
        <p>{content}</p>
        </div>
       <footer>
        <button onClick={handleThumbsUp}>
        <ThumbsUp size={24}/> aplaudir <span>{thumbsUp}</span>
        </button>
       </footer>
      </div>
    </div>
  )
}

