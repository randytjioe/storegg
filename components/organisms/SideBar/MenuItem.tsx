import Image from "next/image";
import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-messages"
    | "ic-menu-card"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-logout";
  active?: boolean;
  href: string;
  onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="icon" />
      </div>

      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href} legacyBehavior>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
