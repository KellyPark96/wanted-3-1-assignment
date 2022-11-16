import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useQueryString } from 'hooks/useQueryString';
import S from "./styles";

const SearchForm = () => {
    const query = useQueryString();
    console.log(query);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        console.log(value);
        navigate(`/?q=${value}`);
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            {/* //     <BsSearch /> */}
            {/* //     value={query}
        //     
        //     onFocus={handleFocus}
        //     onBlur={handleBlur}
        // /> */}
            <input
                type="text"
                onChange={handleChange} />
            <button type="button">검색</button>
        </S.Form>
    );
};

export default SearchForm;
