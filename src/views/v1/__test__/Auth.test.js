import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Registration from "../Registration.jsx";
import Login from "../Login.jsx";
import { Provider } from "react-redux";
import { store } from "../../../store";
import "@testing-library/jest-dom/extend-expect";
import sum from "./sum";

let demoEmail = "demo@login.com";
let demoPassword = "demopassword";
let errorLogin = /bad credentials/;

describe("Registration", () => {
  test("Registration Page Check", () => {
    render(
      <Provider store={store}>
        <Registration />
      </Provider>
    );
    expect(screen.getByText("Sign up")).toBeTruthy();
  });
});

describe("Login", () => {
  test("Login page", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(screen.getByText(/^Sign in/)).not.toBeNull();
  });

  test("Login Button Enable", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(
      await screen.findByRole("button", { name: /^Sign in/ })
    ).toBeEnabled();
  });

  test("Wrong Login credentials", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText(/Email/), demoEmail);
    userEvent.type(screen.getByPlaceholderText(/^Password$/), demoPassword);
    expect(screen.getByPlaceholderText(/Email/).value).toBe(demoEmail);
    expect(screen.getByPlaceholderText(/^Password$/).value).toBe(demoPassword);
    userEvent.click(await screen.findByRole("button", { name: /^Sign in/ }));
    expect(
      await screen.findByRole("button", { name: /^Sign in/ })
    ).toBeDisabled();
    expect(await screen.findByText(errorLogin)).toBeInTheDocument();
  });
});
test("sum func", () => {
  expect(sum(2, 1)).toBe(3);
});
