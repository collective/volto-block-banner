import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import OrangeCircleImage from '@plone-collective/volto-block-banner/../assets/cta-shape.png';
import '@plone-collective/volto-block-banner/components/Blocks/Banner/banner.less';

const View = ({ data }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: data.backgroundColor,
        marginBottom: data.marginBottom,
      }}
    >
      {data.showCircle ? (
        <div className="bannerBg">
          <Image src={OrangeCircleImage} />
        </div>
      ) : null}
      <div className="bannerInner">
        <div className="bannerHeader" style={{ color: data.textColor }}>
          {data.text}
        </div>
        {data.showActionButton ? (
          <div className="bannerRight">
            <Button
              className="bannerButton"
              content={data.actionButtonText}
              as="a"
              href={data.actionButtonUrl}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default View;
