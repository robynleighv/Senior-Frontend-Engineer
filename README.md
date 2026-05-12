# Autonomous Fleet Telemetry Dashboard

## Overview

This exercise involves building a React-based dashboard that visualizes the real-time status and 3D position of a robot fleet. You will handle a simulated stream of telemetry data via WebSockets, process spatial coordinates, and render a live 3D "Digital Twin" of the robot's environment.

## The Task

Our robots use a "World Coordinate System" to report their location. You are required to build a single-page application that:

1. Connects to a local WebSocket server to receive robot state updates.
2. Visualizes the robot's movement in a 3D space.
3. Displays a live feed of the "Asset IDs" the robot is currently "seeing" (using a UI that mimics seven-segment displays).

## Functional Requirements

### 3D Visualisation (React-Three-Fiber)

- Render a 3D grid representing the warehouse floor. Please do not use any 3rd party libraries for this.
- Represent the robot as a simple 3D object (e.g., a box, cylinder, or glTF model).
- Update the robot's position smoothly as data arrives.

### Real-time Asset Feed

- As the robot "scans" assets, the UI must list the last 5 detected Asset IDs.
- Create a CSS/SVG-based "Seven-Segment Display" component to render these IDs, styled to show a standard seven-segment display.
- This feed should be visible alongside the 3D Visualisation

## Getting Started

```bash
pnpm install
pnpm start
```

This will start both the WebSocket server (port 8080) and the Vite dev server (port 5173).

N.B. You may use your preferred dependency manager, e.g., PNPM, yarn, npm, etc.

## WebSocket Data Format

The server sends JSON packets every 500ms:

```json
{
  "robotId": "ROB-01",
  "x": 5.23,
  "y": 3.17,
  "z": 0,
  "theta": 0,
  "lastScannedAsset": 1234
}
```
