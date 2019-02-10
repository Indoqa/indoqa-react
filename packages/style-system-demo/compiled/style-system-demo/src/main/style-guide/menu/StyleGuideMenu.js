import { Box } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from '../sgtheme/withSGTheme';
var StyleGuideMenu = function (_a) {
    var children = _a.children, sgTheme = _a.sgTheme;
    var style = {
        boxSizing: 'border-box',
        backgroundColor: sgTheme.colors.primary,
        marginBottom: sgTheme.spacing.space4,
        tablet: {
            overflowY: 'auto',
            borderBottom: 'none',
        },
    };
    return (React.createElement(Box, { fullWidth: true, fullHeight: true, style: style }, children));
};
export default withSGTheme(StyleGuideMenu);
//# sourceMappingURL=StyleGuideMenu.js.map