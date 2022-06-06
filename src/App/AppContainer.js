
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerFetchPeople } from '../features/peopleList/peopleListSlice';
import PeopleList from '../features/peopleList/PeopleList';
import { AppLoadingState } from './AppLoadingState';

export const AppContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.people.isLoading);
    useEffect(() => {
        dispatch(triggerFetchPeople());
    }, [dispatch]);

    if(isLoading) {
        return <AppLoadingState />
    }

    return <PeopleList/>
}