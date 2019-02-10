import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import TextSample from './TextSample';
import { headerText, longText, shortText } from './TextSpecimen';
var Container = function (_a) {
    var children = _a.children;
    var style = {
        maxWidth: 650,
    };
    return React.createElement(FelaComponent, { style: style }, children);
};
var FontMixContent = function (_a) {
    var textFont = _a.textFont, headlineFont = _a.headlineFont, fontSizes = _a.fontSizes, textFontSize = _a.textFontSize;
    var extendedHeadline1Font = tslib_1.__assign({}, headlineFont, { fontSize: fontSizes.length > 0 ? fontSizes[0] : '30px' });
    var extendedHeadline2Font = tslib_1.__assign({}, headlineFont, { fontSize: fontSizes.length > 1 ? fontSizes[1] : '24px' });
    var extendedHeadline3Font = tslib_1.__assign({}, headlineFont, { fontSize: fontSizes.length > 2 ? fontSizes[2] : '18px' });
    var extendedTextFont = tslib_1.__assign({}, textFont, { fontSize: textFontSize ? textFontSize : '14px' });
    return (React.createElement(Container, null,
        React.createElement(TextSample, { fontStyles: extendedHeadline1Font, as: "h1" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, longText),
        React.createElement(TextSample, { fontStyles: extendedHeadline2Font, as: "h2" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, shortText),
        React.createElement(TextSample, { fontStyles: extendedHeadline3Font, as: "h3" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, longText),
        React.createElement(TextSample, { fontStyles: extendedHeadline3Font, as: "h3" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, shortText),
        React.createElement(TextSample, { fontStyles: extendedHeadline2Font, as: "h2" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, longText),
        React.createElement(TextSample, { fontStyles: extendedHeadline1Font, as: "h1" }, headerText),
        React.createElement(TextSample, { fontStyles: extendedTextFont }, shortText)));
};
export default FontMixContent;
//# sourceMappingURL=FontMixContent.js.map