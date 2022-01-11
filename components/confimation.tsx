
import React from 'react'
import { WizardStep } from '../enum/enum'
import { FormDetail } from '../model/model'

export default function ConfirmationWizard({formDetail ,nextFormStep,reset}:{formDetail:FormDetail, nextFormStep: (step:number)=> void;reset:()=> void}) {

    // submit data  to api 
    const submit=async(step:number)=>{
      const response= await fetch(' /api/profiles',{
          method:'POST',
          body:JSON.stringify(formDetail),
          headers:{
              'Content-Type':'application/json'
          }
      }
      )
      if(response.status ==201){
        reset();
      }else{
          console.error('failed');
      }
    }

    const back=(step:number)=>{
        nextFormStep(WizardStep.secondWizard)

    }


    return (
             <div className='cover-field'>
             <h2>Email</h2>
             <div>
             <label className='label-form'>First Name</label>
             <div className='label-detail'>{formDetail.firstName} </div>
             <div className='clear'></div>
             </div>

             <div>
             <label className='label-form'>Last Name</label>
             <div className='label-detail'>{formDetail.lastName}</div>
             <div className='clear'></div>
             </div>

             <div>
             <label className='label-form'>Email</label>
             <div className='label-detail'>{formDetail.email}</div>
             <div className='clear'></div>
             </div>
          
            <button type="button" className='btn-success float-right ml-10' onClick={()=>submit(WizardStep.thirdWizard)} >Submit</button>
            <button className='btn-success-outline float-right'  onClick={()=>back(WizardStep.secondWizard)}> Back</button>
        </div>
        
    )
}
