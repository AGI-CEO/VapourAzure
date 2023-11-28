import Header from "./Header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import Library from "./Library";
import GameCaseComp from "./GameCaseComp";
import GameCarousel from "./GameCarousel";
// import ModelReference from "./ModelReference";
const App = () => {
  return (
    <div className="min-h-[100dvh]">
      <Header />
      <GameCarousel />
      {/* <FrontPage/> */}
      <Library />
      <Footer />
    </div>
  );
};

export default App;
