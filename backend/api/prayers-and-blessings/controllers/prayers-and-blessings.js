'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const newEmail = ({
  id, 
  Sender,
  receiver_email,
  message,
}) => {
  const content = `
    <style>
    
    </style>
    Hi
    <br />
    <p>
      ${Sender} has lit a candle for you:
    </p>
    <img style={{width: '100%', height: 'auto'}} src="${process.env.FRONT_END_URL}/email-bg.jpg" />
    <br />

    <a style="
      'background': '#c2a25f';
      'text-decoration': 'none';
      'color': 'white';
      'text-align': 'center';
      'border-radius': '20px';
      'padding': '10px 20px';
      "
      href="${process.env.FRONT_END_URL}/view-candle?candleId=${id}"
      >
        Click here to view your candle
    </a>

    <br />
    <p style="
      'text-align': 'center'
      ">
      ${message}
    </p>
    <br/>
    <hr />
    <p>
    <a 
      href="https://www.facebook.com/"
      style="'margin': '0px 5px;'"
      >
        <img style="width: '10px', height: 'auto', 'background': 'black'" src="${process.env.FRONT_END_URL}/icon-facebook.svg" />
    </a>
    <a 
      href="https://twitter.com"
      style="'margin': '0px 5px;'"
      >
        <img style="width: '10px', height: 'auto', 'background': 'black' " src="${process.env.FRONT_END_URL}/icon-twitter.svg" />
    </a>
    </p>
    <br/>
    <p>
      Copyright © 2020 Prayers & Blessings, All rights reserved.
    </p>
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
