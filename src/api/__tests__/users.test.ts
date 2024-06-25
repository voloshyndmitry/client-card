import { describe, it, expect, beforeEach, vi } from "vitest";
import { get } from "../common";
import { fetchUsers } from "../users";

vi.mock("../common", () => ({
  get: vi.fn(),
}));

describe("fetchUsers", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns a list of users on successful fetch", async () => {
    const mockUsers = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Doe" },
    ];
    vi.mocked(get).mockResolvedValueOnce({
      data: { users: mockUsers },
    });

    const result = await fetchUsers();
    expect(result).toEqual(mockUsers);
    expect(get).toHaveBeenCalledWith(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users"
    );
  });

  it("returns an empty array and logs an error when fetch fails", async () => {
    vi.mocked(get).mockRejectedValueOnce(new Error("Network error"));

    const consoleSpy = vi.spyOn(console, "warn");
    const result = await fetchUsers();

    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "getUsers: ",
      new Error("Network error")
    );
  });
});
