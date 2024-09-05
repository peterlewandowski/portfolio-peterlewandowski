import * as common from './common';

import data from './common/FooterLinks.json';
import links from './common/HeaderLinks.json';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <common.Header links={links} />
      <main>{children}</main>
      <common.Footer />
    </>
  );
}
