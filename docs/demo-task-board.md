# One-hour demo task board

## Non-negotiable demo definition

At minute 55, two browser windows must join one room, see each other in a 3D
arena, use one summon, deal damage, respawn, and show a win state. If a task
does not directly support that moment, defer it.

## Shared architecture decision (minute 0–5)

- **Client:** a browser-first 3D scene with a single arena and simple player
  capsules. Keep the rendering and gameplay code separate.
- **Networking:** one room ID, authoritative-enough host/server state for
  position, health, and summon events. Fall back to a same-device two-player
  mode only if online sync fails by minute 30.
- **Summons:** fixed data catalog, never arbitrary AI-generated or third-party
  content. Commands map to gameplay effects, not a model-generation pipeline.
- **Assets:** primitive shapes and original textures only.

## Ali — integration and demo director

**0–10 min**: choose the smallest runtime, create the app shell, and publish
the run command in the README.

**10–35 min**: own the game loop integration: player spawn, HUD, health,
respawn, timer, and win screen. Merge only working pieces.

**35–55 min**: run the two-player rehearsal, cut anything that breaks the
demo, and record screenshot/video proof.

**Done when**: a fresh machine can follow the README and reach a playable
round in two browser windows.

## Rioja — summoning and combat

**0–10 min**: define three concise summon records: name, cooldown, visual,
range, damage/effect, and cleanup behavior.

**10–35 min**: implement the summon chooser/input plus **Pulse** first.
Implement **Cat Swarm** and **Grapple** only after Pulse damages the other
player end to end.

**35–50 min**: add cooldown/readiness feedback and test every summon with a
moving target.

**Done when**: a player triggers an approved summon and both players observe
the same effect and health change.

## Yüin — rooms and multiplayer

**0–10 min**: select the fastest proven room transport and create a room-ID
join path. Post the join URL format in the sync log.

**10–35 min**: synchronize join/leave, transform, facing, health, and one
summon event. Do not build accounts, matchmaking, voice chat, or persistence.

**35–50 min**: test in two separate browser windows; report latency, failure
mode, and the fallback decision.

**Done when**: two clients joining the same room see the same players,
damage, respawn, and win state.

## Olenem — arena and visual legibility

**0–10 min**: make an original low-poly city-block arena with a floor, cover,
spawn points, boundary, lighting, and a clear sky color.

**10–30 min**: add collision landmarks and a recognizable central combat
space. Use primitive geometry; no downloads that risk licensing.

**30–45 min**: make player/summon visuals legible at combat distance and
capture one screenshot from the intended camera.

**Done when**: players cannot leave the arena and can identify opponent,
cover, summon effect, health, and objective at a glance.

## Milestones and kill rules

| Time | Gate | If it fails |
| --- | --- | --- |
| 10 min | One player moves in the arena | Replace art with primitives; keep movement |
| 20 min | Second player joins a room | Start same-device fallback; stop polish |
| 30 min | Pulse damages second player | Ship only Pulse; cut other summons |
| 45 min | Respawn and winner work | Freeze features; rehearse demo |
| 55 min | Full two-player round recorded | Fix only demo-blocking bugs |

## Integration rules

- Work only in your owned area until the first green check-in; announce any
  shared-file edit before making it.
- Do not wait for a perfect asset, network stack, or command parser.
- Commit a runnable increment, not a partial refactor.
- A failed milestone must be stated plainly in the sync log with the proposed
  fallback.
