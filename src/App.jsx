import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home'
import './App.css'
import BluePill from './views/BluePill'

function App() {
  // TODO: Add routes to books & views
  return (
    <section>
      <Router>
        <header>
          <h1>Library Catalog</h1>
          <nav>
            <NavLink className="homeNav" to="/" exact>
              Home
            </NavLink>
            <NavLink className="catalogNav" to="/books" exact>
              Library
            </NavLink>
          </nav>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/books/:id" component={BookDetail} />
            <Route exact path="/blue" component={BluePill} />
          </Switch>
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </Router>
    </section>
  )
}

export default App
