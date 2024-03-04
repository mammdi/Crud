import { Section1, Section2 } from "./index";
import "./home.css";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section7 from "./Section7";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Layout from "../../component/layout/Layout";

function Home() {
  return (
    <Layout >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Layout>
  );
}

export default Home;
