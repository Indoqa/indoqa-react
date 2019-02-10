import * as React from 'react';
import { FelaComponent } from 'react-fela';
import Heading from '../Heading';
import { withSGTheme } from '../sgtheme/withSGTheme';
var List = function (_a) {
    var children = _a.children;
    var style = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    };
    return (React.createElement(FelaComponent, { style: style, as: "ul" }, children));
};
var MenuGroup = function (_a) {
    var sgTheme = _a.sgTheme, name = _a.name, children = _a.children;
    var style = {
        paddingTop: sgTheme.spacing.space2,
        paddingLeft: sgTheme.spacing.space4,
    };
    return (React.createElement(FelaComponent, { style: style },
        name && React.createElement(Heading, { as: "h3" }, name),
        React.createElement(List, null, children)));
};
export default withSGTheme(MenuGroup);
//# sourceMappingURL=MenuGroup.js.map