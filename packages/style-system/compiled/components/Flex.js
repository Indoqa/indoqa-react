import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { filterProps, mergeThemedStyles } from './base';
import { createBoxCSSStyles } from './Box';
var align = function (center, stretch, value) {
    if (center) {
        return 'center';
    }
    if (value) {
        return value;
    }
    return (stretch) ? 'stretch' : 'flex-start';
};
export var createFlexContainerCSSStyle = function (_a) {
    var inline = _a.inline, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, nowrap = _a.nowrap, center = _a.center, justifyContent = _a.justifyContent, alignItems = _a.alignItems, stretch = _a.stretch;
    return ({
        display: (inline) ? 'inline-flex' : 'flex',
        flexDirection: direction,
        flexWrap: (nowrap) ? 'nowrap' : 'wrap',
        justifyContent: align(center, stretch, justifyContent),
        alignItems: align(center, stretch, alignItems),
    });
};
var themedFlexStyles = function (props) { return (tslib_1.__assign({}, createBoxCSSStyles(props), createFlexContainerCSSStyle(props))); };
var Flex = (function (_super) {
    tslib_1.__extends(Flex, _super);
    function Flex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flex.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, rest = tslib_1.__rest(_a, ["children", "style"]);
        var styles = mergeThemedStyles(themedFlexStyles, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, rest), function (_a) {
            var className = _a.className;
            return (React.createElement("div", tslib_1.__assign({ className: className }, filterProps(rest)), children));
        }));
    };
    return Flex;
}(React.Component));
export { Flex };
//# sourceMappingURL=Flex.js.map