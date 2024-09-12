<script setup lang="ts">
import { ThingsHeaderProps } from "@/types/data";
import { computed, toRefs, unref } from "vue";

const props = defineProps<ThingsHeaderProps>();

const { userThings, chooseThings, userThingsActive } = toRefs(props);

const userBlock = computed(() =>
  unref(userThingsActive).map((id) => {
    return unref(userThings).find((item) => item.id === id);
  })
);

const chooseBlock = computed(() =>
  unref(chooseThings).filter(({ active }) => active)
);

const removeUserBlock = (id: number) => {
  unref(userThingsActive).splice(unref(userThingsActive).indexOf(id), 1);
};
</script>

<template>
  <ARow justify="space-between">
    <ACol class="tags" :span="4">
      <a-badge :count="userThingsActive.length">
        <a-space :size="[0, 'small']" wrap>
          <a-tag
            closable
            @close.prevent="removeUserBlock(item.id)"
            v-for="(item, index) in userBlock"
            :key="index"
          >
            {{ item.name }}
          </a-tag>
        </a-space>
      </a-badge>
    </ACol>
    <ACol class="tags" :span="4">
      <a-badge :count="chooseBlock.length">
        <a-space :size="[0, 'small']" wrap>
          <a-tag
            closable
            @close.prevent="item.active = false"
            v-for="(item, index) in chooseBlock"
            :key="index"
          >
            {{ item.name }}
          </a-tag>
        </a-space>
      </a-badge>
    </ACol>
  </ARow>
</template>

<style scoped lang="scss">
.tags {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 16px;
}
</style>
