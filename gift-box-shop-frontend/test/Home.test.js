import { render } from "@testing-library/react";
import Header from "../src/components/global/Header";

test("adds 1 + 2 to equal 3", () => {
  let c = render(<Header />);
  console.log(c);
  expect(1 + 2).toBe(3);
});
