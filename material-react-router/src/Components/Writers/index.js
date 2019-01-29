import React, {Fragment} from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import Writer from './Writer';
import {NotFound} from '../Errors';

const index = ({ match:{url},writers}) => {
    return (
        <Fragment>

            <Route path={`${url}/:writerId`} 
            render={(props)=> {
                const writer = writers.find(writer=> writer.id === props.match.params.writerId)
                if (!writer){
                    return <NotFound/>
                }
                return <Writer {...props} {...writer}/>
            }}/>
            </Fragment>
    );
};

export default index;