import { Carousel } from "@/components/carousel";
import { act, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

test('renders an image for each slide', () => {
    render(<Carousel />)

    expect(screen.getByAltText('Location Forecast')).toBeDefined()
    expect(screen.getByAltText('Weather Maps')).toBeDefined()
    expect(screen.getByAltText('Warnings')).toBeDefined()
    expect(screen.getByAltText('Forecasts')).toBeDefined()
})

test('only one slide is active', () => {
    render(<Carousel />)

    const slide = screen.getByAltText('Location Forecast').closest('.transition-transform')
    expect(slide).toHaveClass('translate-x-0')
})

test('slide is changed in three seconds', () => {
    vi.useFakeTimers()
    render(<Carousel />)

    act(() => {
        vi.advanceTimersByTime(3000)
    })

    const slide = screen.getByAltText('Weather Maps').closest('.transition-transform')
    expect(slide).toHaveClass('translate-x-0')

    vi.useRealTimers()
})

test('slide wraps back to the first after a full cycle', () => {
    vi.useFakeTimers()
    render(<Carousel />)

    act(() => {
        vi.advanceTimersByTime(12000)
    })

    const slide = screen.getByAltText('Location Forecast').closest('.transition-transform')
    expect(slide).toHaveClass('translate-x-0')

    vi.useRealTimers()
})