<template>
  <div></div>
  <div
    class="fixed top-6 z-[101] w-full flex justify-center"
    v-bind:class="{
      hidden: !store.isShow,
    }"
  >
    <div
      class="flex justify-between items-center shadow-xl"
      :class="{
        'bg-orange-100': store.dialogType === 'warning',
        'bg-green-100': store.dialogType === 'success',
        'bg-blue-100': store.dialogType === 'info',
        'bg-red-100': store.dialogType === 'error',
      }"
    >
      <div
        class="p-4 border-l-4 min-w-[400px]"
        :class="{
          'bg-orange-100  border-orange-500 text-orange-700':
            store.dialogType === 'warning',
          'bg-green-100 border-green-500 text-green-700':
            store.dialogType === 'success',
          'bg-blue-100 border-blue-500 text-blue-700':
            store.dialogType === 'info',
          'bg-red-100 border-red-500 text-red-700':
            store.dialogType === 'error',
        }"
        role="alert"
      >
        <p class="font-bold">{{ store.dialogContent.title }}</p>
        <p>{{ store.dialogContent.firstLine }}</p>
        <p v-if="store.dialogContent.secondLine">
          {{ store.dialogContent.secondLine }}
        </p>
      </div>
      <div class="flex flex-col justify-start h-full p-1">
        <button
          @click="store.reset()"
          class="flex justify-center items-center bg-no-repeat w-[30px] h-[30px] hover:rounded-full"
          style="
            background-image: url('/BikeFestival17th-Frontend/schedule/close.svg');
            background-size: 30px 30px;
          "
          :class="{
            ' hover:bg-orange-200': store.dialogType === 'warning',
            'hover:bg-green-200': store.dialogType === 'success',
            'hover:bg-blue-200': store.dialogType === 'info',
            'hover:bg-red-200': store.dialogType === 'error',
          }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDialogStore } from "../stores/dialog";
const store = useDialogStore();
</script>
