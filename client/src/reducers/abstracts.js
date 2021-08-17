export default (abstracts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...abstracts, action.payload];
        default:
            return abstracts;
    }
}