import React from "react";
import "../../styles/CommentsList.scss";
import { FaUserCircle } from "react-icons/fa";
import { BiCalendar, BiTime } from "react-icons/bi";

function CommentsList({ comments = [] }) {
    return (
        <>
            {!!comments?.length &&
                comments.map((item) => {
                    return (
                        <div className='comment-wrapper'>
                            <div className='comment'>
                                <div className='comment-user'>
                                    <div className='comment-user__photo'>
                                        <FaUserCircle className='comment-user__icon' />
                                    </div>
                                    <div className='comment-user__name'>
                                        <p>guest:</p>
                                        {item.name}
                                    </div>

                                    <div className='comment-user__time'>
                                        <div className='comment-user__time1'>
                                            {item.created_at && (
                                                <span>
                                                    <BiCalendar />
                                                </span>
                                            )}
                                            {item.created_at &&
                                                item.created_at.split("T")[0]}
                                        </div>
                                        <div className='comment-user__time2'>
                                            <span>
                                                <BiTime />
                                            </span>
                                            {item.created_at ? (
                                                item.created_at
                                                    .split("T")[1]
                                                    .slice(0, 5)
                                            ) : (
                                                <p>recently</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='comment-text'>
                                    <div className='comment-text__message'>
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}
export default CommentsList;
