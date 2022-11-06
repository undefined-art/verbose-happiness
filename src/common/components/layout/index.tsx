import Footer from "@components/footer";
import React, { Suspense } from "react";
import { FCC } from "@interfaces/react/fc-with-children";
import Header from "../header";
import { Helmet } from "react-helmet";

export interface ILayout {
  isHeaderVisible?: boolean;
  title?: string;
}

const Layout: FCC<ILayout> = ({
  children,
  title = "Verbose Happiness",
  isHeaderVisible = true,
}) => (
  <div className="bg-gray-800">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    {isHeaderVisible && <Header />}
    <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    <Footer />
  </div>
);

export default Layout;
