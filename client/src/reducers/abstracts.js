export default (abstracts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return abstracts;
        default:
            return abstracts;
    }
}