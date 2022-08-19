import { Header } from "./components/Header";

import "./global.css";
import styles from "./app.module.css";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";
import { findLargePalindromicPrimeNumbers } from "./utils/formatDate";

const posts = [
  {
    id: 1,
    author: {
      username: 'diego3g',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { line:1,type: 'paragraph', content: 'Fala galera 👋' },
      { line:2,type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { line:3,type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      username: 'maykbrito',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { line:1, type: 'paragraph', content: 'Fala galera 👋' },
      { line:2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { line:3, type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];



function App() {
  const test = findLargePalindromicPrimeNumbers(31415926535);
  console.log(test);
  return (
    
    <>
      <Header />
      <div className={styles.Wrapper}>
        <SideBar />
        <main>

          {posts.map(post => (
            <Post key={post.id} 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt} />
            
          ))}

        </main>
      </div>
    </>
  );
}

export default App;
