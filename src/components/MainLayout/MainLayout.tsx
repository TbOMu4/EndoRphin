import React, { type ReactNode } from "react";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className="main-layout">{children}</main>;
};

export default MainLayout;
