import React, { MouseEvent, MouseEventHandler } from 'react';
import S from "./styles";

interface SearchItemProps {
    sickNm: string;
    target: string;
    isSelected: boolean;
    handleOnClick: MouseEventHandler;
}

const SearchItem = ({sickNm, target, isSelected, handleOnClick}: SearchItemProps) => {
    const firstIndex = sickNm.indexOf(target);
    const endIndex = firstIndex + target.length;
    const prevContent = sickNm.slice(0, firstIndex);
    const nextContent = sickNm.slice(endIndex);
    console.log(sickNm, target, isSelected);

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

export default SearchItem;