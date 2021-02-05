import React from 'react';
import '../../styles/Comments.scss';

function CommentsList ({ comments=[] }) {
    return (
        <>
            <h1 className="title">
                Title for comments
            </h1>
            {comments.map((item) => {
                return (
                    <li key={item.id}>
                        <b>{item.name}</b> : {item.text}
                    </li>
                )
            })}





        </>
    );
};
export default CommentsList;