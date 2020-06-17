'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const newEmail = (data) => {
    console.log('New Email');
    return `
    Hi
    <br />
    <p>
      ${data.Sender} has lit a candle for you:
    </p>
    <img style={{width: '100%', height: 'auto'}} src="http://localhost:1338/email-bg.jpg" />
    <br />

    <a style="
      'background': '#c2a25f';
      'text-decoration': 'none';
      'color': 'white';
      'text-align': 'center';
      'border-radius': '20px';
      'padding': '10px 20px';
      "
      href="http://localhost:3000/view-candle/${data.id}"
      >
        Click here to view your candle
    </a>

    <br />
    <p style="
      'text-align': 'center'
      ">
      ${data.message}
    </p>
    <br/>
    <hr />
    <p>
    <a 
      href="https://www.facebook.com/"
      style="'margin': '0px 5px;'"
      >
        <img style="width: '10px', height: 'auto', 'background': 'black'" src="http://localhost:1338/icon-facebook.svg" />
    </a>
    <a 
      href="https://twitter.com"
      style="'margin': '0px 5px;'"
      >
        <img style="width: '10px', height: 'auto', 'background': 'black' " src="http://localhost:1338/icon-twitter.svg" />
    </a>
    </p>
    <br/>
    <p>
      Copyright © 2020 Prayers & Blessings, All rights reserved.
    </p>
    `
}

module.exports = {
/**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    let content;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services['prayers-and-blessings'].create(data, { files });
      console.log(entity);
      content = newEmail(entity);
    } else {
      entity = await strapi.services['prayers-and-blessings'].create(ctx.request.body);
      console.log(entity);
      content = newEmail(entity);
    }

    await strapi.plugins['email'].services.email.send({
        to: 'jhdezcruz@gmail.com',
        from: 'joelrobuchon@strapi.io',
        replyTo: 'no-reply@strapi.io',
        subject: 'You have received a prayer',
        text: 'Hello world!',
        html: content ,
      });
    
    return sanitizeEntity(entity, { model: strapi.models['prayers-and-blessings'] });
  },
};
