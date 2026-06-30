import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AssetPagination } from './AssetPagination'
import { useMarketFilters } from '../store/marketFilters'

beforeEach(() => {
  useMarketFilters.setState({ page: 1, search: '' })
})

describe('AssetPagination', () => {
  it('renders back and next buttons', () => {
    render(<AssetPagination />)
    expect(screen.getByText('back')).toBeInTheDocument()
    expect(screen.getByText('next')).toBeInTheDocument()
  })

  it('shows current page number', () => {
    render(<AssetPagination />)
    expect(screen.getByText('Page 1')).toBeInTheDocument()
  })

  it('disables back button on page 1', () => {
    render(<AssetPagination />)
    expect(screen.getByText('back')).toBeDisabled()
  })

  it('increments page on next click', async () => {
    render(<AssetPagination />)
    await userEvent.click(screen.getByText('next'))
    expect(screen.getByText('Page 2')).toBeInTheDocument()
  })

  it('decrements page on back click', async () => {
    useMarketFilters.setState({ page: 2 })
    render(<AssetPagination />)
    await userEvent.click(screen.getByText('back'))
    expect(screen.getByText('Page 1')).toBeInTheDocument()
  })
})