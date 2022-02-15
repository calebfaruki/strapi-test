module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aa4b7b42af52628b0318edbb05494011'),
  },
});
