<script setup lang="ts">
import UserThings from "@/components/UserThings.vue";
import ChooseThingsFrom from "@/components/ChooseThingsFrom.vue";
import ThingsHeader from "@/components/ThingsHeader.vue";
import { ref } from "vue";

import userThingsData from "@/data/user-things.json";
import chooseThingsData from "@/data/choose-things.json";

const userThingsActive = ref([]);

const userThingsDataSource = ref(userThingsData);

const chooseThingsFromDataSource = ref(
  chooseThingsData.map((item) => ({ ...item, active: false }))
);
</script>

<template>
  <AFlex :gap="16" vertical>
    <ThingsHeader
      :user-things="userThingsDataSource"
      :user-things-active="userThingsActive"
      :choose-things="chooseThingsFromDataSource"
    />
    <ARow :gutter="16">
      <ACol :span="12">
        <UserThings
          v-model:active="userThingsActive"
          :data-source="userThingsDataSource"
        />
      </ACol>
      <ACol :span="12">
        <ChooseThingsFrom v-model:data-source="chooseThingsFromDataSource" />
      </ACol>
    </ARow>
  </AFlex>
</template>

<style scoped></style>
