import links from '../common/HeaderLinks.json';
import data from '../common/FooterLinks.json';
import { HeaderMiddle as Header } from '../common/Header';
import { FooterLinks as Footer } from '../common/Footer';

export default function Layout ({children}) {

    return (
        <>
        <Header links={links}/>
        <main>{children}</main>
        <Footer data={data} />
        </>
    )
}