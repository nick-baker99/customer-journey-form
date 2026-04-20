import FormBlockInput from "../FormBlockInput";

const AccountInfo = () => {
  return (
    <fieldset className="mb-6">
      <legend className="step-title">Account Information</legend>
      <p className="text-neutral-900 mb-4"></p>
      <FormBlockInput 
        type="text"
        name="username"
        label="Username"
        placeholder="Username"
        description="This is your display name to other users."
        rules={[
          "Must not contain spaces",
          "No special charatcers except '-'"
        ]}
      />
      <FormBlockInput 
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        description="We recommend you choose a strong password."
        rules={[
          "Must be between 8 and 30 characters",
          "Must contain at least one uppercase letter",
          "Must contain at least one lowercase letter",
          "Must contain at least one special character (e.g. !,#,*,?)"
        ]}
      />
      <FormBlockInput 
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        description="Please confirm your password."
      />
    </fieldset>
  );
}

export default AccountInfo