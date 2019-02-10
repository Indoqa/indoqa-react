import { Grid, Panel, Row } from '@indoqa/style-system';
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { withSGTheme } from '../sgtheme/withSGTheme';
import FontStylePanel from './FontStylePanel';
import { characters } from './TextSpecimen';
var HeadlineSample = function (_a) {
    var fontStyles = _a.fontStyles, fontSize = _a.fontSize, sgTheme = _a.sgTheme, children = _a.children;
    var style = {
        marginBottom: sgTheme.spacing.space2,
        fontSize: fontSize,
    };
    return (React.createElement(FelaComponent, { style: [fontStyles, style] }, children));
};
var renderHeadlineSizeSamples = function (fontStyles, fontSizes, sgTheme) {
    return fontSizes.map(function (fontSize) {
        return (React.createElement(HeadlineSample, { fontStyles: fontStyles, fontSize: fontSize, sgTheme: sgTheme, key: fontSize }, "The quick brown fox jumps over the lazy dog."));
    });
};
var HeadlineFontPanel = function (_a) {
    var fontStyles = _a.fontStyles, fontSizes = _a.fontSizes, name = _a.name, sgTheme = _a.sgTheme;
    return (React.createElement(Grid, { fullWidth: true, spacing: "1rem" },
        React.createElement(Row, null,
            React.createElement(Panel, null,
                React.createElement(FontStylePanel, { name: name + " / sizes" }, renderHeadlineSizeSamples(fontStyles, fontSizes, sgTheme))),
            React.createElement(Panel, null,
                React.createElement(FontStylePanel, { name: name + " / characters" },
                    React.createElement(HeadlineSample, { fontStyles: fontStyles, fontSize: fontSizes[0], sgTheme: sgTheme }, characters))))));
};
export default withSGTheme(HeadlineFontPanel);
//# sourceMappingURL=HeadlineFontPanel.js.map