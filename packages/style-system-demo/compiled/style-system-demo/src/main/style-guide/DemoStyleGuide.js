import * as tslib_1 from "tslib";
import * as React from 'react';
import { withTheme } from 'react-fela';
import GridSamples from '../grid/GridSamples';
import StyleGuide from './StyleGuide';
var DemoStyleGuide = (function (_super) {
    tslib_1.__extends(DemoStyleGuide, _super);
    function DemoStyleGuide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoStyleGuide.prototype.render = function () {
        var theme = this.props.theme;
        var colors = [
            { name: 'primary', hexCode: theme.colors.primary },
            { name: 'primary-dark', hexCode: theme.colors.primaryDark },
            { name: 'primary-light', hexCode: theme.colors.primaryLight },
            { name: 'text', hexCode: theme.colors.text },
            { name: 'accent', hexCode: theme.colors.accent },
            { name: 'secondary-text', hexCode: theme.colors.textSecondary },
            { name: 'divider', hexCode: theme.colors.divider },
        ];
        var textFonts = [
            { name: 'text', fontStyle: theme.fontStyles.text },
        ];
        var headlineFonts = [
            { name: 'headline', fontStyle: theme.fontStyles.headline },
        ];
        var fontSizes = [
            theme.fontSizes.extraBig,
            theme.fontSizes.big,
            theme.fontSizes.text,
            theme.fontSizes.small,
        ];
        var textFontSize = theme.fontSizes.text;
        var fontMixes = [
            { name: 'System fonts', textFont: theme.fontStyles.text, headlineFont: theme.fontStyles.headline },
        ];
        var atomsGroup = {
            name: 'Atoms',
            descriptions: [
                {
                    name: 'button',
                    component: React.createElement("button", null, "Click me!"),
                },
                {
                    name: 'button2',
                    component: React.createElement("button", null, "Click me again!"),
                },
            ],
        };
        var moleculesGroup = {
            name: 'Molecules',
            descriptions: [
                {
                    name: 'Button',
                    component: React.createElement("button", null, "Click me!"),
                },
                {
                    name: 'Grid',
                    component: React.createElement(GridSamples, null),
                },
            ],
        };
        var groups = [atomsGroup, moleculesGroup];
        return (React.createElement(StyleGuide, { projectName: "Indoqa Style-System", description: "Overview", textFonts: textFonts, headlineFonts: headlineFonts, fontMixes: fontMixes, fontSizes: fontSizes, textFontSize: textFontSize, colors: colors, groups: groups, mountPath: "" }));
    };
    return DemoStyleGuide;
}(React.Component));
export default withTheme(DemoStyleGuide);
//# sourceMappingURL=DemoStyleGuide.js.map