# Indoqa React Application
A component that provides a ready-to-use setup of [Redux](http://redux.js.org/), react-router, [redux-observable](https://github.com/redux-observable/redux-observable) and [Fela](http://fela.js.org/docs/Introduction.html).

## Motivation
Working on different react applications, we ended up writing the same initialization code again and again. To avoid this duplicity, we extracted this component that covers middleware configuration, routing, Fela and dev tool setup. Only app specific routes, reducers, epics and a Fela configuration need to be passed as props.

## Changelog
[Learn about the lastest improvements](./CHANGELOG.md)

## Features

  * Redux Middleware
    * [react-observable](https://github.com/redux-observable/redux-observable)
  * Redux Dev Tools
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
    * Hot Reloading
  * React Router
  * [Fela](http://fela.js.org/docs/Introduction.html) setup

## Usage
```javascript
ReactDOM.render(
  <IndoqaApplication history={history} store={store} renderer={renderer}>
    <App />
  </IndoqaApplication>,
  rootEl,
)
```

## Example

See [indoqa-react-redux-ts](https://github.com/Indoqa/indoqa-react-redux-ts)
for an example of how to setup the store, the history and the fela renderer with hot-reload enabled.
