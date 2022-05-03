import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharacterDetails from './views/Characters/CharacterDetails';
import CharacterList from './views/Characters/CharacterList';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Check out these <Link to="/characters">Characters</Link>
        </Route>

        <Route exact path="/">
          <Link to="/">Back Home</Link>
          <CharacterList />
        </Route>

        <Route exact path="/character/:id">
          Details
          <CharacterDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
