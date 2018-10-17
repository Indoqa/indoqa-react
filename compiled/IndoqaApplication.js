import * as tslib_1 from "tslib";
import { IndoqaFela } from 'indoqa-react-fela';
import * as React from 'react';
import { Provider as Redux } from 'react-redux';
var IndoqaApplication = (function (_super) {
    tslib_1.__extends(IndoqaApplication, _super);
    function IndoqaApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndoqaApplication.prototype.render = function () {
        return (React.createElement(Redux, { store: this.props.store },
            React.createElement(IndoqaFela, { renderer: this.props.renderer }, this.props.children)));
    };
    return IndoqaApplication;
}(React.Component));
export { IndoqaApplication };
//# sourceMappingURL=IndoqaApplication.js.map