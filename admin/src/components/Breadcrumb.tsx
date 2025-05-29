// src/components/Breadcrumb.tsx

interface BreadcrumbProps {
  items: string[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500 dark:text-gray-400 mb-2">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-gray-400">&gt;</span>}
            <span
              className={`${
                index === items.length - 1
                  ? "text-gray-800 dark:text-white font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
