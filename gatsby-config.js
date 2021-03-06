const dir = `${__dirname}${process.env.DOCZ ? "/.." : ""}`

const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${dir}/src/images`,
    },
  },
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-sharp",
    options: {
      // base64Width: 20,
      // forceBase64Format: ``, // valid formats: png,jpg,webp
      // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      // stripMetadata: true,
      defaultQuality: 95,
      // failOnError: true,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Bất động sản nhà đất căn hộ Trần Thùy Chinh",
      short_name: "Bất động sản nhà đất căn hộ Trần Thùy Chinh",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "minimal-ui",
      icon: `${dir}/src/images/icon.png`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "fonts",
      path: `${dir}/src/fonts`
    }
  },
  {
    resolve: 'gatsby-plugin-matomo',
    options: {
      siteId: '1',
      matomoUrl: 'https://analytics.scrlk.pl',
      siteUrl: 'https://magdaklag.pl',
      requireConsent: false,
      disableCookies: true,
      dev: false,
    },
  },
  "gatsby-plugin-preact",
  "gatsby-plugin-brotli",
  "gatsby-plugin-postcss",
  "gatsby-plugin-typescript",
]

module.exports = {
  siteMetadata: {
    title: "Bất động sản nhà đất căn hộ Trần Thùy Chinh",
    description: "Design",
    author: "Phạm Xuân Tiếp",
    creator: "tiep.us",
    publisher: "Scroll-Lock.pl",
    siteUrl: 'https://magdaklag.pl',
    repository: 'https://github.com/Tymek/klg',
  },
  plugins,
}
