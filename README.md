# @gentoozh/astryx-theme

The shared [Astryx](https://astryx.design) theme of gentoozh.org and Zpaste. It holds the colour palette, light and dark modes, Figtree and CJK font stack, radii, syntax colours, a few component overrides and the sizing roles, so both sites look the same. It targets `@astryxdesign/core` 0.7.x.

The package ships the theme object (to extend) and the compiled stylesheet `dist/gentoo.css` (to import as is).

## Install

Pin a release tag. Pnpm resolves a tag to a commit and records it in the lockfile:

```sh
pnpm add github:gentoo-zh/gentoozh-astryx-theme#v0.1.0
```

Your project must also depend on `@astryxdesign/core` 0.7.x, React 19 and, for the font, `@fontsource/figtree`. Installing a branch (`#main`) or no ref is not supported: the content changes between installs.

`dist/` is committed, so the install runs no build and needs no dev tools.

## Use

The stylesheet scopes every rule to `[data-astryx-theme="gentoo"]`, so set that attribute on `<html>` (or any ancestor of the Astryx components). The theme follows `prefers-color-scheme`; `data-theme="light"` or `data-theme="dark"` on `<html>` overrides it.

The theme names the Latin face `var(--font-figtree,Figtree)`. Load a face called `Figtree` (for example with `@fontsource/figtree`) or set `--font-figtree` to your own font stack; system CJK fonts follow it.

### Vite and React

```tsx
// src/main.tsx
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '@gentoozh/astryx-theme/gentoo.css';
import '@fontsource/figtree';
```

```html
<!-- index.html -->
<html data-astryx-theme="gentoo">
```

### Astro

```astro
---
// src/layouts/Base.astro
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '@gentoozh/astryx-theme/gentoo.css';
---
<html data-astryx-theme="gentoo">
```

Astro also loads Figtree through its font API; declare it with `cssVariable: '--font-figtree'`.

### Extend the theme

A site adds its own tokens and component overrides on top of the shared theme, then builds its own stylesheet with the Astryx CLI. `extends` copies the shared values into the result, so the site loads its stylesheet instead of `gentoo.css`:

```ts
// src/theme/gentoo.ts
import {defineTheme} from '@astryxdesign/core/theme';
import {gentooTheme} from '@gentoozh/astryx-theme';

export const siteTheme = defineTheme({
  name: 'gentoo',
  extends: gentooTheme,
  tokens: {'--home-display-size': 'clamp(2.25rem, 4.8vw, 4rem)'},
});
```

```sh
pnpm exec astryx theme build src/theme/gentoo.ts --out src/theme/built/gentoo.css
```

The sizing roles (`SPACE`, `BUTTON`, `ICON`, `AVATAR`, `CHIP`, `TAB`, `CARD`, `CODE`) come from `@gentoozh/astryx-theme/scale`.

## What belongs here

Shared: the colour tokens, the syntax theme, typography, radii, the display weights, the component overrides that every page needs (buttons, segmented control, switch label, top navigation, markdown), the responsive adaptations, and the sizing roles.

Not shared: tokens and styles used by one page or one app, such as the homepage palette and terminal colours, images, layout measures and StyleX markers. They stay in the consumer and join through `extends`.

## Release

Run these steps on a branch, merge through a pull request, then tag `main`.

1. Edit `src/`.
2. Bump `version` in `package.json`: patch for a value fix, minor for a new token or role, and a major bump for a rename or removal.
3. Run `pnpm install --frozen-lockfile && pnpm build`, and commit `dist/` with the source. `pnpm check` fails when `dist/` is stale.
4. After the merge, tag the merge commit: `git tag -s vX.Y.Z && git push origin vX.Y.Z`.

Never move or delete a pushed tag. Publish a new version instead.

## Consumers pin tags

Every consumer pins a release tag (`#vX.Y.Z`) and upgrades by changing the tag in its own pull request, with its visual checks run. No consumer references `main`, a branch or another repository's source, so a theme change reaches a site only when that site opts in.

## License

MIT
