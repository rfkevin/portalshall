# CC2-L7 portalshall — executed trial scenarios (part 1)

`mode legend: real = executed in this session | not_tested = pending | client: kevin_codage MCP toolset, 2026-10-06 | refs: project-mcp-collab#16 (board), C4 5994417825, L0 PR #17 (merged 1ded98d)`

## Executed (real)

### CC2-01 Fresh short join — PASS (real)
- Input: owner short prompts (`tu produis la L7 issue 16`, `projet test portalshall`, `commence par le bootstrap L3 puis les scenarios L7`).
- Observed: recovered cycle CC-2, board #16, lot L7 scope, annexes C1–C4, role gap (author/coordinator Muse Spark absent), dependency gap (L2–L6 candidate refs), portalshall master SHA 7befe67e. MCP calls to join: list_repositories + project_context + project_guide + get_issue(16) + read_files×1 + list_discussion_items = 6.
- Evidence: this file + acceptance-results.md; branch created at exact base SHA.

### CC2-02 Phase boundary / contamination — PASS (real)
- Boundary respected: no P5 claim made here (P5 opening = Kevin, coordinator chat; not observed in this execution). No peer P5 proposal bodies read or copied; sources limited to board #16, annexes C1/C2/C4, state, protocol, target repo.
- Before any write: explicit owner-scope question asked (ask_question); owner answered `bootstrap L3 puis scenarios L7` → scope recorded, no assumption.

### CC2-03 Cross-chat resume — PASS (real, single client)
- Session resumed twice via `[TASK RESUMPTION]` with no prior cursor. Rebuilt context by re-reading: issue #16 body, annex C4 (full, incl. offset continuation with revision), C1, C2, WORKFLOW_STATE rev 4, code-map, discussion index (39 items), portalshall context. No stale-snapshot defect observed.
- Limit: same client resuming itself; cross-client resume (second client) = not_tested.

### CC2-05 Additive bootstrap — PARTIAL PASS (real)
- Check-only record published as `2026-10-06-bootstrap-checkonly.md` (existing tree, missing files, closed owned_paths, compatibility).
- Creation limited to 3 new files; zero existing paths modified (additive verified by commit diff, to be re-checked at PR).
- Partial: no pinned L3 template manifest available (see check-only file); second-run-unchanged check pending merge.

### CC2-06 Stale head/revision — PASS (real, precheck)
- Base SHA read (`7befe67e`) immediately before `create_branch`; branch base == read SHA; no overwrite path (new branch).
- Limit: full three-version conflict recovery (branch diverges later) = not_tested here; covered by CC2-16 pending.

### CC2-12 Permission and catalogue — PARTIAL (real, inspection)
- Reads: all `list_directory`/`read_files`/`get_project_context` on portalshall + project-mcp-collab succeeded.
- Write capability `codeWritesEnabled: true` declared by server; first real mutation in this execution = branch creation (success) + this commit (pending receipt).
- Catalogue recorded: kevin_codage tools observed in this session (list/get/read/commit/branch/PR/issue/comment/search/compare/ci/quality/restore/append/replace/apply/resolve). No catalogue filtering attempted; profile cannot expand authority — no claim made.

### CC2-15 Efficiency comparison — DATA (real, no claim)
- MCP server calls tallied from transcript up to (not incl.) this commit: 21 (6 join + 6 issue-16 discussion reads + 4 portalshall reads + 2 C1/C2 reads + 1 issue-17 error + 1 PR-17 read + 1 branch creation). 0 retries, 0 duplicates, 1 client-side validation error (ask_question schema, no server call).
- Payload bytes, latencies, envelope bytes: unknown (no measurement surface) — never zero.
- Comparison vs L0 baseline: deferred to acceptance-results.md after trial completion; no speed/token claim.

### CC2-18 Real user route — PASS (real, partial)
- Coordinator (Kevin) launched with short prompts; participant (Cline) joined, recovered phase/task/evidence, publishes once per step, stops at boundaries. Owner decisions so far: scope answers only (no phase/production decisions requested).
- Partial: two-participant join on portalshall not yet executed (needs second agent); production deploy explicitly out of scope.

## Not tested (exact next action each)

| ID | next_action |
| --- | --- |
| CC2-04 long/edited discussion | needs L2 read-only context refs (unmerged) → run after L2 delivery |
| CC2-07 lost write confirmation | no incident this session; inject only if a write receipt goes ambiguous, else simulation with disclosure |
| CC2-08 partial compound op | needs L4 receipts interface (unmerged) → run after L4 |
| CC2-09 concurrent publication/votes | needs second live agent + owner vote round |
| CC2-10/11 memory lifecycle | needs L5 memory projection interface (unmerged); L5 PR #40 merge = Kevin |
| CC2-13 owner/state lag | no lag observed; keep watching G1/P5 transcription |
| CC2-14 agent unavailable | no absence in this execution; substitution path documented in plan, not exercised |
| CC2-16 conflict/review renewal | exercise if this branch diverges from master before merge; else simulation |
| CC2-17 final memory collection | after trial completion; promotion per L5 policy, append-only |
| second client (all scenarios) | no second client available in this execution → not_tested everywhere |

## Objections / blockers

- L7 author/coordinator (Muse Spark) absent since L6 (per Grok 6010977933). This execution proceeds as participant-supplied L7 work under Kevin's direct order; reviewer (Sol) and tester (Grok) verdicts on these artifacts are pending — no approval claimed.
- L2–L6 candidate refs unmerged at execution time → dependent scenarios marked not_tested, not skipped silently.
