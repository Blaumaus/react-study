export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const addPost = data => {
  return {
    type: 'ADD_POST',
    data
  }
}