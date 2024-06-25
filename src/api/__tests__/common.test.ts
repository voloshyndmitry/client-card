import { describe, it, expect, vi, beforeEach } from "vitest";
import { get } from "../common";

// Mock the global fetch function
global.fetch = vi.fn();

describe("get function", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns json data on a successful fetch", async () => {
    const mockJson = { message: "success" };
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockJson),
      statusText: "OK",
    } as Response);

    const result = await get<{ message: string }>(
      "https://api.example.com/data"
    );
    expect(result).toEqual(mockJson);
  });

  it("throws an error when fetch response is not ok", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found",
    } as Response);

    await expect(
      get<{ message: string }>("https://api.example.com/data")
    ).rejects.toThrow("Not Found");
  });
});
