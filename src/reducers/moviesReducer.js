const moviesReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'fill':
            return action.payload;

        case 'add':
            return [...state, action.payload];

        default:
        throw new Error('Incorrect Operation!');
    }
};

export default moviesReducer;