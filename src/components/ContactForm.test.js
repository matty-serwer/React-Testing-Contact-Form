import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("user can fill out and submit form", async () => {
  // Arrange
  render(<ContactForm />);

  // Act
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/last name/i);
  const button = screen.getByRole("button");

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Mat" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "McMatty" },
  });
  fireEvent.change(email, { target: { name: "email", value: "one@two.com" } });
  fireEvent.change(message, {
    target: { name: "message", value: "This is a test message." },
  });

    fireEvent.click(button);

 // Assert
    const lastNameText = await screen.getByText(/McMatty/i);
    expect(lastNameText).toBeVisible();

 
});
