const { forwardTo } = require('prisma-binding');

const Query = {
  // Forward a query to the exact same underlying prisma query
  jokes: forwardTo('db')
};

module.exports = Query;
