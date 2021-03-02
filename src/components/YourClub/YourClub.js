import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const YourClub = (props) => {
    const {club} = props;
    return (
        <div>
            {
                club.map(member => <SelectedPlayer member={member} id={member.id} ></SelectedPlayer>)
            }
        </div>
    );
};

export default YourClub;