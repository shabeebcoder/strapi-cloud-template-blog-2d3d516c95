'use strict';

/**
 * adhaar-otp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adhaar-otp.adhaar-otp');
