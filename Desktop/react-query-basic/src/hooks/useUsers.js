import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await response.json();
};

export const useUserQuery = () => {
	// refetchOnWindowFocus : 다른 브라우저 탭으로 이동했다가 다시 해당 탭으로 넘어왔을 때, 재패칭 안 되도록 false처리 (기본값 true)
	// refetchOnMount : 해당 컴포넌트 재 마운트 시 refetch 안 하도록 false 처리 (기본값 true)
	return useQuery({ queryKey: ['user'], queryFn: fetchUser, refetchOnWindowFocus: false, refetchOnMount: false, gcTime: 1000 * 5 });
};

/*
  fresh : 서버 데이터를 최신 상태로 인식하는 상태 
  stale : 서버 데이터를 오래된 데이터로 인식하는 상태 
  inactive : 서버 데이터가 더이상 해당 컴포넌트에서 활용되지 않는 상태 
  gcTime : inactive가 되자마자, gcTime에 등록한 시간 값이 소진되면서 해당 시간이 지나고나면 garbageCollector가 해당 메모리를 제거함. 
*/

/*
  react-query 개발자 툴에서 확인할 수 있는 상태값 5가지에 대한 개념 정리 

  1. fresh: 비동기 데이터가 현재 최신 상태이므로 re-fetching할 필요가 없는 신선한 상태.
  2. fetching: 비동기 데이터 요청 중인 상태 (pending)
  3. paused: 특정 사유로 비동기 데이터 요청이 보류 된 상태.
  4. stale: 현재 해당 컴포넌트에서 활용되고 있는 데이터가 최신 상태가 아닌 경우 (re-fetching이 필요한 상태)
  5. inactive: 최신 상태가 아닌 데이터를 해당 컴포넌트에서 현재 활용되고 있지 않은 상태 (일정 시간이 지나면 해당 데이터가 삭제됨. )
*/
