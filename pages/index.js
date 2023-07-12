import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import { useEffect, useState } from 'react'

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2023-06-12&sortBy=publishedAt&apiKey=8af95e842e104a93947b58b91499048b'
    )
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data
        setArticles(articles)
      })
  }, [])

  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                src={article.urlToImage}
                alt={`Image for th article ${article.title}`}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  )
}
