import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createFlexChildCSSProps, createFontCSSProps, createMarginCSSProps, createPaddingCSSProps, filterProps, mergeThemedStyles, } from './base';
var themedTextStyle = function (props) { return (tslib_1.__assign({ display: 'inline-block' }, createMarginCSSProps(props), createPaddingCSSProps(props), createFlexChildCSSProps(props), createFontCSSProps(props))); };
var Text = (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, rest = tslib_1.__rest(_a, ["children", "style"]);
        var styles = mergeThemedStyles(themedTextStyle, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, rest), function (_a) {
            var className = _a.className;
            return (React.createElement("span", tslib_1.__assign({ className: className }, filterProps(rest)), children));
        }));
    };
    return Text;
}(React.Component));
export { Text };
//# sourceMappingURL=Text.js.map