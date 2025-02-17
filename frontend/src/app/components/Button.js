import Link from "next/link";

const Button = ({ onClick, href, children, className = "", type = "button" , disabled }) => {
  if (href) {
    return (
      <Link href={href} className={`bg-btn_color  text-white hover:bg-[#3c2521]  rounded-md  hover:rounded-lg transition ${className}`}>
          {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`bg-btn_color  text-white hover:bg-[#3c2521] rounded-md  hover:rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
