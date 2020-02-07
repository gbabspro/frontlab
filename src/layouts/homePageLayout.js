import React from "react";
import templateConfig from "../templateConfig";
import classnames from "classnames";
import HomeNavbar from "../layouts/components/navbar/homeNavbar"
import HomeFooter from "./components/footer/homeFooter";
const HomePageLayout = ({ children, ...rest }) => {

   return (
      <div
         className={classnames("login-layout wrapper ", {
            "layout-dark": templateConfig.layoutDark
         })}
      >
          <HomeNavbar /> 
            <main className="main text-muted">{children}</main>
          <HomeFooter /> 
      </div>
   );
};

export default HomePageLayout;
