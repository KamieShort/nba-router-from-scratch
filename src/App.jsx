import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharacterDetails from './views/Characters/CharacterDetails';
import CharacterList from './views/Characters/CharacterList';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>

        <Route exact path="/characters/:id">
          Details
          <CharacterDetails />
        </Route>
      </Switch>
    </div>
  );
}
