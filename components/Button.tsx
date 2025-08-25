import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string; // for links
  target?: string; // optional (for _blank, etc.)
  onClick?: () => void; // for buttons
  className?: string; // allow custom styles
}

export default function Button({
  label,
  href,
  target,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-full font-semibold transition " +
    className;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={baseClasses}
      >
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
}
