type inputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
};

const Input = ({ name, type, placeholder, value, required }: inputProps) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200 "
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
