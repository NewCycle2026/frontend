import type { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-14 px-4 text-base text-gray-900 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
