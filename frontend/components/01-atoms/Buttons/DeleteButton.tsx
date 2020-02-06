import React from 'react';
import {Button} from 'antd';
import {useMutation} from '@apollo/react-hooks';
import {DELETE_JOKE_MUTATION} from '../../../lib/mutations';

interface Props {
  id: String
}

const DeleteButton: React.FC<Props> = ({id, children}) => {
  console.log(id)
  const [deleteJoke] = useMutation(DELETE_JOKE_MUTATION, {
    variables: { id: id },
  });

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(confirm('Are you sure you want to delete this item?')) {
      deleteJoke();
    }
  }

  return (
    <Button type="danger" onClick={handleClick}>
      {children}
    </Button>
  )
};

export default DeleteButton;
