var typeScaleFactor = 1.333;
var typeScaleBase = 14;
var standardFont = 'sans-serif';
export var typeScale = function (level) { return typeScaleBase + (typeScaleFactor * level); };
export var baseTheme = {
    fontSizes: {
        text: typeScale(0),
        big: typeScale(1),
        veryBig: typeScale(2),
        small: typeScale(-1),
        verySmall: typeScale(-2),
    },
    fonts: {
        text: standardFont,
    },
    colors: {
        text: '#000000',
    },
    spacing: {
        space0: 0,
        space1: '0.5rem',
        space2: '1rem',
        space3: '2rem',
        space4: '4rem',
    },
    layout: {},
};
//# sourceMappingURL=baseTheme.js.map