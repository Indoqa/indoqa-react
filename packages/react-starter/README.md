# Indoqa React/Redux Typescript

This project is a ready-to-use setup for Typescript based React/Redux web applications we use at [Indoqa](https://indoqa.com). It is based on the
Redux [todos example](https://github.com/reactjs/redux/tree/master/examples/todos) and inspired by a lot of good ideas from the [este](https://github.com/este/este) dev stack.
The main focus is to create a consistent environment for client side web applications that are consuming business logic using REST services over HTTP.

The codebase was initially developed with ES6/Flowtype and at the end of 2018 migrated to Typescript because of the more mature tooling support.

## Changelog
[Learn about the latest improvements](./CHANGELOG.md)

## Features

We invent nothing new, this archetype is just a composition of useful libraries, frameworks, tools and plugins. In addition to vanilla React and Redux, we set up the following:

  * [indoqa-react-app](https://github.com/Indoqa/indoqa-react-app) for a basic redux and router setup:
    * [redux-observable](https://github.com/redux-observable/redux-observable) for side-effects
    * [react-router](https://github.com/reactjs/react-router) to support multiple pages and history management
    * [Fela](http://fela.ts.org/docs/Introduction.html) as our css-in-js library and theming
    * dev tools for [logging](https://github.com/fcomb/redux-logger) and debugging
  * [Typescript](https://www.typescriptlang.org) for static typing
  * [Immer.js](https://github.com/mweststrate/immer) for immutable state transformation
  * [Reselect](https://github.com/reactjs/reselect) to access Redux state
  * [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) as test framework
  * [indoqa-webpack](https://github.com/Indoqa/indoqa-webpack) build system
    * [hot reloading](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) of React components, Fela themes, epics, actions and reducers
  * several demos, including [Formik](https://jaredpalmer.com/formik/) and [i18next](https://react.i18next.com/).
  * a simple and clean application layout separating application setup, features and common components and following the [atomic design](http://atomicdesign.bradfrost.com/) methodology by Brad Frost.
    ```
    src
    ├── main
    │   ├── index.ts                        // entry point to the Javascript application
    │   ├── app
    │   │   ├── App.tsx                     // Theming, HTML header
    │   │   ├── breakpoints.ts              // Defintions of breakpoints
    │   │   ├── createStore.tsx             // Redux store setup with hot reloading support
    │   │   ├── fela.ts                     // Fela renderer configuration
    │   │   ├── i18n.ts                     // Setup of i18next
    │   │   ├── rootEpic.ts                 // collect all epics and combine them into a root epic
    │   │   ├── rootReducer.ts              // collect all reducers and combine them into a root reducer
    │   │   ├── routes.tsx                  // link components to routes (URL paths)
    │   │   ├── selectors.ts                // collect all selectors
    │   │   ├── store.ts                    // Redux store setup with hot reloading support
    │   │   ├── theme.ts                    // application theme
    │   │   └── types.ts                    // root Typescript types
    │   ├── commons
    │   │   ├── components
    │   │   │   ├── atoms                   // basic building blocks (e.g. boxes, links, etc.)
    │   │   │   ├── molecules               // composition of atoms
    │   │   │   ├── organisms               // compositions of molecules and atoms
    │   │   │   └── templates               // compositions of organisms, molecules and atoms
    │   │   ├── store                       // reusable epics, reducers and actions
    │   │   └── types                       // Flow types available for all features
    │   ├── [feature1]
    │   │   ├── components
    │   │   │   ├── [Feature1]Page.tsx      // based on a template available via an URL
    │   │   │   └── SomeComponent.tsx       // feature-specific molecule or organism
    │   │   ├── store
    │   │   │   ├── [feature1].actions.ts   // actions and action types
    │   │   │   ├── [feature1].epics.ts     // side effects using rxjs observables
    │   │   │   ├── [feature1].reducer.ts   // Redux reducers
    │   │   │   ├── [feature1].selectors.ts // Reselect selectors to access state
    │   │   │   ├── [feature1].services.ts  // Services used in side-effects (epics)
    │   │   │   └── [feature1].types.ts     // Typescript types
    │   ├── [feature2]
    │   └── ...
    │── typings                             // Global type information for typescript
    └── test                                // Jest tests
        └── [feature1]
            ├── actions
            ├── components
            └── reducers
    ```

## Prerequisites

  * Watch the [video](https://facebook.github.io/flux/) about flux and react, then switch to the evolved [redux](http://redux.ts.org/index.html) and watch the [videos](https://egghead.io/series/getting-started-with-redux) as well.
  * Learn about the new [es6 features](https://github.com/lukehoban/es6features#readme) and take a deep look at [arrow functions](http://exploringjs.com/es6/ch_arrow-functions.html), [destructuring](https://gist.github.com/mikaelbr/9900818), [defaults/spread](https://medium.com/ecmascript-2015/default-rest-spread-f3ab0d2e0a5e#.xn5wo78hb) and [modules](http://exploringjs.com/es6/ch_modules.html).
  * The [Fela Workshop](https://github.com/tajo/fela-workshop) projects helps you to get familiar with Fela
  * Install [nodejs](https://nodejs.org/en/download/package-manager/) including [yarn](https://yarnpkg.com/lang/en/docs/install/).

## Usage

  * ```yarn start``` Run the app inside the dev node server including hot reloading
  * ```yarn test``` Run the tests
  * ```yarn package``` Create a minified distribution
