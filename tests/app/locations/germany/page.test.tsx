import GermanyPage from "@/app/locations/germany/page";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

test("shows loading state before data arrives", () => {
  vi.mocked(fetch).mockReturnValue(new Promise(() => {}))
  render(<GermanyPage />)

  expect(screen.getByText('Loading Weather...')).toBeDefined()
})

test("renders temperature and condition for each city on success", async () => {
  vi.mocked(fetch).mockImplementation((input) => {
    const urlStr = input.toString()

    if (urlStr.includes("berlin")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Berlin", temperature: 10, condition: "Sunny" }),
      } as Response)
    }
    if (urlStr.includes("munich")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Munich", temperature: 15, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Hamburg", temperature: 12, condition: "Rainy" }),
    } as Response)
  })

  render(<GermanyPage />)

  expect(await screen.findByText("10°C")).toBeDefined()
  expect(await screen.findByText("Sunny")).toBeDefined()
  expect(await screen.findByText("15°C")).toBeDefined()
  expect(await screen.findByText("Cloudy")).toBeDefined()
  expect(await screen.findByText("12°C")).toBeDefined()
  expect(await screen.findByText("Rainy")).toBeDefined()
})

test("shows 'Data unavailable' for a city whose fetch fails", async () => {
  vi.mocked(fetch).mockImplementation((input) => {
    const urlStr = input.toString()

    if (urlStr.includes("berlin")) {
      return Promise.resolve({
        ok: false,
        json: async () => ({ city: "Berlin", temperature: "N/A", condition: "Data unavailable" }),
      } as Response)
    }
    if (urlStr.includes("munich")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Munich", temperature: 15, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Hamburg", temperature: 12, condition: "Rainy" }),
    } as Response)
  })

  render(<GermanyPage />)

  expect(await screen.findByText("N/A")).toBeDefined()
  expect(await screen.findByText("Data unavailable")).toBeDefined()
  expect(await screen.findByText("15°C")).toBeDefined()
  expect(await screen.findByText("Cloudy")).toBeDefined()
  expect(await screen.findByText("12°C")).toBeDefined()
  expect(await screen.findByText("Rainy")).toBeDefined()
})

test("Go back button navigates to /locations", async () => {
  vi.mocked(fetch).mockImplementation((input) => {
    const urlStr = input.toString()

    if (urlStr.includes("berlin")) {
      return Promise.resolve({
        ok: false,
        json: async () => ({ city: "Berlin", temperature: "N/A", condition: "N/A" }),
      } as Response)
    }
    if (urlStr.includes("munich")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Munich", temperature: 15, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Hamburg", temperature: 12, condition: "Rainy" }),
    } as Response)
  })

  render(<GermanyPage />)
  const user = userEvent.setup();
  await screen.findByRole('button')
  await user.click(screen.getByRole('button'))
  expect(pushMock).toHaveBeenCalledWith("/locations")
})
