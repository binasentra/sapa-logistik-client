import { AppShell } from "@mantine/core";
import style from "@/style/layout.module.css";
import { IMENU } from "@/config/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar({ menu }: { menu: IMENU[] }) {
  const pathName = usePathname();

  return (
    <AppShell.Navbar p="md">
      <div className={style.sidebar_container}>
        <h5 className={style.menu_main_title}>Dashboard</h5>
        {menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`${style.menu_item} ${
                pathName === item.path ? style.active_menu : ""
              }`}
            >
              <span className={style.menu_icon}>{item.icon}</span>
              <span className={style.menu_title}>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </AppShell.Navbar>
  );
}
