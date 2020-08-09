import React, { useState } from 'react';
import { Stack } from 'bumbag';
import Comment from './Comment';
import CommentEdit from './CommentEdit';

export default function CommentList({ comments }) {
    const commentComps = comments.map(comment => {
                                if(comment.editMode) {
                                    return <CommentEdit comment={comment} />
                                } else {
                                    return <Comment comment={comment} />
                                }
                            })
    
    const [commentsState, setCommentsState] = useState(commentComps);
    
    return (
        <Stack>
            {commentsState}
        </Stack>
    )
}
