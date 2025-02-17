import {
  Achievement,
  CTA,
  Categories,
  Footer,
  Hero,
  Navbar,
} from "../../components/landingPage";
import Process from "../../components/landingPage/Process";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Process />
      <Categories />
      <Achievement />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
