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

# Responsive styling
If an Indoqa Style-System component (`Box`, `Flex`, `Grid`, etc.) accepts an array as property, these
values are interpreted as values for different breakpoints as being defined in the theme. The first value
will create CSS without a media query. Starting with the second value, a media query is created following
the defined order of breakpoints in the theme.
It is valid to define fewer values than breakpoints because the media queries use min-width conditions.
If there are more values than breakpoints (plus one for the value that does not produce a media query)
, a warning is printed to the Javascript console (only in development though).

## Example
```typescript
<Box pt={[0, 1, 2]}>
```

This `Box` component yields following PStyle object:

```
{
  paddingTop: 0,
  ...
  tablet: {
    paddingTop: 1,
    ...
  },
  desktop: {
    paddingTop: 2
    ...
  }
}
```

# PStyle
`PStyle` is a typescript interface which extends Fela's `IStyle` and
adds the named keys (see above). See the [definition](../src/main/theming/PStyle.ts) for details.

If you have the need to support further named keys, extend the `PStyle`
type in your project. Don't forget to adapt the [Theme](./theming.md) accordingly.

