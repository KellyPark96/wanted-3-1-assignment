### **사용 API**

[https://github.com/walking-sunset/assignment-api_7th)

```
npm install
npm start
localhost:4000 으로 api 연동
```

### **프로젝트 실행**
```
npm install
npm start
```

### **폴더구조**
```
src
 ┣ apis
 ┃ ┣ Api.ts
 ┃ ┗ httpError.ts
 ┃ ┗ SickService.ts
 ┣ cache
 ┃ ┗ Cache.ts
 ┣ components
 ┃ ┣ searchForm
 ┃ ┣ ┗ SearchForm.tsx
 ┃ ┣ ┗ styles.ts
 ┃ ┣ searchItem
 ┃ ┣ ┗ SearchItem.tsx
 ┃ ┣ ┗ styles.ts
 ┃ ┣ searchList
 ┃ ┣ ┗ SearchList.tsx
 ┃ ┣ ┗ styles.ts
 ┣ hooks
 ┃ ┣ useDebounce.tsx
 ┃ ┣ useHandleInput.tsx
 ┣ pages
 ┃ ┣ notfound
 ┃ ┣ ┗ Notfound.tsx
 ┃ ┣ search
 ┃ ┣ ┗ Search.tsx
 ┃ ┣ ┗ styles.ts
 ┣ styles
 ┃ ┣ theme.ts
 ┃ ┗ GlobalStyle.ts
 ┣ types
 ┃ ┗ Types.ts
 ┣ index.css
 ┣ index.tsx
 ┣ styled.d.ts
```

1. apis: api 관리
2. cache :  cache 데이터 관리
3. components : 컴포넌트 관리
4. hooks : 공통으로 사용되는 hooks 관리
5. pages : 페이지 관리
6. styles: 공통으로 스타일 관리
7. types : 프로젝트에서 사용되는 type 관리

### .env파일
```
REACT_APP_BASE_URL=http://localhost:4000/sick
```

### 텍스트 볼드처리
```tsx
const SearchItem = ({sickNm, target, isSelected, handleOnClick}: SearchItemProps) => {
    const firstIndex = sickNm.indexOf(target);
    const endIndex = firstIndex + target.length;
    const prevContent = sickNm.slice(0, firstIndex);
    const nextContent = sickNm.slice(endIndex);

    return (
        <S.Wrapper
            className={isSelected ? 'selected' : ''}
            onClick={handleOnClick}>
            {prevContent}
            <b>{target}</b>
            {nextContent}
        </S.Wrapper>
    );
};
```
- 검색어에서 검색한 target값과 일치하는 내역이 존재한다면 그 부분과 같은 target 값을 볼드처리하였습니다.

<img width="70%" src="https://user-images.githubusercontent.com/96809147/202954577-5906173c-c278-41fd-ac8f-b6ed83b7db83.mov" alt="textBoldVideo"/>
