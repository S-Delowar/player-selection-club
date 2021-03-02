import React from 'react';

const SelectedPlayer = (props) => {
    const {member} = props;
    return (
        <div className="d-flex justify-content-between">
            <p>{member.name}</p>
            <p>${member.salary}</p>
        </div>
    );
};

export default SelectedPlayer;