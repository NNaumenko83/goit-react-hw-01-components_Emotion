import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  max-width: 200px;
  gap: 10px;
  padding: 10px;

  border: 1px solid grey;
  border-radius: 10px;

  box-shadow: 5px 5px 7px 0px rgba(0, 128, 255, 1),
    inset 0px 0px 18px 0px rgba(0, 128, 255, 1);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;

  border: 1px solid grey;
  border-radius: 50%;

  background-color: ${props => {
    if (props.status) {
      return `green`;
    } else {
      return `red`;
    }
  }};
`;

// .item:not(:last-child) {
//   margin-bottom: 15px;
// }

// .name {
//   font-size: 25px;
//   font-weight: 600;
// }
