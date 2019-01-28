import React, {Fragment} from 'react';
import { Link, Route } from 'react-router-dom';
import Writer from './Writer';

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
            render={({match})=> <Writer
                                    {...writers.find(writer=> writer.id === match.params.writerId)}/>}/>
        </Fragment>
    );
};

export default index;