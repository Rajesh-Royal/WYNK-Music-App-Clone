import React from "react";
import Container from "../../containers/container";

import FooterLinks from "./components/FooterLinks";
import FooterMenu from "./components/FooterMenu";
import DownloadAppBanner from "./components/DownloadAppBanner";
import FooterCopyright from "./components/FooterCopyright";

interface FooterTypes {}

const Footer = (props: FooterTypes): JSX.Element => {
  return (
    <React.Fragment>
      <Container>
        <footer>
          <DownloadAppBanner />
          <FooterLinks />
          <FooterMenu />
          <FooterCopyright />
        </footer>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
