import React from "react";

type CardProps = {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  className?: string;
};

export default function Card({ title, value, icon, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl p-4 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm">{title}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
