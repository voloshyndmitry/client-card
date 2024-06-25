import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { useStateContext } from "../../../contexts/StateProvider";
import { UserIntf } from "../../../Interfaces/common";
import Card from "../Card";

vi.mock("../../../contexts/StateProvider", () => ({
  useStateContext: vi.fn(),
}));

describe("Card component tests", () => {
  it("renders user's full name and avatar correctly", () => {
    const user: UserIntf = {
      id: "1",
      username: "johndoe",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar.jpg",
      role: "User",
      join_date: "2020-01-01",
      description: "A short description",
    };

    const setSelectedUser = vi.fn();
    (useStateContext as any).mockReturnValue({ setSelectedUser });

    render(<Card {...user} />);
    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("A short description")).toBeInTheDocument();
  });

  it("handles the Learn More button click", () => {
    const user: UserIntf = {
      id: "1",
      username: "johndoe",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar.jpg",
      role: "User",
      join_date: "2020-01-01",
      description: "A short description",
    };

    const setSelectedUser = vi.fn();
    (useStateContext as any).mockReturnValue({ setSelectedUser });

    render(<Card {...user} />);
    fireEvent.click(screen.getByText("Learn More"));
    expect(setSelectedUser).toHaveBeenCalledWith(user);
  });

  it("shows ellipsis for long descriptions", () => {
    const user: UserIntf = {
      id: "1",
      username: "johndoe",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar.jpg",
      role: "User",
      join_date: "2020-01-01",
      description: "A".repeat(101),
    };

    render(<Card {...user} />);
    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("does not show ellipsis for short descriptions", () => {
    const user: UserIntf = {
      id: "1",
      username: "johndoe",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar.jpg",
      role: "User",
      join_date: "2020-01-01",
      description: "A short description",
    };

    render(<Card {...user} />);
    expect(screen.queryByText("...")).not.toBeInTheDocument();
  });
});
