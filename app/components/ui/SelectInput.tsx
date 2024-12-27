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
      <label htmlFor={name} className="text-sm text-black">
        {label}
      </label>
      <select
        name={name}
        multiple={multiple}
        defaultValue={defaultValue}
        className="border-b-[0.5px] border-black p-2 bg-transparent placeholder:text-black w-full"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
