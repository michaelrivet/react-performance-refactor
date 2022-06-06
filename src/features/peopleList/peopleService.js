export async function fetchPeopleData() {
    console.log('fetching people');
    const respose = await fetch('https://swapi.dev/api/people/');
    const {results} = await respose.json()
    
    return results;
}