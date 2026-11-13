# 💥 Mass Arena

An Agar.io × Diep.io hybrid: eat orbs to grow, shoot shapes and tanks, level up, evolve, and devour smaller players. One self-contained HTML file, no build step, no dependencies. Progress saves in your browser (localStorage).

Installable as an app (PWA) and wrappable as a native Android/iOS app with Capacitor.

## Features
- 12 game modes: Free For All, Growth Rush, Survival, Boss Rush, Team Deathmatch, Battle Royale, Sandbox, Domination, Infection, Payload, Roguelike Run, Endless Evolution, plus **💥 Chaos Mode**
- Branching tank evolution (30+ classes), perk drafts every 4 levels, mutations, weapon mods and fusion
- Mass Fusion abilities (Overcharge, Rapid, Titan, Phantom, Regen, Nova) and an emergency dash
- Bosses, elite hunters, bounties, rivals that remember you, companions, tank crafting
- 14 maps, dynamic events (Mass Rain, Meteor Shower, Gravity Shift, Chaos Surge, ...), power-ups including Nukes
- Shop, Black Market, missions, class mastery, ranks, prestige, daily streaks
- Optional WebGL "Ultra FX" post-processing, procedural sound and music

### 💥 Chaos Mode
10x orb gain, 10x fire rate, 2x damage, 3x speed, infinite respawns, no timer, a 10,000×10,000 map, 60 bots, no screenshake, frequent events and nukes. Coins and cores are frozen in this mode; your best Chaos mass is still recorded.

## Controls
| Action | Desktop | Touch |
|---|---|---|
| Move | WASD / arrows | Left thumb |
| Aim + fire | Mouse (hold) | Right thumb |
| Upgrades | 1–8 | Tap the list |
| Fusion abilities | Q E R F T Space | Buttons |
| Dash | Shift | ⚡ button |
| Pause | P / Esc | ⏸ button |

**Landscape:** rotate your phone for a desktop-style layout with a compact HUD (upgrades and fusion buttons on the left, dash and minimap on the right). *Settings → Display* has Fullscreen and a Landscape lock (the lock works in fullscreen or when installed as an app).

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```

## Install as an app (PWA)
Host the folder on any HTTPS static host (GitHub Pages, Netlify, Cloudflare Pages, ...). Then:
- **Android / desktop Chrome:** menu → *Install app*
- **iOS Safari:** Share → *Add to Home Screen*

It launches fullscreen and works offline after the first load (`sw.js`). When you change the game, bump `CACHE` in `sw.js` so players get the update.

## Build native Android / iOS apps (Capacitor)
Requires Node 18+. Android needs Android Studio; iOS needs a Mac with Xcode.
```bash
npm install
npm run build            # copies the game into www/
npx cap add android      # and/or: npx cap add ios
npx cap sync
npx cap open android     # or: npx cap open ios
```
Then build/run from Android Studio or Xcode. Change the app id in `capacitor.config.json` (`com.massarena.game`) to your own before publishing to a store. Replace the icons in `icons/` (use `npx @capacitor/assets generate` for full native icon sets).

## License
MIT, see [LICENSE](LICENSE).
