### react-layout-component

### 실행방법
```
npm install
npm start
```

### 디렉토리 구조
react-layout-component
├── node_modules
├── src
│   ├── components
│   │   └── Header /* header 영역 */
│   │       └── index.js
│   │       └── MobileNavigation.js  /* 모바일모드시 네비게이션 */
│   │       └── SubHeader.js /* SubHeader */
│   │       └── Title.js /* Title */
│   └── hooks
│   │    └── useLocation.js
|   |    └── useResize.js
│   └── pages
|   |     └── ...  /* 각 페이지 */
|   └── store
|   │     └── ...  /* 상태관리 */
|   └── util
|        └── ...  /* util */
├── styles
│   └── style.css
├── .babelrc
├── .gitignore
├── package.json
└── README.md


### 구현요소
[x] Title, SubHeader, Navigation 영역 컴포넌트로 분리
[x] 선택된 메뉴에 따라 보여지는 page가 달라지도록 구현
[x] 브라우저 넓이(width)가 768px 이하로 축소되는 경우 모바일 모드로 UI 수정
