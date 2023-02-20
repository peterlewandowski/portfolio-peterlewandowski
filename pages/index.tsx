// import links from '../components/common/HeaderLinks.json';
// import data from '../components/common/FooterLinks.json';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { HeaderMiddle as Header } from '../components/common/Header';
// import { FooterLinks as Footer } from '../components/common/Footer';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
