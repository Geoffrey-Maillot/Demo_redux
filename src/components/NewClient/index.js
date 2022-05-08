import React from 'react'

// Semantic
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


// Import Styles
import './styles.scss'

const NewClient = ({ inputs, changeFormValue, addNewClient, resetForm }) => {


  const onChangeValue = ({ name, value }) => {
    changeFormValue(name, value)
  }

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    addNewClient();
    resetForm();
  }

  return (
    <div className='search-client card'>
      <h2 className='title'>Ajouter un client</h2>
      <form className='search' onSubmit={handlerOnSubmit}>
        <div>
          <label className='label'>Nom: </label>
          <Input name="nom" type='text' required onChange={(e) => onChangeValue(e.target)} value={inputs.nom} />
        </div>
        <div>
          <label className='label'>Email: </label>
          <Input name="email" type='email' required onChange={(e) => onChangeValue(e.target)} value={inputs.email} />
        </div>
        <div>
          <label className='label'>Adresse:  </label>
          <Input name="adresse" type='text' required onChange={(e) => onChangeValue(e.target)} value={inputs.adresse} />
        </div>
        <div>
          <label className='label'>Ville:  </label>
          <Input name="ville" type='text' required onChange={(e) => onChangeValue(e.target)} value={inputs.ville} />
        </div>
        <div>
          <label className='label'>Code postal: </label>
          <Input name="codePostal" type='number' required onChange={(e) => onChangeValue(e.target)} value={inputs.codePostal} />
        </div>

        <Button primary>Ajouter</Button>
      </form>
    </div>
  )
};

export default NewClient;
