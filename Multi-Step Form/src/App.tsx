import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import './App.css'
import { Route ,Routes , BrowserRouter as Router } from 'react-router-dom';
import UserForm from './pages/user-info/index.tsx';
import PaymentForm from './pages/payment/index.tsx';
import Thanks from "./pages/thanks/index.tsx";

const engine = new Styletron();

const App: React.FC = () =>{
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/payment-info" element={<PaymentForm />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
