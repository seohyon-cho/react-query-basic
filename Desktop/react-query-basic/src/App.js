import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserInfo from './UserInfo';
import UserAddress from './UserAddress';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Menu from './Menu';

function App() {
	// 전역 데이터 관리가 아니라, 비동기 데이터의 query key를 관리해주는 용도?..
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Menu />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/info' element={<UserInfo />} />
					<Route path='/address' element={<UserAddress />} />
				</Routes>
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
