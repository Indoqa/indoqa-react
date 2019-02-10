import { Flex } from '@indoqa/style-system';
import * as React from 'react';
import ColorPanel from './ColorPanel';
import SmallColorPanel from './SmallColorPanel';
var renderColor = function (color, small) {
    if (small) {
        return (React.createElement(SmallColorPanel, { key: color.name, color: color.hexCode }));
    }
    return (React.createElement(ColorPanel, { key: color.name, name: color.name, color: color.hexCode }));
};
var ColorsPanel = function (_a) {
    var colors = _a.colors, small = _a.small;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null, colors.map((function (color) { return renderColor(color, small); })))));
};
ColorsPanel.defaultProps = {
    small: false,
};
export default ColorsPanel;
//# sourceMappingURL=ColorsPanel.js.map