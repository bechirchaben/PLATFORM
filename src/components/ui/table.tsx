// src/components/ui/table.tsx
import React from 'react';

// Autorise children optionnel et tout attribut de <tbody>
export function TableBody({
  children,
  ...props
}: { children?: React.ReactNode } & React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props}>{children}</tbody>;
}

// Autorise tout attribut de <td> (colSpan, className, etc.)
export function TableCell({
  children,
  className = '',
  ...props
}: { children: React.ReactNode } & React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...props}
      className={`px-4 py-2 ${className}`}
    >
      {children}
    </td>
  );
}

// Même principe pour les <th>
export function TableHead({
  children,
  className = '',
  ...props
}: { children: React.ReactNode } & React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...props}
      className={`px-4 py-2 font-semibold ${className}`}
    >
      {children}
    </th>
  );
}

// Les autres composants restent inchangés
export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b">{children}</tr>;
}

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full text-left border-collapse">{children}</table>;
}
