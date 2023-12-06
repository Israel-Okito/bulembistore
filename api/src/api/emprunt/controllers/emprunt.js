'use strict';

/**
 * emprunt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::emprunt.emprunt',{


async create(ctx) {

    ctx.request.body.data.user = ctx.state.user;   // undefined

    let emprunt= await super.create(ctx);

    return emprunt;

  },

async find(ctx) {
  const user = ctx.state.user;

  ctx.query.filters ={
    ...(ctx.query.filters || {}),
    user: user.id

  };

  return super.find(ctx);
  
}


})