import { siteConfig } from '@/app/_const/site-config';


const {
  siteTitle,
  siteTitlePipe,
  siteDescription,
  siteUrl,
  siteLang,
  siteLocale,
  siteType,
  siteThemeColor: { light: siteThemeColorLight, dark: siteThemeColorDark },
  siteRobots: { index: siteRobotsIndex, follow: siteRobotsFollow, nocache: siteRobotsNocache },
} = siteConfig;

interface SiteMeta {
  siteTitle: string;
  siteTitlePipe: string;
  siteDesc: string;
  siteUrl: string;
  siteLang: string;
  siteLocale: string;
  siteType: string;
  siteThemeColorLight: string;
  siteThemeColorDark: string;
  siteRobotsIndex: boolean;
  siteRobotsFollow: boolean;
  siteRobotsNocache: boolean;
  siteOgpImage: string;
  siteOgpImageWidth: number;
  siteOgpImageHeight: number;
  siteTwitterCard: string;
  siteTwitterImage: string;
}

export const siteMeta: SiteMeta = {
  siteTitle: siteTitle,
  siteTitlePipe: siteTitlePipe,
  siteDesc: siteDescription,
  siteUrl: siteUrl,
  siteLang: siteLang,
  siteLocale: siteLocale,
  siteType: siteType,
  siteThemeColorLight: siteThemeColorLight, // ライトテーマの時のUIカラー (一部のブラウザ/端末のみ)
  siteThemeColorDark: siteThemeColorDark, // ダークテーマの時のUIカラー (一部のブラウザ/端末のみ)
  siteRobotsIndex: siteRobotsIndex,
  siteRobotsFollow: siteRobotsFollow,
  siteRobotsNocache: siteRobotsNocache,
  siteOgpImage: `${siteConfig.siteUrl}/images/opengraph-image.jpg`,
  siteOgpImageWidth: 1200,
  siteOgpImageHeight: 630,
  siteTwitterCard: 'summary_large_image',
  siteTwitterImage: `${siteConfig.siteUrl}/images/twitter-image.jpg`,
};

