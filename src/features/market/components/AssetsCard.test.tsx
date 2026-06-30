import { render, screen } from '@testing-library/react'
import { AssetCard } from './AssetsCard'
import type { Asset } from '../types/assets'

const mockAsset: Asset = {
  id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin',
  price: 50000, change: 2.5, volume: 1_000_000,
}

describe('AssetCard', () => {
  it('renders name and symbol', () => {
    render(<AssetCard asset={mockAsset} />)
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('BTC')).toBeInTheDocument()
  })

  it('renders formatted price', () => {
    render(<AssetCard asset={mockAsset} />)
    expect(screen.getByText('$50,000.00')).toBeInTheDocument()
  })

  it('shows + prefix and success class for positive change', () => {
    render(<AssetCard asset={mockAsset} />)
    expect(screen.getByText('+2.5%')).toHaveClass('text-success')
  })

  it('shows danger class for negative change', () => {
    render(<AssetCard asset={{ ...mockAsset, change: -3.2 }} />)
    expect(screen.getByText('-3.2%')).toHaveClass('text-danger')
  })
})