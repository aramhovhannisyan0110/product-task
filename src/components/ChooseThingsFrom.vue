<script lang="ts" setup>
import { CheckCircleOutlined } from "@ant-design/icons-vue";
import { ThingsData } from "@/types/data";
import { unref } from "vue";

const dataSource = defineModel<Array<ThingsData>>("dataSource", {
  default: [],
});

const addThingsToChosenList = (item: ThingsData) => {
  if (
    unref(dataSource).filter(({ active }) => active).length >= 1 &&
    !item.active
  ) {
    return;
  }
  item.active = !item.active;
};
</script>

<template>
  <a-card title="Вещи на выбор">
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
              v-if="item.active"
              style="font-size: 24px; color: green"
            />
          </a-col>
        </a-row>
      </a-card-grid>
    </template>
  </a-card>
</template>

<style scoped></style>
