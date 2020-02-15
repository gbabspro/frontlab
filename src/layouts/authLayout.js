import React from "react";
import templateConfig from "../templateConfig";
import classnames from "classnames";

const AuthLayout = ({ children, ...rest }) => {
   return (
      <div
         className={classnames("login-layout wrapper", {
            "layout-dark": templateConfig.layoutDark
         })}

         style={{background:"linear-gradient(to right,#4f74fe,#70aafb)"}}
      >
         <main className="main text-muted">{children}</main>
      </div>
   );
};

export default AuthLayout;


