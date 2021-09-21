
import Routes from './app/Routes';
import Layout from './app/Layout';
import DashboardRoutes from 'app/DashboardRoutes';
import { AuthProvider } from './app/context/AuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <DashboardRoutes/>
        <Layout>
        
          <Routes>
          
          </Routes>
          
        </Layout>
        
      </AuthProvider>
    </div>
  );
}

export default App;
