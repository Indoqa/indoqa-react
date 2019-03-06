# Box
The `Box` is a base React component that exposes the most used CSS
properties for an HTML `div` element. It has access to the `Theme` and
uses its values for many properties. This allows a consistent style
across the application.

## Properties

### Margin
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `m`               | `number` \[0-4\]    | unset        | set the CSS properties `margin-top`, `margin-right`, `margin-bottom` and `margin-left` to  `theme.spacing.space[0-5]` |
| `mx`              | `number` \[0-4\]    | unset        | set the CSS properties `margin-right` and `margin-left` to  `theme.spacing.space[0-5]` |
| `my`              | `number` \[0-4\]    | unset        | set the CSS properties `margin-top` and `margin-bottom` to  `theme.spacing.space[0-5]` |
| `mt`              | `number` \[0-4\]    | unset        | set the CSS property `margin-top` to  `theme.spacing.space[0-5]` |
| `mr`              | `number` \[0-4\]    | unset        | set the CSS property `margin-right` to  `theme.spacing.space[0-5]` |
| `mb`              | `number` \[0-4\]    | unset        | set the CSS property `margin-bottom` to  `theme.spacing.space[0-5]` |
| `ml`              | `number` \[0-4\]    | unset        | set the CSS property `margin-right` to  `theme.spacing.space[0-5]` |


### Padding
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `p`               | `number` \[0-4\]    | unset        | set the CSS properties `padding-top`, `padding-right`, `padding-bottom` and `padding-left` to  `theme.spacing.space[0-5]` |
| `px`              | `number` \[0-4\]    | unset        | set the CSS properties `padding-right` and `padding-left` to  `theme.spacing.space[0-5]` |
| `py`              | `number` \[0-4\]    | unset        | set the CSS properties `padding-top` and `padding-bottom` to  `theme.spacing.space[0-5]` |
| `pt`              | `number` \[0-4\]    | unset        | set the CSS property `padding-top` to  `theme.spacing.space[0-5]` |
| `pr`              | `number` \[0-4\]    | unset        | set the CSS property `padding-right` to  `theme.spacing.space[0-5]` |
| `pb`              | `number` \[0-4\]    | unset        | set the CSS property `padding-bottom` to  `theme.spacing.space[0-5]` |
| `pl`              | `number` \[0-4\]    | unset        | set the CSS property `padding-right` to  `theme.spacing.space[0-5]` |

### Flex child
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `grow`            | `number`            | `0`          | set the CSS property `flex-grow` |
| `shrink`          | `number`            | `1`          | set the CSS property `flex-shrink` |
| `basis`           | `number` \| `string`| `auto`       | set the CSS property `flex-basis` |
| `order`           | `number`            | `0`          | set the CSS property `order` |
| `align`           | `AlignItems`        | `auto`       | set the CSS property `alignSelf`, allowed values: `auto\|stretch\|center\|flex-start\|flex-end\|baseline\|initial\|inherit` |

### Font
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `fontStyle`       | `string`            |              |             |
| `fontSize`        | `string`            |              |             |
| `color`           | `string`            |              |             |
| `bold`            | `boolean`           |              |             |
| `italic`          | `boolean`           |              |             |
| `ellipsis`        | `boolean`           |              |             |
| `textAlign`       | `string`            | unset (`left` if direction is ltr, and `right` if direction is rtl) | set the CSS property `text-align`|

### Styling
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `bg`              | `string`            | unset        | Set the CSS property `background-color`. If the value is a key of `theme.colors`, the respective value is taken from it. Otherwise the passed value is used. |

### Box model
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `inline`          | `boolean`           |              |             |
| `width`           | `number` \| `string`|              |             |
| `height`          | `number` \| `string`|              |             |
| `fullWidth`       | `boolean`           |              |             |
| `fullHeight`      | `boolean`           |              |             |

### Additional CSS styles
| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `style`           | `FelaStyle`         | -            | A style object of type `IStyle`, a `StyleFunction or an array of one of them or both. In the case of an array the elements are applied from left to right. |

This is an escape hatch in the case that the available properties do not support a particular CSS property.
Note that using `style` does not create inline styles but global CSS rules.

#### IStyle
The `IStyle` interface extends the React interface `CSS.Properties<...>`:

```typescript
interface CSS.Properties<T> {
  [all valid CSS identifiers]: T
}

interface IStyle extends CSS.Properties<number | string> {}
```

It is also possible to pass a style object of a type that extends the `IStyle` interface.
E.g. @indoqa/style-system provides the `PStyle` interface, see [PStyle and breakpoints](./pstyle-and-breakpoints.md)
for details.

#### StyleFunction
The StyleFunction gives access to the `theme`, e.g.

```typescript
const sidebarStyle: StyleFunction<Theme> = ({theme}): IStyle => ({
  width: theme.layout.sidebar.width,
})
```

This allows defining global style information in the application theme.

## Theme
The `Box` can be generified with the `Theme`, e.g.

```typescript
<Box<Theme> bg="primary" style={sidebarStyle}>
```

The theme generic enables a type-safe access of the theme in properties
like `bg` or `style`.

# Flex
`Flex` is a base React component that extends `Box`. Hence all the
box properties are available. Additionally it sets the CSS property
`display` to `flex` and exposes all available flex container properties.

## Properties

The following properties are the same as of `Box`:

* [Margin](#margin)
* [Padding](#Padding)
* [Flex child](#flex-child)
* [Font](#font)
* [Style](#style)
* [Box model](#box-model)
* [Additional CSS styles](#additional-css-styles)

### Flex container
| Property          | Type                | Default       | Description |
|:----------------- |:--------------------|:--------------|:------------|
| `inline`          | `boolean`           |               |             |
| `direction`       | `Direction`         | 'row' (unset) |             |
| `nowrap`          | `boolean`           |               |             |
| `center`          | `boolean`           |               |             |
| `justifyContent`  | `JustifyContent`    |               |             |
| `alignItems`      | `AlignItems`        |               | set the CSS property `alignItems`, allowed values: `auto\|stretch\|center\|flex-start\|flex-end\|baseline\|initial\|inherit` |
| `stretch`         | `boolean`           |               |             |

## Theme
see [Box](#theme)

# Text
`Text`is a base React component that works similar as `Box` but renders
a `span` HTML element.

## Properties
The following properties are the same as of `Box`:

* [Margin](#margin)
* [Padding](#Padding)
* [Flex child](#flex-child)
* [Font](#font)
* [Style](#style)
* [Additional CSS styles](#additional-css-styles)

## Theme
see [Box](#theme)
