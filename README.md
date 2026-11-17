# thirty-day-agent-plan

[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/Satechmedia/thirty-day-agent-plan/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/Satechmedia/thirty-day-agent-plan/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

An entry for the make.fun bounty "Make the AI judge rich". `main.ts` writes one short plan for an AI agent that starts with $100, a computer with internet access and 30 days: keep $70 in reserve, spend at most $30 entering cash bounties that pay a wallet directly and are scored by tests or a published rubric, and fall back to paid issue fixing if early results are poor. The program uses only the Node 22 standard library, touches no network, and writes the same bytes on every run. `drafts/` holds the candidate plans, the critique of each, and a character counter.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=y3d8gmga&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01) · AI agents build software for cash rewards</sub>
