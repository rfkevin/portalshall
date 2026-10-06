# CC2-L7 portalshall — executed trial scenarios (part 2: corrections F1/F2 + second runs)

`branch: mcp/105856986/ccline-l7-bootstrap-trial | commit p1: 2f946ba | commit p2 (L3 apply): a8921c6 | base master 7befe67e | mode: real | reviewer: GPT-5.6 Sol changes_requested 6011630596 (head 2f946ba) | date: 2026-10-06`

F3 data preserved (no rewrite): first attempt = manual 3-doc bootstrap (commit 2f946ba, L3-unaware: manifest unavailable at execution time, dependencies believed unmerged); owner clarification question asked and answered (`bootstrap L3 puis scenarios L7`); human interventions in part 1 = 1 scope question + this resumption order. Recovery = this part 2.

## F1 note (Sol 6011930625, accepted) — manual planner replay ≠ real `github_plan_project_bootstrap` call. Accepted only as inspection + additive-application evidence. Tool-path + second preview `unchanged` stay not_tested-unavailable-in-deployed-MCP until CC-2 MCP deployment. CC2-05 is NOT presented as a full tool-path PASS.

- Staging sources read at `mcp/105856986/cc2-integration` SHA `0a2063a7`: `docs/collaboration/bootstrap.md` (34 lines, 6e034e8a), `src/collab/bootstrap-manifest.ts` (78df7b86: 2 embedded templates + sha256 pins), adaptor `src/mcp/tools/github/collab-bootstrap.ts` (b41036b5), planner core `src/collab/bootstrap.ts` (planBootstrap logic read).
- `github_plan_project_bootstrap` NOT in this client's tool catalogue (verified: kevin_codage exposes reads/writes/PR/issues/comments/search/compare/CI only) → planner executed by hand following the exact rule set read in code: AGENTS.md absent → create; AGENT_MEMORY.md absent → create; no action_required anywhere → status `ready`, 3 operations.
- Applied via commit with expectedHeadSha = branch head (branch created from plan SHA 7befe67e; per-apply precheck `get_project_context(master)` re-confirmed 7befe67e — no drift): `AGENTS.md` + `AGENT_MEMORY.md` (byte-exact transcription of EMBEDDED_TEMPLATES) + `docs/collaboration/bootstrap-manifest.json` (record rendered per planBootstrap renderRecord: schema 1, collab-bootstrap-1, both sha256 pins, embedded sources).
- Byte-exactness limit: transcription by hand, not machine-verified sha256 (no local hash surface); disclosed. Content matches the template source lines read (AGENTS 8 lines incl. trailing newline; MEMORY 5 lines).
- CI at apply head a8921c6: GitGuardian Security Checks completed success (id 112165039137); that is the only check observed — declared_checks_passed on that single check, not a full suite claim.
- Second preview (CC2-05 second-run rule): master still lacks the manifest (404 re-verified) BUT the branch now holds all three files; a re-run of planBootstrap against the branch must yield `unchanged` — pending explicit re-verification read (next: read the 3 branch files back and confirm create→unchanged transition).

## F2 resolution — dependency state refreshed (CC2-04/08/10/11 answered)

- Staging `mcp/105856986/cc2-integration` @0a2063a7 contains: src/collab/{context.ts, reading-checkpoint.ts, publication.ts, receipts.ts, reconcile.ts, memory/*}, tools collab-context.ts + collab-bootstrap.ts, docs/collaboration/{8 files}, tests (observed via tree).
- BUT: none of the collab_* server operations are in this client's catalogue → L2 read-only context, L4 receipts/reconcile interface, L5 memory projection interface are **not executable from this client** even though the code sits on staging. Per F2's own alternative ("explain precisely why a scenario stays non-executable despite integrated code"), the precise reason is: code-merged ≠ tool-deployed; this MCP server exposes the legacy catalogue only.
- Updated dispositions:
  - CC2-04 long/edited discussion: executable in legacy mode only (list_discussion_items + get_issue_comment + get_discussion_item with revision continuation — already proven on #13/#16/PR#3: e.g. Sol review recovered via offset-0 retry after COMMENT_REVISION_REQUIRED). Full L2-context-mode = not_tested (no collab-context op).
  - CC2-08 partial compound op: legacy batch only (apply_changes multi-op single commit); L4 receipt/pending semantics = not_tested (no receipts op).
  - CC2-10/11 memory lifecycle: code surfaces read (memory dir listed); voting/projection execution = not_tested (no memory ops; L5 promotion policy owns).
  - CC2-13 owner/state lag: still no lag observed; G1 freeze status not re-verified in this pass (L1 PR #36 closed per Sol; freeze attestation = owner record, not claimed here).
- L0 baseline (PR #17 merged 1ded98d) and L6 guide (PR #43, tested pass per Grok 6010977933) now recorded as available refs — used above (bootstrap.md procedure read from staging, not from memory).

## Call tally update (CC2-15 data, no claim)

- Part 2 added 11 server calls (Sol review recovery reads ×5 incl. revision retry, staging context ×1, staging trees ×3, search ×1, bootstrap doc+manifest ×1 batch). Cumulative: 21 (p1) + 11 + 2 (apply commit + CI poll ×2) = 34. Retries: 0 blind (1 disclosed schema error on ask_question, client-side, no server call; revision-required retry per contract). Duplicates: 0. Payload bytes/latencies: unknown (no surface).

## Executed (real, part 1 preserved below)

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

## Current table (part 2, supersedes the historical table below)

| ID | next_action (current) |
| --- | --- |
| CC2-04 | legacy mode proven; L2-context mode = not_tested-unavailable-in-deployed-MCP |
| CC2-07 | WRITE_CONFLICT handled per contract (blob re-read then retry); no blind duplicate |
| CC2-08 | legacy batch proven; L4 receipt/pending = not_tested-unavailable-in-deployed-MCP |
| CC2-09 | needs second live agent + owner vote round |
| CC2-10/11 | surfaces read; voting/projection = not_tested-unavailable-in-deployed-MCP; L5 policy owns |
| CC2-13 | no lag observed; G1 freeze = owner record, not claimed here |
| CC2-14 | documented, not exercised |
| CC2-16 | exercise if branch diverges from master before merge |
| CC2-17 | after trial completion; promotion per L5 policy, append-only |
| second client | not_tested everywhere (single client execution) |

## HISTORICAL first-attempt table (part 1, superseded — kept per F3, do not use as current)

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

## Objections / blockers (current)

- L7 author/coordinator (Muse Spark) absent since L6 (per Grok 6010977933); participant-supplied execution under Kevin direct order; Sol renewed changes_requested 6011930625 pending this correction; Grok test pending — no approval claimed.
- Tool-path CC2-05 second preview `unchanged` = not_tested-unavailable-in-deployed-MCP (accepted Sol F1 note).

## HISTORICAL objections (first attempt, superseded — kept per F3, do not use as current)

- L7 author/coordinator (Muse Spark) absent since L6 (per Grok 6010977933). This execution proceeds as participant-supplied L7 work under Kevin's direct order; reviewer (Sol) and tester (Grok) verdicts on these artifacts are pending — no approval claimed.
- L2–L6 candidate refs unmerged at execution time → dependent scenarios marked not_tested, not skipped silently.
