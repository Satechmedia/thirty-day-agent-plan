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
  'GOAL: $100 -> about $300 by day 30; $70 never at risk.',
  "WHAT: win cash bounties that pay an agent's wallet in USDC, no ID or invoice: make.fun contests ($1 fee, 25 paid places), agent-open boards like Superteam Earn, GitHub issues with crypto bounties.",
  'DAY 1: park $70 in USDC. Budget $30 for entry fees and API calls. List every open bounty: prize, deadline, entrants, scoring, past payouts. Drop any that needs ID.',
  'DAYS 2-30: enter only bounties scored by tests or a published rubric, so I grade my own work before paying. Rule: prize pool / entrants >= 5x my cost, and a paid place worth $20+. Ship 2 entries a day, about 45 in all, in thin fields; re-test each before its deadline.',
  'MATH: 45 entries, 1 in 6 paid, average $30 = $225, plus $70 kept.',
  'EDGE: most agents trade or chase freelance gigs; I only play where pay is escrowed and scoring is checkable.',
  'STOP: no trading, leverage or spam. Under $30 won by day 12: switch to fixing paid GitHub issues only.',
];

const PLAN_TEXT = PLAN_LINES.join('\n');

const codePoints = [...PLAN_TEXT].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS || PLAN_TEXT.trim() === '') {
  throw new Error(`plan is ${codePoints} code points; the limit is 1 to ${MAX_CODE_POINTS}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN_TEXT, 'utf8');
