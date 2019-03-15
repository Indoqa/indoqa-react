# Indoqa Webpack

## Motivation

[Webpack](https://webpack.github.io/) is a low-level build tool for Javascript web applications. In [our](https://indoqa.com) opinion too low-level to be maintained in each of our projects. Since we found out that our webpack configurations are in huge parts identical, we started indoqa-webpack which can be configured delcaratively.

## Goals

The goal of @indoqa/webpack-ts is supporting following use cases:

 * simple upgrade path to newer versions of indoqa-webpack
 * hide webpack configurations and provide a declarative configuration
 * support Typescript builds
 * support simple code-splitting
 * create production-ready release artifacts (Javascript, CSS)
 * provide a hot-reloadable development server using [express](http://expressjs.com)


## Changelog
[Learn about the lastest improvements](./CHANGELOG.md)

## Example

See [indoqa-react-redux-ts](https://github.com/Indoqa/indoqa-react-redux-ts)
for an example of how to setup the store, the history and the fela renderer with hot-reload enabled.

