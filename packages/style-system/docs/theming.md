# Theme
The Indoqa Style-System provides a type-safe [base theme](../src/main/theming/baseTheme.ts) and
sets many useful default styles:

* font sizes
* font styles (base, alternative, mono - each using system fonts)
* colors
* spacing
* zIndexes
* breakpoints

This base theme has to be adapted to your needs. Note that the theme should be structured based on its usage. E.g. The colors
should be `primary`, `text`, etc. instead of `red1`, `red2` etc.

## Sample
The Indoqa React Starter module provides a [sample](../../../packages/react-starter/src/main/app/theme.ts) how this can be done in
a type-safe way.
