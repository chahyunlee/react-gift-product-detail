# react-gift-product-list 프로젝트

카카오 선물하기 React-Query 리팩토링 및 테스트 코드 작성

## 기능 목록

### 리팩토링

- React-Query 사용해서 API 연결 코드 리팩토링
- 상품 관심 등록 버튼 클릭 시 낙관적 업데이트를 통한 상품 관심 등록 수 변경
- ErrorBoundary와 Suspense 사용

### 테스트 코드

- Form Field와 Typography에 대한 테스트 코드를 작성
- 로그인 페이지의 테스트 시나리오 작성 및 테스트 코드 작성
- MSW를 사용하여 선물하기 홈의 실시간 급상승 선물랭킹 섹션 테스트 코드 작성
- github action을 사용하여 PR 요청 및 Main 브렌치 머지 시 테스트 코드가 실행되도록 구현
