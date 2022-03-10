import React from 'react';

const UserHeader = (props) => {
    const currentUser = props.users.filter(user => user.id===props.userId)[0];
    return (
        
        <div>
            {currentUser ? currentUser.name : ''}
        </div>
    )
}

export default UserHeader;