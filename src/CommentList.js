import React from 'react'
import Comment from './Comment'

export default function CommentList({comments}) {
    const elements = comments ? comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : undefined
    return (
        <ul>
            {elements}
        </ul>
    )
}
