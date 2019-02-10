import * as tslib_1 from "tslib";
import { Box, Col, ColRow, Grid, Panel, Row } from '@indoqa/style-system';
import * as React from 'react';
var GridSamples = (function (_super) {
    tslib_1.__extends(GridSamples, _super);
    function GridSamples() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridSamples.prototype.render = function () {
        var innerBox = (React.createElement(Box, { bg: "primary", fullWidth: true, fullHeight: true, style: { height: '35px' } }, "foo"));
        var innerBox2 = (React.createElement(Box, { bg: "primary", fullWidth: true, fullHeight: true, style: { height: '29px', backgroundColor: 'red' } }, "foo"));
        return (React.createElement(Box, null,
            React.createElement("h1", null, "Grid page"),
            React.createElement(Grid, { spacing: "0.5rem" },
                React.createElement(Row, null,
                    React.createElement(Panel, null, innerBox2),
                    React.createElement(Panel, null, innerBox2),
                    React.createElement(Panel, null, innerBox2)),
                React.createElement(ColRow, null,
                    React.createElement(Col, { size: 4 }, innerBox),
                    React.createElement(Col, { size: 4 }, innerBox),
                    React.createElement(Col, { size: 4 }, innerBox),
                    React.createElement(Col, { size: 6 },
                        React.createElement(Grid, { spacing: 2 },
                            React.createElement(ColRow, null,
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox),
                                React.createElement(Col, { size: 3 }, innerBox)))),
                    React.createElement(Col, { size: 2 }, innerBox),
                    React.createElement(Col, { size: 2 }, innerBox),
                    React.createElement(Col, { size: 2 }, innerBox),
                    React.createElement(Col, { size: 6 }, innerBox),
                    React.createElement(Col, { size: 6 },
                        React.createElement(Grid, { spacing: 1 },
                            React.createElement(Row, null,
                                React.createElement(Panel, null, innerBox2),
                                React.createElement(Panel, null, innerBox2),
                                React.createElement(Panel, null, innerBox2)),
                            React.createElement(Row, null,
                                React.createElement(Panel, null, innerBox2)))),
                    React.createElement(Col, { size: 5 }, innerBox),
                    React.createElement(Col, { size: 7 }, innerBox),
                    React.createElement(Col, { size: 12 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 1 }, innerBox),
                    React.createElement(Col, { size: 11 }, innerBox)),
                React.createElement(Row, null,
                    React.createElement(Panel, null, innerBox2),
                    React.createElement(Panel, null, innerBox2),
                    React.createElement(Panel, null, innerBox2))),
            React.createElement("h2", null, "col-row"),
            React.createElement(Grid, { spacing: 10 },
                React.createElement(ColRow, null,
                    React.createElement(Col, { size: 12 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox),
                    React.createElement(Col, { size: 3 }, innerBox)))));
    };
    return GridSamples;
}(React.Component));
export default GridSamples;
//# sourceMappingURL=GridSamples.js.map