import React from 'react'

// Semantic
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


// Import Styles
import './styles.scss'

const SearchClient = ({ inputs, changeFormValue }) => {

  const onChangeValue = ({ name, value }) => {
    changeFormValue(name, value)
  }

  return (
    <div className='search-client card'>
      <h2 className='title'>Chercher un client</h2>
      <form className='search'>
        <Input icon='users' name="name" onChange={(e) => onChangeValue(e.target)} value={inputs.name} iconPosition='left' placeholder='Search users...' />
        <Button style={{ marginLeft: '20px' }} primary>Chercher</Button>
        <p>{inputs.name}</p>
      </form>
    </div>
  )
};

export default SearchClient;
