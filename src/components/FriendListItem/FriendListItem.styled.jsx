import styled from 'styled-components'





export const ListItemWrapper = styled.li`
margin-bottom:25px;


display: flex;
align-items:center;

background-color:white;
`


export const AvatarImage = styled.img`
display:block;

margin-left:10px;
`

export const Name = styled.p`
margin-left:20px;

font-size:large;
font-weight:500;
`
export const Chip = styled.span`
display:block;

width:20px;
height:20px;

border-radius:50%;
background-color:${(props) => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'grey';
    }
}};

`