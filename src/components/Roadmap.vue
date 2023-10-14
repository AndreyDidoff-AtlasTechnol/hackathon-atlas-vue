<template>
  <div>
    <div
      class="topic"
      v-for="(topic, index) in data"
      :key="`roadmap-topic-${index}`"
    >
      <p style="font-weight: 600">{{ topic.title }}</p>

      <button
        v-for="(item, index) in topic.items"
        :key="`roadmap-item-${index}`"
      >
        <span>{{ item.name }}</span>
        <div class="icon">
          <img
            :src="require(`@/images/icons/${item.icon}.png`)"
            alt="Button icon"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roadmap-list',
  props: {
    data: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.topic {
  margin-bottom: 24px;

  &__title {
    font-weight: 600;
  }

  button {
    width: 100%;
    padding: 12px;
    margin-top: 12px;
    background-color: #702FC2;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 15px;
      color: #FFF;
    }

    .icon {
      width: 40px;
    }
  }
}
</style>
