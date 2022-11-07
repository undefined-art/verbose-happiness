import Footer from "@components/footer";
import React, { Suspense } from "react";
import { FCC } from "@interfaces/react/fc-with-children";
import Header from "../header";
import { Helmet } from "react-helmet";
import "./styles.module.scss";

export interface ILayout {
  isHeaderVisible?: boolean;
  isFooterVisible?: boolean;
  title?: string;
}

const Layout: FCC<ILayout> = ({
  children,
  title = "Verbose Happiness",
  isHeaderVisible = true,
  isFooterVisible = true,
}) => (
  <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    {isHeaderVisible && <Header />}
    <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    {isFooterVisible && <Footer />}
  </main>
);

export default Layout;
