'use client';

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { formSchema, RegisterData } from "../formSchema";
import PersonalInfo from "./form_steps/PersonalInfo";
import AccountInfo from "./form_steps/AccountInfo";
import CustomerPreferences from "./form_steps/CustomerPreferences";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type FieldName = keyof RegisterData;

// components for each step of the form
const steps = [
  {
    fields: ['firstName', 'lastName', 'email', 'dob', 'telephone', 'country'],
    component: <PersonalInfo />
  },
  {
    fields: ['username', 'password', 'confirmPassword'],
    component: <AccountInfo />
  },
  {
    fields: ['favouriteGenre', 'watchWith', 'watchFrequency', 'movies', 'acceptTerms'],
    component: <CustomerPreferences />
  },
];

const MultiStepForm = () => {
  // stores which form step the user is on
  const [currentStep, setCurrentStep] = useState(0);
  // stores the overall form data
  //const [accumulatedData, setAccumulatedData] = useState<Partial<FormData>>({});
  const [formError, setFormError] = useState('');
  const methods = useForm<RegisterData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      favouriteGenre: [],
      watchWith: null,
      watchFrequency: null,
      movies: [],
      acceptTerms: false,
    }
  });
  const { isSubmitting } = methods.formState;
  const router = useRouter();

  const processForm: SubmitHandler<RegisterData> = async (data) => {
    setFormError('');
    
    // send form data to API to be validated
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      setFormError('There was a problem submitting this form.');
    } else {
      // redirect to success page
      router.push('/success');
    }
  }

  // click handler for the continue/submit form button
  const nextFormStep = async () => {
    const fields = steps[currentStep].fields;
    // validate the fields for the current form step
    const valid = await methods.trigger(fields as FieldName[]);

    if (!valid) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      await methods.handleSubmit(processForm)();
    }
  }

  const prevFormStep = () => {
    if (currentStep > 0) {
      setFormError('');
      setCurrentStep(prev => prev - 1);
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="relative">
        <progress className="progress progress-primary w-full h-3 mb-4 [&::-webkit-progress-value]:transition-all" value={currentStep * 33.3} max="100"></progress>
      </div>
      <form>
        {steps[currentStep].component}

        <div className="flex flex-col-reverse md:flex-row md:gap-4 gap-4">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevFormStep}
              className="w-full md:w-1/2 btn"
              aria-label="Go to previous step"
            >&lt; Previous</button>
          )}
          <button
            className="w-full md:w-1/2 btn btn-primary"
            type="button"
            onClick={nextFormStep}
            disabled={isSubmitting}
            aria-label={currentStep === steps.length - 1 ? "Submit form" : "Continue to next step"}
          >
            {isSubmitting ? 'Processing...' : currentStep === steps.length - 1 ? 'Create my Account' : 'Continue >'}
          </button>
        </div>
        {formError && <p className="field-error mt-4 text-center md:text-right">{formError}</p>}
      </form>
    </FormProvider>
  );
}

export default MultiStepForm
