<script lang="ts">
import { kBlockTitle, kBlock, kList, kListInput } from "konsta/vue";
import { studentChoices } from "~/composables/constants";

import { useAccountStore } from "~/stores/account";

export default {
  components: {
    kBlockTitle,
    kBlock,
    kList,
    kListInput,
  },
  data() {
    return {
      studentChoices,
    };
  },
};
</script>

<script setup lang="ts">
definePageMeta({ layout: "mobile" });
useHead({ title: "Settings - Classes" });

// User account and settings.
const account = useAccountStore();

// Used to temporarily store the user's choices.
const select = reactive({
  languages: { lva: account.languages.lva, lvb: account.languages.lvb },
  options: { op1: account.options.op1, op2: account.options.op2 },
  specialties: { sp1: account.specialties.sp1, sp2: account.specialties.sp2, sp3: account.specialties.sp3 },
});

// Page main element used to hide the settings until the options has been loaded.
const settingsEl = ref(null);

// Languages select refs.
const lvaSelect = ref(null);
const lvbSelect = ref(null);

// Options select refs.
const op1Select = ref(null);
const op2Select = ref(null);

// Specialties select refs.
const sp1Select = ref(null);
const sp2Select = ref(null);
const sp3Select = ref(null);

onMounted(() => {
  // Load current user settings into the forms.
  lvaSelect.value.inputElRef.value = select.languages.lva;
  lvbSelect.value.inputElRef.value = select.languages.lvb;

  op1Select.value.inputElRef.value = select.options.op1;
  op2Select.value.inputElRef.value = select.options.op2;

  sp1Select.value.inputElRef.value = select.specialties.sp1;
  sp2Select.value.inputElRef.value = select.specialties.sp2;
  sp3Select.value.inputElRef.value = select.specialties.sp3;

  // When the settings are loaded, show the settings.
  settingsEl.value.style.display = "block";
});
</script>

<template>
  <div ref="settingsEl" class="hidden">
    <k-block-title>{{ $t("settings.specialties") }}</k-block-title>
    <k-list inset :hairlines="true">
      <k-list-input
        ref="sp1Select"
        label="SP1"
        type="select"
        dropdown
        @change="(e) => (select.specialties.sp1 = e.target.value)"
      >
        <option v-for="choice in studentChoices.specialties" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
      <k-list-input
        ref="sp2Select"
        label="SP2"
        type="select"
        dropdown
        @change="(e) => (select.specialties.sp2 = e.target.value)"
      >
        <option v-for="choice in studentChoices.specialties" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
      <k-list-input
        ref="sp3Select"
        label="SP3"
        type="select"
        dropdown
        @change="(e) => (select.specialties.sp3 = e.target.value)"
      >
        <option v-for="choice in studentChoices.specialties" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
    </k-list>

    <k-block-title>{{ $t("settings.languages") }}</k-block-title>
    <k-list inset :hairlines="true">
      <k-list-input
        ref="lvaSelect"
        label="LVA"
        type="select"
        dropdown
        @change="(e) => (select.languages.lva = e.target.value)"
      >
        <option v-for="choice in studentChoices.languages.lva" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
      <k-list-input
        ref="lvbSelect"
        label="LVB"
        type="select"
        dropdown
        @change="(e) => (select.languages.lvb = e.target.value)"
      >
        <option v-for="choice in studentChoices.languages.lvb" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
    </k-list>

    <k-block-title>{{ $t("settings.options") }}</k-block-title>
    <k-list inset :hairlines="true">
      <k-list-input
        ref="op1Select"
        label="OP1"
        type="select"
        dropdown
        @change="(e) => (select.options.op1 = e.target.value)"
      >
        <option v-for="choice in studentChoices.options.op1" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
      <k-list-input
        ref="op2Select"
        label="OP2"
        type="select"
        dropdown
        @change="(e) => (select.options.op2 = e.target.value)"
      >
        <option v-for="choice in studentChoices.options.op2" :key="choice" :value="choice.value">
          {{ $t(choice.label) }}
        </option>
      </k-list-input>
    </k-list>

    <k-block><div class="h-4" /></k-block>

    <!--    <k-block-->
    <!--      v-if="select.options.lvb !== account.options.lvb || select.options.lvc !== account.options.lvc"-->
    <!--      class="-mt-4 flex flex-row gap-4"-->
    <!--    >-->
    <!--      <k-button class="h-12 w-20" @click="account.updateOptions(select.options)">-->
    <!--        {{ $t("settings.save") }}-->
    <!--      </k-button>-->
    <!--    </k-block>-->
  </div>
</template>
