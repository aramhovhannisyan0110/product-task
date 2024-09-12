<script lang="ts" setup>
import { CheckCircleOutlined } from "@ant-design/icons-vue";
import { ThingsData } from "@/types/data";
import { computed, toRefs, unref } from "vue";

const props = defineProps<{
  dataSource: Array<ThingsData>;
}>();
const active = defineModel<number[]>("active", {
  default: [],
});

const { dataSource } = toRefs(props);

const idIsExists = computed(
  () => (id: number) => unref(active).some((item) => item === id)
);

const addThingsToChosenList = (item: ThingsData) => {
  if (unref(active).length >= 6 && !unref(idIsExists)(item.id)) {
    return;
  }
  if (unref(idIsExists)(item.id)) {
    unref(active).splice(unref(active).indexOf(item.id), 1);
  } else {
    unref(active).push(item.id);
  }
};
</script>

<template>
  <a-card title="Вещи у пользователя">
    <template v-for="(item, index) in dataSource" :key="index">
      <a-card-grid
        @click.prevent="addThingsToChosenList(item)"
        style="width: 25%; text-align: center; cursor: pointer"
      >
        <a-row style="width: 100%">
          <a-col :span="22" style="font-size: 24px">
            {{ item.name }}
          </a-col>
          <a-col :span="2">
            <CheckCircleOutlined
              v-if="idIsExists(item.id)"
              style="font-size: 24px; color: green"
            />
          </a-col>
        </a-row>
      </a-card-grid>
    </template>
  </a-card>
</template>
