"use client";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  placeholder?: string;
  multiple?: boolean;
  defaultValue?: string[] | string;
  name: string;
  label: string;
}

export const SelectInput = ({
  options,
  placeholder = "Select...",
  multiple = false,
  defaultValue = multiple ? [] : "",
  name,
  label,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-sm text-textColor">
        {label}
      </label>
      <select
        name={name}
        multiple={multiple}
        defaultValue={defaultValue}
        className="border-b-[0.5px] border-textColor p-2 bg-transparent placeholder:text-textColor w-full"
      >
        <option className="text-black" value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            className="text-black"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
