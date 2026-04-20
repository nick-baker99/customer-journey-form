import { useFormContext } from "react-hook-form";

type Option = {
  slug: string,
  title: string
};

type Props = {
  type: string,
  name: string,
  options: Array<Option>,
  className?: string
};

const MultiChoiceInput = ({ type, name, options, className }: Props) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <>
      <div className={className}>
        {options.map(option => (
          <label key={option.slug} className="flex items-center gap-4 text-sm py-3 px-4 border cursor-pointer border-neutral-300 has-checked:border-purple-800 has-checked:outline-1 has-checked:outline-purple-800 rounded-lg">
            <input 
              type={type}
              {...register(name)}
              value={option.slug}
              className={type}
              title={option.title}
              aria-describedby={`${name}-error`}
            />
            {option.title}
          </label>
        ))}
      </div>
      {error && <p id={`${name}-error`} className="field-error">{error as string}</p>}
    </>
  )
}

export default MultiChoiceInput