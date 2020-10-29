import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

