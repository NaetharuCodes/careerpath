import Footer from "../footer/Footer";
import Header from "../header/Header";

const AppShell = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">CONTENT</div>
      <Footer />
    </div>
  );
};

export default AppShell;
