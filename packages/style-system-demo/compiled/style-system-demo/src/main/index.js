import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
var rootEl = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), rootEl);
if (module.hot) {
    module.hot.accept('./app/App', function () {
        var NextApp = require('./app/App.tsx').default;
        ReactDOM.render(React.createElement(NextApp, null), rootEl);
    });
}
//# sourceMappingURL=index.js.map