import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home page"}>
      <p>Hayasaka fanboi page</p>
    </Layout>
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    //   <Link to="/about">About</Link>
    // </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
