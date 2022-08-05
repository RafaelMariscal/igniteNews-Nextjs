import { render, screen } from "@testing-library/react";
import { getPrismicClient } from "../../services/prismic";
import Posts, { getStaticProps } from "../../pages/posts";

const posts = [
  {
    slug: 'posts-slug',
    title: 'post-title',
    excerpt: 'post-excerpt',
    updatedAt: '05-08-2022'
  }
]

jest.mock('../../services/prismic')

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)
    expect(screen.getByText('post-title')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient)
    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'posts-slug',
            data: {
              title: [
                { type: 'heading', text: 'post-title' }
              ],
              content: [
                { type: 'paragraph', text: 'post-excerpt' }
              ],
            },
            last_publication_date: '08-05-2022'
          }
        ],
      })
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining(
        {
          props: {
            posts: [{
              slug: 'posts-slug',
              title: 'post-title',
              excerpt: 'post-excerpt',
              updatedAt: '05 de agosto de 2022'
            }]
          },
        }
      )
    )
  })
})