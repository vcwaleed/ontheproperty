import Link from "next/link";

const Button = ({ onClick, href, children, className = "", type = "button" }) => {
  if (href) {
    return (
      <Link href={href} className={`bg-btn_color  text-white hover:bg-[#3c2521] hover:rounded-md transition ${className}`}>
          {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-btn_color py-3 px-6  text-white hover:bg-[#3c2521] hover:rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
