import { Button } from "@/components/ui/button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";

test('renders the button as expected', () => {
    render(
    <Button>
        Click me
    </Button>
)

    expect(screen.getByText('Click me')).toBeDefined()
    expect(screen.getByRole('button')).toBeDefined()
})

test('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})
