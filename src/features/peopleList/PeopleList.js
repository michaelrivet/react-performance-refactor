import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {List} from 'react-virtualized';

console.log('loading PeopleList');
export const PeopleList = () => {
    useEffect(() => {
        console.log('rendering PeopleList');
    }, []);

    const people = useSelector(state => state.people?.people);

    function rowRenderer({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible, // This row is visible within the List (eg it is not an overscanned row)
        style, // Style object to be applied to row (to position it)
        }) {
        return (
            <div key={key} style={style}>
                {people[index].name}
            </div>
        );
    }

    return <List
        width={300}
        height={300}
        rowCount={people.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
    />
}

export default PeopleList;