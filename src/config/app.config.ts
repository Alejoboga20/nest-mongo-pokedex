export const envConfiguration = () => ({
  port: +process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
});
