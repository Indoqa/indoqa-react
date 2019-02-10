var THEME_NOT_AVAILABLE_ERR_MSG = 'There is no theme available or one of its properties is missing. ' +
    'Check if the Fela ThemeProvider is configured correctly.';
export var createBoxModelCSSProps = function (_a) {
    var inline = _a.inline, width = _a.width, height = _a.height, fullWidth = _a.fullWidth, fullHeight = _a.fullHeight;
    return ({
        display: (inline) ? 'inline' : 'block',
        width: (fullWidth) ? '100%' : width || 'auto',
        height: (fullHeight) ? '100%' : height || 'auto',
    });
};
export var createFlexChildCSSProps = function (_a) {
    var grow = _a.grow, shrink = _a.shrink, basis = _a.basis, order = _a.order, align = _a.align;
    var styles = {
        flexGrow: grow || 0,
        flexShrink: shrink || 1,
        flexBasis: basis || 'auto',
    };
    if (order) {
        Object.assign(styles, { order: order });
    }
    if (align) {
        Object.assign(styles, { alignSelf: align });
    }
    return styles;
};
export var createFontCSSProps = function (_a) {
    var theme = _a.theme, font = _a.font, fontSize = _a.fontSize, color = _a.color, bold = _a.bold, ellipsis = _a.ellipsis;
    if (theme === undefined || theme.fonts === undefined || theme.fontSizes === undefined || theme.colors === undefined) {
        throw Error(THEME_NOT_AVAILABLE_ERR_MSG);
    }
    var styles = {
        fontFamily: (font) ? theme.fonts[font] : theme.fonts.text,
        fontSize: (fontSize) ? theme.fontSizes[fontSize] : theme.fontSizes.text,
        color: (color) ? theme.colors[color] : theme.colors.text,
        fontWeight: (bold) ? 700 : 400,
    };
    if (ellipsis) {
        var ellipsisStyles = {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        };
        Object.assign(styles, ellipsisStyles);
    }
    return styles;
};
export var createMarginCSSProps = function (_a) {
    var theme = _a.theme, m = _a.m, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, mx = _a.mx, my = _a.my;
    if (theme === undefined) {
        throw Error(THEME_NOT_AVAILABLE_ERR_MSG);
    }
    var styles = {};
    if (m) {
        Object.assign(styles, { margin: spacing(theme, m) });
    }
    if (mx) {
        Object.assign(styles, { marginLeft: spacing(theme, mx) });
        Object.assign(styles, { marginRight: spacing(theme, mx) });
    }
    if (my) {
        Object.assign(styles, { marginTop: spacing(theme, my) });
        Object.assign(styles, { marginBottom: spacing(theme, my) });
    }
    if (mt) {
        Object.assign(styles, { marginTop: spacing(theme, mt) });
    }
    if (mb) {
        Object.assign(styles, { marginBottom: spacing(theme, mb) });
    }
    if (ml) {
        Object.assign(styles, { marginLeft: spacing(theme, ml) });
    }
    if (mr) {
        Object.assign(styles, { marginRight: spacing(theme, mr) });
    }
    return styles;
};
export var createPaddingCSSProps = function (_a) {
    var theme = _a.theme, p = _a.p, pt = _a.pt, pb = _a.pb, pl = _a.pl, pr = _a.pr, px = _a.px, py = _a.py;
    if (theme === undefined) {
        throw Error(THEME_NOT_AVAILABLE_ERR_MSG);
    }
    var styles = {};
    if (p) {
        Object.assign(styles, { padding: spacing(theme, p) });
    }
    if (px) {
        Object.assign(styles, { paddingLeft: spacing(theme, px) });
        Object.assign(styles, { paddingRight: spacing(theme, px) });
    }
    if (py) {
        Object.assign(styles, { paddingTop: spacing(theme, py) });
        Object.assign(styles, { paddingBottom: spacing(theme, py) });
    }
    if (pt) {
        Object.assign(styles, { paddingTop: spacing(theme, pt) });
    }
    if (pb) {
        Object.assign(styles, { paddingBottom: spacing(theme, pb) });
    }
    if (pl) {
        Object.assign(styles, { paddingLeft: spacing(theme, pl) });
    }
    if (pr) {
        Object.assign(styles, { paddingRight: spacing(theme, pr) });
    }
    return styles;
};
export var createStylingCSSProps = function (_a) {
    var theme = _a.theme, bg = _a.bg;
    if (theme === undefined || theme.colors === undefined) {
        throw Error(THEME_NOT_AVAILABLE_ERR_MSG);
    }
    if (bg === undefined) {
        return {};
    }
    if (bg in theme.colors) {
        return ({
            backgroundColor: (bg) ? theme.colors[bg] : 'transparent',
        });
    }
    if (process.env.NODE_ENV !== 'production') {
        console.warn("The bg color " + bg + " is not available in theme.colors.");
    }
    return {};
};
var knownProps = [
    'inline', 'width', 'height', 'fullWidth', 'fullHeight',
    'grow', 'shrink', 'basis', 'order', 'align',
    'direction', 'nowrap', 'center', 'justifyContent', 'alignItems', 'stretch',
    'font', 'fontSize', 'color', 'bold', 'ellipsis',
    'm', 'mt', 'mb', 'ml', 'mr', 'mx', 'my',
    'p', 'pt', 'pb', 'pl', 'pr', 'px', 'py',
    'bg',
    'theme',
];
export function filterProps(props) {
    return Object
        .keys(props)
        .filter(function (key) { return !knownProps.includes(key); })
        .reduce(function (obj, key) {
        obj[key] = props[key];
        return obj;
    }, {});
}
export function mergeThemedStyles(componentStyle, passedStyle) {
    if (!passedStyle) {
        return componentStyle;
    }
    if (passedStyle instanceof Array) {
        return [componentStyle].concat(passedStyle);
    }
    return [componentStyle, passedStyle];
}
var spacing = function (theme, propValue) {
    if (!propValue) {
        throw new Error('A spacing value must not be null.');
    }
    if (theme === undefined || theme.spacing === undefined) {
        throw Error(THEME_NOT_AVAILABLE_ERR_MSG);
    }
    switch (propValue) {
        case 1:
            return theme.spacing.space1;
        case 2:
            return theme.spacing.space2;
        case 3:
            return theme.spacing.space3;
        case 4:
            return theme.spacing.space4;
        default:
            return theme.spacing.space0;
    }
};
//# sourceMappingURL=base.js.map