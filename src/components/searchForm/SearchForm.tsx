import React, {useState, useEffect} from 'react';
import S from "./styles";
import {SickDataType} from "../../types/Types";
import useHandleInput from '../../hooks/useHandleInput';
import SearchList from "../searchList/SearchList";
import {useDebounce} from "../../hooks/useDebounce";
import HttpClient, { DEBOUNCING_TIME } from '../../api/api';
import SearchServiceImpl from "../../api/SickService";

const client = new HttpClient(process.env.REACT_APP_BASE_URL || '');
const searchService = new SearchServiceImpl(client.httpClient);

const SearchForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // useState
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState<SickDataType[]>([]);

    // state
    const hasNoSuggestions = searchResult.length === 0;
    const debouncedQuery = useDebounce<string>(input, DEBOUNCING_TIME);

    // hooks
    const {
        handleKeyDown,
        handleOnFocus,
        handleOnBlur,
        isSearching,
        selectedIndex,
        resetIndex,
        inputRef,
    } = useHandleInput(searchResult);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        resetIndex();
        setSearchResult([]);
    }

    // useEffect
    useEffect(() => {
        (async () => {
            if (debouncedQuery.trim()) {
                const data = await searchService.getSearch(debouncedQuery);
                console.log(data);
                setSearchResult(data);
            } else {
                setSearchResult([]);
            }
            // setIsLoading(false);
        })();
    }, [debouncedQuery]);

    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    ref={inputRef}
                    onKeyDown={e => handleKeyDown(e)}
                />
            </S.Form>
            <S.Wrapper>
                {isSearching && (
                    <SearchList
                        selectedIndex={selectedIndex}
                        searchResult={searchResult}
                        hasNoSuggestions={hasNoSuggestions}
                        debouncedQuery={debouncedQuery}/>
                )}
            </S.Wrapper>

        </>
    );
};

export default SearchForm;
