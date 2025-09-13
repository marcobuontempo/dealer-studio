import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../components/features/Card";
import styles from "../components/features/Card/styles.module.css";

describe("Card border states", () => {
  it("renders without active border when isActive=false", () => {
    render(
      <Card
        isActive={false}
        name="Test Card"
        text={["Test card"]}
        onButtonClick={() => null}
      />
    );
    const card = screen.getByTestId("card");
    expect(card).not.toHaveClass(styles.active);
  });

  it("renders with active border when isActive=true", () => {
    render(
      <Card
        isActive={true}
        name="Active Card"
        text={["Active card"]}
        onButtonClick={() => null}
      />
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveClass(styles.active);
  });
});
