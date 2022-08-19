import { ChangeEvent, FormEvent, useState } from 'react';
import { formatDate } from '../../utils/formatDate';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './post.module.css';

interface PostProps {
 
  author: {
    username: string;
    name: string;
    role: string;
  }
  content: Array<{ type: string, content: string, line:number }>;
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }:PostProps) {
  const {longDateTime, dateRelativeNow, dateToIso} = formatDate(publishedAt);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  const removeComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  }

  const handleNewComentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  }

 
  return (
    <article className={styles.Container}>
      <header className={styles.Header}>
        <div className={styles.Author}>
          <Avatar username={author.username} />
          <div className={styles.AuthorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>
        <time title={longDateTime} dateTime={dateToIso}>{`publicado ${dateRelativeNow}`}</time>
      </header>
      <div className={styles.Content}>
        {content.map(({ type, content, line }) => type === 'paragraph' ? (
          <p key={line}>{content}</p>
        ):(<p key={line}><a >{content}</a></p>))}
      </div>
      <form className={styles.CommentForm}
      onSubmit={addComment}>
      
        <strong>Deixe o seu feedback</strong>
        <textarea 
        placeholder='Digite um comentário'
        onChange={handleNewComentChange}
        value={newComment}
        required
        
         />
       <footer>
       {newComment.length > 0 && <button type='submit'>Publicar</button>}
       </footer>
      </form>

      {comments.length > 0 && (
        <div className={styles.CommentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={`${comment}`} onRemove={()=>removeComment(index)}  />
        ))}
      </div>
      )}
    </article>
  );
}
