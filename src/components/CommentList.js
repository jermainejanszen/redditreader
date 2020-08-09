import React from 'react';
import Comment from './Comment';
import { Stack } from 'bumbag';

export default function CommentList({ comments }) {
    const commentComps = comments.map(comment => {
                                return <Comment comment={comment} />
                            })
    return (
        <Stack>
            {commentComps}
        </Stack>
    )
}
