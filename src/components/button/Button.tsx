import { ReactNode } from 'react';
import s from './button.module.css';
interface ButtonProps {
  children: string | ReactNode;
}
export default function Button({ children }: ButtonProps) {
  return <button className={s.button}>{children}</button>;
}
