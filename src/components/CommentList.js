import React, { useState } from 'react';
import { Stack } from 'bumbag';
import Comment from './Comment';

export default function CommentList({ comments }) {
    const commentComps = comments.map(comment => {
                                return <Comment commentProp={comment} />
                            })
    
    const [commentsState, setCommentsState] = useState(commentComps);
    
    return (
        <Stack>
            {commentsState}
        </Stack>
    )
}
