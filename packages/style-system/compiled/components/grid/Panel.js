import * as tslib_1 from "tslib";
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { createFontCSSProps, createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles, } from '../base';
import { createFlexContainerCSSStyle } from '../Flex';
import { GridContext } from './GridContext';
import { testGridContext } from './testGridContext';
import { addUnitIfNeeded } from './utils';
var DEFAULT_WIDTH = '0%';
var isDefaultWidth = function (width) {
    return !width || width === DEFAULT_WIDTH || width === 0 || width === '0';
};
var calcBasis = function (spacing, size, width) {
    if (width && !isDefaultWidth(width)) {
        return addUnitIfNeeded(width);
    }
    if (!size) {
        return 'auto';
    }
    return "calc(" + addUnitIfNeeded(spacing) + " * " + (size - 1) + ")";
};
var PanelContainer = (function (_super) {
    tslib_1.__extends(PanelContainer, _super);
    function PanelContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelContainer.prototype.render = function () {
        var panelStyle = function (_a) {
            var width = _a.width, size = _a.size, spacing = _a.spacing, otherProps = tslib_1.__rest(_a, ["width", "size", "spacing"]);
            return (tslib_1.__assign({}, createPaddingCSSProps(otherProps), createFontCSSProps(otherProps), createStylingCSSProps(otherProps), createFlexContainerCSSStyle(otherProps), { flexGrow: 1, flexShrink: 0, width: '100%', height: 'auto', overflow: 'hidden', marginTop: spacing, '@media (min-width: 768px)': {
                    width: '0',
                    flex: (isDefaultWidth(width) ? size : 0) + " 0 " + calcBasis(spacing, size, width),
                    ':not(:last-child)': {
                        paddingRight: spacing,
                    },
                } }));
        };
        var _a = this.props, style = _a.style, children = _a.children, otherProps = tslib_1.__rest(_a, ["style", "children"]);
        var styles = mergeThemedStyles(panelStyle, style);
        return (React.createElement(FelaComponent, tslib_1.__assign({ style: styles }, otherProps), children));
    };
    return PanelContainer;
}(React.Component));
var Panel = (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var _this = this;
        return (React.createElement(GridContext.Consumer, null, function (_a) {
            var spacing = _a.spacing;
            var child = (React.createElement(PanelContainer, tslib_1.__assign({ spacing: spacing }, _this.props), _this.props.children));
            return testGridContext(spacing, child);
        }));
    };
    Panel.defaultProps = {
        size: 1,
        width: DEFAULT_WIDTH,
    };
    return Panel;
}(React.Component));
export { Panel };
//# sourceMappingURL=Panel.js.map