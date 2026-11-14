import { defineSyntaxTheme } from '@astryxdesign/core/theme/syntax';
/** Value of `data-astryx-theme` that scopes the built CSS. */
export const THEME_NAME = 'gentoo';
export const PRIMARY = 'light-dark(#181818, #E2E2E2)';
// Lighten the dark-mode brand colour for contrast against the body.
export const BRAND = 'light-dark(#54487A, #A99BD6)';
// The logo's wordmark colours, taken from the gentoozh.org horizontal logo and its dark variant.
export const WORDMARK = 'light-dark(#514776, #DDDAEA)';
export const brandTokens = {
    '--color-brand': BRAND,
    '--color-wordmark': WORDMARK,
    // Diff tokens in code blocks: deleted lines use the root colour, inserted lines the user colour.
    '--color-syntax-prompt-root': 'light-dark(#A3293D, #EBA0AA)',
    '--color-syntax-prompt-user': 'light-dark(#27633D, #9BC7A4)',
};
/**
 * Font stack after the Latin face. The Latin face is `var(--font-figtree,Figtree)`, so the consumer self-hosts
 * Figtree and sets `--font-figtree`; Google Fonts is blocked in mainland China, so system CJK fonts follow.
 */
export const FONT_FALLBACKS = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "PingFang TC", "Noto Sans CJK SC", "Noto Sans CJK TC", "Microsoft YaHei", "Microsoft JhengHei", Helvetica, Arial, sans-serif';
export const gentooSyntaxTheme = defineSyntaxTheme({
    name: THEME_NAME,
    tokens: {
        keyword: ['#654C86', '#C1A9DD'],
        string: ['#376345', '#A4C5AC'],
        comment: ['#62656B', '#A3A5AC'],
        number: ['#855023', '#D6B38A'],
        function: ['#365F7D', '#A3C3DB'],
        type: ['#654C86', '#C1A9DD'],
        variable: ['#855023', '#D6B38A'],
        operator: ['#654C86', '#C1A9DD'],
        constant: ['#855023', '#D6B38A'],
        tag: ['#654C86', '#C1A9DD'],
        attribute: ['#365F7D', '#A3C3DB'],
        property: ['#365F7D', '#A3C3DB'],
        punctuation: ['#62656B', '#A3A5AC'],
        background: 'var(--color-background-muted)',
    },
});
