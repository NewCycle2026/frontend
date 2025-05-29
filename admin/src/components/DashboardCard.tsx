// src/components/DashboardCard.tsx

interface DashboardCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function DashboardCard({ title, value, color }: DashboardCardProps) {
  return (
    <div
      className={`
        rounded-lg p-6 shadow-md
        bg-white text-gray-800 
        dark:bg-dark.card dark:text-dark.text
        ring-1 ring-gray-200 dark:ring-dark.border
        transition
      `}
    >
      <p className="text-sm font-medium text-gray-600 dark:text-dark.muted">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
