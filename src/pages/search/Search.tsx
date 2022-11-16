import SearchForm from 'components/searchForm/SearchForm';
import { useState } from 'react';
import SearchBoard from 'components/searchBoard/SearchBoard';
import S from './styles';

const Search = () => {
    const [isSearching, setIsSearching] = useState(false);
    return (
        <S.Wrapper>
            <h1>국내 모든 임상시험 검색</h1>
            {/* <SearchedDataProvider> */}
            {/* <SearchForm setIsSearching={setIsSearching} /> */}
            <SearchForm />
            <SearchBoard />
            {/* </SearchedDataProvider> */}
        </S.Wrapper>
    );
};

export default Search;