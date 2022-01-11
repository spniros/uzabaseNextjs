import React from 'react'
import { WizardStep } from '../enum/enum'

// use:change wizard step
export default function Wizard({stepNumber}:{stepNumber:number}) {
    return (
        <div className='wizard-cover'>
        <div className='wizard-step'>
          <div  className={`wizard-point ${stepNumber===WizardStep.firstWizard || stepNumber===WizardStep.secondWizard ||stepNumber===WizardStep.thirdWizard ? 'active':''}`} >1</div> <div className='wizard-title'>Name</div>
          <div className='clear'></div>
        </div>
        <div className='wizard-step'>
          <div  className={`wizard-point ${ stepNumber===WizardStep.secondWizard ||stepNumber===WizardStep.thirdWizard ? 'active':''}`}>2</div> <div  className='wizard-title'>Email</div>
        </div>
        <div className='wizard-step'>
          <div  className={`wizard-point ${stepNumber===WizardStep.thirdWizard ? 'active':''}`}>3</div> <div  className='wizard-title'>Confirmation</div>
        </div>
        <div className='clear'></div>
      </div>
    )
}
