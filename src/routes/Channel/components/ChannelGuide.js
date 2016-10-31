import React, {PropTypes} from 'react';
import cx from 'classnames';
import classNames from './ChannelGuide.scss';
import ShopifyGuide from './ShopifyGuide';
import PrestaShopGuide from './PrestaShopGuide';
import WooCommerceGuide from './WooCommerceGuide';

const ChannelGuide = ({
  channel, 
  copy, 
  selectedPlatform, 
  selectPlatform, 
  showNewMessage, 
  isInSandboxMode, 
  isMerchant
}) => (
  <div className="ui segments">
    <div className="ui basic segment">
      { selectedPlatform === 0 ?
        <h2 className="ui header">Select your platform</h2>
        : 
        <div className="ui massive breadcrumb">
          <a className="section" onClick={() => selectPlatform(0)}>Select your platform</a>
          <i className="right chevron icon divider"></i>
          { selectedPlatform === 1 ?
            <span className="active section">WooCommerce</span>
            : selectedPlatform === 2 ?
            <span  className="active section">Shopify</span>
            : selectedPlatform === 3 ?
            <span  className="active section">PrestaShop</span>
            : null
          }
        </div>
      }

      { selectedPlatform === 0 ?
          <div className="ui three column grid">
            <div className="row">
              <div className={cx("column", classNames.link)} onClick={() => selectPlatform(1)}>
                <img src="/woocommerce-logo.png" alt="WooCommerce"/>
              </div>
              <div className={cx("column", classNames.link)} onClick={() => selectPlatform(2)}>
                <img src="/shopify-logo.png" alt="Shopify"/>
              </div>
              <div className={cx("column", classNames.link)} onClick={() => selectPlatform(3)}>
                <img src="/prestashop-logo.png" alt="PrestaShop"/>
              </div>
            </div>
          </div>
        : selectedPlatform === 1 ?
          <WooCommerceGuide/>
        : selectedPlatform === 2 ?
          <ShopifyGuide {...{channel, copy, showNewMessage, isInSandboxMode, isMerchant}}/>
        : selectedPlatform === 3 ?  
          <PrestaShopGuide/>
        : null
      }
    </div>
    { selectedPlatform === 0 ?
        <div className="ui center aligned basic segment">
          <p>Your platform is not here?&nbsp;
            <a href="#" onClick={showNewMessage}>Contact us!</a>
          </p>
          <p>Are you hot on building your own MONEI integration?&nbsp;
            <a href="https://docs.monei.net/" target="_blank">Click here to read the API docs!</a>
          </p>
        </div>
      : null
    }
  </div>
);

export default ChannelGuide;