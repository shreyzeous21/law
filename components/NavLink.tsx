import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
    >
      {children}
    </a>
  );
}