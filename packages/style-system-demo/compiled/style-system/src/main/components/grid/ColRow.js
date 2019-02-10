import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles } from '../base';
import { GRID_SIZE } from './Col';
import { GridContext } from './GridContext';
import { testGridContext } from './testGridContext';
var RowContainer = (function (_super) {
    tslib_1.__extends(RowContainer, _super);
    function RowContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowContainer.prototype.render = function () {
        var rowStyle = function (_a) {
            var style = _a.style, spacing = _a.spacing, otherProps = tslib_1.__rest(_a, ["style", "spacing"]);
            return (tslib_1.__assign({}, createPaddingCSSProps(otherProps), createStylingCSSProps(otherProps), { boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', width: '100%', marginTop: spacing, ':first-child': {
                    marginTop: 0,
                } }));
        };
        var _a = this.props, children = _a.children, style = _a.style, otherProps = tslib_1.__rest(_a, ["children", "style"]);
        var styles = mergeThemedStyles(rowStyle, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, otherProps), children));
    };
    return RowContainer;
}(React.Component));
var ColRow = (function (_super) {
    tslib_1.__extends(ColRow, _super);
    function ColRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColRow.prototype.renderChildren = function (spacing) {
        var currentRowSize = 0;
        var rowsCount = 0;
        return React.Children.map(this.props.children, function (child) {
            var currentChild = child;
            currentRowSize += currentChild.props.size;
            if (currentRowSize === GRID_SIZE) {
                currentRowSize = 0;
                rowsCount++;
                return React.cloneElement((currentChild), {
                    rowBreak: true,
                    marginTop: rowsCount > 1 ? spacing : 0
                });
            }
            if (currentRowSize >= GRID_SIZE) {
                rowsCount++;
            }
            if (rowsCount > 0) {
                return React.cloneElement((currentChild), {
                    rowBreak: false,
                    marginTop: spacing
                });
            }
            return currentChild;
        });
    };
    ColRow.prototype.render = function () {
        var _this = this;
        return (React.createElement(GridContext.Consumer, null, function (_a) {
            var spacing = _a.spacing;
            var child = (React.createElement(RowContainer, tslib_1.__assign({ spacing: spacing }, _this.props), _this.renderChildren(spacing)));
            return testGridContext(spacing, child);
        }));
    };
    return ColRow;
}(React.Component));
export { ColRow };
//# sourceMappingURL=ColRow.js.map