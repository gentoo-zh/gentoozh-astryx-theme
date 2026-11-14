import type { TokenValue } from '@astryxdesign/core/theme';
/** Value of `data-astryx-theme` that scopes the built CSS. */
export declare const THEME_NAME = "gentoo";
export declare const PRIMARY = "light-dark(#181818, #E2E2E2)";
export declare const BRAND = "light-dark(#54487A, #A99BD6)";
export declare const WORDMARK = "light-dark(#514776, #DDDAEA)";
export declare const brandTokens: Record<string, TokenValue>;
/**
 * Font stack after the Latin face. The Latin face is `var(--font-figtree,Figtree)`, so the consumer self-hosts
 * Figtree and sets `--font-figtree`; Google Fonts is blocked in mainland China, so system CJK fonts follow.
 */
export declare const FONT_FALLBACKS = "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"PingFang TC\", \"Noto Sans CJK SC\", \"Noto Sans CJK TC\", \"Microsoft YaHei\", \"Microsoft JhengHei\", Helvetica, Arial, sans-serif";
export declare const gentooSyntaxTheme: import("@astryxdesign/core/theme").SyntaxThemeDefinition;
