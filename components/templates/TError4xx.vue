<template>
  <div>
    <div>[ {{ statusCode }}] {{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "TError4xx",
  props: {
    error: {
      required: true,
      type: Object,
    },
  },
  computed: {
    statusCode() {
      return this.error.statusCode || "4xx";
    },
    message() {
      return this.error.message;
    },
  },
};
</script>
