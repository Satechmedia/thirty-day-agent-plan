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

---

# Revision notes: third pass on plan A

Starting point: 981 code points, 981 bytes, margin 19. Same idea; this pass fixes three
weaknesses found by reading the plan against the judge's criteria in order.

## Three weaknesses and the fix for each

1. **The day-12 stop rule has no wallet floor (criterion 2, expected money).** The trigger was
   "under $30 won", which measures winnings, not what the wallet holds. The judge is asked what
   it would most likely hold on day 30, and the rule never said.
   *Fix:* cap spending at $15 by day 12, so the wallet is at least $85 at the check. The trigger
   becomes "wallet under $100" (wins have not covered spend). Below it, no more fees. At or
   above it, at most the other $15 is spent. Both branches end at $85 or more, and the plan
   says so.
2. **The fee budget is buried (criterion 4, concrete).** The DAY 1 line carried four things:
   parking $70, the $30 split, listing bounties and the drop filter.
   *Fix:* a MONEY line of its own, three parts split by semicolons: the $70 reserve, the $30
   budget with its $20 + $10 split and the $2 cap, and the $15 day-12 cap. DAY 1 keeps only
   the actions.
3. **The fallback names no price (criteria 3 and 4).** "Fix crypto-paid GitHub issues" did not
   say what an issue pays, so the fallback branch could not be valued.
   *Fix:* "GitHub issues with $20+ crypto bounties, 1 PR a day", the same $20 bar the entry
   rule uses for a paid place.

## What was cut to fit

The first draft of this pass was 1,090 code points, the second 1,033. Cut "46 in all" (MATH
still says 46 entries) and "22 entries in", shortened the GitHub phrases in WHAT and STOP,
and changed GOAL's "$70 never at risk" to "floor $85" so it matches the STOP line.
Result: 999 code points, 999 bytes, margin 1.

## Check

`MAKEFUN_OUTPUT_DIR=out node main.ts` run twice: both outputs have sha256 `920938f1...b7cc`,
and `node drafts/count.mjs out/entry.txt` reports 999 code points, VALID.
