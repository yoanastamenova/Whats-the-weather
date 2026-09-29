import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { render,screen, waitFor } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import userEvent from "@testing-library/user-event"

const schema = z.object({
  username: z.string().min(1, "Username is required"),
})

function TestForm({ onSubmit }: { onSubmit: (values: z.infer<typeof schema>) => void }) {
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { username: "" },
})

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

test('renders the label and the input', () => {
    render(<TestForm onSubmit={vi.fn()} />)

    expect(screen.getByText('Username')).toBeDefined()
    expect(screen.getByPlaceholderText('Username')).toBeDefined()
})

test('shows a validation error when submitted empty', async () => {
  const user = userEvent.setup()
  render(<TestForm onSubmit={vi.fn()} />)

  await user.click(screen.getByRole('button', { name: 'Submit' }))

  expect(await screen.findByText('Username is required')).toBeDefined()
})

test('calls onSubmit with the entered values', async () => {
  const user = userEvent.setup()
  const handleSubmit = vi.fn()
  render(<TestForm onSubmit={handleSubmit} />)

  await user.type(screen.getByPlaceholderText('Username'), 'yoana')
  await user.click(screen.getByRole('button', { name: 'Submit' }))

await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({ username: 'yoana' }, expect.anything()))
})