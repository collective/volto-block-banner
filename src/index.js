import {
  BannerEdit,
  BannerView,
} from '@plone-collective/volto-block-banner/components/Blocks/Banner';

import iconSVG from '@plone/volto/icons/presentation.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.educalBanner = {
    id: 'banner',
    title: 'Educal Banner',
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
  return config;
};

export default applyConfig;
