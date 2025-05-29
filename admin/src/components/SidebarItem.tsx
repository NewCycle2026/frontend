// src/components/SidebarItem.tsx
import { useSidebar } from '@/contexts/SidebarContext';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
};

export default function SidebarItem({ icon, label, to }: SidebarItemProps) {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <NavLink
        to={to}
        className="flex items-center gap-3 p-2 text-white hover:bg-gray-700 rounded relative"
        data-tooltip-id={!isSidebarOpen ? `tooltip-${label}` : undefined}
        data-tooltip-content={!isSidebarOpen ? label : undefined}
      >
        {icon}
        {isSidebarOpen && <span className="text-sm">{label}</span>}
      </NavLink>

      {/* Tooltip 컴포넌트는 전역으로 한번만 써도 됨 */}
      {!isSidebarOpen && (
        <Tooltip id={`tooltip-${label}`} place="right" className="z-50" />
      )}
    </>
  );
}
