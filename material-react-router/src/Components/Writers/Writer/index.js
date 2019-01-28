import React,{Fragment} from 'react';

const index = ({id,name,born,deceased,description,image}) => {
    return (
        <Fragment>
            <img src={image} alt={name} style={{maxWidth:300}}/>
                <h1>{name}</h1>

                <h3>{born} &mdash; {deceased}</h3>

                <p>{description}</p>
        </Fragment>
    );
};

export default index;