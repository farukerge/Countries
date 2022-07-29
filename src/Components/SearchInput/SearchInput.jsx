import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import styles from './SearchInput.module.css'

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

    
  return (
    <>
        <Form onSubmit={submitHandler} className={styles.form}>
            <Form.Control
                className={styles.input}
                type="text"
                placeholder="Search a country......"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              /> 
        </Form>
    </>
  )
}

export default SearchInput