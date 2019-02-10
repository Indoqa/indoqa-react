export var addUnitIfNeeded = function (value, propertyUnit) {
    var valueType = typeof value;
    if ((valueType === 'number' || (valueType === 'string' && !isNaN(value)))) {
        return "" + value + (propertyUnit || 'px');
    }
    return "" + value;
};
//# sourceMappingURL=utils.js.map