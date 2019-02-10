import * as tslib_1 from "tslib";
import * as React from 'react';
import StyleGuideThemeContext from './SGThemeContext';
export function withSGTheme(Component) {
    return function BoundComponent(props) {
        return (React.createElement(StyleGuideThemeContext.Consumer, null, function (value) { return React.createElement(Component, tslib_1.__assign({ sgTheme: value }, props)); }));
    };
}
//# sourceMappingURL=withSGTheme.js.map