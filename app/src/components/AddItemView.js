import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddItemView = ({ addItem }) => (
  <Form
    onSubmit={ (event) => {
      event.preventDefault()
      let userInput = event.target.input.value
      if(userInput === '') {
        return false
      }
      addItem(userInput)
      event.target.input.value = ''
    }}
    inline
  >
    <FormGroup controlId="formInlineName">
      <FormControl name="input" type="text" placeholder="Add item..." />
    </FormGroup>
    <Button type="submit">
      Add item
    </Button>
  </Form>
)

export default AddItemView
