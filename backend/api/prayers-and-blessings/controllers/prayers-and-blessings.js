'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const newEmail = ({
  id, 
  nameReceipent,
  Sender,
  receiver_email,
  message,
}) => {
  const content = `
    <div style="max-width: 620px">
      <p style="margin-left: 32px; margin-top: 40px">Dear , </p>
      <p style="margin-left: 32px; margin-bottom: 40px">${Sender} has lit a candle for you:</p>
      <img width="620" style="margin-bottom: 40px" src="https://prayers-and-blessings.herokuapp.com/email-bg.jpg">
      <br />
      <div style="text-align: center;">
        <a style="background:#c2a25f;
          text-decoration:none;
          color:white;
          text-align: center;
          border-radius: 20px;
          padding: 10px 24px;
          display: inline-block;
          margin: 0 auto;
          "
          href="${process.env.FRONT_END_URL}/view-candle?candleId=${id}"
        >
          Click here to view your candle
        </a>
      </div>
      <br><br><br><br>
      <p style="text-align:center;">
        <a 
          href="https://www.facebook.com/"
          style="'margin': '0px 5px;'"
          >
            <img width="24" height="24" style="background: black" src="https://prayers-and-blessings.herokuapp.com/icon-facebook.svg" />
        </a>
        <a 
          href="https://twitter.com"
          style="'margin': '0px 5px;'"
          >
            <img width="24" height="24"style="background:black" src="https://prayers-and-blessings.herokuapp.com/icon-twitter.svg" />
        </a>
      </p>
      <br />
      <hr />
      <br/>
      <p style="text-align: center; margin-bottom: 60px">
        Copyright © 2020 Prayers & Blessings, All rights reserved.
      </p>
    </div>
  `;
  
  const emailInput = {
    to: receiver_email,
    from: `joelrobuchon@strapi.io`,
    replyTo: 'no-reply@strapi.io',
    subject: 'You have received a prayer',
    text: 'Hello world!',
    html: content ,
  }
  return emailInput;
}

module.exports = {
/**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services['prayers-and-blessings'].create(data, { files });
    } else {
      entity = await strapi.services['prayers-and-blessings'].create(ctx.request.body);
    }

    await strapi.plugins['email'].services.email.send(newEmail(entity));
    
    return sanitizeEntity(entity, { model: strapi.models['prayers-and-blessings'] });
  },
};
