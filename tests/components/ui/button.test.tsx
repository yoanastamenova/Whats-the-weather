import { Button } from "@/components/ui/button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";

test('renders the button as expected', () => {
    render(
    <Button className="primary">
        Click me
    </Button>
)

    expect(screen.getByText('Click me')).toBeDefined()
    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByRole('button')).toHaveClass('bg-primary')
})

test('expect button to be disabled', () => {
    render(
        <Button disabled>Click me</Button>
    )

expect(screen.getByRole('button')).toBeDisabled()
})

test('applies destructive variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-destructive')
    expect(button).not.toHaveClass('bg-primary')
})

test('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})
