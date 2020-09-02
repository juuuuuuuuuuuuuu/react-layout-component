## react-layout-component

### 프로젝트 설명
react를 사용하여 화면 layout을 작업한 프로젝트입니다.

### 실행방법
```
npm install
npm start
```

### 디렉토리 구조
```
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
```

### 구현요소
- [x] Title, SubHeader, Navigation 컴포넌트 분리
- [x] Navigation에 있는 메뉴에 따라 각 페이지 분리
- [x] 브라우저 넓이(width)가 768px 이하로 축소되는 경우 UI 수정
