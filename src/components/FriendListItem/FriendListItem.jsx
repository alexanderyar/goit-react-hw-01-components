import PropTypes from 'prop-types'

import { ListItemWrapper, AvatarImage, Name, Chip } from './FriendListItem.styled';



export const FriendListItem = ({ avatar, name, isOnline }) => {
    // console.log(isOnline)

    return (
        <ListItemWrapper>
            <Chip isOnline={isOnline}></Chip>
            <AvatarImage src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItemWrapper>

        
    );
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
}