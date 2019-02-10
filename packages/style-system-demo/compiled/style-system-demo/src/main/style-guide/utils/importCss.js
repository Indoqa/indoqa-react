var importCss = function (id, url) {
    var mountNode = document.getElementById(id);
    if (mountNode) {
        return;
    }
    var styleNode = document.createElement('style');
    styleNode.id = id;
    var head = (document.head) ? document.head : document.createElement('head');
    head.appendChild(styleNode);
    styleNode.append("@import url('" + url + "');");
};
export default importCss;
//# sourceMappingURL=importCss.js.map