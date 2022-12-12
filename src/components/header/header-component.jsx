import MobileHeader from "components/mobile-header/mobile-header.component";
import { ReactComponent as GetirLogo } from "assets/images/getir.svg";
import { ReactComponent as ActiveGetirLogo } from "assets/images/getir-active.svg";
import { ReactComponent as GetirYemekLogo } from "assets/images/getir-yemek.svg";
import { ReactComponent as GetirBuyukLogo } from "assets/images/getir-buyuk.svg";
import { ReactComponent as GetirSuLogo } from "assets/images/getir-su.svg";
import {
  ExtendContainerEl,
  LinkContainerEl,
  UserSettingsEl,
  UserNavLinkEl,
} from "./header.styles";
import { Link } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="md:sticky md:top-0 md:z-50 bg-brand-color">
        <ExtendContainerEl>
          <LinkContainerEl>
            <Link to="/" className={`${pathname == "/" ? "active" : ""}`}>
              {pathname === "/" ? (
                <ActiveGetirLogo className="w-8 md:w-9 h-[14px] md:h-4"></ActiveGetirLogo>
              ) : (
                <GetirLogo className="w-8 md:w-9 h-[14px] md:h-4"  />
              )}
            </Link>
            <Link to="/">
              <GetirYemekLogo width="87" height="16" className="w-[76px] md:w-[87px] h-[14px] md:h-4" />
            </Link>
            <Link to="/">
              <GetirBuyukLogo className="w-[71px] md:w-20 h-[14px] md:h-4" />
            </Link>
            <Link to="/">
              <GetirSuLogo className="w-[46px] md:w-[52px] h-[14px] md:h-4" />
            </Link>
          </LinkContainerEl>

          <UserSettingsEl>
            <UserNavLinkEl>
              <RiGlobalLine size={20} />
              <span className="hidden lg:inline">Türkçe (TR)</span>
            </UserNavLinkEl>
            <UserNavLinkEl>
              <BsFillPersonFill size={20} />
              <span className="hidden lg:inline">Giriş Yap</span>
            </UserNavLinkEl>
            <UserNavLinkEl>
              <IoPersonAdd size={18} />
              <span className="hidden lg:inline">Kayıt Ol</span>
            </UserNavLinkEl>
          </UserSettingsEl>
        </ExtendContainerEl>
      </div>
      <MobileHeader/>
      <Outlet />
    </>
  );
};

export default Header;
