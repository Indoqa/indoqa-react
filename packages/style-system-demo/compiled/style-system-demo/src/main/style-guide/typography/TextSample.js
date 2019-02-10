import * as React from 'react';
import { FelaComponent } from 'react-fela';
var TextSample = function (_a) {
    var fontStyles = _a.fontStyles, children = _a.children, as = _a.as;
    var style = {
        paddingBottom: 0,
    };
    return (React.createElement(FelaComponent, { style: [style, fontStyles], as: as || 'p' }, children));
};
export default TextSample;
//# sourceMappingURL=TextSample.js.map