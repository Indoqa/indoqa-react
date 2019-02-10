import * as tslib_1 from "tslib";
import { createRenderer, IndoqaFela, renderRebootCss } from '@indoqa/style-system';
import * as React from 'react';
import { ThemeProvider } from 'react-fela';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import DemoStyleGuide from '../style-guide/DemoStyleGuide';
import fela from './fela';
import history from './history';
import theme from './theme';
var renderer = createRenderer(fela);
var baseCssProps = {
    spacing: {
        space1: theme.spacing.space1,
        space2: theme.spacing.space2,
    },
    fontSizes: {
        text: theme.fontSizes.text,
        h1: theme.fontSizes.extraBig,
        h2: theme.fontSizes.veryBig,
        h3: theme.fontSizes.big,
    },
    fontStyles: {
        text: theme.fontStyles.text,
        headline: theme.fontStyles.headline,
    },
    links: {
        base: theme.colors.primaryDark,
        hover: theme.colors.primaryDark,
        active: theme.colors.primaryDark,
        visited: theme.colors.primaryDark,
    },
};
var App = (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        renderRebootCss(renderer, baseCssProps);
    };
    App.prototype.render = function () {
        return (React.createElement(IndoqaFela, { renderer: renderer },
            React.createElement(Router, { history: history },
                React.createElement(ThemeProvider, { theme: theme },
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/", component: DemoStyleGuide }))))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map