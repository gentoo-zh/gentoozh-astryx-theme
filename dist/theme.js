// Adapted from the Astryx docsite theme (apps/docsite/src/themes/astryxTheme.ts, MIT, Meta Platforms, Inc.).
// Filled accents use Gentoo purple; text and icon accents use neutral ink.
// Only values shared by every gentoozh.org property live here; page-specific tokens stay in the consumer and
// join through `defineTheme({extends: gentooTheme})`.
import { defineTheme } from '@astryxdesign/core/theme';
import { BRAND, FONT_FALLBACKS, PRIMARY, THEME_NAME, brandTokens, gentooSyntaxTheme } from './shared.js';
export const gentooTheme = defineTheme({
    name: THEME_NAME,
    syntax: gentooSyntaxTheme,
    tokens: {
        '--color-accent': BRAND,
        '--color-text-accent': PRIMARY,
        '--color-icon-accent': PRIMARY,
        '--color-accent-muted': 'light-dark(rgba(84, 72, 122, 0.1), rgba(169, 155, 214, 0.16))',
        '--color-on-accent': 'light-dark(#FFFFFF, #181818)',
        '--color-background-body': 'light-dark(#FFFFFF, #111111)',
        '--color-background-surface': 'light-dark(#FFFFFF, #1F1F1F)',
        '--color-background-card': 'light-dark(#FFFFFF, #1F1F1F)',
        '--color-background-popover': 'light-dark(#FFFFFF, #282828)',
        '--color-background-inverted': 'light-dark(#181818, #FFFFFF)',
        '--color-background-muted': 'light-dark(#1818180C, #1111117F)',
        '--color-neutral': 'light-dark(#18181819, #E2E2E233)',
        '--color-overlay': 'light-dark(#18181866, #11111199)',
        '--color-overlay-hover': 'light-dark(#1818180C, #FFFFFF0C)',
        '--color-overlay-pressed': 'light-dark(#18181819, #FFFFFF19)',
        '--color-text-secondary': 'light-dark(#606060, #B5B5B5)',
        '--color-icon-secondary': 'light-dark(#606060, #B5B5B5)',
        '--color-text-disabled': 'light-dark(#AAAAAA, #777777)',
        '--color-icon-disabled': 'light-dark(#AAAAAA, #777777)',
        '--color-border': 'light-dark(#1818181A, #FFFFFF1A)',
        '--color-border-emphasized': 'light-dark(#929292, #676767)',
        '--color-text-primary': PRIMARY,
        '--color-icon-primary': PRIMARY,
        '--text-display-1-weight': 'var(--font-weight-semibold)',
        '--text-display-2-weight': 'var(--font-weight-semibold)',
        '--text-display-3-weight': 'var(--font-weight-semibold)',
        '--radius-inner': '8px',
        '--radius-element': '12px',
        '--radius-container': '16px',
        '--radius-page': '32px',
        ...brandTokens,
    },
    typography: {
        body: { family: 'var(--font-figtree,Figtree)', fallbacks: FONT_FALLBACKS },
        heading: { family: 'var(--font-figtree,Figtree)', fallbacks: FONT_FALLBACKS },
    },
    components: {
        'segmented-control-item': {
            base: { '--color-text-secondary': 'var(--color-text-primary)' },
        },
        'switch-label': {
            base: { minHeight: 'var(--size-element-md)', alignItems: 'center' },
        },
        button: {
            base: { borderRadius: 'var(--radius-full)' },
        },
        // Let the translucent top navigation reveal the content beneath it.
        'app-shell-header': {
            base: { backgroundColor: 'transparent' },
        },
        'top-nav-item': {
            selected: {
                backgroundColor: 'transparent',
                ':hover': { backgroundColor: 'var(--color-overlay-hover)' },
                ':active': { backgroundColor: 'var(--color-overlay-pressed)' },
            },
        },
        markdown: {
            base: { '--text-body-size': 'var(--font-size-lg)', '--text-body-leading': '1.6471' },
        },
    },
    adaptations: {
        rules: [
            {
                when: { width: { below: 'sm' } },
                value: {
                    components: {
                        'top-nav-item': { base: { paddingInline: 'var(--spacing-2)' } },
                    },
                },
            },
            {
                when: { width: { below: 'sm' } },
                value: {
                    tokens: {
                        '--text-display-1-size': 'var(--font-size-3xl)',
                        '--text-display-2-size': 'var(--font-size-2xl)',
                    },
                },
            },
            {
                // Touch targets of at least 44px below the md breakpoint.
                when: { width: { below: 'md' } },
                value: {
                    tokens: { '--size-element-sm': '44px', '--size-element-md': '44px', '--size-element-lg': '44px' },
                    components: {
                        'code-block-title': { base: { whiteSpace: 'normal', overflowWrap: 'anywhere', minWidth: '0', flexShrink: '1' } },
                        'code-block': { base: {
                                ':not(:has(.astryx-code-block-header))': { paddingInlineEnd: 'calc(var(--size-element-md) + var(--spacing-2))' },
                            } },
                        'segmented-control-item': { base: { minHeight: 'var(--size-element-md)' } },
                        heading: { base: { textWrap: 'balance' } },
                    },
                },
            },
        ],
    },
});
