import Header from "./components/Header";
import Hero from "./components/Hero";
import TestCases from "./components/TestCases";
import BugLog from "./components/BugLog";
import Environment from "./components/Environment";
import Coverage from "./components/Coverage";
import OtherWork from "./components/OtherWork";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TestCases />
        <BugLog />
        <Environment />
        <Coverage />
        <OtherWork />
      </main>
      <Footer />
    </>
  );
}
