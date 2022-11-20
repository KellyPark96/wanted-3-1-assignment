import React, {useState, useRef, KeyboardEvent, MouseEvent} from 'react';
import {SickDataType} from "../types/Types";

const useHandleInput = (suggestions: SickDataType[]) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const keyEvent = useRef(false);

    const resetIndex = () => setSelectedIndex(-1);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(suggestions.length === 0) return;
        keyEvent.current = true;

        if(e.key === 'ArrowDown'){
            setSelectedIndex(prev => {
                if (prev === suggestions.length - 1) return 0;
                console.log(prev + 1);
                console.log(selectedIndex);
                return prev + 1;
            });
        } else if(e.key === 'ArrowUp'){
            setSelectedIndex(prev => {
                if (prev <= 0) return suggestions.length - 1;
                console.log(prev - 1);
                return prev - 1;
            });
        } else if(e.key === 'Enter'){
            alert(`Go to Suggestion: ' + ${suggestions[selectedIndex].sickNm}`);
        } else if(e.key === 'Escape'){
            if (inputRef.current !== null) {
                inputRef.current.blur();
            }
        } else {
            keyEvent.current = false;
        }
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            setIsSearching(true);
        }, 100);
        resetIndex();
    };

    const handleOnFocus = () => {
        setIsSearching(true);
        resetIndex();
    };

    const goToSuggestion = (e: MouseEvent, sickNm: string) => {
        alert(`Go to Suggestion ${sickNm}`);
    }

    return {
        handleKeyDown,
        handleOnFocus,
        handleOnBlur,
        goToSuggestion,
        isSearching,
        selectedIndex,
        resetIndex,
        inputRef
    };
}

export default useHandleInput;