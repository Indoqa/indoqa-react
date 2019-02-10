import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { NavLink } from 'react-router-dom';
import { withSGTheme } from '../sgtheme/withSGTheme';
var MenuItem = function (_a) {
    var sgTheme = _a.sgTheme, to = _a.to, children = _a.children;
    var style = {
        paddingBottom: '0.15rem',
        marginLeft: 0,
        paddingLeft: 0,
        listStyle: 'none',
        '> a': tslib_1.__assign({ textDecoration: 'none' }, sgTheme.fontStyles.base, { color: sgTheme.colors.text, fontSize: sgTheme.fontSizes.text }),
        '> a:visited': tslib_1.__assign({ textDecoration: 'none' }, sgTheme.fontStyles.base),
        '> a.active': {
            fontWeight: 'bold',
        },
    };
    return (React.createElement(FelaComponent, { style: style, as: "li" },
        React.createElement(NavLink, { to: to }, children)));
};
export default withSGTheme(MenuItem);
//# sourceMappingURL=MenuItem.js.map