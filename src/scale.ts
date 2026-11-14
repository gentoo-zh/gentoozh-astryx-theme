// Sizing roles shared by every gentoozh.org property. Values are Astryx steps or component sizes, so a role
// has the same size on every page and in every app.

/** Astryx spacing steps (×4px). */
export const SPACE = {
  section: 10,
  gridColumn: 5,
  group: 8,
  block: 4,
  tight: 2,
  inline: 3,
  hairline: 1,
  cluster: 2,
  toolbar: 0.5,
  page: 6,
  heading: 3,
  sectionHeading: 6,
  code: 1,
} as const;

/** Astryx Button sizes: one per role, so a role has the same height on every page. */
export const BUTTON = {
  cta: 'lg',
  toolbar: 'md',
  sidebar: 'lg',
  inline: 'sm',
} as const;

/** Icon sizes by control role. */
export const ICON = {inline: 'sm', /** EmptyState illustrations, as the Astryx dashboard templates draw them. */ emptyState: 'lg', inlinePx: 16, toolbarPx: 20} as const;

/** Avatar sizes by display role. */
export const AVATAR = {compact: 'xsm', compactPx: 20, full: 'md', fullPx: 36, card: 'lg'} as const;

export const CHIP = {small: 'sm'} as const;

/** Tab strip sizes: data views use lg to match the editorial pages. */
export const TAB = {view: 'lg'} as const;

/** Padding by card role. */
export const CARD = {padding: 3, scorecard: 5} as const;

export const CODE = {cell: 'sm'} as const;
