# Box
The `Box` is a base React component that exposes the most used CSS
properties for an HTML `div` element. It has access to the `Theme` and
uses its values for many properties. This allows a consistent style
across the application.

## Properties

### Margin
| Property        | Type                | Default      | Description |
| --------------- |---------------------|--------------|-------------|
| m               | number \[0-4\]      | 0            | set the CSS properties `margin-top`, `margin-right`, `margin-bottom` and `margin-left` to `theme.spacing.space\[0-5\]` |
| mx              | number \[0-4\]      | 0            | set the CSS properties `margin-right` and `margin-left` to `theme.spacing.space\[0-5\]` |
| my              | number \[0-4\]      | 0            | set the CSS properties `margin-top` and `margin-bottom` to `theme.spacing.space\[0-5\]` |
| mt              | number \[0-4\]      | 0            | set the CSS property `margin-top` to `theme.spacing.space\[0-5\]` |
| mr              | number \[0-4\]      | 0            | set the CSS property `margin-right` to `theme.spacing.space\[0-5\]` |
| mb              | number \[0-4\]      | 0            | set the CSS property `margin-bottom` to `theme.spacing.space\[0-5\]` |
| ml              | number \[0-4\]      | 0            | set the CSS property `margin-right` to `theme.spacing.space\[0-5\]` |


### Padding
| Property        | Type                | Default      | Description |
| --------------- |---------------------|--------------|-------------|
| p               | number \[0-4\]      | 0            | set the CSS properties `padding-top`, `padding-right`, `padding-bottom` and `padding-left` to `theme.spacing.space\[0-5\]` |
| px              | number \[0-4\]      | 0            | set the CSS properties `padding-right` and `padding-left` to `theme.spacing.space\[0-5\]` |
| py              | number \[0-4\]      | 0            | set the CSS properties `padding-top` and `padding-bottom` to `theme.spacing.space\[0-5\]` |
| pt              | number \[0-4\]      | 0            | set the CSS property `padding-top` to `theme.spacing.space\[0-5\]` |
| pr              | number \[0-4\]      | 0            | set the CSS property `padding-right` to `theme.spacing.space\[0-5\]` |
| pb              | number \[0-4\]      | 0            | set the CSS property `padding-bottom` to `theme.spacing.space\[0-5\]` |
| pl              | number \[0-4\]      | 0            | set the CSS property `padding-right` to `theme.spacing.space\[0-5\]` |

### Flex-child

### Font

### Style

### Box model

## Theme
The `Box` can be generified with the `Theme`, e.g.

```typescript
<Box<Theme> bg={theme.colors.primary} style={...}>
```

The theme generic enables a type-safe access of the theme in properties
like `bg` or `style`.

# Flex
`Flex` is a base React component that extends `Box`. Hence all the
box properties are available. Additionally it sets the CSS property
`display` to `flex` and exposes all available flex container properties.

## Properties

### Flex container

## Theme
see `Box`

# Text
`Text`is a base React component that works similar to `Box` but renders
a `span` HTML element.

## Properties
The following properties are the same as of `Box`:

* [Margin](#margin)
* [Padding](#Padding)
* [Flex child](#flex-child)
* [Font](#font)

## Theme
see `Box`
