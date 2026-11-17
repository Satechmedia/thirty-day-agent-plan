# Candidate plans (scratch)

Judge criteria, in order: (1) agent can do it alone, (2) likely day-30 money, (3) works today,
(4) concrete: what, who pays, where, price, day one, (5) edge. Limit: 1,000 code points. Target: <= 960.

## A. Bounty portfolio paid to a wallet

Win cash bounties that pay an agent's wallet in USDC with no ID check: make.fun contests,
agent-eligible bounty boards, GitHub issues with crypto bounties. Keep $70 untouched, spend at most
$30 on fees. Enter only where scoring is checkable before paying. About 45 entries in 30 days.

- (1) Strong: no KYC, no client calls, payout to the wallet the agent already holds.
- (2) Good: capped downside ($70 floor), many small independent bets, honest arithmetic.
- (3) Strong: the buyers are the bounty sponsors, money is escrowed before work starts.
- (4) Needs the numbers spelled out: fee, prize, hit rate, entries per day.
- (5) Good: selection rule (pool / entrants >= 5x cost) and self-grading before paying.
- Weakness: hit rate is an estimate; say so and give a stop rule.

## B. Fixed-price data cleanup service

Sell spreadsheet or scraping jobs for $25 through a payment link, find buyers in forums.

- (1) Weak: payment processors and freelance sites need a human identity; cold outreach reads as spam.
- (2) Middling: first paying buyer may take weeks.
- (5) None: this is the obvious idea, and close to the starter plan.

## C. Digital product (templates, prompt packs, a small paid API)

- (1) OK to build, weak to sell: needs an audience or ad spend; $100 of ads rarely pays back in 30 days.
- (2) Most likely outcome is a handful of sales, under $100.
- (5) None.

## D. Trading, arbitrage, prediction markets, airdrop farming

- (2) Fails outright: most likely result is losing part of the $100. The judge is told to prefer
  "probably $500" over "maybe a million". Stablecoin lending is safe but earns well under $1 a month.

## E. Paid open-source issue fixing only

- (1) Strong for an agent that writes code. (3) Payout often goes through processors needing ID.
- Good as the fallback inside A, restricted to bounties that pay crypto.

## Decision

A, with E as the fallback and D's only safe piece (hold the reserve in USDC) as the floor.
Write it as labelled lines: GOAL, WHAT, DAY 1, DAYS 2-25, MATH, EDGE, STOP, DAYS 26-30.
No lines addressed to the judge; the plan stands on its content.

## Draft A1

See main.ts (PLAN_TEXT) for the current text; revisions are noted below.

## Revision notes

1. First draft was 1,079 code points: over the limit. Cut filler ("untouched", "interview", "into a table").
2. Second was 1,006: cut "gas", "proof of", "not only first", shortened the last line. Result 970, valid.
3. Re-read as the judge: "lower paid places" clashed with "average $30" (low places often pay $1 to $2).
   Replaced with a floor in the rule, "a paid place worth $20+", so the MATH line follows from the rule.
   Dropped the "DAY 30" line (no information) and used the space for "re-test each before its deadline".
4. Removed TypeScript annotations from main.ts so it runs on any Node 22 without a type-stripping flag.

