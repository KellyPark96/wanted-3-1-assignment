import SearchForm from 'components/searchForm/SearchForm';
import S from './styles';

const Search = () => {
    return (
        <S.Wrapper>
            <h1>국내 모든 임상시험 검색</h1>
            <SearchForm />
        </S.Wrapper>
    );
};

export default Search;