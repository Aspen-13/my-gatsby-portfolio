import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About"}>
      <p>
        Sup Sup this will probably end up as a page of me just being a simp for
        hayasaka
      </p>
      <h1>she's cute bro what am i supposed to do</h1>
    </Layout>
  );
};

export const Head = () => <title>About me</title>;
export default AboutPage;
