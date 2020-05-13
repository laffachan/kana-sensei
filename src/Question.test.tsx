import React from "react";
import Question from "./Question";
import "@testing-library/jest-dom";
import {
  render,
  fireEvent,
  screen,
  queryByTestId
} from "@testing-library/react";

const kanaList = [["あ", "a"], ["い", "i"]];

const setup = (kana: string) => {
  const utils = render(<Question kanaList={kanaList} kana={kana} />);
  const input = utils.getByLabelText("questionInput");
  const status = screen.getByTestId("status");
  return {
    status,
    input,
    ...utils
  };
};

test("It should contain kana", () => {
  setup("い");
  expect(screen.getByText("い")).toBeInTheDocument();
});

test("It should be good", () => {
  const { input, status } = setup("い");
  fireEvent.change(input, { target: { value: "i" } });
  expect(queryByTestId(status, "good")).toBeVisible();
});

test("It should be bad", () => {
  const { input, status } = setup("あ");
  fireEvent.change(input, { target: { value: "i" } });
  expect(queryByTestId(status, "bad")).toBeVisible();

  test("It should handle unknown input", () => {
    const { input, status } = setup("あ");
    fireEvent.change(input, { target: { value: "fr" } });
    expect(status).toHaveTextContent("");
  });
});
