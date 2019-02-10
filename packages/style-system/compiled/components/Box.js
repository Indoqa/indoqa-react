import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createBoxModelCSSProps, createFlexChildCSSProps, createFontCSSProps, createMarginCSSProps, createPaddingCSSProps, createStylingCSSProps, filterProps, mergeThemedStyles, } from './base';
export var createBoxCSSStyles = function (props) { return (tslib_1.__assign({}, createBoxModelCSSProps(props), createMarginCSSProps(props), createPaddingCSSProps(props), createFlexChildCSSProps(props), createStylingCSSProps(props), createFontCSSProps(props))); };
var themedBoxStyles = function (props) { return (tslib_1.__assign({}, createBoxCSSStyles(props))); };
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, rest = tslib_1.__rest(_a, ["children", "style"]);
        var styles = mergeThemedStyles(themedBoxStyles, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, rest), function (_a) {
            var className = _a.className;
            return (React.createElement("div", tslib_1.__assign({ className: className }, filterProps(rest)), children));
        }));
    };
    return Box;
}(React.Component));
export { Box };
//# sourceMappingURL=Box.js.map