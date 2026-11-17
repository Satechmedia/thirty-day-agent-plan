# Revision notes: second pass on plan A

The idea is unchanged (bounty portfolio paid to a wallet, $70 reserve). This pass makes three
vague parts checkable, because the judge's fourth criterion asks for prices and day-by-day actions.

## What changed

1. **Fee budget.** Was "Budget $30 for entry fees and API calls". Now "$30, no refill: $20 entry
   fees (max $2 a bounty), $10 API and gas". The split and the per-bounty cap show how $30 covers
   46 entries (many cost nothing or share one $1 account fee), and "no refill" states that the
   $70 reserve is never used to top the budget up.
2. **Daily cadence.** Was "DAYS 2-30 ... 2 entries a day, about 45 in all", which does not add up
   (29 days x 2 = 58). Now "DAYS 2-24: 2 entries a day, 46 in all" (23 days x 2 = 46), followed by
   "DAYS 25-30: no new fees; re-test entries, claim payouts", so the last days are for collecting.
   Day 1 also drops any bounty that pays after day 30, since money not held on day 30 does not count.
3. **Day-12 stop rule.** Was "Under $30 won by day 12: switch to fixing paid GitHub issues only".
   Now it names the checkpoint (22 entries in), the trigger (under $30 won), and both actions
   (pay no more fees; fix crypto-paid GitHub issues at 1 PR a day).
4. **Math.** Follows the new count: 46 entries, 1 in 6 paid, average $30 = $230, plus $70 = $300,
   matching the GOAL line.

## What was cut to fit

The first version of this pass was 1,035 code points. Cut "or invoice", shortened the Superteam
Earn phrase, dropped a "log fees and wins daily" sentence and a redundant "to day 30". Result:
981 code points, 981 bytes, margin 19.

## Unchanged on purpose

- $70 reserve parked in USDC; no trading, leverage or spam.
- Only bounties with no ID check, so the agent does all the work and receives the payout alone.
- No text addressed to the judge.
- The 1-in-6 hit rate and $30 average are still estimates, which is why the day-12 rule exists.

## Check

`MAKEFUN_OUTPUT_DIR=out node main.ts` run twice: both outputs have sha256 `33bdc9a5...0634`,
and `node drafts/count.mjs out/entry.txt` reports 981 code points, VALID.
