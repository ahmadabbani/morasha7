export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, Netlify Functions with ES Modules!",
    }),
  };
};
