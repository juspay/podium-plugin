# Podium for Claude

**Make a presentation by asking Claude for one.** Claude asks about your audience, shows you
a few looks to choose from, builds the deck, checks every slide, and gives you a link.
[Podium](https://podium.breezelabs.app) is where the deck lives: present it full screen, or
send the link to anyone. It makes web pages people scroll, too.

This is the Podium plugin: Podium's know-how and its connection to your account, in one
install, for claude.ai, the Claude desktop app, Cowork and Claude Code.

## Before you start

Make a Podium account at [podium.breezelabs.app](https://podium.breezelabs.app), with a
passkey or your Google account.

## Add it

**claude.ai or the desktop app** (it then follows your account into Cowork and Claude Code):

1. Customize → Plugins → Add → Add marketplace, and enter `juspay/podium-plugin`.
2. Install **Podium**.
3. Open the plugin's **Connectors** tab, connect Podium, and sign in with your Podium account.
4. Turn on **Sync automatically** for the marketplace, so updates arrive by themselves.

**Claude Code only:**

```
claude plugin marketplace add juspay/podium-plugin
claude plugin install podium@podium
```

Then, inside Claude Code: `/mcp` → **podium** → sign in, and `/plugin` → Marketplaces →
**podium** → **Enable auto-update** (Claude Code leaves it off for a marketplace you add
yourself).

## Then ask

> Make me a 10-slide deck for Friday's board meeting about our Q3 numbers.

Claude asks a few questions first, shows you some looks to pick from, then builds the deck and
gives you the link. Anyone you send the link to can open it without a Podium account.

## Already installed it?

Nothing to do. This marketplace used to be `swaroopvarma1/podium-plugin`. GitHub sends that
name here, so installs made under it keep updating.

## Where it comes from

`plugins/podium` is copied from https://podium.breezelabs.app/plugin.zip, the plugin Podium
is running, every hour and after every deploy (`.github/workflows/sync.yml`). Do not edit it
here; it is overwritten. Podium itself is developed in `juspay/podium`.
