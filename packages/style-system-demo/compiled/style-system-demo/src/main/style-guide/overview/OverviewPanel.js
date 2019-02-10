import { Box, Flex } from '@indoqa/style-system';
import * as React from 'react';
import ColorsPanel from '../colors/ColorsPanel';
import { withSGTheme } from '../sgtheme/withSGTheme';
import FontMixContent from '../typography/FontMixContent';
var OverviewPanel = function (_a) {
    var fontMixes = _a.fontMixes, fontSizes = _a.fontSizes, textFontSize = _a.textFontSize, colors = _a.colors, sgTheme = _a.sgTheme;
    var panelStyle = {
        marginTop: sgTheme.spacing.space4,
    };
    var textFont = fontMixes[0].textFont;
    var headlineFont = fontMixes[0].headlineFont;
    return (React.createElement(Flex, { fullWidth: true, direction: "column" },
        React.createElement(Box, null,
            React.createElement(Box, null,
                React.createElement(ColorsPanel, { colors: colors, small: true })),
            React.createElement(Box, { style: panelStyle },
                React.createElement(FontMixContent, { textFont: textFont, headlineFont: headlineFont, fontSizes: fontSizes, textFontSize: textFontSize })))));
};
export default withSGTheme(OverviewPanel);
//# sourceMappingURL=OverviewPanel.js.map