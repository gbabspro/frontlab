import React from "react";
import templateConfig from "../templateConfig";
import classnames from "classnames";

const AuthLayout = ({ children, ...rest }) => {
   return (
      <div
         className={classnames("login-layout wrapper gradient-deep-orange-orange", {
            "layout-dark": templateConfig.layoutDark
         })}
      >
         <main className="main text-muted">{children}</main>
      </div>
   );
};

export default AuthLayout;


