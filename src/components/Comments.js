import React, { useState, useEffect } from "react";
import "../styles/Comments.css";

export default function CommentsSection() {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Thompson J.",
            date: "Jul 10",
            text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
            replies: [],
        },
        {
            id: 2,
            name: "Thompson J.",
            date: "Jul 10",
            text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
            replies: [],
        },
        {
            id: 3,
            name: "Thompson J.",
            date: "11/22/2022",
            text: "Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor...",
            replies: [],
        },
    ]);

    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [remember, setRemember] = useState(false);
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");

    // LocalStorage'dan ism va emailni olish
    useEffect(() => {
        const savedName = localStorage.getItem("commentName");
        const savedEmail = localStorage.getItem("commentEmail");
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
    }, []);

    // Yangi comment qo‘shish
    const handlePostComment = (e) => {
        e.preventDefault();
        if (!newComment.trim() || !name.trim() || !email.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        const today = new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        const newEntry = {
            id: Date.now(),
            name,
            date: today,
            text: newComment,
            replies: [],
        };

        setComments([newEntry, ...comments]);

        if (remember) {
            localStorage.setItem("commentName", name);
            localStorage.setItem("commentEmail", email);
        }

        setNewComment("");
    };

    // Reply qo‘shish
    const handleReplySubmit = (commentId) => {
        if (!replyText.trim()) return;

        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        {
                            id: Date.now(),
                            name,
                            date: new Date().toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            }),
                            text: replyText,
                        },
                    ],
                };
            }
            return comment;
        });

        setComments(updatedComments);
        setReplyingTo(null);
        setReplyText("");
    };

    return (
        <div className="comments-container">
            <h3>{comments.length} COMMENTS</h3>

            {comments.map((c) => (
                <div className="comment d-flex gap-4 pt-3 pb-3" key={c.id}>
                    <div className="avatar d-flex w-auto">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="user"
                            className="avatar-img"
                            width={"100px"}
                            height={"100px"}
                            style={{border: "1px solid"}}
                        />
                    </div>
                    <div className="comment-body">
                        <strong>{c.name}</strong> — <span className="date">{c.date}</span>
                        <p>{c.text}</p>
                        <button
                            className="reply-btn"
                            onClick={() =>
                                setReplyingTo(replyingTo === c.id ? null : c.id)
                            }
                        >
                            Reply now
                        </button>

                        {/* Reply Form */}
                        {replyingTo === c.id && (
                            <div className="reply-form">
                <textarea
                    placeholder="Write your reply here..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                />
                                <button onClick={() => handleReplySubmit(c.id)}>Post Reply</button>
                            </div>
                        )}

                        {/* Replies list */}
                        {c.replies.length > 0 && (
                            <div className="replies">
                                {c.replies.map((r) => (
                                    <div className="reply" key={r.id}>
                                        <strong>{r.name}</strong> — <span>{r.date}</span>
                                        <p>{r.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}

            <h3>LEAVE A COMMENT</h3>
            <p className="note">
                Your email address will not be published. Required fields are marked *
            </p>

            <form onSubmit={handlePostComment}>
        <textarea
            placeholder="Write your comment here *"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
        />

                <div className="input-row">
                    <input
                        type="text"
                        placeholder="Write your name here *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Write your email here *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="checkbox">
                    <input
                        type="checkbox"
                        checked={remember}
                        id={"save-me"}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor={"save-me"}>
                        Save my name, email, and website in this browser for the next time.
                    </label>
                </div>

                <button type="submit" className="post-btn">
                    POST COMMENT
                </button>
            </form>
        </div>
    );
}
