import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createBoxModelCSSProps, createFlexChildCSSProps, createMarginCSSProps, createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles, } from '../base';
import { GridContext } from './GridContext';
var GridContainer = (function (_super) {
    tslib_1.__extends(GridContainer, _super);
    function GridContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridContainer.prototype.render = function () {
        var gridStyle = function (_a) {
            var maxWidth = _a.maxWidth, center = _a.center, otherProps = tslib_1.__rest(_a, ["maxWidth", "center"]);
            return (tslib_1.__assign({ margin: center ? 'auto' : 0 }, createBoxModelCSSProps(otherProps), createMarginCSSProps(otherProps), createPaddingCSSProps(otherProps), createFlexChildCSSProps(otherProps), createStylingCSSProps(otherProps), { boxSizing: 'border-box', maxWidth: maxWidth }));
        };
        var _a = this.props, children = _a.children, style = _a.style, center = _a.center, otherProps = tslib_1.__rest(_a, ["children", "style", "center"]);
        if (process.env.NODE_ENV !== 'production') {
            if (center && (otherProps.mx || otherProps.ml || otherProps.mr)) {
                console.warn('The Grid property center is set to true and one of the properties mx, ml or mr is set. ' +
                    'This might lead to unexpected behaviour.');
            }
        }
        var styles = mergeThemedStyles(gridStyle, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles, center: center }, otherProps), children));
    };
    return GridContainer;
}(React.Component));
var Grid = (function (_super) {
    tslib_1.__extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grid.prototype.render = function () {
        var _a = this.props, spacing = _a.spacing, otherProps = tslib_1.__rest(_a, ["spacing"]);
        return (React.createElement(GridContainer, tslib_1.__assign({}, otherProps),
            React.createElement(GridContext.Provider, { value: { spacing: spacing } }, this.props.children)));
    };
    Grid.defaultProps = {
        maxWidth: 'auto',
        center: false,
        spacing: 0,
    };
    return Grid;
}(React.Component));
export { Grid };
//# sourceMappingURL=Grid.js.map