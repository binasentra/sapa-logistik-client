"use client";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { GetMenu } from "@/config/menu";

function LayoutMain({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const menu = GetMenu();
  return (
    <AppShell
      header={{ height: 200 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <SideBar menu={menu} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default LayoutMain;
