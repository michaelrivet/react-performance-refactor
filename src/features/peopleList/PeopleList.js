import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {AutoSizer, List, CellMeasurer, CellMeasurerCache} from 'react-virtualized';
import {Box, Text, Avatar} from '@sproutsocial/racine';
import styled from 'styled-components';

console.log('loading PeopleList');

const TableRow = styled(Box)`
    display: grid;
    grid-template-columns: auto 2fr 1fr 1fr;
    background-color: ${({theme}) => theme.colors.container.background.base};
    color: ${({theme}) => theme.colors.text.body};
    align-items: center;
    column-gap: ${({theme}) => theme.space[300]};
    border: 1px solid ${({theme}) => theme.colors.container.border.base};

    &:not(:first-child) {
        border-top: none;
    }
`

const cache = new CellMeasurerCache({
	defaultHeight: 75,
	fixedWidth: true,
});

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
            <Box key={key} style={style} width='100%' p={300}>
                {people[index].name}
            </Box>
        );
    }

	const RenderRow = useCallback(
		({index, style, key, parent, isScrolling}) => {
			return (
				<CellMeasurer cache={cache} columnIndex={0} parent={parent} key={key} rowIndex={index}>
                    <TableRow key={key} style={style} width='100%' p={300}>
                        <Avatar name={people[index].name} />
                        <Text>{people[index].name}</Text>
                        <Text>{people[index].height}</Text>
                        <Text>{people[index].mass}</Text>
                    </TableRow>
				</CellMeasurer>
			);
		},
		[people]
	);

    return (
        <Box width='100%' height='600px' mt={400}>
            <AutoSizer>
                {({width, height}) => (
                        <List
                        width={width}
                        height={height}
                        rowCount={people.length}
                        deferredMeasurementCache={cache}
                        rowHeight={cache.rowHeight}
                        rowRenderer={RenderRow}
                    />
                )}
            </AutoSizer>
        </Box>
    )
}

export default PeopleList;