import { LogInAndRegister  as LogIn} from './components/login/login.index';
import { LogInAndRegister as Register } from './components/login/login.index';

function App() {
  return (
    <div className="App">
    <Register heading="Register"/>
      <LogIn heading="LogIn"/>
    </div>
  );
}

export default App;
