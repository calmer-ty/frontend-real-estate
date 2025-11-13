import LayoutHeader from "./LayoutHeader";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <main>{children}</main>
    </>
  );
}
