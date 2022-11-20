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

[//]: # (### 텍스트 볼드처리)

[//]: # ()
[//]: # (```tsx)

[//]: # ()
[//]: # (const SuggestionDropdown = &#40;{)

[//]: # ()
[//]: # (  sickNm,)

[//]: # ()
[//]: # (  target,)

[//]: # ()
[//]: # (  isSelected,)

[//]: # ()
[//]: # (  handleOnClick,)

[//]: # ()
[//]: # (}: Props&#41; => {)

[//]: # ()
[//]: # (  const index = sickNm.indexOf&#40;target&#41;;)

[//]: # ()
[//]: # (  const endIndex = index + target.length;)

[//]: # ()
[//]: # (  const prev = sickNm.slice&#40;0, index&#41;;)

[//]: # ()
[//]: # (  const next = sickNm.slice&#40;endIndex&#41;;)

[//]: # ()
[//]: # (  return &#40;)

[//]: # ()
[//]: # (    <li className={isSelected ? 'selected' : ''} onClick={handleOnClick}>)

[//]: # ()
[//]: # (      {prev})

[//]: # ()
[//]: # (      <BoldText>{target}</BoldText>)

[//]: # ()
[//]: # (      {next})

[//]: # ()
[//]: # (    </li>)

[//]: # ()
[//]: # (  &#41;;)

[//]: # ()
[//]: # (};)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (- 일치하는 타겟이 존재하면 그 부분을 볼드처리하는 방식으로 해결했습니다.)

[//]: # ()
[//]: # (    - 텍스트가 발견되었을때)

[//]: # ()
[//]: # (        - 발견된 텍스트를 볼드처리합니다.)

[//]: # ()
[//]: # (    - 텍스트가 발견되지 않았을대)

[//]: # ()
[//]: # (        - 원본 문자열을 그대로 반환합니다.)

[//]: # ()
[//]: # (### API 호출 최적화)

[//]: # ()
[//]: # (```tsx)

[//]: # (import { useState, useEffect } from 'react';)

[//]: # (export const useDebounce = <T>&#40;value: T, delay: number&#41; => {)

[//]: # (  const [debounceValue, setDebounceValue] = useState&#40;value&#41;;)

[//]: # (  useEffect&#40;&#40;&#41; => {)

[//]: # (    const handler = setTimeout&#40;&#40;&#41; => {)

[//]: # (      setDebounceValue&#40;value&#41;;)

[//]: # (    }, delay&#41;;)

[//]: # (    return &#40;&#41; => {)

[//]: # (      clearTimeout&#40;handler&#41;;)

[//]: # (    };)

[//]: # (  }, [value, delay]&#41;;)

[//]: # (  return debounceValue;)

[//]: # (};)

[//]: # (```)

[//]: # ()
[//]: # (- useDebounce Hook을 만들어 사용했습니다.)

[//]: # ()
[//]: # (value&#40;변화하는 input 값&#41;와 delay&#40;지연되는 ms&#41;를 받아 useEffect를 사용해 변화값이 delay 보다 작으면 timeout 초기화 후 다시 timeout을 실행했습니다.)

[//]: # ()
[//]: # (timeout이 끝나면 debounceValue가 바뀌게 됩니다.)

[//]: # ()
[//]: # (### 캐싱)

[//]: # ()
[//]: # (```tsx)

[//]: # (const myCache = new Map&#40;&#41;;)

[//]: # (export const setMyCacheData = <T>&#40;key: string, data: T&#41; => {)

[//]: # (  const value = { data, expired: new Date&#40;&#41;.getTime&#40;&#41; + 5000 };)

[//]: # (  myCache.set&#40;key, value&#41;;)

[//]: # (};)

[//]: # (export const getMyCacheData = &#40;key: string&#41; => {)

[//]: # (  if &#40;myCache.has&#40;key&#41;&#41; {)

[//]: # (    if &#40;myCache.get&#40;key&#41;.expired > new Date&#40;&#41;.getTime&#40;&#41;&#41; {)

[//]: # (      return myCache.get&#40;key&#41;.data;)

[//]: # (    } else {)

[//]: # (      myCache.delete&#40;key&#41;;)

[//]: # (    })

[//]: # (  })

[//]: # (  return null;)

[//]: # (};)

[//]: # (export const getSicks = async &#40;query: string&#41; => {)

[//]: # (  if &#40;getMyCacheData&#40;query&#41;&#41; {)

[//]: # (    console.info&#40;'use Cached Data'&#41;;)

[//]: # (    return getMyCacheData&#40;query&#41;;)

[//]: # (  })

[//]: # (  try {)

[//]: # (    console.info&#40;'api 호출'&#41;;)

[//]: # (    const res = await http.get<Sick[]>&#40;URLS.SICK, {)

[//]: # (      params: { sickNm_like: query },)

[//]: # (    }&#41;;)

[//]: # (    setMyCacheData&#40;query, res.data&#41;;)

[//]: # (    return res.data;)

[//]: # (  } catch &#40;e&#41; {)

[//]: # (    console.error&#40;e&#41;;)

[//]: # (    return [];)

[//]: # (  })

[//]: # (};)

[//]: # (```)

[//]: # ()
[//]: # (- cache를 Map의 key 타입으로 string, value 타입으로 {expired: number, data} 을 지정하여 값을 저장해놓습니다.)

[//]: # (    - 만약 키 값이 존재한다면)

[//]: # (        - 만료되지 않았다면 그대로 반환합니다.)

[//]: # (        - 만료되었다면 해당 값을 cache에서 삭제합니다.)

[//]: # (    - 만약 키 값이 존재하지 않는다면)

[//]: # (        - API를 호출하여 값을 요청합니다.)

[//]: # ()
[//]: # (### 키보드 이동)

[//]: # ()
[//]: # (```tsx)

[//]: # (import { KeyboardEvent, MouseEvent, RefObject, useRef, useState } from 'react';)

[//]: # (import { Sick } from '../types';)

[//]: # (function useHandleInputEvent&#40;suggestions: Sick[]&#41; {)

[//]: # (  const [selectedIndex, setSelectedIndex] = useState&#40;-2&#41;;)

[//]: # (  const [isOpenDropdown, setIsOpenDropdown] = useState&#40;false&#41;;)

[//]: # (  const keyEvent = useRef&#40;false&#41;;)

[//]: # (  const inputRef = useRef<HTMLInputElement>&#40;null&#41;;)

[//]: # (  const resetIndex = &#40;&#41; => setSelectedIndex&#40;-2&#41;;)

[//]: # (  const handleKeyDown = &#40;e: KeyboardEvent<HTMLInputElement>&#41; => {)

[//]: # (    if &#40;suggestions.length === 0&#41; return;)

[//]: # (    keyEvent.current = true;)

[//]: # (    if &#40;e.key === 'ArrowDown'&#41; {)

[//]: # (      setSelectedIndex&#40;prev => {)

[//]: # (        if &#40;prev === suggestions.length - 1&#41; return 0;)

[//]: # (        return prev + 1;)

[//]: # (      }&#41;;)

[//]: # (    } else if &#40;e.key === 'ArrowUp'&#41; {)

[//]: # (      setSelectedIndex&#40;prev => {)

[//]: # (        if &#40;prev <= 0&#41; return suggestions.length - 1;)

[//]: # (        return prev - 1;)

[//]: # (      }&#41;;)

[//]: # (    } else if &#40;e.key === 'Enter'&#41; {)

[//]: # (      alert&#40;'Go to Suggestion: ' + suggestions[selectedIndex].sickNm&#41;;)

[//]: # (    } else if &#40;e.key === 'Escape'&#41; {)

[//]: # (      if &#40;inputRef.current !== null&#41; {)

[//]: # (        inputRef.current.blur&#40;&#41;;)

[//]: # (      })

[//]: # (    })

[//]: # (    keyEvent.current = false;)

[//]: # (  };)

[//]: # ( //...)

[//]: # (})

[//]: # (export default useHandleInputEvent;)

[//]: # (```)

[//]: # ()
[//]: # (**가능한 입력**)

[//]: # ()
[//]: # (- 아래 위 방향)

[//]: # (    - `selectedIndex === index` 일 경우 배경색을 변경하여 사용자가 인지할 수 있음)

[//]: # (    - suggestions 배열의 첫번째, 마지막일 경우 되돌아 갈수 있도록 로직 구현)

[//]: # (- 엔터, 클릭)

[//]: # (    - 엔터, 클릭 시 `alert`)

[//]: # (- ESC)

[//]: # (    - ESC 할 경우 blur를 통해 dropdown false)