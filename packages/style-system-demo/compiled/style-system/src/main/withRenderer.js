import * as tslib_1 from "tslib";
import * as React from 'react';
import { RendererContext } from 'react-fela';
export function withRenderer(Component) {
    return function BoundComponent(props) {
        return (React.createElement(RendererContext.Consumer, null, function (value) { return React.createElement(Component, tslib_1.__assign({ renderer: value }, props)); }));
    };
}
//# sourceMappingURL=withRenderer.js.map