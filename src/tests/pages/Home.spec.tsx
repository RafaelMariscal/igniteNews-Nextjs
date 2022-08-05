import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Home, { getStaticProps } from "../../pages";
import { stripe } from "../../services/stripe";

jest.mock('next/router')
jest.mock('next-auth/react')
jest.mock('../../services/stripe')


describe('Home page', () => {
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'loading',
    });

    render(<Home product={{ priceId: 'fake-priceId', amount: 'fake-amount' }} />)
    expect(screen.getByText('for fake-amount month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retriveStripePricesMocked = jest.mocked(stripe.prices.retrieve)
    retriveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-id',
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining(
        {
          props: {
            product: {
              priceId: 'fake-id',
              amount: '$10.00'
            }
          },
        }
      )
    )
  })
})