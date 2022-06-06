
import { Loader } from '@sproutsocial/racine';
import { useEffect, useState } from 'react';
import {List} from 'react-virtualized';

export const AppContent = () => {

    const [people, setPeople] = useState([]);
    useEffect(() => {
      async function fetchPeople() {
        const respose = await fetch('https://swapi.dev/api/people/');
        const result = await respose.json()
        console.log(result.results);
        setPeople(result.results);
      }
  
      fetchPeople();
    }, []);

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

    if(people.length === 0) {
        return <Loader delay={false} />;
    }

    return <List
        width={300}
        height={300}
        rowCount={people.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
    />
}