<template>
  <div>
    <div
      class="topic"
      v-for="(topic, index) in data"
      :key="`roadmap-topic-${index}`"
    >
      <p class="topic__title">{{ topic.title }}</p>

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  &__title {
    font-weight: 600;
  }

  button {
    background-color: #702FC2;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;

    span {
      font-weight: 600;
      font-size: 16px;
      color: #FFF;
    }

    .icon {
      width: 40px;
    }
  }
}
</style>
