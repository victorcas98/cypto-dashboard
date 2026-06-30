import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AssetSearch } from './AssetSearch'

const mockSetSearch = vi.fn()

vi.mock('../store/marketFilters', () => ({
  useMarketFilters: vi.fn((selector: (s: object) => unknown) =>
    selector({ search: '', setSearch: mockSetSearch, page: 1, setPage: vi.fn() })
  ),
}))

describe('AssetSearch', () => {
  it('renders search input with placeholder', () => {
    render(<AssetSearch />)
    expect(screen.getByPlaceholderText('Search asset...')).toBeInTheDocument()
  })

  it('updates input value as user types', async () => {
    render(<AssetSearch />)
    const input = screen.getByPlaceholderText('Search asset...')
    await userEvent.type(input, 'bitcoin')
    expect(input).toHaveValue('bitcoin')
  })
})