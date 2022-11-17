import React, { useState, useRef } from 'react';
import {SickDataType} from "../types/Types";

const useHandleInput = (suggestions: SickDataType[]) => {
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnBlur = () => {
        setTimeout(() => {
            setIsSearching(false);
        }, 100);
        // resetIndex();
    };

    const handleOnFocus = () => {
        setIsSearching(true);
        // resetIndex();
    };

    return {
        // handleKeyDown,
        handleOnFocus,
        handleOnBlur,
        isSearching,
        inputRef
    };
}

export default useHandleInput;