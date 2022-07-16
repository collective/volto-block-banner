import {
  BannerEdit,
  BannerView,
} from '@plone-collective/volto-block-banner/components/Blocks/Banner';

import iconSVG from '@plone/volto/icons/presentation.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.banner = {
    id: 'banner',
    title: 'Banner',
    icon: iconSVG,
    group: 'common',
    view: BannerView,
    edit: BannerEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };
  // console.log(config);
  return config;
};

export default applyConfig;
