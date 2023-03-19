import React from 'react';

export default function MyInput(props: React.AllHTMLAttributes<HTMLInputElement>) {
  return <input type="text" {...props} />;
}
