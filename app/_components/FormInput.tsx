import { useFormContext } from "react-hook-form";

type Props = {
  name: string,
  label: string,
  placeholder: string,
  type: string,
  required?: boolean
};

const FormInput = ({ name, label, placeholder, type, required }: Props) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div className="w-full mb-4">
      <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-1" htmlFor={name}>{label}</label>
      <input 
        id={name}
        type={type} 
        {...register(name)}
        placeholder={placeholder}
        className="w-full input input-neutral mb-2"
        aria-describedby={`${name}-error`}
        required={required}
      />
      {error && <p id={`${name}-error`} className="field-error">{error as string}</p>}
    </div>
  )
}

export default FormInput;