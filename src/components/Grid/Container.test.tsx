import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container";

describe("in Container", () => {
  test("renders the container component", () => {
    const { asFragment } = render(
      <Container size="sm" className="some class" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
