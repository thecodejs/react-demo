export function getGridData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(error => console.log('error', error))
}