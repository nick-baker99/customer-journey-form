'use client';

import { useFormContext } from "react-hook-form";

type Props = {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  description: string
  rules?: Array<string>
};

const FormBlockInput = ({ type, name, label, placeholder, description, rules, ...rest }: Props) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="flex-1">
        <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-2" htmlFor={name}>{label}</label>
        <p className="text-sm md:text-base text-neutral-800 mb-2">{description}</p>
        {rules && (
          <ul className="text-xs md:text-sm text-neutral-600 font-medium space-y-1 pl-8 list-disc">
            {rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        )}
      </div>
      <div className="flex-1">
        <input 
          id={name}
          type={type} 
          {...register(name)}
          placeholder={placeholder}
          {...rest}
          className="w-full input input-neutral mb-2"
          aria-describedby={`${name}-error`}
        />
        {error && <p id={`${name}-error`} className="field-error">{error as string}</p>}
      </div>
    </div>
  );
}

export default FormBlockInput