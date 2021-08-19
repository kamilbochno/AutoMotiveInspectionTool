
import Routes from './app/Routes';
import Layout from './app/Layout';
import { AuthProvider } from './app/context/AuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>

          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
