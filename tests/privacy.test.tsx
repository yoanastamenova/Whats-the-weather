import Page from "@/app/policy/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test('page title loading', () => {
    render(<Page />)

    expect(screen.getByRole('heading', { name: 'Privacy Policy' })).toBeDefined()
})

test('policy heading rendering', () => {
    render(<Page />)

    expect(screen.getByText('1. Introduction')).toBeDefined()
    expect(screen.getByText('2. Information We Collect')).toBeDefined()
    expect(screen.getByText('3. How We Use Your Information')).toBeDefined()
    expect(screen.getByText('4. Data Security')).toBeDefined()
    expect(screen.getByText('5. Data Retention')).toBeDefined()
    expect(screen.getByText('6. Your Legal Rights')).toBeDefined()
    expect(screen.getByText('7. Third-Party Links')).toBeDefined()
    expect(screen.getByText('8. Cookies')).toBeDefined()
    expect(screen.getByText('9. Changes to This Privacy Policy')).toBeDefined()
    expect(screen.getByText('10. Contact Us')).toBeDefined()
})