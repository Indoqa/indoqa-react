# 2.0.0 | TBD

- feat(box): add lineClamp property
- feat!: remove extendBox
- feat!: remove withRenderer
- feat!: remove layout from base theme
- feat: Add Spacing enum values for 5, 6, 7, 8 and 9
- feat: Export Typescript types
- feat: add validator to Fela dev setup

# v1.4.0 | 2020-01-26

- Add properties `display`, `maxWidth`, `minWidth`, `maxHeight`, `minHeight` to `Flex`and `Box`.
- Add properties properties `uppercase`, `wordBreakAll`, `wordWrapAll` to `Flex`, `Box' and `Text`.
- Add properties for shadows (`shadow`) and radius (`r`, `rt`, `rb`, `rl`, `rr`, `rtl`, `rtr`, `rbl`, `rbr`) to `Flex` and `Box`.
- Add often used event props onClick, onMouseDown, onMouseOut, onMouseOver, onScroll to Flex, Box and Text.
- Add often used CSS style properties: cursor => pointer, overflow => hidden, text-decoration => underline
- Fix a bug if the style system provides default values for a particular property (e.g. height) and these default values
  are not set for styles put into media queries.
- Fix a bug with the flex-shrink property of Flex, Box and Text. The bug made it impossible to set the value to 0.
- Fix a bug with the flex-basis property of Flex, Box and Text. The bug made it impossible to set the value to 0.
- Fix bug in ColRow: if a size array was provided, the last size was not calculated correctly
- createFelaConfig: add properties `selectorPrefix`, `filterClassName` and `disableDevMode`
- minor library upgrades

# v1.3.1 | 2019-06-23

- fix bug in createFelaConfig

# v1.3.0 | 2019-06-23

- support passing a React.RefObject to Text, Box, Flex, Grid, Row, Panel, ColRow, Col
- passing a testId creates an HTML attribute `data-testid` (previously `data-test`)
- `createFelaConfig` adds the monolithic enhancer only in development mode
  (previously in all modes except production which does not allow writing tests for production code)
- upgrade to fela@10.5.0
- minor library upgrades

# v1.2.1 | 2019-04-26

- no changes

# v1.2.0 | 2019-04-23

- Responsive props by supporting array values for Box, Flex and Text
- Semantic HTML alternatives for Box (AsideBox, MainBox, etc.)
- Semantic HTML alternatives for Flex (AsideFlex, MainFlex, etc.)
- Remove unnecessary exports from module exports
- Support a property `testId` in Box, Flex, Text, Grid, Row, Panel, ColRow, Col.
  This prop creates a `data-test` attribute which is useful in e2e testing.
- Upgrade to Fela 10.2.4
- Set base font size in renderRebootCSS to theme.fontSizes.text
- Fix width calculation of Panel

# v1.1.1 | 2019-04-02

- no changes

# v1.1.0 | 2019-03-27

- upgrade react-router@5.0.0
- minor library upgrades

# v1.0.0 | 2019-03-15

- move from indoqa-react-fela into the indoqa-react multi-module repository
