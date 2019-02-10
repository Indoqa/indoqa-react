import * as tslib_1 from "tslib";
import { Box, Grid, Panel, Row } from '@indoqa/style-system';
import * as React from 'react';
import { FelaComponent } from 'react-fela';
import { Route } from 'react-router';
import ColorsPanel from './colors/ColorsPanel';
import ContentHeader from './ContentHeader';
import ContentPanel from './ContentPanel';
import Heading from './Heading';
import Logo from './menu/Logo';
import MenuGroup from './menu/MenuGroup';
import MenuHeader from './menu/MenuHeader';
import MenuItem from './menu/MenuItem';
import StyleGuideMenu from './menu/StyleGuideMenu';
import OverviewPanel from './overview/OverviewPanel';
import StyleGuideThemeContext from './sgtheme/SGThemeContext';
import { lightTheme } from './sgtheme/sgThemes';
import TypographyPanel from './typography/TypographyPanel';
import importCss from './utils/importCss';
var InnerContentPanel = function (_a) {
    var name = _a.name, sgTheme = _a.sgTheme, children = _a.children;
    var style = {
        paddingTop: sgTheme.spacing.space4,
        paddingRight: sgTheme.spacing.space4,
        paddingBottom: sgTheme.spacing.space4,
        paddingLeft: sgTheme.spacing.space4,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ContentHeader, null, name && React.createElement(Heading, { as: "h1" }, name)),
        React.createElement(Box, { style: style }, children)));
};
var createComponentRoute = function (name, component, mountPath, sgTheme) {
    var componentMountPath = mountPath + "/" + name.toLowerCase();
    return (React.createElement(Route, { key: componentMountPath, exact: true, path: componentMountPath, render: function () { return (React.createElement(InnerContentPanel, { name: name, sgTheme: sgTheme }, component)); } }));
};
var StyleGuide = (function (_super) {
    tslib_1.__extends(StyleGuide, _super);
    function StyleGuide(props) {
        var _this = _super.call(this, props) || this;
        var sgTheme = props.sgTheme;
        _this.state = {
            sgTheme: sgTheme || lightTheme,
        };
        return _this;
    }
    StyleGuide.prototype.getDescription = function () {
        var _a = this.props, projectName = _a.projectName, description = _a.description;
        if (description || description === '') {
            return description;
        }
        return "Styleguide " + projectName;
    };
    StyleGuide.prototype.componentDidMount = function () {
        var sgTheme = this.state.sgTheme;
        var fontFamilyCSSImports = sgTheme.fontFamilyCSSImports;
        importCss('style-guide-fonts', fontFamilyCSSImports);
        document.title = this.props.projectName + " | Style-Guide";
    };
    StyleGuide.prototype.render = function () {
        var _this = this;
        var _a = this.props, colors = _a.colors, textFonts = _a.textFonts, headlineFonts = _a.headlineFonts, fontMixes = _a.fontMixes, fontSizes = _a.fontSizes, textFontSize = _a.textFontSize, groups = _a.groups, mountPath = _a.mountPath, logo = _a.logo, projectName = _a.projectName;
        var sgTheme = this.state.sgTheme;
        var menuGroups = groups.map(function (componentDescription) {
            var name = componentDescription.name, descriptions = componentDescription.descriptions;
            var menuItems = descriptions.map(function (description) {
                var componentMountPath = mountPath + "/" + name.toLowerCase() + "/" + description.name.toLowerCase();
                return React.createElement(MenuItem, { key: componentMountPath, to: componentMountPath }, description.name);
            });
            return (React.createElement(MenuGroup, { name: name, key: name }, menuItems));
        });
        var routes = [];
        groups.forEach(function (componentDescription) {
            var name = componentDescription.name, descriptions = componentDescription.descriptions;
            descriptions.forEach(function (description) {
                routes.push(createComponentRoute(description.name, description.component, mountPath + "/" + name.toLowerCase(), sgTheme));
            });
        });
        return (React.createElement(StyleGuideThemeContext.Provider, { value: sgTheme },
            React.createElement(Grid, { spacing: 0 },
                React.createElement(Row, { height: "100vh" },
                    React.createElement(Panel, { width: "15rem" },
                        React.createElement(StyleGuideMenu, null,
                            React.createElement(MenuHeader, null,
                                React.createElement(Logo, { to: mountPath }, logo || projectName)),
                            React.createElement(FelaComponent, { style: { height: sgTheme.spacing.space3 } }),
                            React.createElement(MenuGroup, { name: "Base Styles" },
                                React.createElement(MenuItem, { to: mountPath + "/colors" }, "Colors"),
                                React.createElement(MenuItem, { to: mountPath + "/typography" }, "Typography")),
                            menuGroups)),
                    React.createElement(Panel, null,
                        React.createElement(ContentPanel, null,
                            React.createElement(Route, { exact: true, path: mountPath, render: function () { return (React.createElement(InnerContentPanel, { name: _this.getDescription(), sgTheme: sgTheme },
                                    React.createElement(OverviewPanel, { colors: colors, fontMixes: fontMixes, fontSizes: fontSizes, textFontSize: textFontSize }))); } }),
                            React.createElement(Route, { exact: true, path: mountPath + "/colors", render: function () { return (React.createElement(InnerContentPanel, { name: "Color Scheme", sgTheme: sgTheme },
                                    React.createElement(ColorsPanel, { colors: colors }))); } }),
                            React.createElement(Route, { exact: true, path: mountPath + "/typography", render: function () { return (React.createElement(InnerContentPanel, { name: "Typography", sgTheme: sgTheme },
                                    React.createElement(TypographyPanel, { textFonts: textFonts, headlineFonts: headlineFonts, fontMixes: fontMixes, fontSizes: fontSizes, textFontSize: textFontSize }))); } }),
                            routes))))));
    };
    return StyleGuide;
}(React.Component));
export default StyleGuide;
//# sourceMappingURL=StyleGuide.js.map