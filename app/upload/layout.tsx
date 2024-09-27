import LayoutMain from "@/components/partials/main";
import UploadProvider from "@/context/uploadContext";

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UploadProvider>{children}</UploadProvider>;
}
