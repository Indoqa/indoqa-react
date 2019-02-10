import { Flex } from '@indoqa/style-system';
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { withSGTheme } from '../sgtheme/withSGTheme';
var Logo = function (_a) {
    var sgTheme = _a.sgTheme, to = _a.to, children = _a.children;
    if (typeof children !== 'string') {
        return (React.createElement(Flex, { fullWidth: true, justifyContent: "center" },
            React.createElement(Link, { to: to }, children)));
    }
    var style = {
        listStyle: 'none',
        paddingLeft: sgTheme.spacing.space3,
        '> a': {
            textDecoration: 'none',
        },
    };
    return (React.createElement(FelaComponent, { style: style },
        React.createElement(Link, { to: to },
            React.createElement(Heading, { as: "h1" }, children))));
};
export default withSGTheme(Logo);
//# sourceMappingURL=Logo.js.map