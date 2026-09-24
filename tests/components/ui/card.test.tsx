import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

test("renders a full card composed of its parts", () => {
  render(
    <Card>
      <CardHeader>
        <CardTitle>Weather Today</CardTitle>
        <CardDescription>Sunny with a chance of rain</CardDescription>
      </CardHeader>
      <CardContent>
        <p>22°C</p>
      </CardContent>
      <CardFooter>
        <p>Updated 5 minutes ago</p>
      </CardFooter>
    </Card>
  )

  expect(screen.getByText('Weather Today')).toBeDefined()
  expect(screen.getByText('Sunny with a chance of rain')).toBeDefined()
  expect(screen.getByText('22°C')).toBeDefined()
  expect(screen.getByText('Updated 5 minutes ago')).toBeDefined()
})