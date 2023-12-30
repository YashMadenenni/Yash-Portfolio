import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ThemeToggle
} from "./components";
const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary dark:bg-gradient-to-r from-red-800 via-red-500 to-green-800">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center dark:bg-none">
          <Navbar />
          <Hero />
          <ThemeToggle />
        </div>
        <About />

        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
