import * as tslib_1 from "tslib";
export var renderRebootCss = function (renderer, props) {
    renderer.renderStatic({
        boxSizing: 'border-box',
    }, ':root');
    renderer.renderStatic({
        boxSizing: 'inherit',
    }, '*, :before, ::after');
    renderer.renderStatic({
        height: '100%',
        margin: 0,
        textAlign: 'left',
    }, 'html, body, #app');
    var rebootCss = "\n    hr {\n      box-sizing: content-box;\n      height: 0;\n      overflow: visible;\n    }\n    \n    h1, h2, h3, h4, h5, h6 {\n      margin-top: 0;\n      margin-bottom: 0;\n    }\n    \n    p {\n      margin-top: 0;\n      margin-bottom: " + props.spacing.space1 + ";\n    }\n    \n    abbr[title],\n    abbr[data-original-title] {\n      text-decoration: underline;\n      -webkit-text-decoration: underline dotted;\n      text-decoration: underline dotted;\n      cursor: help;\n      border-bottom: 0;\n    }\n    \n    address {\n      margin-bottom: " + props.spacing.space1 + ";\n      font-style: normal;\n      line-height: inherit;\n    }\n    \n    ol,\n    ul,\n    dl {\n      margin-top: 0;\n      margin-bottom: " + props.spacing.space1 + ";\n    }\n    \n    ol ol,\n    ul ul,\n    ol ul,\n    ul ol {\n      margin-bottom: 0;\n      padding-left: calc(" + props.spacing.space1 + " + " + props.spacing.space2 + ");\n    }\n    \n    dt {\n      font-weight: 700;\n    }\n    \n    dd {\n      margin-bottom: " + props.spacing.space1 + ";\n      margin-left: 0;\n    }\n    \n    blockquote {\n      margin: 0 0 " + props.spacing.space2 + ";\n    }\n    \n    dfn {\n      font-style: italic;\n    }\n    \n    b,\n    strong {\n      font-weight: bolder;\n    }\n    \n    small {\n      font-size: 80%;\n    }\n    \n    sub,\n    sup {\n      position: relative;\n      font-size: 75%;\n      line-height: 0;\n      vertical-align: baseline;\n    }\n    \n    sub {\n      bottom: -.25em;\n    }\n    \n    sup {\n      top: -.5em;\n    }\n    \n    a {\n      color: " + props.links.base + ";\n      text-decoration: underline;\n      background-color: transparent;\n      -webkit-text-decoration-skip: objects;\n    }\n    \n    a:hover {\n      color: " + props.links.hover + ";\n      text-decoration: underline;\n    }\n\n    a:active {\n      color: " + props.links.active + ";\n      text-decoration: underline;\n    }\n    \n    a:visited {\n      color: " + props.links.visited + ";\n      text-decoration: underline;\n    }\n    \n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n    }\n    \n    a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n      color: inherit;\n    }\n    \n    a:not([href]):not([tabindex]):focus {\n      outline: 0;\n    }\n    \n    pre,\n    code,\n    kbd,\n    samp {\n      font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n      font-size: 1em;\n    }\n    \n    pre {\n      margin-top: 0;\n      margin-bottom: " + props.spacing.space1 + ";\n      overflow: auto;\n      -ms-overflow-style: scrollbar;\n    }\n    \n    figure {\n      margin: 0 0 " + props.spacing.space2 + ";\n    }\n    \n    img {\n      vertical-align: middle;\n      border-style: none;\n    }\n    \n    svg {\n      overflow: hidden;\n      vertical-align: middle;\n    }\n    \n    table {\n      border-collapse: collapse;\n    }\n    \n    caption {\n      padding-top: " + props.spacing.space1 + ";\n      padding-bottom: " + props.spacing.space1 + ";\n      color: #6c757d;\n      text-align: left;\n      caption-side: bottom;\n    }\n    \n    th {\n      text-align: inherit;\n    }\n    \n    label {\n      display: inline-block;\n      margin-bottom: " + props.spacing.space1 + ";\n    }\n    \n    button {\n      border-radius: 0;\n    }\n    \n    button:focus {\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    input,\n    button,\n    select,\n    optgroup,\n    textarea {\n      margin: 0;\n      font-family: inherit;\n      font-size: inherit;\n      line-height: inherit;\n    }\n    \n    button,\n    input {\n      overflow: visible;\n    }\n    \n    button,\n    select {\n      text-transform: none;\n    }\n    \n    button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"] {\n      -webkit-appearance: button;\n    }\n    \n    button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n    \n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      box-sizing: border-box;\n      padding: 0;\n    }\n    \n    input[type=\"date\"],\n    input[type=\"time\"],\n    input[type=\"datetime-local\"],\n    input[type=\"month\"] {\n      -webkit-appearance: listbox;\n    }\n    \n    textarea {\n      overflow: auto;\n      resize: vertical;\n    }\n    \n    fieldset {\n      min-width: 0;\n      padding: 0;\n      margin: 0;\n      border: 0;\n    }\n    \n    legend {\n      display: block;\n      width: 100%;\n      max-width: 100%;\n      padding: 0;\n      margin-bottom: " + props.spacing.space1 + ";\n      font-size: " + props.fontSizes.text + ";\n      line-height: inherit;\n      color: inherit;\n      white-space: normal;\n    }\n    \n    progress {\n      vertical-align: baseline;\n    }\n    \n    [type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    [type=\"search\"] {\n      outline-offset: -2px;\n      -webkit-appearance: none;\n    }\n    \n    [type=\"search\"]::-webkit-search-cancel-button,\n    [type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    ::-webkit-file-upload-button {\n      font: inherit;\n      -webkit-appearance: button;\n    }\n    \n    output {\n      display: inline-block;\n    }\n    \n    summary {\n      display: list-item;\n      cursor: pointer;\n    }\n    \n    template {\n      display: none;\n    }\n    \n    [hidden] {\n      display: none !important;\n    }\n  ";
    renderer.renderStatic(rebootCss);
    renderer.renderStatic(tslib_1.__assign({}, props.fontStyles.text), 'body');
    renderer.renderStatic(tslib_1.__assign({}, props.fontStyles.headline), 'h1, h2, h3, h4, h5, h6');
    renderer.renderStatic({
        marginTop: props.spacing.space2,
    }, '* + h1, * + h2, * + h3, * + h4, * + h5, * + h6');
    renderer.renderStatic({
        fontSize: props.fontSizes.h1,
    }, 'h1');
    renderer.renderStatic({
        fontSize: props.fontSizes.h2,
    }, 'h2');
    renderer.renderStatic({
        fontSize: props.fontSizes.h3,
    }, 'h3');
    renderer.renderStatic({
        listStylePosition: 'outside',
    }, 'ul, ol');
    renderer.renderStatic({
        listStyleType: 'circle',
    }, 'ul ul, ol ul');
};
//# sourceMappingURL=renderRebootCss.js.map