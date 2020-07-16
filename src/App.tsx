import { ReactComponent as BookIcon } from 'feather-icons/dist/icons/help-circle.svg'
import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Chart } from './Chart'
import { siteName } from './config'
import { Home } from './Home'
import { Practice } from './Practice'

export const App: React.FunctionComponent = () => (
  <Router>
    <div
      className="relative flex flex-col min-h-screen text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <header className="px-2 py-3 text-xl text-purple-300 bg-purple-900">
        <nav className="container flex justify-between mx-auto">
          <Link to="/">{siteName}</Link>
          <div>
            <Link to="/chart">
              <BookIcon className="inline-block mr-2" />
              Kana List
            </Link>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/hiragana">
          <Practice field="hiragana" />
        </Route>
        <Route path="/katakana">
          <Practice field="katakana" />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)
