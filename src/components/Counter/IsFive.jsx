import React from 'react';

const IsFive = ({ count }) => 
{
    // console.log('IsFive');
    return (
        <div>
            {count === 5 ? 'Is Five' : 'Is Not Five'}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => nextProps.count !== 5 && prevProps.count !== 5 ); //false === перерендер
