import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <section>
      <Router>
        <header>
          <h1>Library Catalog</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/books" exact>
            Library
          </NavLink>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/books" component={BookList} />
            <Route exact path="/books/:id" component={BookDetail} />
          </Switch>
          {/* <Route exact path="/" component={Home} /> */}
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </Router>
    </section>
  )
}

export default App
