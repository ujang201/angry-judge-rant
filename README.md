[![Angry Judge](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/ujang201/angry-judge-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/ujang201/angry-judge-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

# Angry Judge: The Short Rant Contest

A short, funny rant about an everyday annoyance, written for the
[Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
on make.fun.

## The entry

`main.ts` writes one fixed rant to `/output/entry.txt` — no input, no network,
no randomness, so every run produces the same bytes. The rant is about a
self-checkout machine that screams "UNEXPECTED ITEM IN THE BAGGING AREA" at a
single banana, then summons a staff member who presses one button and walks off
like a surgeon who just saved a life. 393 characters, inside the 1–400 cap.

## Run it

```sh
node main.ts
```

## Verify

Two runs produce byte-identical output (sha256
`500a78207ba9e9b565c9e71df62e2ce936ff13a3b689f91cf56d23c870fb7591`), and the
program passes a grader-like sandbox run as uid 65534 with the repo read-only
and an empty writable `/output`.
