import React, {useState, useEffect, useRef} from 'react';
import { Button } from '@material-ui/core';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your list item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <Button onClick={handleSubmit} className='todo-button edit'>
                Update
              </Button>
            </>
          ) : (
            <>
              <input
                placeholder='Add a list item'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <Button onClick={handleSubmit} className='new-item-button'>
                Add list item
              </Button>
            </>
          )}
        </form>
      );
    }

export default TodoForm
