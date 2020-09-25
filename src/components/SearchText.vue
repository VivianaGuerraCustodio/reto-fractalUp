<template>
  <div class="box-search">
    <input
      class="input-search"
      type="text"
      name="Buscar"
      id="search"
      placeholder="Buscar"
    />
    <font-awesome-icon icon="search" class="font-icon" />
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style lang="scss">
.box-search {
  position: relative;
  flex: 0 1 364px;
  .input-search {
    border: 1px solid #828282;
    padding: 6px 42px;
    margin: 3px 270px;
    border-radius: 100px;
    position: absolute;
    height: 36px;
    width: 13em;
  }
  .font-icon {
    color: #828282;
    margin: 0 720px;
    left: -16em;
    position: absolute;
    padding: 18px 48px;
  }
}
</style>