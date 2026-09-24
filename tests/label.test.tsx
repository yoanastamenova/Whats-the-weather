import { Label } from "@/components/ui/label";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("renders a full label composed", () => {
  render(
        <Label htmlFor="email">
            Email
        </Label>)
        
  expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
});
