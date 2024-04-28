
import './App.css'
import { Route ,Routes , BrowserRouter as Router } from 'react-router-dom';
import UserForm from './pages/user-info.tsx';
import PaymentForm from './pages/payment.tsx/index.tsx';

const App: React.FC = () =>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/payment-info" element={<PaymentForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
