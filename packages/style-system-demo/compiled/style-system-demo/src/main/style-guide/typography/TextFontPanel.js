import { Grid, Panel, Row } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from '../sgtheme/withSGTheme';
import FontStylePanel from './FontStylePanel';
import TextSample from './TextSample';
import { characters, longText, longTextInlineStyle } from './TextSpecimen';
var TextFontPanel = function (_a) {
    var fontStyles = _a.fontStyles, name = _a.name;
    return (React.createElement(Grid, { spacing: "1rem", fullWidth: true },
        React.createElement(Row, null,
            React.createElement(Panel, null,
                React.createElement(FontStylePanel, { name: name + " / plain" },
                    React.createElement(TextSample, { fontStyles: fontStyles }, characters),
                    React.createElement(TextSample, { fontStyles: fontStyles }, longText))),
            React.createElement(Panel, null,
                React.createElement(FontStylePanel, { name: name + " / inline styles" },
                    React.createElement(TextSample, { fontStyles: fontStyles, as: "div" }, longTextInlineStyle))))));
};
export default withSGTheme(TextFontPanel);
//# sourceMappingURL=TextFontPanel.js.map