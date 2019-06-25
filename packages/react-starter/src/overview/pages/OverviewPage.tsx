import * as React from 'react'
import {Link} from 'react-router-dom'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'

import './OverviewPage.css'

const OverviewPage: React.FC = () => (
  <MainMenuTemplate title="Overview">
    <h1>Indoqa React Starter</h1>
    <p>
      Welcome to the <span className="indoqa">Indoqa React Starter</span>. This project demonstrates how
      we at <a href="https://www.indoqa.com" target="new">Indoqa</a> setup a Typescript-based React-Redux. After
      removing the the samples it can also serve as a starter for new projects.
    </p>
    <ul>
      <li>
        Use of <a href="https://github.com/Indoqa/indoqa-react/tree/master/packages/react-app" target="new">
        @indoqa/react-app</a> to create the React root component.
      </li>
      <li>
        Creation of the typed root reducer and the root epic with injected external services for testability.
      </li>
      <li>
        Types for actions, reducers, epics and react components. See also the global action and
        state types.
      </li>
      <li>
        Typed <a href="http://fela.js.org/" target="new">Fela</a> application theme,
        which is based on a base theme provided
        by <a href="https://github.com/Indoqa/indoqa-react-fela" target="new">indoqa-react-fela</a>.
      </li>
      <li>
        Using themed base components Box, Text and Flex provided
        by <a href="https://github.com/Indoqa/indoqa-react-fela" target="new">indoqa-react-fela</a>.
      </li>
      <li>
        Use of <a href="http://fela.js.org/" target="new">Fela</a> to provide typed styles
        accessing the application theme.
      </li>
      <li>
        Usage of <a href="https://github.com/reduxjs/reselect" target="new">Reselect</a> to access the global state.
      </li>
      <li>
        Providing common React components based on the atomic design methodology (atoms,
        molecules, organisms and templates) by Brad Frost.
      </li>
      <li>
        Setup of <a href="https://github.com/i18next/react-i18next" target="new">i18next</a> to
        make the i18n translation catalogues (namespaces) available to all React components.
      </li>
      <li>
        Configuration of <a href="https://github.com/Indoqa/indoqa-webpack" target="new">indoqa-webpack</a>
      </li>
      <li>
        Setup of&nbsp;
        <a href="https://reacttraining.com/react-router/web/guides/philosophy" target="new">
          React-Router
        </a>
        &nbsp;with&nbsp;
        <a href="https://github.com/jamiebuilds/react-loadable" target="new">react-loadable</a>
        &nbsp; demonstrating route-based code splitting.
      </li>
      <li>
        Hot-reload of React components, epics, actions and reducers.
      </li>
    </ul>

    <h2>Samples</h2>
    <p>
      Each of the following samples focuses on particular technologies:
    </p>
    <h3>
      <Link to="/">Overview</Link>
    </h3>
    <ul>
      <li>
        Import of a CSS resource
      </li>
    </ul>
    <h3>
      <Link to="/forms">Forms</Link>
    </h3>
    <ul>
      <li>
        Create forms with Formik
      </li>
      <li>
        Usage with Redux
      </li>
      <li>
        Validation with yup
      </li>
      <li>
        Subforms
      </li>
      <li>
        Server-side validation - propagating errors to the form
      </li>
      <li>
        Changing the history (URL path) as a side-effect (redux-observable)
      </li>
    </ul>
    <h3>
      <Link to="/time">Time</Link>
    </h3>
    <ul>
      <li>
        Use of <a href="https://github.com/mweststrate/immer" target="new">Immer.js</a> for immutable state
        updates in reducers
      </li>
      <li>
        Typing of actions using the Redux action type and constants
      </li>
      <li>
        i18n using <a href="https://github.com/i18next/react-i18next" target="new">i18next</a> by
        passing the withNamespace function to a react component for translations.
      </li>
      <li>
        Producing side effects with redux-observable which call an RESTful webservice,
        covering the success and the error case and retry three times if the initial
        call was not successful.
      </li>
    </ul>
    <h3>
      <Link to="/">Upload</Link>
    </h3>
    <ul>
      <li>
        Upload a file with typed events
      </li>
      <li>
        React component state
      </li>
    </ul>
    <h3>
      <Link to="/">Words</Link>
    </h3>
    <ul>
      <li>
        Cancelling, delaying and debouncing of side-effects (redux-observables)
      </li>
    </ul>

    <h2>Further readings</h2>
    <h3>Typescript</h3>
    <ul>
      <li>
        <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="new>">
          Typescript handbook
        </a>
        &nbsp;by Microsoft
      </li>
    </ul>
    <h3>Typescript with React, Redux and redux-observables</h3>
    <ul>
      <li>
        <a href="https://github.com/sw-yx/react-typescript-cheatsheet" target="new>">
          React-Typescript Cheatsheet
        </a>
        &nbsp;by Shawn Wang
      </li>
      <li>
        <a href="https://github.com/piotrwitek/react-redux-typescript-guide" target="new>">
          React-Redux Typescript guide by
        </a>
        &nbsp;Piotrek Witek
      </li>
      <li>
        <a href="https://github.com/piotrwitek/typesafe-actions" target="new>">
          Typesafe actions and the "Mighty tutorial"
        </a>
        &nbsp;by Piotrek Witek
      </li>
    </ul>
  </MainMenuTemplate>
)

export default OverviewPage
