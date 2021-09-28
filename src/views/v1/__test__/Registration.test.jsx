import { render, screen, cleanup } from "@testing-library/react";
import Registration from "../Registration.jsx";
import { Provider } from "react-redux";
import { store } from "../../../store";

test('registration', () => {
    render(<Provider store={store}><Registration /></Provider>)
    expect(screen.getByText("Sign up")).not.toBeNull();
})