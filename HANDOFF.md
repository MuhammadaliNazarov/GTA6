# Yüin — Multiplayer handoff

Files: `server/rooms.js`, `public/room.js`. Requires Node.js and `ws` (`npm install ws`).

## Server integration (Ali)
```js
const http = require('http');
const { attachRoomServer } = require('./server/rooms');
const server = http.createServer(yourExistingStaticHandler);
attachRoomServer(server);
server.listen(3000);
```
Use the project's actual static handler instead of `yourExistingStaticHandler`. Do not attach a second WebSocket server to `/ws`.

## Client integration (Ali)
```js
import { connectRoom } from './room.js';
const room = connectRoom({
  onWelcome: ({playerId}) => console.log('me',playerId),
  onSnapshot: ({players,winnerId}) => { /* update Three.js meshes, HUD, winner */ },
  onSummon: ({position,hitIds}) => { /* draw Pulse ring once */ },
  onStatus: console.log
});
// Call repeatedly on keyboard input:
room.sendInput({x:0,z:1,facing:0});
// When player presses summon:
room.summon('pulse');
```

## Protocol and game rules
- WebSocket `/ws?room=demo`; maximum two connections per room.
- Server snapshots at 20 Hz; server authoritative movement, health, score and win state.
- 100 HP; Pulse radius 4m, 50 damage, 1s cooldown; respawn on zero HP; first to 2 points wins.
- Movement x/z normalized and clamped within a square of ±18m. No obstacles or jump simulation yet.
- `summon` includes unique eventId, casterId, name, position and hitIds.

## Acceptance test (not yet executed)
1. Start Node server and open `/?room=demo` in two browsers.
2. Verify two unique IDs and mirrored movement snapshots.
3. Move within 4m; Pulse twice, 1s apart; verify 1–0 and respawn.
4. Repeat and verify identical winnerId on both screens.

## Known limitations
- No obstacle collision, jump, room reset, reconnect identity restoration, or persistent rooms.
- No Cat Swarm or Grapple (deferred by task board).
- Client must map server snapshots to its Three.js scene; no runnable full game until integrated.
- No automated or end-to-end tests have been run.
