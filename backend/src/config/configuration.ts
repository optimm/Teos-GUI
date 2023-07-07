export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  frontendUrl: process.env.FRONTEND_URL,
  apiGlobalPrefix: process.env.API_GLOBAL_PREFIX,
});
