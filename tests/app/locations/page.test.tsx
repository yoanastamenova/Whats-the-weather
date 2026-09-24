import Page from "@/app/locations/page";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test('title loaded', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: 'Choose a country' })).toBeDefined()
})

test('links have correct href', () => {
    render(<Page />)

    expect(screen.getByRole('link', { name: 'Spain'})).toHaveAttribute('href', '/locations/spain')
    expect(screen.getByRole('link', { name: 'Germany'})).toHaveAttribute('href', '/locations/germany')
    expect(screen.getByRole('link', { name: 'Tunis'})).toHaveAttribute('href', '/locations/tunis')
}) 