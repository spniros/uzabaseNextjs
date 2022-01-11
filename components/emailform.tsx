import React, { useEffect, useState } from 'react'
import { WizardStep } from '../enum/enum';
import { FormDetail } from '../model/model';

// use: email  for wizard 
function EmailForm ({nextFormStep,formvalues}:{  nextFormStep: (step:number,value:any)=> void, formvalues:FormDetail}) {

const [email, setEmail] = useState(formvalues.email);
const [confirmEmail, setConfirmEmail] = useState(formvalues.email)
const [errors, setErrors] = useState({email:'',cEmail:'', valid:false});


useEffect(() => {
    if(email == confirmEmail && confirmEmail !='' ){
      setErrors({...errors,valid:true})
    }else {
      setErrors({...errors,valid:false})
    }
   
  }, [email, confirmEmail]);

// validate email address
const emailValid=(value:string)=>{
    if(   value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ){
        setEmail(value);
        setErrors({...errors,email:''})
    }else{
        setErrors({...errors,email:'Please enter correct email format'})
        setEmail(value);
    }

}



const confirmEmailValid=(cEmail:string)=>{
    setConfirmEmail(cEmail);
    if(cEmail != email){
        setErrors({...errors, cEmail:'Your emails dont match',valid:false})

    }else{
        setErrors({...errors, cEmail:'', valid:true})
    }

}


  // form submit
 const emailSubmit=(step:number)=>{
  let nameFormValue={  email}
   nextFormStep(step,nameFormValue)

}

    return (
        <div>
            <div className='cover-field'>
             <h2>Email</h2>
            <input type="text" value={email}  className={ errors.valid &&  errors.email ==''? 'form-input':'form-input  error-line'} placeholder='Email' onChange={(e)=>emailValid(e.target.value)}/>
            {errors.email && <div className='error'>{errors?.email}</div>}

            <input type="text" value={confirmEmail}  className={ errors.valid &&  errors?.cEmail =='' ? 'form-input':'form-input  error-line'} placeholder='Confirm Email' onChange={(e)=>confirmEmailValid(e.target.value)}/>
            {errors.cEmail && <div className='error'>{errors?.cEmail}</div>}

            <button type="button" className='btn-success float-right ml-10' disabled={!errors.valid} onClick={()=>emailSubmit(WizardStep.thirdWizard)} >Next</button>
            <button className='btn-success-outline float-right'  onClick={()=>emailSubmit(WizardStep.firstWizard)}> Back</button>
        </div>
        </div>
    )
}

export default EmailForm