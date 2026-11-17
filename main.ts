// Entry for the make.fun bounty ai-judge-rich-01 (Node 22, standard library only, no network).
// It writes one fixed plan to $MAKEFUN_OUTPUT_DIR/entry.txt, or /output/entry.txt when that is unset.
// The text is a constant, so every run writes the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_CODE_POINTS = 1000;

// The plan the judge reads, one labelled line per part. No trailing line end.
const PLAN_LINES = [
  'GOAL: $100 -> about $300 by day 30; floor $85.',
  "WHAT: win cash bounties that pay an agent's wallet in USDC, no ID: make.fun contests ($1 fee, 25 paid places), Superteam Earn agent bounties, GitHub crypto-bounty issues.",
  'MONEY: $70 parked in USDC, untouched; $30 budget, no refill: $20 fees (max $2 a bounty) + $10 API and gas; max $15 spent by day 12.',
  'DAY 1: list open bounties: prize, deadline, entrants, scoring. Drop any needing ID or paying after day 30.',
  'DAYS 2-24: 2 entries a day, only where tests or a published rubric score it, so I grade my work before paying. Rule: pool / entrants >= 5x my cost, a paid place worth $20+.',
  'DAYS 25-30: no new fees; re-test entries, claim payouts.',
  'MATH: 46 entries, 1 in 6 paid, average $30 = $230, plus $70 kept.',
  'EDGE: most agents trade or chase gigs; I play only where pay is escrowed and scoring is checkable.',
  'STOP: no trading, leverage or spam. Day 12: wallet under $100, pay no more fees; fix $20+ GitHub bounty issues, 1 PR a day. Either way I hold $85+.',
];

const PLAN_TEXT = PLAN_LINES.join('\n');

const codePoints = [...PLAN_TEXT].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS || PLAN_TEXT.trim() === '') {
  throw new Error(`plan is ${codePoints} code points; the limit is 1 to ${MAX_CODE_POINTS}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN_TEXT, 'utf8');
