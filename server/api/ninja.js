export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);
  //   const { age } = await readBody(event);
  //   return {
  //     message: `Hello, ${name}! You are ${age} years old.`,
  //   };

  //   We can call api here that contains private key or any authentication, so it would be secure
  const { currencyKey } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );
  return data;
});
