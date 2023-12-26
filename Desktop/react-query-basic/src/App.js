import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserInfo from './UserInfo';

function App() {
	// 전역 데이터 관리가 아니라, 비동기 데이터의 query key를 관리해주는 용도?..
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<h1>Hello</h1>
				<UserInfo />
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
