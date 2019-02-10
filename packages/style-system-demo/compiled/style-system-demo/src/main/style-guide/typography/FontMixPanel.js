import { Grid, Panel, Row } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from '../sgtheme/withSGTheme';
import FontMixContent from './FontMixContent';
import FontStylePanel from './FontStylePanel';
var FontMixPanel = function (_a) {
    var fontSizes = _a.fontSizes, textFontSize = _a.textFontSize, fontMix = _a.fontMix;
    var name = fontMix.name, textFont = fontMix.textFont, headlineFont = fontMix.headlineFont;
    return (React.createElement(Grid, { spacing: "1rem", fullWidth: true },
        React.createElement(Row, null,
            React.createElement(Panel, null,
                React.createElement(FontStylePanel, { name: name },
                    React.createElement(FontMixContent, { textFont: textFont, headlineFont: headlineFont, fontSizes: fontSizes, textFontSize: textFontSize }))))));
};
export default withSGTheme(FontMixPanel);
//# sourceMappingURL=FontMixPanel.js.map