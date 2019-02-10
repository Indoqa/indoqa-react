import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
export var createIndoqaStore = function (_a) {
    var rootReducer = _a.rootReducer, rootEpic = _a.rootEpic, _b = _a.initialState, initialState = _b === void 0 ? {} : _b, enableLogging = _a.enableLogging;
    var epicMiddleware = createEpicMiddleware();
    var middleware = [epicMiddleware];
    if (enableLogging) {
        var logger = createLogger({
            collapsed: true,
        });
        middleware.push(logger);
    }
    var w = window;
    var devToolsExtension = typeof window !== 'undefined' && w.devToolsExtension ?
        w.devToolsExtension() :
        function (f) { return f; };
    var indoqaStore = {
        reduxStore: createStore(rootReducer, initialState, compose(applyMiddleware.apply(void 0, middleware), devToolsExtension)),
        epicMiddleware: epicMiddleware,
    };
    epicMiddleware.run(rootEpic);
    return indoqaStore;
};
//# sourceMappingURL=createIndoqaStore.js.map