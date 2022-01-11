import type { NextPage } from 'next'
import { useState } from 'react'
import { EmailForm, NameForm, ConfirmationWizard ,Wizard} from '../components'
import { WizardStep } from '../enum/enum'
import { FormDetail } from '../model/model'


const Home: NextPage = () => {


  //initial step is name field
  const [step, setStep] = useState(WizardStep.firstWizard);
  // all form data
  const [formDetail, setFormDetail] = useState<FormDetail>({firstName:'',lastName:'',email:''});

  const wizardOne = (step: number, value: any) => {
    setFormDetail({...formDetail, firstName:value.firstName,lastName:value.lastName})
    setStep(step);
  }

  const wizardTwo = (step: number, value: any) => {
    setFormDetail({...formDetail,email:value.email})
    setStep(step);
  }

  const wizardThree=(step: number)=>{
    setStep(step);
  }

  const reset=()=>{
    debugger;
    setFormDetail({firstName:'',lastName:'',email:''});
    setStep(WizardStep.firstWizard);
  

  }

  return (
    <>
      <div className='container'>
        <div className='content'>
          <h2 className='text-center'>Wizard</h2>
          <Wizard stepNumber={step}/>
          {step === WizardStep.firstWizard && <NameForm nextFormStep={wizardOne} formvalues={formDetail} />}
          {step === WizardStep.secondWizard && <EmailForm nextFormStep={wizardTwo}  formvalues={formDetail}/>}
          {step === WizardStep.thirdWizard && <ConfirmationWizard formDetail={formDetail} nextFormStep={wizardThree} reset={reset}/>}

        </div>
      </div>
    </>
  )
}

export default Home

