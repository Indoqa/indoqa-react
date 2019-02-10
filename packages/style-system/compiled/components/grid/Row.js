import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles } from '../base';
import { GridContext } from './GridContext';
import { testGridContext } from './testGridContext';
var RowContainer = (function (_super) {
    tslib_1.__extends(RowContainer, _super);
    function RowContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowContainer.prototype.render = function () {
        var rowStyle = function (_a) {
            var style = _a.style, minHeight = _a.minHeight, spacing = _a.spacing, height = _a.height, otherProps = tslib_1.__rest(_a, ["style", "minHeight", "spacing", "height"]);
            return (tslib_1.__assign({}, createPaddingCSSProps(otherProps), createStylingCSSProps(otherProps), { boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', width: '100%', minHeight: minHeight, ':first-child': {
                    marginTop: "-" + spacing,
                }, '@media (min-width: 768px)': {
                    flexWrap: 'nowrap',
                    height: height,
                } }));
        };
        var _a = this.props, children = _a.children, style = _a.style, otherProps = tslib_1.__rest(_a, ["children", "style"]);
        var styles = mergeThemedStyles(rowStyle, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, otherProps), children));
    };
    return RowContainer;
}(React.Component));
var Row = (function (_super) {
    tslib_1.__extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var _this = this;
        return (React.createElement(GridContext.Consumer, null, function (_a) {
            var spacing = _a.spacing;
            var child = (React.createElement(RowContainer, tslib_1.__assign({ spacing: spacing }, _this.props), _this.props.children));
            return testGridContext(spacing, child);
        }));
    };
    Row.defaultProps = {
        height: 'auto',
        minHeight: 'auto',
    };
    return Row;
}(React.Component));
export { Row };
//# sourceMappingURL=Row.js.map