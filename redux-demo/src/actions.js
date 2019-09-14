const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

export ADD_COMMENT;
export addComment;

// typ akcji:
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

// kreator akcji:
function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

export THUMB_UP_COMMENT;
export thumbUpComment;