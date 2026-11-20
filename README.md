# GTA6 Summon Arena — demo

A small, original 3D arena prototype where players move, fight, and summon a
curated set of tools from short prompts. The goal is a two-player playable
browser demo in under one hour.

## Today’s demo contract

- Two players can enter the same shareable room.
- Each player can move, look, jump, and see the other player.
- A player can choose one of three safe summons: **Pulse**, **Cat Swarm**, or
  **Grapple**.
- A summon has a clear gameplay effect; players can damage, respawn, and see
  a winner.

Find your assignment on the [one-hour task board](docs/demo-task-board.md).
Every five minutes, post your progress in [the live team log, issue #1](https://github.com/MuhammadaliNazarov/GTA6/issues/1).
Use the [check-in format](docs/team-sync.md).

## Start building

The long-term idea is a city arena where a player names a tool or creature and
summons it. The first round should prove that idea with one word. Two players
open the same room link, one types `pulse`, and both see the ring, the hit and
the same score. Cat Swarm and Grapple are stretch goals after that round works.

Use a browser client with Three.js and a small Node.js server that serves the
client and handles WebSockets. Start locally. A second laptop on the same
Wi-Fi can use the host's LAN address once LAN play is tested.

| Owner | Files to own | First handoff |
| --- | --- | --- |
| Ali | `public/index.html`, `public/main.js`, `package.json` | Wire the scene, keyboard movement and HUD together. Publish the tested startup command and a screenshot of a moving player. |
| Olenem | `public/arena.js` | Export `createArena(scene)` returning two spawn positions and obstacles. Hand Ali a gray floor and two distinct spawns first. |
| Rioja | `public/summons.js` | Export `showPulse(scene, position)`. Render a short-lived ring at the supplied position. The server decides who takes damage. |
| Yüin | `server/`, `public/room.js` | Serve a room at `/?room=demo`. Give Ali a client adapter that sends player inputs and receives room snapshots. |

### Shared game state

Use metres, with Y up and movement on the X/Z plane. A client sends movement
and a summon request. The server owns player IDs, health, score and respawns.
Each snapshot includes the player's ID, position, health and score, plus the
winner ID when the round ends. A summon event includes a unique event ID,
caster ID, summon name and position so both clients draw it once.

For the first round, start each player at 100 HP. A Pulse hits opponents
within four metres for 50 HP, with a one-second cooldown. At zero HP the
opponent respawns and the caster earns one point. First to two points wins.

### Ali's first acceptance check

1. From a fresh clone, start the app using the documented command. Ali owns adding that command as soon as it runs.
2. Open the same room in two windows. Move player A and confirm player B sees the movement.
3. Stand within four metres. Type `pulse` twice, one second apart. Both windows should show the hit, then one respawn and a 1–0 score.
4. Repeat once. Both windows should name the same winner. Post the run command, commit and a short recording in [issue #1](https://github.com/MuhammadaliNazarov/GTA6/issues/1).

## Asset rule

This project must use original or properly licensed assets. Do not add Fortnite
logos, character marks, GTA assets, maps, or character models.
