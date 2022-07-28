import React from 'react';
import View from '@plone-collective/volto-block-banner/components/Blocks/Banner/View';
import BannerSidebar from '@plone-collective/volto-block-banner/components/Blocks/Banner/BannerSidebar';

const Edit = (props) => {
  return (
    <>
      <View {...props} mode="edit" />
      <BannerSidebar {...props} />
    </>
  );
};

export default Edit;
