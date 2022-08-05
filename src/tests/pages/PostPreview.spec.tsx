import { render, screen } from "@testing-library/react";
import { getPrismicClient } from "../../services/prismic";
import { useSession } from "next-auth/react"
import Post, { getStaticProps } from "../../pages/posts/preview/[slug]";
import { useRouter } from "next/router";

const post = {
  slug: 'post-slug',
  title: 'post-title',
  content: 'post-excerpt',
  updatedAt: '05-08-2022'
}

jest.mock('next-auth/react')
jest.mock('next/router')
jest.mock('../../services/prismic')

describe('Post Preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<Post post={post} />)
    expect(screen.getByText('post-title')).toBeInTheDocument()
    expect(screen.getByText('post-excerpt')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
  })

  it('redirects user to full post paga when user is subscribed.', async () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({
      data: {
        activeSubscription: 'fake-activeSubscription'
      },
      status: 'authenticated'
    } as any)

    const useRouterMocked = jest.mocked(useRouter)
    const pushMock = jest.fn()
    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<Post post={post} />)

    expect(pushMock).toHaveBeenCalledWith('/posts/post-slug')
  })

  it('loads inital data', async () => {


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

    const response = await getStaticProps({
      params: { slug: 'post-slug' }
    })

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