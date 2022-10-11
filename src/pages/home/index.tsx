import DiveIn from "../../common/components/dive-in";
import Features from "../../common/components/features";
import Footer from "../../common/components/footer";
import Header from "../../common/components/header";
import Timer from "../../common/components/timer";

const Home = () => {
  return (
    <div className="bg-[#46244C]">
      <Features />
      <Timer />
      <DiveIn />
    </div>
  );
};

export default Home;
