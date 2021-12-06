import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <header>
        <h1>Library Catalog</h1>
        <Router>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/books">BookList</NavLink>
        </Router>
      </header>
      <main className="container">
        <Router>
          <Switch>
            <Route exact path="/books" component={BookList} />
            <Route exact path="/books/:id" component={BookDetail} />
          </Switch>
        </Router>
        {/* <Route exact path="/" component={Home} /> */}
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
