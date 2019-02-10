import { Box } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from './sgtheme/withSGTheme';
var ContentPanel = function (_a) {
    var children = _a.children, sgTheme = _a.sgTheme;
    var style = {
        boxSizing: 'border-box',
        backgroundColor: sgTheme.colors.background,
        overflow: 'auto',
    };
    return (React.createElement(Box, { fullWidth: true, fullHeight: true, style: style }, children));
};
export default withSGTheme(ContentPanel);
//# sourceMappingURL=ContentPanel.js.map