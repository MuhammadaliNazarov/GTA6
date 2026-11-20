# Team sync — update every five minutes

Use one GitHub issue titled **`[SYNC] One-hour demo live log`** as the shared
chat log. Pin it. Every person posts an update at minutes 05, 10, 15, 20, 25,
30, 35, 40, 45, 50, and 55.

## Required comment format

```md
### [HH:MM] Name — green / yellow / red
Done: <one concrete completed result or commit>
Now: <one thing being worked on>
Need: <specific decision, file, or help needed; write “none” if clear>
Proof: <commit, screenshot, room URL, or test result>
```

## Handoff rules

1. Start each update by reading the latest comments from the other three
   people.
2. If blocked for more than two minutes, comment `red` and tag the person who
   can unblock it.
3. Before editing shared integration code, comment the file and reason.
4. Ali resolves conflicts and calls the milestone cuts in
   `docs/demo-task-board.md`.
5. At minute 55, each person posts final proof plus the one known limitation.

## GitHub issue labels

- `role:ali`, `role:rioja`, `role:yuin`, `role:olenem`
- `status:blocked`, `status:ready`, `demo-critical`

Public visibility lets anyone follow progress. Add collaborators from the
repository’s **Settings → Collaborators** page when you have their emails; only
collaborators should commit or comment.
