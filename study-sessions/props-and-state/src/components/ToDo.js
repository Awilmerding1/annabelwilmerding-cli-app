import React from 'react';


const ToDo = ({todo}) => {
    return (

      <div >
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
      </div>
    );

}

export default ToDo;
