<!--suppress JSUnusedGlobalSymbols, JSValidateTypes -->
<script lang="ts">
import { kBlockTitle, kBlock, kList, kListInput } from "konsta/vue";
import { studentChoices } from "~/composables/constants";

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

// Used to temporarily store the user's choices.
const select = reactive({
  languages: { lva: "english_lva", lvb: "german_lvb" },
  options: { op1: "sport_op", op2: "" },
  specialties: { sp1: "math", sp2: "physics", sp3: "svt" },
});
</script>

<template>
  <div>
    <ClientOnly>
      <k-block-title>{{ $t("settings.specialties") }}</k-block-title>
      <k-list inset>
        <k-list-input
          v-for="i in 3"
          :key="i"
          :label="`SP${i}`"
          type="select"
          dropdown
          @change="(e) => (select.specialties[`sp${i}`] = e.target.value)"
        >
          <option
            v-for="choice in studentChoices.specialties"
            :key="choice"
            :value="choice.value"
            :selected="choice.value === select.specialties[`sp${i}`]"
          >
            {{ $t(choice.label) }}
          </option>
        </k-list-input>
      </k-list>

      <k-block-title>{{ $t("settings.languages") }}</k-block-title>
      <k-list inset>
        <k-list-input label="LVA" type="select" dropdown @change="(e) => (select.languages.lva = e.target.value)">
          <option
            v-for="choice in studentChoices.languages.lva"
            :key="choice"
            :value="choice.value"
            :selected="choice.value === select.languages.lva"
          >
            {{ $t(choice.label) }}
          </option>
        </k-list-input>
        <k-list-input label="LVB" type="select" dropdown @change="(e) => (select.languages.lvb = e.target.value)">
          <option
            v-for="choice in studentChoices.languages.lvb"
            :key="choice"
            :value="choice.value"
            :selected="choice.value === select.languages.lvb"
          >
            {{ $t(choice.label) }}
          </option>
        </k-list-input>
      </k-list>

      <k-block-title>{{ $t("settings.options") }}</k-block-title>
      <k-list inset>
        <k-list-input
          v-for="i in 2"
          :key="i"
          :label="`OP${i}`"
          type="select"
          dropdown
          @change="(e) => (select.options[`op${i}`] = e.target.value)"
        >
          <option
            v-for="choice in studentChoices.options[`op${i}`]"
            :key="choice"
            :value="choice.value"
            :selected="choice.value === select.options[`op${i}`]"
          >
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
    </ClientOnly>
  </div>
</template>
