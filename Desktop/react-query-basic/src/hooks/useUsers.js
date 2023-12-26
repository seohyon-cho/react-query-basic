import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await response.json();
};

export const useUserQuery = () => {
	return useQuery({ queryKey: ['user'], queryFn: fetchUser });
};

/*
  react-query 개발자 툴에서 확인할 수 있는 상태값 5가지에 대한 개념 정리 

  1. fresh: 비동기 데이터가 현재 최신 상태이므로 re-fetching할 필요가 없는 신선한 상태.
  2. fetching: 비동기 데이터 요청 중인 상태 (pending)
  3. paused: 특정 사유로 비동기 데이터 요청이 보류 된 상태.
  4. stale: 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신 상태가 아닌 경우 (re-fetching이 필요한 상태)
  5. inactive: 최신 상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않은 상태 (일정 시간이 지나면 해당 데이터가 삭제됨. )
*/
