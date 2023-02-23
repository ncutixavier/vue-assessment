<template>
  <div class="search-bar">
    <v-text-field
      rounded
      hide-details
      solo
      flat
      dense
      placeholder="What fabric are you looking for?"
    ></v-text-field>

    <v-btn color="dark" dark rounded small class="px-4 py-4"> Search </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-bar {
  background-color: #fff;
  display: flex;
  border-radius: 100px;
  align-items: center;

  padding: 3px 6px 5px 0;
}
.v-btn {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-transform: none;
}

::placeholder {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: rgba(30, 30, 30, 0.5);
}
</style>
