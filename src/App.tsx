import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { PartOne } from './components/PartOne/PartOne';
import { PartTwo } from './components/PartTwo/PartTwo';

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/part1"} component={PartOne} />
        <Route exact path={"/part2"} component={PartTwo} />
      </Switch>
    </div>
  );
}

export default App;
