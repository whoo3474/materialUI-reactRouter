import React, {Fragment} from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import Writer from './Writer';
import {NotFound} from '../Errors';

const index = ({ match:{url},writers}) => {
    return (
        <Fragment>
            <ul>
                {writers.map(({id, name}) => (
                    <li key={id}>
                        <Link to={`${url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>

            <Route path={url} render={()=> <h1> 작가를 선택해주세요</h1>}/>
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