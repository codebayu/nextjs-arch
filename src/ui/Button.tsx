import React from 'react';

export function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={`bg-amber-400 ${className}`}>{children}</button>;
}
