import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './pages/error/Error';
import TrustCenter from './pages/trustcenter/TrustCenter';
import { QueryClient, QueryClientProvider } from 'react-query';
//import PrivateRoute from './components/privateroute/Privateroute';

const queryClient = new QueryClient();

function App() {
	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<Route exact path='/:centerId' component={TrustCenter} />
			</QueryClientProvider>
			<Route path='/error' component={Error} />
		</Router>
	);
}

export default App;
