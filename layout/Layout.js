import links from '../components/common/HeaderLinks.json';
import data from '../components/common/FooterLinks.json';
import { HeaderMiddle as Header } from '../components/common/Header';
import { FooterLinks as Footer } from '../components/common/Footer';

export default function Layout ({children}) {

    return (
        <>
        <Header links={links}/>
        <main>{children}</main>
        <Footer data={data} />
        </>
    )
}