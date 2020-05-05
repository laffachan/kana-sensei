import Practice from "./Practice";
import "@testing-library/jest-dom";

// __tests__/timerGame-test.js
// 'use strict';

jest.useFakeTimers();

test("waits 1 second before changing kana", () => {
  const clear = require("./Practice");
  clear();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
