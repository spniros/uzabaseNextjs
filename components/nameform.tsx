import React, { useEffect, useState } from 'react'
import { WizardStep } from '../enum/enum';
import { FormDetail } from '../model/model';
// use: name for wizard 
 function NameForm({nextFormStep,formvalues}:{  nextFormStep: (step:number,value:any)=> void; formvalues:FormDetail}) {

  const [firstName, setFirstName] = useState(formvalues.firstName);
  const [lastName, setLastName] = useState(formvalues.lastName);
  const [errors, setErrors] = useState({firstName:'',lastName:'',isValid:false});

// check fields has values
  useEffect(() => {
    if(firstName && lastName){
      setErrors({...errors,isValid:true})
    }else {
      setErrors({...errors,isValid:false})
    }
   
  }, [firstName,lastName])


  // form value change
  const onChangeField=(value:string,field:string)=>{
    if(field=='firstName'){
      setFirstName(value)
      value.match('[a-zA-Z]{2}')?setErrors({...errors,firstName:''}): setErrors({...errors,firstName:'Minimum 2 characters required'})
    }else{
      setLastName(value)
      value.match('[a-zA-Z]{2}')? setErrors({...errors,lastName:''}): setErrors({...errors,lastName:'Minimum 2 characters required'})
    }

    

  }

  // form submit
 const nameSubmit=()=>{
   let nameFormValue={
     firstName:firstName,
     lastName:lastName
   }

  nextFormStep(WizardStep.secondWizard,nameFormValue)

 }
  

    return (
        <div className='cover-field'>
            <h2>Name</h2>
            <input type="text" value={firstName} className={  errors.firstName ==''? 'form-input':'form-input  error-line'} placeholder='First name' onChange={(e)=>onChangeField(e.target.value,'firstName')} />
           {errors.firstName && <div className='error'>{errors.firstName}</div>}
            <input type="text" value={lastName}  className={  errors.lastName ==''? 'form-input':'form-input  error-line'}  placeholder='Last name' onChange={(e)=>onChangeField(e.target.value,'lastName')} />
            {errors.lastName && <div className='error'>{errors.lastName}</div>}
            <button type="button" disabled={!errors.isValid} className='btn-success float-right' onClick={nameSubmit}>Next </button>
        </div>
    )
}

export default NameForm;