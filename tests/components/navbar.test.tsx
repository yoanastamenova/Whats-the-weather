import Navbar from "@/components/navbar";
import { getAllByRole, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";

test('renders the section navigation bar', () => {
    render(<Navbar />)

  expect(screen.getByRole('link', { name: 'LOCATIONS'})).toHaveAttribute('href', '/locations')
  expect(screen.getByRole('link', { name: 'MAPS' })).toHaveAttribute('href', '/maps')
  expect(screen.getByRole('link', { name: 'WARNINGS' })).toHaveAttribute('href', '/warnings')
  expect(screen.getByRole('link', { name: 'CONTACT' })).toHaveAttribute('href', '/contact')
})

test('mobile menu links are not in the document until the button is clicked', () => {
  render(<Navbar />)

  expect(screen.getAllByRole('link', { name: 'LOCATIONS'})).toHaveLength(1);
  expect(screen.getAllByRole('link', { name: 'MAPS'})).toHaveLength(1);
  expect(screen.getAllByRole('link', { name: 'WARNINGS'})).toHaveLength(1);
  expect(screen.getAllByRole('link', { name: 'CONTACT'})).toHaveLength(1);
})

test('clicking the menu button mounts the mobile links, clicking again unmounts them', async () => {
    render(<Navbar />)
    const user = userEvent.setup();
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' });

    await user.click(menuButton)
    expect(screen.getAllByRole('link', { name: 'LOCATIONS' })).toHaveLength(2)

    await user.click(menuButton)
    expect(screen.getAllByRole('link', { name: 'LOCATIONS' })).toHaveLength(1)
})

