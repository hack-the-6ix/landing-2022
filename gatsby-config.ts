import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

type Environments = 'production' | 'development';
const buildEnv =
  process.env.BUILD_ENV ??
  process.env.NODE_ENV ??
  ('development' as Environments);
const isDev = buildEnv === 'development';

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: `2022-landing`,
    siteUrl: `https://www.yourdomain.tld`,
    event: {
      start: new Date('2022-8-19'),
      end: new Date('2022-8-21 23:59:59'),
    },
    applications: {
      start: new Date(),
      end: new Date(),
    },
    socials: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/HackThe6ix',
      },
      {
        type: 'instagram',
        link: 'https://www.facebook.com/HackThe6ix',
      },
      {
        type: 'twitter',
        link: 'https://www.facebook.com/HackThe6ix',
      },
      {
        type: 'linkedin',
        link: 'https://linkedin.com/company/hackthe6ixofficial',
      },
    ],
    featureFlags: {
      applications: false,
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    'gatsby-plugin-netlify',
    !isDev && 'gatsby-plugin-mini-css-class-name',
  ].filter(Boolean),
};

export default config;
