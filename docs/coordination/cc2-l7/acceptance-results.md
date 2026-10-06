# CC2-L7 portalshall — acceptance results (part 1, author draft)

`board: project-mcp-collab#16 | lot: L7 trial/app-side | repo: rfkevin/portalshall@master 7befe67e | branch: mcp/105856986/ccline-l7-bootstrap-trial | author(draft): Cline | reviewer: GPT-5.6 Sol (pending) | tester: Grok (pending) | date: 2026-10-06 | mode: real unless marked`

Status legend: pass / partial / not_tested × real / simulation / inspection. No approval claimed; no merge, no deploy.

| ID | Scenario | Result | Mode | Evidence |
| --- | --- | --- | --- | --- |
| CC2-01 | Fresh short join | pass | real | trial-scenarios.md §CC2-01; 6 MCP calls |
| CC2-02 | Phase boundary/contamination | pass | real | scope question + answer on record; peer bodies untouched |
| CC2-03 | Cross-chat resume | pass | real | 2× TASK_RESUMPTION rebuilds, no cursor |
| CC2-04 | Long/edited discussion | not_tested | — | needs L2 refs |
| CC2-05 | Additive bootstrap | partial | real | bootstrap-checkonly.md; 3 new files, 0 modified |
| CC2-06 | Stale head/revision | pass (precheck) | real | base SHA verified pre-write |
| CC2-07 | Lost write confirmation | not_tested | — | no incident; simulation only if needed |
| CC2-08 | Partial compound op | not_tested | — | needs L4 |
| CC2-09 | Concurrent publication/votes | not_tested | — | needs 2nd agent + vote round |
| CC2-10 | Memory throughout phases | not_tested | — | needs L5 |
| CC2-11 | Memory corrections | not_tested | — | needs L5 |
| CC2-12 | Permission and catalogue | partial | real+inspection | reads OK; write via branch+commit receipts |
| CC2-13 | Owner decision/state lag | not_tested | — | watching |
| CC2-14 | Agent unavailable | not_tested | — | documented, not exercised |
| CC2-15 | Efficiency comparison | data only | real | 21 calls, 0 retries/dupes; no claim |
| CC2-16 | Conflict/review renewal | not_tested | — | if branch diverges |
| CC2-17 | Final memory collection | not_tested | — | after trial; L5 policy |
| CC2-18 | Real user route | partial | real | single-participant route OK; 2nd join pending |

## Handoff

`lot | status | PR/head/base | read coverage | tests | objections | next_action`
L7-portalshall | authored_part1_pending_review_test | PR to open on branch mcp/105856986/ccline-l7-bootstrap-trial (this commit) / base master 7befe67e | #16 body, C1, C2, C4 (full), state rev4, AGENTS, WORKFLOW, code-map, 16-index, portalshall tree+files, PR#17 | n/a (docs trial; CRA suite untouched, not run) | L7-author absent; L2–L6 refs unmerged (dependent scenarios honestly not_tested) | open PR (draft) → request Sol review + Grok test → continue part 2 (CC2-04/08/10/11 as refs land) → merge = Kevin only.

## Limits disclosed

- Single client (kevin_codage toolset); second-client runs = not_tested.
- No latencies, payload bytes, or envelope bytes measured (no surface).
- No pinned L3 manifest available; files hand-written to observed CC-2 formats.
- Branch slug typo (`ccline`) disclosed; functional only.
- CC-1 history and issue #1 untouched. No production deployment implied or authorized.
