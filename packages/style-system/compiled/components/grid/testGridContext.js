import * as React from 'react';
export var testGridContext = function (spacing, child) {
    if (spacing === null || spacing === undefined) {
        if (process.env.NODE_ENV !== 'production') {
            return (React.createElement("div", null,
                "Missing ",
                React.createElement("span", { style: { color: 'white', backgroundColor: 'red' } }, "GridContext"),
                "This component is rendered outside of Grid"));
        }
        return React.createElement("div", { className: "grid-context-missing" });
    }
    return child;
};
//# sourceMappingURL=testGridContext.js.map