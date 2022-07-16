import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import View from '@plone-collective/volto-block-banner/components/Blocks/Banner/View';
import { BannerSchema } from '@plone-collective/volto-block-banner/components/Blocks/Banner/schema';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;

  const schema = BannerSchema();

  return (
    <>
      <View {...props} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          fieldIndex={data.index}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
