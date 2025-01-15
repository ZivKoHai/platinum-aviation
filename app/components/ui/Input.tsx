export const Input = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="border-b-[0.5px] border-textColor p-2 bg-transparent placeholder:text-textColor"
    />
  );
};
