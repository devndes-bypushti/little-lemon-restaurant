import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Little Lemon reservation app", () => {
  test("renders the reservation page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /reserve a table/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /find a table/i })
    ).toBeInTheDocument();
  });

  test("shows validation errors when the form is submitted empty", async () => {
    const user = userEvent;

    render(<App />);

    await user.click(
      screen.getByRole("button", { name: /find a table/i })
    );

    expect(
      screen.getByText(/please select a date/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please select a start time/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please select a duration/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/please select a seating type/i)
    ).toBeInTheDocument();
  });

  test("starts with two guests", () => {
    render(<App />);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("increases the number of guests", async () => {
    const user = userEvent;

    render(<App />);

    const increaseButton = screen.getByRole("button", {
      name: /increase guests/i,
    });

    await user.click(increaseButton);

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("decreases the number of guests", async () => {
    const user = userEvent;

    render(<App />);

    const decreaseButton = screen.getByRole("button", {
      name: /decrease guests/i,
    });

    await user.click(decreaseButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});