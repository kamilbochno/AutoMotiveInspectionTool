
import Routes from './app/Routes';
import Layout from './app/Layout';
import DashboardRoutes from 'app/DashboardRoutes';
import { AuthProvider } from './app/context/AuthContext';
import { useAuthContext } from './app/context/AuthContext';
import IdleTimerContainer from 'pages/LoggedIn/components/IdleTimerContainer';
import './App.css';

function App() {
  const { isLoggedIn } = useAuthContext();
  return (
    <div className="App">
      <AuthProvider>
      {isLoggedIn ? null : <DashboardRoutes/>}
        <Layout>
        
          <Routes>
          
          </Routes>
          
        </Layout>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
