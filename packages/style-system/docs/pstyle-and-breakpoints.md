# Breakpoints

Fela allows defining so called named keys. A named key is translated
by Fela into assigned value. This feature is used to define shorthand
notations for media queries.

The Indoqa Style-System relies on the availability of at least following named keys:
* `tablet` (screen min-width based media-query)
* `desktop` (screen min-width based media-query)
* `largeDesktop` (screen min-width based media-query)
* `print` (@media print)

These named keys are automatically set if you use [createFelaConfig](../src/main/fela/createFelaConfig.ts).
The screen width based keys are taken from the passed breakpoints which have to be available in the theme.

The list of available breakpoints can be extended in the theme.

# PStyle
`PStyle` is a typescript interface which extends Fela's `IStyle` and
adds the named keys (see above). See the [definition](../src/main/theming/PStyle.ts) for details.

If you have the need to support further named keys, extend the `PStyle`
type in your project. Don't forget to adapt the [Theme](./theming.md) accordingly.

