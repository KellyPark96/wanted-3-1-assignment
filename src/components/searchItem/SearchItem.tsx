import React from 'react';
import S from "./styles";

interface SearchItemProps {
    sickNm: string;
    target: string;
}

const SearchItem = ({sickNm, target}: SearchItemProps) => {
    return (
        <S.Wrapper>
            {sickNm}
        </S.Wrapper>
    );
};

export default SearchItem;