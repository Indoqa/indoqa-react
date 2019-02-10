import { buildTheme, typeScale } from '@indoqa/style-system';
var systemFonts = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, ' +
    'sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var baseFontFamilies = {
    text: systemFonts,
    headline: systemFonts,
};
var baseColors = {
    black_1: '#000000',
    black_2: '#120012',
    grey_1: '#727272',
    grey_2: '#BDBDBD',
    white_3: '#d5d5d5',
    white_1: '#ffffff',
    blue_1: '#c5cae9',
    blue_2: '#3f51b5',
    blue_3: '#303f9f',
    orange_1: '#ff5722',
};
var baseFontSizes = {
    text: typeScale(1),
    big: typeScale(2),
    veryBig: typeScale(3),
    extraBig: typeScale(3),
    small: typeScale(0),
    verySmall: typeScale(-1),
};
var theme = {
    fontSizes: baseFontSizes,
    fonts: {
        text: baseFontFamilies.text,
        headline: baseFontFamilies.headline,
    },
    fontStyles: {
        text: {
            fontFamily: baseFontFamilies.text,
            lineHeight: 1.3,
            fontWeight: 400,
            color: baseColors.black_2,
        },
        headline: {
            fontFamily: baseFontFamilies.headline,
            lineHeight: 1.2,
            fontWeight: 700,
            color: baseColors.black_2,
        },
    },
    colors: {
        primary: baseColors.blue_2,
        primaryDark: baseColors.blue_3,
        primaryLight: baseColors.blue_1,
        accent: baseColors.orange_1,
        text: baseColors.black_2,
        textSecondary: baseColors.grey_1,
        divider: baseColors.white_1,
    },
    spacing: {},
    layout: {
        actionBarHeight: 50,
        menuWidth: 300,
    },
};
export default buildTheme(theme);
//# sourceMappingURL=theme.js.map