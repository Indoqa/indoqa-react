import * as tslib_1 from "tslib";
import { Box } from '@indoqa/style-system';
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { withSGTheme } from '../sgtheme/withSGTheme';
var toHexString = function (color) {
    return color.startsWith('#') ? color.substr(1) : color;
};
var calcTextColor = function (color) {
    if (!color) {
        return '#fff';
    }
    var bigint = parseInt(toHexString(color), 16);
    var red = (bigint >> 16) & 255;
    var green = (bigint >> 8) & 255;
    var blue = bigint & 255;
    return (red * 0.299 + green * 0.587 + blue * 0.114) > 180 ? '#000' : '#fff';
};
var ColorPanel = function (_a) {
    var color = _a.color, name = _a.name, sgTheme = _a.sgTheme;
    var textColor = calcTextColor(color);
    var style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '12rem',
        height: '7rem',
        backgroundColor: color,
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: sgTheme.spacing.space1,
        marginRight: sgTheme.spacing.space2,
        marginBottom: sgTheme.spacing.space2,
        borderRadius: '3px',
        border: sgTheme.layout.colorPanelBorder,
    };
    return (React.createElement(FelaComponent, { style: style },
        React.createElement(Box, { style: tslib_1.__assign({}, sgTheme.fontStyles.base, { color: textColor, fontSize: sgTheme.fontSizes.small, marginBottom: 'auto' }) }, name),
        React.createElement(Box, { style: tslib_1.__assign({}, sgTheme.fontStyles.base, { color: textColor, fontSize: sgTheme.fontSizes.verySmall }) }, color)));
};
export default withSGTheme(ColorPanel);
//# sourceMappingURL=ColorPanel.js.map