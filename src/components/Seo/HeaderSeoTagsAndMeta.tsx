import React from "react";
import Helmet from "react-helmet";
import { SiteSeoConfigs } from "../../data/SiteConfigs";

interface PropsTypes<T extends object> {
  title?: string;
  PageData?: T;
}

const HeaderSeoTagsAndMeta = (props: PropsTypes<any>) => {
  return (
    <Helmet>
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <link rel="icon" href={SiteSeoConfigs.icon} />
      <link href={SiteSeoConfigs.icon} rel="shortcut icon" type="image/x-icon" />
      <link href={SiteSeoConfigs.AppleIcon} rel="apple-touch-icon" sizes="180x180" />
      <meta content={SiteSeoConfigs.themeColor} name="theme-color" />
      <link rel="canonical" href={SiteSeoConfigs.canonical} />
      <meta content="INDEX, FOLLOW" name="ROBOTS" />

      <title>{props?.title || SiteSeoConfigs.title}</title>
      <meta content={SiteSeoConfigs.title} name="title" />

      <meta content={SiteSeoConfigs.description} name="description" />

      <meta content={SiteSeoConfigs.keywords} name="keywords" />

      <meta content={SiteSeoConfigs.description} property="og:description" />

      <meta content={SiteSeoConfigs.name} property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content={SiteSeoConfigs.opengraphImage} property="og:image" />
      <meta content={SiteSeoConfigs.url} property="og:url" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={SiteSeoConfigs.url} name="twitter:url" />
      <meta content="@wynkmusic" name="twitter:site" />
      <meta content={SiteSeoConfigs.title} name="twitter:title" />
      <meta content={SiteSeoConfigs.description} name="twitter:description" />
      <meta content="200" property="og:image:width" />
      <meta content="200" property="og:image:height" />
    </Helmet>
  );
};

export default HeaderSeoTagsAndMeta;
