import TunisPage from "@/app/locations/tunis/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, test, vi  } from "vitest";

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
    vi.mocked(fetch).mockReturnValue( new Promise(() => {}))
    render(<TunisPage />)

    expect(screen.getByText('Loading Weather...')).toBeDefined()
})

test("renders temperature and condition for each city on success", async () => {
    vi.mocked(fetch).mockImplementation((input) => {
        const urlStr = input.toString()

        if(urlStr.includes("tunis")) {
            return Promise.resolve({
                ok: true,
                json: async () => ({ city: "tunis", temperature: 20, condition: "Sunny"}),
            } as Response)
        }
        if(urlStr.includes("sfax")) {
            return Promise.resolve({
                ok: true,
                json: async () => ({ city: "sfax", temperature: 25, condition: "Partly cloudy"}),
            } as Response)
        }
        return Promise.resolve({
            ok: true,
            json: async () => ({ city: "sousse", temperature: 28, condition: "Mainly clear" }),
        } as Response)
    })

    render(<TunisPage />)

    expect(await screen.findByText("20°C")).toBeDefined()
    expect(await screen.findByText("Sunny")).toBeDefined()
    expect(await screen.findByText("25°C")).toBeDefined()
    expect(await screen.findByText("Partly cloudy")).toBeDefined()
    expect(await screen.findByText("28°C")).toBeDefined()
    expect(await screen.findByText("Mainly clear")).toBeDefined()
 })

test("shows 'Data unavailable' for a city whose fetch fails", async () => {
    vi.mocked(fetch).mockImplementation((input) => {
        const urlStr = input.toString()

        if(urlStr.includes("tunis")) {
            return Promise.resolve({
                ok: false,
                json: async () => ({ city: "tunis", temperature: "N/A", condition: "Data unavailable"}),
            } as Response)
        }
        if(urlStr.includes("sfax")) {
            return Promise.resolve({
                ok: true,
                json: async () => ({ city: "sfax", temperature: 25, condition: "Partly cloudy"}),
            } as Response)
        }
        return Promise.resolve({
            ok: true,
            json: async () => ({ city: "sousse", temperature: 28, condition: "Mainly clear" }),
        } as Response)
    })

    render(<TunisPage />)

    expect(await screen.findByText("N/A")).toBeDefined()
    expect(await screen.findByText("Data unavailable")).toBeDefined()
    expect(await screen.findByText("25°C")).toBeDefined()
    expect(await screen.findByText("Partly cloudy")).toBeDefined()
    expect(await screen.findByText("28°C")).toBeDefined()
    expect(await screen.findByText("Mainly clear")).toBeDefined()
 })
test("Go back button navigates to /locations", async () => {
     vi.mocked(fetch).mockImplementation((input) => {
        const urlStr = input.toString()

        if(urlStr.includes("tunis")) {
            return Promise.resolve({
                ok: true,
                json: async () => ({ city: "tunis", temperature: 20, condition: "Sunny"}),
            } as Response)
        }
        if(urlStr.includes("sfax")) {
            return Promise.resolve({
                ok: true,
                json: async () => ({ city: "sfax", temperature: 25, condition: "Partly cloudy"}),
            } as Response)
        }
        return Promise.resolve({
            ok: true,
            json: async () => ({ city: "sousse", temperature: 28, condition: "Mainly clear" }),
        } as Response)
    })

    render(<TunisPage />)
    const user = userEvent.setup();
    await screen.findByRole('button')
    await user.click(screen.getByRole('button'))
    expect(pushMock).toHaveBeenCalledWith("/locations")
})