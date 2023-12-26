import { useQuery } from '@tanstack/react-query';

export default function UserInfo() {
	const fetchUser = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		return await response.json();
	};

	// useQuery({ queryKey: [쿼리 키 값], queryFn: 패칭함수});
	// queryKey란 ? react-query로 관리할 각 비동기 데이터를 구분할 용도로 쓰이는 키 값
	// fetch Function 란 ? 비동기 데이터를 불러오는 함수
	// 배열로 넣는 이유? 후에 비교하려는 데이터가 기존에 존재하던 똑같은 데이터인지 아니면 새로운 데이터인지 구분할 때 용이함.

	/*
    [[ 많이 활용하는 데이터 값 (콘솔로 찍어서 확인 가능)]]
    data: 실제 반환 데이터 
    isError, isSuccess: 데이터 반환 성공 실패 여부
    isLoading: pending 유무 여부
    isStale: 최신 데이터 유무 여부 (stale: falsed(최신 데이터), true (옛날 데이터))
    refetch: 비동기 데이터 강제 재요청(패칭) 함수
  */

	const { data, isLoading, isSuccess } = useQuery({ queryKey: ['users'], queryFn: fetchUser });

	// useQuery 이용 시 useState를 통한 지역 state 생성, useEffect를 통한 fetching함수 호출, useCallback를 통한 메모이제이션 처리를 별도로 하지 않아도, 모두 useQuery가 이 작업들을 한 번에 대신 작업해줌.

	return (
		<div className='UserInfo'>
			<h1>User Information</h1>
			{isLoading && <p>isLoading</p>}
			{isSuccess && data.map((user, idx) => <h2 key={idx}>{user.name}</h2>)}
		</div>
	);
}
