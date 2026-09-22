import Page from "@/app/terms/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test('page title loading', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: 'Terms of Service' })).toBeDefined()
})

test('terms heading rendering', () => {
    render(<Page />)

    expect(screen.getByText('1. Agreement to Terms')).toBeDefined()
    expect(screen.getByText('2. Use License')).toBeDefined()
    expect(screen.getByText('3. Weather Information Disclaimer')).toBeDefined()
    expect(screen.getByText('4. User Accounts')).toBeDefined()
    expect(screen.getByText('5. Prohibited Uses')).toBeDefined()
    expect(screen.getByText('6. Intellectual Property')).toBeDefined()
    expect(screen.getByText('7. Links to Other Websites')).toBeDefined()
    expect(screen.getByText('8. Limitation of Liability')).toBeDefined()
    expect(screen.getByText('9. Disclaimer')).toBeDefined()
    expect(screen.getByText('10. Termination')).toBeDefined()
    expect(screen.getByText('11. Governing Law')).toBeDefined()
    expect(screen.getByText('12. Changes to Terms')).toBeDefined()
    expect(screen.getByText('13. Contact Us')).toBeDefined()
})

test('contact link has correct email', () => {
    render(<Page />)

    expect(screen.getByRole('link', { name: 'email@example.com'})).toHaveAttribute('href', 'mailto:email@example.com')
}) 