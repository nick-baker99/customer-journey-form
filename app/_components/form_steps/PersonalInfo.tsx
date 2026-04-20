import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import { getNames } from "country-list";

// sort countries list in alphabetical order
const countries = getNames().sort((a, b) => a.localeCompare(b));

const PersonalInfo = () => {
  const { register, formState: { errors }} = useFormContext();
  return ( 
    <fieldset className="mb-6">
      <legend className="step-title">Your Details</legend>
      <p className="text-neutral-900 mb-4">Lets get your account set up — we just need a few basic details to create your account.</p>
      <div className="flex flex-col md:flex-row md:gap-4">
        <FormInput 
          type="text"
          label="First Name"
          name="firstName"
          placeholder="First Name"

        />
        <FormInput 
          type="text"
          label="Last Name"
          name="lastName"
          placeholder="Last Name"

        />
      </div>
      <FormInput 
        type="email"
        label="Email Address"
        name="email"
        placeholder="Email"

      />
      <div className="flex flex-col md:flex-row md:gap-4">
        <FormInput 
          type="date"
          label="Date of Birth"
          name="dob"
          placeholder="DD/MM/YYYY"

        />
        <FormInput 
          type="text"
          label="Phone Number"
          name="telephone"
          placeholder="Phone Number"

        />
      </div>
      <div>
        <label className="block text-neutral-900 font-semibold mb-1" htmlFor="country">Country</label>
        <select 
          id="country" 
          {...register("country")} 
          className="select appearance-none mb-2"
          aria-describedby="country-error"
        >
          <option value="">Select Country</option>
          {countries.map(country => <option key={country}>{country}</option>)}
        </select>
        {errors?.country && <p id="country-error" className="field-error">{errors.country.message as string}</p>}
      </div>
    </fieldset>
  );
}

export default PersonalInfo