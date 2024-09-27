"use client";
import React from "react";
import { AppShell, Avatar, Burger, Group, Input, Menu } from "@mantine/core";

import Image from "next/image";
import Applogo from "@/public/images/Logo SAPA1.png";
import style from "@/style/layout.module.css";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightFromBracket, FaBell } from "react-icons/fa6";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

function Header(prop: HeaderProps) {
  return (
    <AppShell.Header>
      <div className={style.header_grid}>
        <div>
          <Group h="100%" px="md">
            <Burger
              opened={prop.opened}
              onClick={prop.toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Image
              src={Applogo}
              alt="App logo"
              sizes="30"
              width={100}
              height={100}
            />
          </Group>
        </div>
        <div className={style.menu_container}>
          <div className={style.notification}>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  radius="xl"
                  name="Admin Logistik"
                  color="yellow"
                  size="md"
                  className={style.avatar}
                >
                  <FaBell />
                </Avatar>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Notification</Menu.Label>
              </Menu.Dropdown>
            </Menu>
          </div>
          <div>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  radius="xl"
                  name="Admin Logistik"
                  color="initials"
                  size="md"
                  className={style.avatar}
                />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item leftSection={<FaArrowRightFromBracket />}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      <div className={style.search_container}>
        <Input
          placeholder="Search..."
          variant="unstyled"
          size="md"
          leftSection={<FaSearch size={16} color="white" />}
          className={style.search_nav}
        />
      </div>
    </AppShell.Header>
  );
}

export default Header;
