import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { withSGTheme } from '../sgtheme/withSGTheme';
var ColorPanel = function (_a) {
    var color = _a.color, sgTheme = _a.sgTheme;
    var style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '5rem',
        height: '5rem',
        backgroundColor: color,
        padding: sgTheme.spacing.space1,
        marginRight: sgTheme.spacing.space1,
        marginBottom: sgTheme.spacing.space1,
        borderRadius: '3px',
        border: sgTheme.layout.colorPanelBorder,
    };
    return (React.createElement(FelaComponent, { style: style }));
};
export default withSGTheme(ColorPanel);
//# sourceMappingURL=SmallColorPanel.js.map