export default function Main() {
	return (
		<div className='Main'>
			<h1>Main</h1>
			{/* 
      react-query로 관리되는 서버데이터가 활용되지 않고 있는 메인 컴포넌트로 이동하게 될 시, 자동으로 해당 데이터는 inactive 상태로 변환됨.
      이때부터 기본 값으로 설정된 캐시 타임이 카운팅되고, 캐시타임이 끝나면 해당 데이터를 아예 제거함.
       */}
		</div>
	);
}
