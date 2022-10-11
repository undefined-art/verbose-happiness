import Footer from "@components/footer";
import React, { Suspense } from "react";
import { FCC } from "../../../interfaces/react/fc-with-children";
import Header from "../header";

export interface ILayout {
  hasHeader?: boolean;
}

const Layout: FCC<ILayout> = ({ children, hasHeader = true }) => (
  <div>
    {hasHeader && <Header />}
    <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    <Footer />
  </div>
);

export default Layout;
