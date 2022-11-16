import React from 'react';
import S from "./styles";

interface SearchListProps {
    title: string;
}

const SearchList = ({ title }: SearchListProps) => {
    return (
        <S.List>
            <h3>추천 검색어</h3>
            {/* {IS_EMPTRY ? ( */}
            {/* ) : ( */}
            {/* <> */}
            {/* <h3>{title}</h3>
                {list.map((item, idx) => (
                    <SearchItem
                        key={item.sickCd}
                        text={item.sickNm}
                        active={cursor === idx}
                        isMovingMouse={isMovingMouse}
                        setIsMovingMouse={setIsMovingMouse}
                        setCursor={setCursor}
                        index={idx}
                    />
                ))} */}
            {/* </> */}
            {/* )} */}
        </S.List>
    );
};

export default SearchList;
