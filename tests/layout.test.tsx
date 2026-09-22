import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "mock-geist-sans" }),
  Geist_Mono: () => ({ variable: "mock-geist-mono" }),
}));

test('expect links to be shown', () => {
    render(
        <RootLayout>
        <p>test content</p>
        </RootLayout>
    )

    expect(screen.getByRole('link', { name: 'LOCATIONS'})).toHaveAttribute('href', '/locations')
    expect(screen.getByText('© 2025 YoanaStamenova - YoanaStamenova.com')).toBeDefined()
})