import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormComp({users,setUsers}) {
  const [formData,setFormData] = React.useState({})
  const [errorState,setErrorState] = React.useState({})
  const onChangeHandler = (e)=>{
    let {name,value} = e.target    
    setFormData({...formData,[name]:value})
  }

  function isValid(p) {
    let phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    return phoneRe.test(p);
  }
  function isValidEmail(email){
    let emailRegx =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegx.test(email)
  }
  const onSubmitHandler = () =>{
    let error = false
    let errors = {}
    if(!formData.name){
      errors.name = "Name is required"
      error= true
    }
    if(!formData.email){
      errors.email = "Email is required"
      error= true
    }else if(!isValidEmail(formData.email)){
      errors.email = "Enter Valid Email address"
      error= true
    }
    if(formData.age < 18 || formData.age>70 ){
      errors.age = "Age should be in between 18 and 70"
      error= true

    }
    if(!isValid(formData?.phone)){
      errors.phone = "Enter Valid Phone Number"
      
      error= true

    }
    if(error){
      setErrorState(errors)
      return
    }else{
      setErrorState({})
      setUsers([...users,formData])
      setFormData({})
    }
  } 
  const onResetHandler = () =>{
    setFormData({})
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      margin="normal"  
      required 
      label="Name" 
      variant="outlined" 
      name="name"
      value={formData.name|| ''}
      onChange={onChangeHandler}
      error={Boolean(errorState.name)}
      helperText={errorState['name']}
      />
         <TextField 
         required
      id="outlined-basic" 
      margin="normal" 
      label="Email" 
      variant="outlined" 
      name="email"
      value={formData.email|| ''}
      onChange={onChangeHandler}
      error={Boolean(errorState.email)}
      helperText={errorState['email']}
      />
      <TextField 
      id="outlined-basic" 
      margin="normal" 
      label="Age" 
      variant="outlined" 
      name="age"
      type="Number"
      value={formData.age|| ''}
      onChange={onChangeHandler}
      error={Boolean(errorState.age)}
      helperText={errorState['age']}
    
      />
   
      <TextField 
      id="outlined-basic" 
      margin="normal" 
      type="Number"
      label="Phone Number" 
      variant="outlined" 
      name="phone"
      value={formData.phone|| ''}
      onChange={onChangeHandler}
      error={Boolean(errorState.phone)}
      helperText={errorState['phone']}
      />
      <Button variant="contained" size="small" onClick={onSubmitHandler}>
          Submit
        </Button>
      <Button variant="text" size="small" onClick={onResetHandler} className="ml-3">
          Reset
      </Button>
        
    </Box>
  );
}
