import * as tslib_1 from "tslib";
import React from 'react';
import { RendererProvider } from 'react-fela';
var IndoqaFela = (function (_super) {
    tslib_1.__extends(IndoqaFela, _super);
    function IndoqaFela() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndoqaFela.prototype.render = function () {
        return (React.createElement(RendererProvider, { renderer: this.props.renderer }, this.props.children));
    };
    return IndoqaFela;
}(React.Component));
export { IndoqaFela };
//# sourceMappingURL=IndoqaFela.js.map