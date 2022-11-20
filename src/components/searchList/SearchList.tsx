import {MouseEvent} from "react";
import SearchItem from "../searchItem/SearchItem";
import useHandleInput from '../../hooks/useHandleInput';
import S from "./styles";

interface SearchListProps {
    hasNoSuggestions: boolean,
    searchResult: Array<any>,
    debouncedQuery: string,
    selectedIndex: number,
}

const SearchList = ({hasNoSuggestions, searchResult, debouncedQuery, selectedIndex}: SearchListProps) => {
    const {goToSuggestion} = useHandleInput(searchResult);

    return (
        <S.List>
            {hasNoSuggestions ? (
                <h3>검색어 없음</h3>
            ) : (
                searchResult.map((item, index) => (
                    <SearchItem
                        key={item.sickCd}
                        sickNm={item.sickNm}
                        target={debouncedQuery}
                        isSelected={index === selectedIndex}
                        handleOnClick={(event: any) =>
                            goToSuggestion(event, searchResult[index].sickNm)
                        }
                    />
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
