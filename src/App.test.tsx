import ReactThreeTestRenderer from "@react-three/test-renderer";
import { render, screen } from "@testing-library/react";

import App from "./App";
import Scene from "./components/Scene";
import { Quaternion, Vector3 } from "three";

describe("App", () => {
  it("should display the canvas and side panel", () => {
    render(<App />);

    expect(screen.getByTestId("canvas")).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 1, name: "Details" }),
    ).toBeDefined();
  });
});

describe("3D scene", () => {
  it("should initialise the scene graph", async () => {
    const targetPosition = { current: new Vector3(0, 0.5, 0) };
    const targetQuaternion = { current: new Quaternion() };

    const renderer = await ReactThreeTestRenderer.create(
      <Scene
        targetPosition={targetPosition}
        targetQuaternion={targetQuaternion}
      />,
    );

    expect(renderer.scene.children.length).toBeGreaterThan(0);

    const ambientLight = renderer.scene.children.find(
      (child) => child.type === "AmbientLight",
    );
    const directionalLight = renderer.scene.children.find(
      (child) => child.type === "DirectionalLight",
    );
    const gridHelper = renderer.scene.children.find(
      (child) => child.type === "GridHelper",
    );

    expect(ambientLight).toBeDefined();
    expect(directionalLight).toBeDefined();
    expect(gridHelper).toBeDefined();
  });
});
