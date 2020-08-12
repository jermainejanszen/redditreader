import React, { useReducer, useRef } from 'react';
import { Stack, Heading, Button } from 'bumbag';
import Comment from './Comment';

export const ACTIONS = {
    ADD_COMMENT: 1,
    DELETE_COMMENT: 2,
    SAVE_COMMENT: 3,
}

function newComment(id) {
    return {
        id: id,
        user: "", 
        upvotes: 0, 
        text: "", 
        editMode: true
    }
}

function reducer(comments, action) {
    switch (action.type) {
        case ACTIONS.ADD_COMMENT:
            return [...comments, newComment(action.payload.id)];
        case ACTIONS.DELETE_COMMENT:
            return comments.filter(comment => comment.id !== action.payload.id);
        case ACTIONS.SAVE_COMMENT:
            return comments.map(comment => {
                if(comment.id === action.payload.comment.id) {
                    return {...action.payload.comment};
                } else {
                    return comment;
                }
            })
        default:
            return comments;
    }
}

export default function CommentList({ commentsProp }) {
    
    const [ comments, dispatch ] = useReducer(reducer, commentsProp);
    const currentId = useRef(3);

    function newId() {
        currentId.current = currentId.current + 1;
        return currentId.current;
    }
    
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'space-between', marginBottom: "1.4%"}} >
                <Heading use="h3" style={{flexGrow: 1}}>Comments</Heading>
                <Button onClick={() => dispatch({type: ACTIONS.ADD_COMMENT, payload: {id: newId()}}) } >Add Comment</Button>
            </div>
            <Stack>
                {comments.map(comment => {
                                return <Comment key={comment.id} commentProp={comment} dispatch={dispatch} />
                            })}
            </Stack>
        </div>
    )
}
