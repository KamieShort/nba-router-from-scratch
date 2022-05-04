import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharacterDetails from './views/Characters/CharacterDetails';
import CharacterList from './views/Characters/CharacterList';
// import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>

        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </div>
  );
}
