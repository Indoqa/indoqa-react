import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { withSGTheme } from '../sgtheme/withSGTheme';
var Header = function (_a) {
    var sgTheme = _a.sgTheme, children = _a.children;
    var style = tslib_1.__assign({ backgroundColor: sgTheme.colors.primaryLight, textTransform: 'uppercase' }, sgTheme.fontStyles.headline, { fontSize: sgTheme.fontSizes.small, color: sgTheme.colors.primaryDark, padding: sgTheme.spacing.space2, borderRadius: '1px', marginBottom: sgTheme.spacing.space2 });
    return (React.createElement(FelaComponent, { style: style }, children));
};
var Container = function (_a) {
    var sgTheme = _a.sgTheme, children = _a.children;
    var style = {
        backgroundColor: sgTheme.colors.background,
        borderRadius: '3px',
        marginBottom: '2rem',
        width: '100%',
    };
    return (React.createElement(FelaComponent, { style: style }, children));
};
var Content = function (_a) {
    var sgTheme = _a.sgTheme, children = _a.children;
    var style = {
        paddingLeft: sgTheme.spacing.space2,
        paddingTop: sgTheme.spacing.space2,
    };
    return (React.createElement(FelaComponent, { style: style }, children));
};
var FontStylePanel = function (_a) {
    var sgTheme = _a.sgTheme, name = _a.name, children = _a.children;
    return (React.createElement(Container, { sgTheme: sgTheme },
        React.createElement(Header, { sgTheme: sgTheme }, name),
        React.createElement(Content, { sgTheme: sgTheme }, children)));
};
export default withSGTheme(FontStylePanel);
//# sourceMappingURL=FontStylePanel.js.map