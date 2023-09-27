import { Link } from "react-router-dom";
import { FooterLinks } from "../../Data";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 h-full w-full">
      <div className="flex gap-10 items-center justify-around">
        {FooterLinks.map((link) => {
          return (
            <div className="flex flex-col gap-6">
              <h2 className="text-base font-bold">{link.title}</h2>
              <div className="flex flex-col gap-5">
                {link.links.map((lk) => (
                  <Link
                    to="/"
                    key={link.title}
                    className="font-light text-sm text-black"
                  >
                    {lk}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
