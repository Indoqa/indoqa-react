import { Flex } from '@indoqa/style-system';
import * as React from 'react';
import { withSGTheme } from '../sgtheme/withSGTheme';
import FontMixPanel from './FontMixPanel';
import HeadlineFontStylePanel from './HeadlineFontPanel';
import TextFontStylePanel from './TextFontPanel';
var renderTextFont = function (font) {
    return (React.createElement(TextFontStylePanel, { key: font.name, name: font.name, fontStyles: font.fontStyle }));
};
var renderHeadlineFont = function (font, fontSizes) {
    return (React.createElement(HeadlineFontStylePanel, { key: font.name, name: font.name, fontStyles: font.fontStyle, fontSizes: fontSizes }));
};
var renderFontMixes = function (fontMix, fontSizes, textFontSize) {
    return (React.createElement(FontMixPanel, { key: fontMix.name, fontMix: fontMix, fontSizes: fontSizes, textFontSize: textFontSize }));
};
var TypographyPanel = function (_a) {
    var textFonts = _a.textFonts, headlineFonts = _a.headlineFonts, fontMixes = _a.fontMixes, fontSizes = _a.fontSizes, textFontSize = _a.textFontSize;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null, headlineFonts.map(function (font) { return renderHeadlineFont(font, fontSizes); })),
        React.createElement(Flex, null, textFonts.map(function (font) { return renderTextFont(font); })),
        React.createElement(Flex, null, fontMixes.map(function (fontMix) { return renderFontMixes(fontMix, fontSizes, textFontSize); }))));
};
export default withSGTheme(TypographyPanel);
//# sourceMappingURL=TypographyPanel.js.map