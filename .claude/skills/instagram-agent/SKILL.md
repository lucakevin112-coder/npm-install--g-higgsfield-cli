---
name: instagram-agent
description: Thirteen Instagram modes in one skill - Reels with scored hooks and timed beat sheets, viral research ranked by outlier multiple, captions linted against the 125-character feed cut, carousels, stories, profile score out of 100, weekly plan, comments, replies, DMs, repurposing long content, post audits, and a humanizer that strips AI fingerprints. Use whenever the user wants Instagram content or strategy - "make a reel", "write the caption", "hook", "carousel", "stories", "fix my bio", "plan my week", "what's working in my niche", "reply to these comments", "DM this brand", "repurpose this video", "audit my posts", "humanize this" - or types any /ig- command. Writes only; never posts.
---

# instagram-agent

Thirteen modes that run an Instagram account. Each mode is a file in `modes/`.
Read the one that matches the request **in full** before doing anything, and
follow it. Several modes hand off to each other (every draft goes through
`ig-human`, every Reel can go on to `ig-caption`), so open the next file when
a mode says to.

All paths below are relative to this skill's folder. The Python tools in
`tools/` use the standard library only, need no network and no API key. Run
them on files written to the working directory, for example
`python3 <skill-folder>/tools/hookscore.py hooks.txt`.

## Which mode

| the user wants | mode file |
| --- | --- |
| a Reel, a short-form script, a hook, a voiceover | `modes/ig-reel.md` |
| to know what is working in a niche, a swipe file, why a reel did numbers | `modes/ig-viral.md` |
| a caption, hashtags, "what do I write under it" | `modes/ig-caption.md` |
| a carousel, slides, a swipe post | `modes/ig-carousel.md` |
| the day's stories, stickers, a story-to-DM funnel | `modes/ig-story.md` |
| a profile score, bio, name field, highlights, pinned posts | `modes/ig-profile.md` |
| the week: what to post, when, who to engage with | `modes/ig-plan.md` |
| text that sounds human, "de-slop", "does this sound like AI" | `modes/ig-human.md` |
| comments on other people's posts | `modes/ig-comment.md` |
| replies to comments under their own post | `modes/ig-reply.md` |
| DMs: keyword delivery, warm first message, collab/brand pitch, follow-ups | `modes/ig-dm.md` |
| one long video, podcast or article turned into a week of posts | `modes/ig-repurpose.md` |
| an analysis of what they already posted | `modes/ig-audit.md` |

If the user types `/ig-reel`, `/ig-caption` and so on, that is the mode.
If a request spans several (a Reel plus its caption), run them in order.

## Rules that hold in every mode

- **Nothing gets posted.** Every mode ends in a copy-ready block the user
  posts by hand. Do not use a browser or any tool to post, comment, like,
  follow or DM on Instagram, and never ask for an Instagram password.
- **Nothing is fabricated.** No invented numbers, clients, results or
  experiences under the user's name. A missing figure stays as
  `{{your number}}` and gets flagged.
- **Every draft goes through `ig-human`** before the user sees it.
- **Run the tools, do not eyeball.** Where a mode names a script, run it and
  show its output alongside the copy.
- **Platform facts go stale.** The hashtag cap is five per post (since
  18 December 2025). If something here contradicts what Instagram does today,
  Instagram is right.

## Files the modes mention: voice, swipe, plan, log

The modes refer to `~/.claude/instagram/voice.md`, `swipe.md`, `plan.md` and
`log.md`. Outside Claude Code those files do not survive between chats, so:

- **Voice.** Before writing in someone's voice, look for a voice profile in the
  conversation, the project files or what you already know about the account.
  If there is none, ask for three of their own reels or captions (or use
  `templates/voice.md` as the questionnaire), write the profile, and offer it
  to the user as a file they can keep and re-attach.
- **Swipe, plan, log.** Write them to the working directory and hand them to the
  user as files at the end of the mode, so they can bring them back next time.
  If the user pastes or attaches one, it outranks the defaults, as the mode
  files say.
- **Several accounts.** If the user manages more than one account (clients,
  brands, creators), keep a separate voice profile per account and confirm
  which account a request is for before writing.

## Writing in Italian (or any language other than English)

Write the deliverables in the language of the account's audience. The tools
were built and tested on English, and on Italian they behave like this
(tested):

- **`hookscore.py`** runs, and still catches greetings and preambles, but it
  under-scores good Italian hooks by roughly 30 to 40 points (an English hook
  scoring 86 scored 48 translated). On non-English hooks use it only for the
  **relative ranking** and the **dealbreaker** lines; ignore the "under 50 means
  no hook" rule and judge the hook by the formula in `tools/hooks.json`.
- **`beats.py`** works on any language. Ask the speaker's pace if Italian
  delivery is faster than the 165 wpm default (`--wpm`).
- **`caption.py`** works for length, the 125-character window, hashtags and
  links. Its call-to-action and search-term checks are English-keyed: check
  the single ask ("Commenta…", "Salva…", "Scrivimi…") by hand.
- **`humanize.py`** removes invisible characters and fixes typography in any
  language. Its slop lexicon is English, so Italian stock phrases must be
  caught by hand, for example: "In questo video vi mostro", "Ciao ragazzi",
  "Fermati un attimo / Non scorrere", "Seguimi per altri contenuti", "Tagga chi
  ne ha bisogno", "Salva questo post per dopo", "L'algoritmo premia",
  "Non è solo X, è Y", "Ecco perché" as a reflex opener, "Fidati",
  "Game changer", "Assolutamente", triads of adjectives.
- **`detect.py`** VOICE check counts English contractions and pronouns, so it
  reads low on Italian text no matter what. Report the other four checks and
  say VOICE does not apply.
- **`swipe.py`** ranks by outlier multiple in any language; formula naming is
  English-only, so name the formula of non-English hooks by hand.

## Credit

Adapted from instagram-agent-skill by Jake Schincariol (MIT licence, see
`LICENSE`), merged into a single skill with shared tools.
