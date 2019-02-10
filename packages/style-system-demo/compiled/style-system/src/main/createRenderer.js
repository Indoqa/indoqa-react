import { createRenderer as createFelaRenderer } from 'fela';
import resetCssStyles from './reset.css';
var DEFAULT_CONFIG = {
    plugins: [],
};
export var createRenderer = function (_a) {
    var _b = _a.init, init = _b === void 0 ? function () { return ({}); } : _b, _c = _a.config, config = _c === void 0 ? DEFAULT_CONFIG : _c, _d = _a.resetCss, resetCss = _d === void 0 ? true : _d;
    var felaRenderer = createFelaRenderer(config);
    if (resetCss) {
        felaRenderer.renderStatic(resetCssStyles);
    }
    init(felaRenderer);
    return felaRenderer;
};
//# sourceMappingURL=createRenderer.js.map