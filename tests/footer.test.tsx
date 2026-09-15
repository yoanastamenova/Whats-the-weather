import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/footer'

test('renders the section headings', () => {
  render(<Footer />)

  expect(screen.getByRole('heading', { name: 'Features' })).toBeDefined()
  expect(screen.getByRole('heading', { name: 'About Us' })).toBeDefined()
  expect(screen.getByRole('heading', { name: 'Service' })).toBeDefined()
})

test('links to the main site sections', () => {
  render(<Footer />)

  expect(screen.getByRole('link', { name: 'Locations' })).toHaveAttribute('href', '/locations')
  expect(screen.getByRole('link', { name: 'Maps' })).toHaveAttribute('href', '/maps')
  expect(screen.getByRole('link', { name: 'Warnings' })).toHaveAttribute('href', '/warnings')
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
})

test('links to the legal pages', () => {
  render(<Footer />)

  expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute('href', '/terms')
  expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/policy')
})

test('shows the current copyright notice', () => {
  render(<Footer />)

  expect(screen.getByText('© 2025 YoanaStamenova - YoanaStamenova.com')).toBeDefined()
})

test('renders the footer logo', () => {
  render(<Footer />)

  expect(screen.getByAltText('logo footer')).toBeDefined()
})
