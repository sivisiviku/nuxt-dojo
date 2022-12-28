<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script>
export default {
  async setup() {
    const { id } = useRoute().params;
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product } = await useFetch(uri);
    if (!product.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
        fatal: true,
      });
    }
    definePageMeta({
      layout: "products",
    });
    return { id, product };
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  props: [],
  created() {},
};
</script>

<style lang="scss" scoped></style>
