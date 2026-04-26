interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'MoonTen\'s Running Page',
  siteUrl: 'https://liu-ming-hua.github.io/',
  logo: 'https://raw.githubusercontent.com/liu-ming-hua/liu-ming-hua.github.io/refs/heads/master/images/MoonTen_logo.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.csdn.net/weixin_60760661?spm=1010.2135.3001.5343',
    },
    {
      name: 'About',
      url: 'https://liu-ming-hua.github.io/',
    },
  ],
};

export default data;
