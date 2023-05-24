'use strict';

/**
 * calendar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::calendar.calendar',{


async create(ctx) {

    ctx.request.body.data.user = ctx.state.user;   // undefined

    let calendar= await super.create(ctx);

    return calendar;

  }})