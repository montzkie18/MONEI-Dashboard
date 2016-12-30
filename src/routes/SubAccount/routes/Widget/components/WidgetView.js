import React, {Component} from 'react';
import scriptjs from 'scriptjs';
import base64url from 'base64-url';
import classNames from './WidgetView.scss';

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 9999;

// TODO Create npm package for widget.
scriptjs(APP_CONFIG.widgetScriptURL);

class WidgetView extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      amount: 50,
      redirectUrl: 'yoursite.com/monei-callback'
    };
  }

  componentDidMount() {
    window.monei.widget.setupAll();
  }

  componentDidUpdate() {
    window.monei.widget.setupAll();
  }

  onChangeAmount = (e) => {
    this.setState({amount: e.target.value});
  };

  onChangeRedirectUrl = (e) => {
    this.setState({redirectUrl: e.target.value});
  };

  buildButtonHtml() {
    const {currency, userId, channelId} = this.props;
    const {amount, redirectUrl} = this.state;
    console.log(userId, channelId);
    const token = base64url.encode(JSON.stringify({
      u: userId,
      c: channelId
    }));

    return `<div
      class="monei-widget"
      data-amount="${amount}"
      data-currency="${currency}"
      data-token="${token}"
      data-redirect-url="${redirectUrl}"></div>`;
  }

  render() {
    const {currency} = this.props;
    const {amount} = this.state;
    const buttonHtml = this.buildButtonHtml();

    return (
      <section className="ui vertical segment">
        <div className="ui stackable grid">
          <div className="nine wide column">
            <p>Easily collect payments from your customers</p>
            <h3>1. Choose the amount you want to charge:</h3>
            <div className={classNames.amount}>
              <div className="ui labeled input">
                <div className="ui label">{currency.toUpperCase()}</div>
                <input
                  type="number"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  value={amount}
                  onChange={this.onChangeAmount}
                />
              </div>
            </div>
            <h3>2. Insert this code between <code>&lt;head&gt;&lt;/head&gt;</code> tags:</h3>
            <pre>&lt;script type=&quot;text/javascript&quot;src=&quot;https://jsapi.monei.net/widget.js&quot;&gt;&lt;
              /script&gt;</pre>
            <h3>3. Setup the callback URL:</h3>
            <div className="ui fluid input">
              <input
                type="text"
                value={this.state.redirectUrl}
                onChange={this.onChangeRedirectUrl}
              />
            </div>
            <h3>4. Insert this code in any place you want to put a widget:</h3>
            <pre>{buttonHtml}</pre>
          </div>
        </div>
        <h2>Demo</h2>
        <div dangerouslySetInnerHTML={{__html: buttonHtml}}></div>
      </section>
    );
  }
}

WidgetView.propTypes = {};
WidgetView.defaultProps = {};

export default WidgetView;