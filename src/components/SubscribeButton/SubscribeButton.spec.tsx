import { render, screen, fireEvent } from '@testing-library/react'
import { SubscribeButton } from '.'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

jest.mock('next-auth/react')
jest.mock('next/router')

describe("SubscribeButton Component", () => {
  it('renders correctly.', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<SubscribeButton />)
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated.', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })
    const singInMocked = jest.mocked(signIn)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')
    fireEvent.click(subscribeButton)
    expect(singInMocked).toHaveBeenCalled()
  })

  it('redirects to posts page when user already has a subscription', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com'
        },
        activeSubscription: 'fake-active-subscription',
        expires: "fake-expires"
      },
      status: 'authenticated'
    })

    const useRouterMocked = jest.mocked(useRouter)
    const pushMock = jest.fn()
    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')
    fireEvent.click(subscribeButton)
    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})
