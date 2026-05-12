# Autonomous Fleet Telemetry Dashboard

## Overview

This exercise involves building a React-based dashboard that visualizes the real-time status and 3D position of a robot fleet. You will handle a simulated stream of telemetry data via WebSockets, process spatial coordinates, and render a live 3D "Digital Twin" of the robot's environment.

### Submitting your solution

Please make changes to this folder directly, then once complete, please zip the folder (excluding any dist/node_modules folders) and return to Dexory.

### Setup 

A basic Vite SPA dev server is already configured. Biome has been configured for linting and formatting, and Vitest has also been included in the setup.

The WebSocket server has been implemented in the `server.js` file; you should not need to make any changes to this file.

Your solution should be added to the `App.tsx`, feel free to add folders/files as you see fit to keep the code readable and maintainable.

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

## Non-Functional Requirements

- **Performance:** The dashboard must remain responsive even if the WebSocket sends updates at high frequency.
- **Testing:** Include unit tests for any utility functions and a component test for the 3D scene initialization.
- **Production Readiness:** Add details to the `PROD_READY.md` file to describe the next steps needed to productionise this app. That could be aspects like additional testing, error handling, etc. **You do not need to implement these, but please highlight what is needed and why.**

## Restrictions

### Permitted:
- Your preferred package manager (npm/pnpm/yarn)
- Use of Tailwind/Bootstrap for any CSS (you may also use plain CSS or CSS modules)
- Use of 3rd party libraries where you feel it is appropriate (excluding when adding the grid requirement)
- Test may use their testing framework (vitest/jest/playwright/mocha/chai/etc)

### Restrictions:
- No component libraries
- No use of any 3D visualisation libraries other than React-Three-Fiber
- The grid for the 3D visualisation must not use a 3rd party library


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
