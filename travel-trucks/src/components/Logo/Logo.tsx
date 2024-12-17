import { Divider } from "antd";
import { Icon } from "../Icon/Icon";
import css from "./Logo.module.css";
import { useState } from "react";

const Logo = ({}) => {
  return (
    <div className={css.logoBox}>
      <Icon id="logo" className={css.logo} />
    </div>
  );
};

export default Logo;
