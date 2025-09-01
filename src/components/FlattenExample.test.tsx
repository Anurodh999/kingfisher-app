import React from "react";
import { render, screen } from "@testing-library/react";
import { FlattenExample } from "./FlattenExample";

test("renders flattened object correctly", () => {
render(<FlattenExample />);
expect(screen.getByText(/Flattened Object/i)).toBeInTheDocument();
expect(screen.getByTestId("flattened-output")).toHaveTextContent('"b.c": "hello"');
expect(screen.getByTestId("flattened-output")).toHaveTextContent('"f.0.g": "world"');
});