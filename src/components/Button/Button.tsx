import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return <button className={`button ${className}`}>{text}</button>;
}
