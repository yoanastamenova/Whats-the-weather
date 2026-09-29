import Page from "@/app/maps/page";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test('title loaded', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: 'Choose a country' })).toBeDefined()
})

test('links have correct href', () => {
    render(<Page />)

    expect(screen.getByRole('link', { name: 'Spain'})).toHaveAttribute('href', '/maps/spain')
    expect(screen.getByRole('link', { name: 'Germany'})).toHaveAttribute('href', '/maps/germany')
}) 