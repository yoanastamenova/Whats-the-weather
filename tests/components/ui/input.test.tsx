import { Input } from "@/components/ui/input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

test('renders a correct input', () => {
    render(
        <Input placeholder="name@email.com" />)

    expect(screen.getByPlaceholderText('name@email.com')).toBeDefined()
})

test('typing changes the value of the input', async () => {
     render(<Input placeholder="name@email.com" />)

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('name@email.com')

    await user.type(input, 'test@example.com')

    expect(input).toHaveValue('test@example.com')
})