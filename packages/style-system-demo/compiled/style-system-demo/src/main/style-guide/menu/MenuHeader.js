import { Flex } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from '../sgtheme/withSGTheme';
var MenuHeader = function (_a) {
    var children = _a.children, sgTheme = _a.sgTheme;
    var style = {
        boxSizing: 'border-box',
        height: sgTheme.layout.topMenuHeight,
    };
    return (React.createElement(Flex, { fullWidth: true, style: style, alignItems: "center" }, children));
};
export default withSGTheme(MenuHeader);
//# sourceMappingURL=MenuHeader.js.map