import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { GridContext } from './GridContext';
import { testGridContext } from './testGridContext';
import { addUnitIfNeeded } from './utils';
export var GRID_SIZE = 12;
var Col = (function (_super) {
    tslib_1.__extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var internalProps = this.props;
        var children = internalProps.children, rowBreak = internalProps.rowBreak, marginTop = internalProps.marginTop, size = internalProps.size;
        var effectiveSize = size ? size : 12;
        var colStyle = function (_a) {
            var spacing = _a.spacing;
            var marginRight = rowBreak ? '0px' : spacing;
            var spacingWithUnit = addUnitIfNeeded(spacing);
            var availableSpace = "(100% - " + spacingWithUnit + " * " + (GRID_SIZE - 1) + ")";
            var coveredSpacing = spacingWithUnit + " * " + (effectiveSize - 1);
            return ({
                width: "calc(" + availableSpace + " / " + GRID_SIZE + " * " + effectiveSize + " + " + coveredSpacing + ")",
                marginRight: marginRight,
                marginTop: marginTop,
            });
        };
        return (React.createElement(GridContext.Consumer, null, function (_a) {
            var spacing = _a.spacing;
            var child = (React.createElement(FelaComponent, { style: colStyle, spacing: spacing }, children));
            return testGridContext(spacing, child);
        }));
    };
    Col.defaultProps = {
        size: GRID_SIZE,
    };
    return Col;
}(React.Component));
export { Col };
//# sourceMappingURL=Col.js.map