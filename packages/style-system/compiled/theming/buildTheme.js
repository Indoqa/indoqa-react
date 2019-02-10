import merge from 'deepmerge';
import { baseTheme } from './baseTheme';
export function buildTheme(customTheme) {
    return merge(baseTheme, customTheme);
}
//# sourceMappingURL=buildTheme.js.map