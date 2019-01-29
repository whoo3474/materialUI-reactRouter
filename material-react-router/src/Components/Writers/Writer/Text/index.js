import React from 'react';

const index = ({title, description, published}) => {
    return (
        <>
            <h4>
                {title}
                ({published? `(${published})`: ''})
            </h4>
            <p>
                {description ? description : <i> No Description</i>}
            </p>

        </>
    );
};

export default index;