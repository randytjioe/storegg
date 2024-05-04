import React from "react";
import Profile from "./Profile";
import Footer from "../Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings"
    | "logout";
}
export default function SideBar(props: Partial<SideBarProps>) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem
            title="Messages"
            icon="ic-menu-messages"
            active={activeMenu === "messages"}
            href="/member"
          />
          <MenuItem
            title="Card"
            icon="ic-menu-card"
            active={activeMenu === "card"}
            href="/member"
          />
          <MenuItem
            title="Rewards"
            icon="ic-menu-rewards"
            active={activeMenu === "rewards"}
            href="/member"
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
      </div>
    </section>
  );
}
