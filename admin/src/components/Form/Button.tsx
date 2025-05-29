interface Props {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({ label, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
}
