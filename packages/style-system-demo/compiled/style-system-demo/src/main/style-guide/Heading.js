import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { withSGTheme } from './sgtheme/withSGTheme';
var getConcreteStyle = function (level, sgTheme) {
    switch (level) {
        case 'h1': {
            return {
                fontSize: sgTheme.fontSizes.veryBig,
                backgroundColor: sgTheme.colors.primaryDark,
                color: sgTheme.colors.textInverted,
                lineHeight: 1,
                paddingLeft: sgTheme.spacing.space2,
                paddingRight: sgTheme.spacing.space2,
                paddingBottom: sgTheme.spacing.space2,
                paddingTop: sgTheme.spacing.space2,
            };
        }
        case 'h2': {
            return {
                fontSize: sgTheme.fontSizes.big,
                paddingBottom: sgTheme.spacing.space2,
            };
        }
        default: {
            return {
                fontSize: sgTheme.fontSizes.small,
            };
        }
    }
};
var Heading = function (_a) {
    var children = _a.children, sgTheme = _a.sgTheme, as = _a.as;
    var baseStyle = {
        textTransform: 'uppercase',
        margin: 0,
        paddingBottom: sgTheme.spacing.space1,
        marginBottom: sgTheme.spacing.space0,
        color: sgTheme.colors.primaryDark,
    };
    return (React.createElement(FelaComponent, { style: [baseStyle, sgTheme.fontStyles.headline, getConcreteStyle(as, sgTheme)], as: as }, children));
};
export default withSGTheme(Heading);
//# sourceMappingURL=Heading.js.map