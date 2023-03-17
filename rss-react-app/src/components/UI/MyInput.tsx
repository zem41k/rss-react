import React from 'react';

interface MyInputProps {
  placeholder: string;
  className: string;
}

export default function MyInput({ placeholder, className }: MyInputProps) {
  return <input type="text" placeholder={placeholder} className={className} />;
}
