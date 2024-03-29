import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Prismic from "@prismicio/client"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from 'prismic-dom'

import styles from './styles.module.scss'

interface Post {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsPorps {
  posts: Post[]
}

export default function Posts({ posts }: PostsPorps) {
  return (
    <>
      <Head>
        <title>Home | Ignite News</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {
            posts.map(post => (
              <Link key={post.slug} href={`/posts/preview/${post.slug}`}>
                <a >
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'blogpost')
  ], {
    fetch: ['blogpost.title', 'blogpost.content'],
    pageSize: 100,
  }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}