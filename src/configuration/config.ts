/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default require(`./environments/${process.env.NODE_ENV}`);
