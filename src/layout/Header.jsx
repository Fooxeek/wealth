import Nav from "../components/Nav";

import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="HRnet logo" className="mr-2" />
        <h1 className="text-xl font-bold hidden md:block">HRnet</h1>
      </div>
      <Nav />
    </header>
  );
}
