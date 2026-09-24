import Page from "@/app/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test('page title loading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/WHAT'S\s*THE\s*WEATHER\?/i)
})
    

test('find out more button links', () => {
    render(<Page />)

    expect(screen.getByRole('link', { name: 'Find out more →'})).toHaveAttribute('href', '/maps')
})

test('hero image has correct alt', () => {
    render(<Page />)

    expect(screen.getByAltText('Hero illustration')).toBeDefined()
})

test('explore weather text renders', () => {
    render(<Page />)

    expect(screen.getByText('Explore Weather Worldwide')).toBeDefined()
})

test('feature cards render', () => {
    render(<Page />)

    expect(screen.getByText('Interactive Maps')).toBeDefined()
    expect(screen.getByText('RealFeel® Temperature')).toBeDefined()
    expect(screen.getByText('Severe Weather Alerts')).toBeDefined()
    expect(screen.getByText('Hourly & Daily Forecasts')).toBeDefined()
})

test('free trial button renders', () => {
    render(<Page />)

    expect(screen.getByRole('button', { name: 'Get started with 7 days free →'})).toBeDefined()
})

test('newsletter section renders', () => {
    render(<Page />)

    expect(screen.getByRole('button', { name: 'Subscribe'})).toBeDefined()
    expect(screen.getByPlaceholderText('name@email.com')).toBeDefined()
})