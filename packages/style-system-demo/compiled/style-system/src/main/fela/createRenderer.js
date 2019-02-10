import { createRenderer as createFelaRenderer } from 'fela';
import { renderResetCss } from '..';
var DEFAULT_CONFIG = {
    plugins: [],
};
export var createRenderer = function (_a) {
    var _b = _a.init, init = _b === void 0 ? function () { return ({}); } : _b, _c = _a.config, config = _c === void 0 ? DEFAULT_CONFIG : _c, _d = _a.resetCss, resetCss = _d === void 0 ? true : _d;
    var renderer = createFelaRenderer(config);
    if (resetCss) {
        renderResetCss(renderer);
    }
    init(renderer);
    return renderer;
};
//# sourceMappingURL=createRenderer.js.map