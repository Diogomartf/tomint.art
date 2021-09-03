import Logo from "../components/logo";
import { TwitterLogo } from "phosphor-react";
import ListYourNFTButton from "../components/ListYourNFTButton";

const Navbar = () => (
  <div className="flex items-center justify-between py-4">
    <Logo></Logo>
    <div className="flex items-center space-x-3">
      <div className="hidden md:block">
        <ListYourNFTButton />
      </div>
      <a href="https://twitter.com/tomintart">
        <TwitterLogo
          size={24}
          className="hover:text-blue-500 hover:scale-125"
        ></TwitterLogo>
      </a>
    </div>
  </div>
);

export default Navbar;
