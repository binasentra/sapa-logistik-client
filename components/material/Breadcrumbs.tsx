import React from "react";
import { Anchor, Breadcrumbs as BreadcrumbsMantine } from "@mantine/core";

function Breadcrumbs({ title }: { title: string }) {
  return (
    <BreadcrumbsMantine>
      <Anchor href="#">Home</Anchor>
      <Anchor href="#">{title}</Anchor>
    </BreadcrumbsMantine>
  );
}

export default Breadcrumbs;
