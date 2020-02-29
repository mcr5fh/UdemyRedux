// Import the React and ReactDOM libraries
import React from 'react';
import faker from 'faker'

import Comment from './Comment';
import ApprovalCard from './ApprovalCard'

// Create a react component
const ComponentsApp = () => {

    const approvalCardText = "Do you want to approve this comment?";

    const commentData = [
        {
            author: "Sam",
            avatar: faker.image.avatar(),
            content: "Hey there",
            timeAgo: Date.now()
        },
        {
            author: "Jane",
            avatar: faker.image.avatar(),
            content: "Hello Sam",
            timeAgo: Date.now()
        }
    ];
    
    const comments = commentData.map((data, index) =>
            <ApprovalCard text={approvalCardText}key={index}>
            <Comment
            author={data.author}
            avatar={data.avatar}
            content={data.content}
            timeAgo={data.timeAgo}
        />
        </ApprovalCard>
    )
    return (
        <div className="ui container comments">
            {comments}
        </div>
    );
};

export default ComponentsApp;
