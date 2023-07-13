import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos artículos</p>}
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

export async function getStaticProps() {
  const response = await fetch(process.env.API_URL)
  const { articles } = await response.json()
  return {
    props: { articles }
  }
}

/* export async function getServerSideProps(context) {
  const response = await fetch(process.env.API_URL)
  const { articles } = await response.json()
  return {
    props: { articles }
  }
} */
