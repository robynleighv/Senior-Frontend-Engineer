// No changes to this should be needed.

const WebSocket = require("ws");
const http = require("node:http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Patrol route waypoints
const waypoints = [
  { x: 1, y: 1, theta: -135 },
  { x: 8, y: 1, theta: 0 },
  { x: 8, y: 4, theta: 90 },
  { x: 1, y: 4, theta: 180 },
  { x: 1, y: 7, theta: 90 },
  { x: 8, y: 7, theta: 0 },
];

wss.on("connection", (ws) => {
  console.log("Robot linked to dashboard");

  let waypointIndex = 0;
  let position = { x: waypoints[0].x, y: waypoints[0].y };
  let lastAssetScan = Date.now();
  let lastScannedAsset = null;
  const speed = 0.15; // units per tick

  const interval = setInterval(() => {
    const target = waypoints[waypointIndex];
    const dx = target.x - position.x;
    const dy = target.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < speed) {
      // Reached waypoint, move to next
      position = { ...target };
      waypointIndex = (waypointIndex + 1) % waypoints.length;
    } else {
      // Move toward waypoint
      position.x += (dx / distance) * speed;
      position.y += (dy / distance) * speed;
    }

    // Scan an asset every 3-5 seconds
    const now = Date.now();
    if (now - lastAssetScan > 3000 + Math.random() * 2000) {
      lastScannedAsset = Math.floor(Math.random() * 10000);
      lastAssetScan = now;
    }

    const telemetry = {
      robotId: "ROB-01",
      x: position.x.toFixed(2),
      y: position.y.toFixed(2),
      z: 0,
      theta: target.theta,
      lastScannedAsset,
    };
    ws.send(JSON.stringify(telemetry));
  }, 500);

  ws.on("close", () => clearInterval(interval));
});

server.listen(8080, () => console.log("Telemetry server running on port 8080"));
