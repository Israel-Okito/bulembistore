'use strict';

/**
 * reservation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reservation.reservation',{


async create(ctx) {

    ctx.request.body.data.user = ctx.state.user;   // undefined

    let calendar= await super.create(ctx);

    return calendar;

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