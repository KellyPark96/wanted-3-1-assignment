import { useSearchParams } from 'react-router-dom';

const useQueryString = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    return query;
};

export { useQueryString };