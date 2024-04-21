<div align="center" >

# 🔗MSG(My Special Guide)
![image](https://github.com/1-MSG/admin_frontend/assets/87313979/0e1dcd95-4320-40c4-a2f7-360329015671)



</div>


<div align="center" >
</br>
MSG는 이커머스(쓱 닷컴 클론코딩)에 대한 어드민 페이지 입니다. 

</br>
</br>

`2024/02 ~ 2024/04`
</div>

</br>



## 🔗Service
<div align="center" >

| 사용자 수치 및 로딩 속도 측정 | 상품 총괄 관리 | 회원 관리 |
|:--------------:|:---------------:|:---------------:|
| ![스크린샷 2024-04-20 164022](https://github.com/1-MSG/admin_frontend/assets/87313979/b1f8cdb1-0a16-4786-a467-f4f3fa7cbaa1) | ![스크린샷 2024-04-20 164047](https://github.com/1-MSG/admin_frontend/assets/87313979/869cbc3c-f8b0-4827-aa1f-aad247cccf44) | ![스크린샷 2024-04-20 164107](https://github.com/1-MSG/admin_frontend/assets/87313979/6b0c113d-5d3f-4611-abac-01c04ee997ce) |



</div>

</br>


## 🔗Skills
### Frontend <br>
<div display = "flex">
<img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C1?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react query-ff4153?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/chartjs-ff6384?style=for-the-badge&logo=chart.js&logoColor=white">


</div>

</br>



## 🔗About
### 📌 Next.js를 사용한 이유 1 - 페러렐 라우트 <br>
<div display = "flex">


 
| 메인페이지 | 상품 페이지 |
|:--------------:|:---------------:|
| ![그림1](https://github.com/1-MSG/admin_frontend/assets/87313979/44bc145f-85b7-4b3e-b966-558ae29b4698) | ![스크린샷 2024-04-21 115259](https://github.com/1-MSG/admin_frontend/assets/87313979/6f82173a-9b00-411e-b541-c2b3b1bcda83) | 

- 하나의 페이지에 독립적인 여러개의 페이지를 배치하여, 각각의 데이터 패칭을 하기 위해 사용했습니다. 어드민 특성상 여러 페이지에 많은 데이터를 불러오기 때문에 초기 로딩속도를 향상시키기 위해, 병렬 라우팅 도입 

</br>
</br>

### 📌 Next.js를 사용한 이유 2 - 서버, 클라이언트 컴포넌트 분리 및 유연한 대처 <br>
- 데이터를 패칭하는 작업이 많았습니다. SSG렌더링을 디폴트로 지원해주는 nextjs의 서버컴포넌트를 활용해 필요한 캐시처리하고, 사용자 동적으로 발생하는 부분을 클라이언트 컴포넌트로 분리하여 프리렌더링의 이점을 가져갔습니다.
- 쇼핑몰과 어드민페이지를 동시에 만들어야 했기때문에, 시간상 여러 개발 도중 api가 구현되지 않았던 상황이 많았습니다. 직접 mock데이터를 만들어 next에서 미리 처리해서 테스트 하며, 이후 연결에 미리 유연하게 대처했습니다.
- 받아오는 데이터 특성상, 실시간과 유사하게 받아와야 했습니다. 하지만, deadline까지 얼마 남지 않은 상황에서, next의 isr렌더링을 통해 최대한 유사한 방식으로 주기적으로 새로운 데이터를 요청해오는 방식으로 대체했습니다.

</br>
</br>

### 📌 React-Query를 통한 무한 스크롤 <br>
- 상품을 검색하고, 그 결과를 캐싱하기 위해, react-query를 사용했습니다. 
- useInfiniteQuery, IntersectionObserver를 사용하여, 전자는 무한 스크롤 역할, 후자는 스크롤이 가장 아래에 도달했을 때 추가 데이터를 로드하여 상품 데이터를 API로부터 가져와서 렌더링하고, 스크롤을 통해 추가 데이터를 동적으로 로드하는데 사용
- ReactQueryDevtools를 사용하여, 개발모드에서 각각의 queryKey를 정보를 볼 수 있었고, 이를 통해 react-query의 디폴트가 캐시기간을 0으로 설정한다는 것을 확인했습니다. 따라서 데이터를 받아오고 stale로 보내는 기간을 설정해 캐싱을 처리했습니다.

</br>
</br>

### 📌 자체적 성능 측정 및 백엔드 api 오류 확인 <br>
<div align="center" >
 
![image](https://github.com/1-MSG/admin_frontend/assets/87313979/38721227-0c9c-4842-ac0f-f82f8a9fd776)


</div>

- 프로젝트에서 가장 중요했던 상품 데이터 검색하고 받아오는 api의 속도 측정이 필요했습니다. 백엔드로부터 데이터를 받아오는 시간과, 도착하는 시간을 ms로 표현하였고, 서버가 다운되거나, 기존보다 속도가 느릴 경우를 찾아 문제를 빠르게 해결하는데 도움이 되었습니다. 
- 명확한 기준이 없었기 때문에, 2G, 5G, IP우회 등의 여러 환경에서 2000개의 데이터의 평균 MS를 구해 100%로 기준을 설정했습니다. 

</div>

</br>




## 🔗개발 환경 세팅
### Frontend <br>
```bash
개발모드
npm i
npm run dev

빌드시
npm i
npm run build
npm run start
```

</br>



