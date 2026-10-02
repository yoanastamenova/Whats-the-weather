import SpainPage from "@/app/locations/spain/page";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

// SpainPage calls useRouter() for the "Go back" button.
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

test("shows loading state before data arrives", () =>  {
    vi.mocked(fetch).mockReturnValue(new Promise(() => {}))
    render(<SpainPage />)

    expect(screen.getByText('Loading Weather...')).toBeDefined()
})

test("renders temperature and condition for each city on success", async () =>  {
    vi.mocked(fetch).mockImplementation((input) => {
    const urlStr = input.toString()

    if (urlStr.includes("valencia")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Valencia", temperature: 25, condition: "Sunny" }),
      } as Response)
    }
    if (urlStr.includes("madrid")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "madrid", temperature: 20, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Barcelona", temperature: 22, condition: "Rainy" }),
    } as Response)
  })

  render(<SpainPage />)

  expect(await screen.findByText("25°C")).toBeDefined()
  expect(await screen.findByText("Sunny")).toBeDefined()
  expect(await screen.findByText("20°C")).toBeDefined()
  expect(await screen.findByText("Cloudy")).toBeDefined()
  expect(await screen.findByText("22°C")).toBeDefined()
  expect(await screen.findByText("Rainy")).toBeDefined()
})

test("shows 'Data unavailable' for a city whose fetch fails", async () =>  {
    vi.mocked(fetch).mockImplementation((input) => {
    const urlStr = input.toString()

    if (urlStr.includes("valencia")) {
      return Promise.resolve({
        ok: false,
        json: async () => ({ city: "Valencia", temperature: "N/A", condition: "Data Unavailable" }),
      } as Response)
    }
    if (urlStr.includes("madrid")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "madrid", temperature: 20, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Barcelona", temperature: 22, condition: "Rainy" }),
    } as Response)
  })

  render(<SpainPage />)

  expect(await screen.findByText("N/A")).toBeDefined()
  expect(await screen.findByText("Data unavailable")).toBeDefined()
  expect(await screen.findByText("20°C")).toBeDefined()
  expect(await screen.findByText("Cloudy")).toBeDefined()
  expect(await screen.findByText("22°C")).toBeDefined()
  expect(await screen.findByText("Rainy")).toBeDefined()
})

test("Go back button navigates to /locations", async () =>  {
    vi.mocked(fetch).mockImplementation((input) => {
        const urlStr = input.toString()

        if (urlStr.includes("valencia")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "Valencia", temperature: 25, condition: "Sunny" }),
      } as Response)
    }
    if (urlStr.includes("madrid")) {
      return Promise.resolve({
        ok: true,
        json: async () => ({ city: "madrid", temperature: 20, condition: "Cloudy" }),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: async () => ({ city: "Barcelona", temperature: 22, condition: "Rainy" }),
    } as Response)
  })

      render(<SpainPage />)
      const user = userEvent.setup();
      await screen.findByRole('button')
      await user.click(screen.getByRole('button'))
      expect(pushMock).toHaveBeenCalledWith("/locations")
})
