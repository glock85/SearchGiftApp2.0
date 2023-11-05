export type Data = {
  data: DataResponse[];
  pagination: Pagination;
  meta: Meta;
};

export type DataResponse = {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitlyGIFURL: string;
  bitlyURL: string;
  embedURL: string;
  username: string;
  source: string;
  title: string;
  rating: Rating;
  contentURL: string;
  sourceTLD: SourceTLD;
  sourcePostURL: string;
  isSticker: number;
  importDatetime: Date;
  trendingDatetime: string;
  images: Images;
  user?: User;
  analyticsResponsePayload: string;
  analytics: Analytics;
};

export type Analytics = {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
};

export type Onclick = {
  url: string;
};

export type Images = {
  downsized_medium: any;
  original: FixedHeight;
  downsized: The480_WStill;
  downsizedLarge: The480_WStill;
  downsizedMedium: The480_WStill;
  downsizedSmall: DownsizedSmall;
  downsizedStill: The480_WStill;
  fixedHeight: FixedHeight;
  fixedHeightDownsampled: FixedHeight;
  fixedHeightSmall: FixedHeight;
  fixedHeightSmallStill: The480_WStill;
  fixedHeightStill: The480_WStill;
  fixedWidth: FixedHeight;
  fixedWidthDownsampled: FixedHeight;
  fixedWidthSmall: FixedHeight;
  fixedWidthSmallStill: The480_WStill;
  fixedWidthStill: The480_WStill;
  looping: Looping;
  originalStill: The480_WStill;
  originalMp4: DownsizedSmall;
  preview: DownsizedSmall;
  previewGIF: The480_WStill;
  previewWebp: The480_WStill;
  the480WStill: The480_WStill;
};

export type The480_WStill = {
  height: string;
  width: string;
  size: string;
  url: string;
};

export type DownsizedSmall = {
  height: string;
  width: string;
  mp4Size: string;
  mp4: string;
};

export type FixedHeight = {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4Size?: string;
  mp4?: string;
  webpSize: string;
  webp: string;
  frames?: string;
  hash?: string;
};

export type Looping = {
  mp4Size: string;
  mp4: string;
};

export type Rating = "g" | "pg-13" | "pg";

export type SourceTLD = "canticosworld.com" | "" | "www.pinterest.com";

export type Type = "gif";

export type User = {
  avatarURL: string;
  bannerImage: string;
  bannerURL: string;
  profileURL: string;
  username: string;
  displayName: string;
  description: string;
  instagramURL: string;
  websiteURL: string;
  isVerified: boolean;
};

export type Meta = {
  status: number;
  msg: string;
  responseID: string;
};

export type Pagination = {
  totalCount: number;
  count: number;
  offset: number;
};
