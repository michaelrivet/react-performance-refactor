
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerFetchPeople } from '../features/peopleList/peopleListSlice';
import { AppLoadingState } from './AppLoadingState';
// Phase 5 Lazy Load this
// import PeopleList from '../features/peopleList/PeopleList';
const PeopleList = lazy(() => import(/* webpackChunkName: 'PeopleList' */ '../features/peopleList/PeopleList'))

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