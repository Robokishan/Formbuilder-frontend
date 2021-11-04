import { cleanup, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useCounter from "./useCounter";

afterEach(() => {
  cleanup();
});

describe("useCounter hook", () => {
  test("should increment counter", () => {
    let results;
    const renderHook = (hook) => {
      function HookWrapper() {
        results = hook();
        return null;
      }
      render(<HookWrapper />);
      return results;
    };
    renderHook(useCounter);
    act(() => {
      results.increment();
      results.increment();
    });
    expect(results.count).toBe(2);
  });
});
