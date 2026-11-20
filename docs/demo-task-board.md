# One-hour demo task board

## Demo contract

By minute 55, two browser windows must join one room, see each other in a 3D arena, use one summon, deal damage, respawn, and show a win state. If a task does not directly support that moment, defer it.

## Shared choices (minute 0–5)

- **Client:** browser-first 3D scene with one arena and simple player capsules.
- **Networking:** one room ID; sync position, health, respawn, and summon events. Use a same-device fallback if online sync is not working by minute 30.
- **Summons:** fixed safe catalog, not arbitrary generated assets.
- **Assets:** primitive shapes and original textures only. Do not use Fortnite, GTA, or other third-party IP assets.

## Ali — integration and demo director

- **0–10:** choose the smallest runtime; publish the run command.
- **10–35:** own spawn, HUD, health, respawn, timer, win screen, and integration.
- **35–55:** run the two-player rehearsal, cut anything that breaks the demo, and capture proof.
- **Done:** a fresh machine can follow the README and play a round in two browser windows.

## Rioja — summoning and combat

- **0–10:** define Pulse, Cat Swarm, and Grapple: cooldown, visual, range, effect, cleanup.
- **10–35:** implement summon chooser/input plus **Pulse** first. Add the other two only after Pulse damages the other player end-to-end.
- **35–50:** add cooldown feedback and test against a moving target.
- **Done:** both players observe the same summon result and health change.

## Yüin — rooms and multiplayer

- **0–10:** select a proven room transport; document the room URL pattern.
- **10–35:** synchronize join/leave, transform, facing, health, and one summon event. No accounts, matchmaking, voice, or persistence.
- **35–50:** test in two browser windows; report latency, failure mode, and fallback.
- **Done:** two clients in one room see the same movement, damage, respawn, and winner.

## Olenem — arena and visual legibility

- **0–10:** build an original low-poly city-block arena: floor, cover, spawn points, boundary, lighting, sky.
- **10–30:** add collision landmarks and a clear central combat space with primitive geometry.
- **30–45:** make players and summon effects readable at combat distance; capture a screenshot.
- **Done:** players cannot leave the arena and can identify opponent, cover, summon effect, health, and objective at a glance.

## Milestones and kill rules

| Time | Gate | If it fails |
| --- | --- | --- |
| 10 min | One player moves in arena | Replace art with primitives; keep movement |
| 20 min | Second player joins room | Start same-device fallback; stop polish |
| 30 min | Pulse damages second player | Ship only Pulse; cut other summons |
| 45 min | Respawn and winner work | Freeze features; rehearse demo |
| 55 min | Full two-player round recorded | Fix only demo-blocking bugs |

## Integration rules

- Work only in your owned area until the first green update; announce shared-file edits.
- Commit a runnable increment, not a partial refactor.
- State a failed milestone plainly in the shared sync log with the fallback.
