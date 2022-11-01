import PropTypes from 'prop-types'

import {  ListWrapper } from "./FriendList.styled";
import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return (
        
        <ListWrapper>
            {friends.map(({ avatar, name, isOnline, id }) => (<FriendListItem key={'friends'+id} avatar={avatar} name={name} isOnline={isOnline} /> )
                
            )}
        </ListWrapper>
            
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
            
        })
    )
}

