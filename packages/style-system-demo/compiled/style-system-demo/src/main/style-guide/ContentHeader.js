import { Flex } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from './sgtheme/withSGTheme';
var ContentHeader = function (_a) {
    var children = _a.children, sgTheme = _a.sgTheme;
    var style = {
        boxSizing: 'border-box',
        height: sgTheme.layout.topMenuHeight,
        paddingLeft: sgTheme.spacing.space4,
        backgroundColor: sgTheme.colors.primaryLight,
    };
    return (React.createElement(Flex, { fullWidth: true, style: style, alignItems: "center" }, children));
};
export default withSGTheme(ContentHeader);
//# sourceMappingURL=ContentHeader.js.map