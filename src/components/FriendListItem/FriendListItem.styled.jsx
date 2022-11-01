import styled from 'styled-components'



{/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */}


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
            return 'red'
    }
}};

`