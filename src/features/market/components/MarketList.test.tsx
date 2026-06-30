import { render, screen } from '@testing-library/react'
import { MarketList } from './MarketList'
import { useAssets } from '../hooks/useAssets'

vi.mock('../hooks/useAssets')
const mockUseAssets = vi.mocked(useAssets)

const mockAssets = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 50000, change: 2.5, volume: 1_000_000 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3000, change: -1.2, volume: 500_000 },
]

describe('MarketList', () => {
  it('shows loading skeleton', () => {
    mockUseAssets.mockReturnValue({ data: undefined, isLoading: true, error: null } as any)
    render(<MarketList />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('shows error message on failure', () => {
    mockUseAssets.mockReturnValue({ data: undefined, isLoading: false, error: new Error('fail') } as any)
    render(<MarketList />)
    expect(screen.getByText('Could not load assets')).toBeInTheDocument()
  })

  it('shows empty state when no assets', () => {
    mockUseAssets.mockReturnValue({ data: [], isLoading: false, error: null } as any)
    render(<MarketList />)
    expect(screen.getByText('No assets found')).toBeInTheDocument()
  })

  it('renders a card for each asset', () => {
    mockUseAssets.mockReturnValue({ data: mockAssets, isLoading: false, error: null } as any)
    render(<MarketList />)
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Ethereum')).toBeInTheDocument()
  })
})