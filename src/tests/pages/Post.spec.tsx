import { render, screen } from "@testing-library/react";
import { getPrismicClient } from "../../services/prismic";
import { getSession } from "next-auth/react"
import Post, { getServerSideProps } from "../../pages/posts/[slug]";

const post = {
  slug: 'post-slug',
  title: 'post-title',
  content: 'post-excerpt',
  updatedAt: '05-08-2022'
}

jest.mock('next-auth/react')
jest.mock('../../services/prismic')

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={post} />)
    expect(screen.getByText('post-title')).toBeInTheDocument()
    expect(screen.getByText('post-excerpt')).toBeInTheDocument()
  })

  it('redirects user if not subscribed', async () => {
    const getSessionMocked = jest.mocked(getSession)
    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {
        slug: 'post-slug'
      }
    } as any)
    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        })
      })
    )
  })

  it('loads inital data', async () => {
    const getSessionMocked = jest.mocked(getSession)
    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-activeSubscription'
    } as any)

    const getPrismicClientMocked = jest.mocked(getPrismicClient)
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'post-title' }
          ],
          content: [
            { type: 'paragraph', text: 'post-excerpt' }
          ]
        },
        last_publication_date: '08-05-2022'
      })
    } as any)

    const response = await getServerSideProps({
      params: { slug: 'post-slug' }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'post-slug',
            title: 'post-title',
            content: '<p>post-excerpt</p>',
            updatedAt: '05 de agosto de 2022'
          }
        }
      })
    )
  })
})