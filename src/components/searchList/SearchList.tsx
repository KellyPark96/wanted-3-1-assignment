import React from 'react';
import S from "./styles";
import SearchItem from "../searchItem/SearchItem";

interface SearchListProps {
    title: string,
    hasNoSuggestions: boolean,
    searchResult: Array<any>,
    debouncedQuery: string,
}

const SearchList = ({title, hasNoSuggestions, searchResult, debouncedQuery}: SearchListProps) => {
    console.log(title, hasNoSuggestions, searchResult, debouncedQuery);
    return (
        <S.List>
            {hasNoSuggestions ? (
                <h3>검색어 없음</h3>
            ) : (
                searchResult.map((item, index) => (
                    <SearchItem
                        key={item.sickCd}
                        sickNm={item.sickNm}
                        target={item.debouncedQuery}/>
                ))
            )}
        </S.List>
    );
};

export default SearchList;

// {list.map((item, idx) => (
//     <SearchItem
//         key={item.sickCd}
//         text={item.sickNm}
//         active={cursor === idx}
//         isMovingMouse={isMovingMouse}
//         setIsMovingMouse={setIsMovingMouse}
//         setCursor={setCursor}
//         index={idx}
//     />
// ))}
