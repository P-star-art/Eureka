export default (abstracts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...abstracts, action.payload];
        case 'DELETE':
            return abstracts.filter((abstract) => abstract._id !== action.payload);
        default:
            return abstracts;
    }
}