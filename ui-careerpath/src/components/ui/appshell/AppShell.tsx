import Footer from "../footer/Footer";
import Header from "../header/Header";

interface AppShellProps {
  children: React.ReactElement;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default AppShell;
