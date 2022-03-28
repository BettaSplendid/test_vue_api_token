<template>
  <div>
    <h1>liste patients - patient view</h1>
    <button @click="fetch_patients">aaaaaaaa</button>
    <!-- patient.u -->
    <PatientItem />
    <div v-for="patient in patients" :key="patient.id">
      <PatientItem :patient="patient" id="rand()" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import PatientItem from "../components/PatientItem.vue";
import { usetoken_store } from "../stores/token_store";

onMounted(() => {
  console.log("On mounted");
  console.log(sessionStorage.getItem("r_response_token"));
  fetch_patients();
});

async function fetch_patients() {
  console.log("fetch patients");
  const storeStore = usetoken_store();
  let collected_patients = await fetch(
    "https://apidoctor.quidam.re/api/consultations",
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("r_response_token")}`,
      },
    }
  )
    .then((response) => {
      response.json();
      console.log(response.data["hydra:member"]);
      return response
    })
    .catch((e) => e);
  console.log(collected_patients);
  // console.log(collected_patients.data["hydra:member"][0]);

  if (collected_patients instanceof Array) {
    console.log("Collected patients check");
    let patients = {};
    patients.value = collected_patients;
  }

  storeStore.patients = collected_patients;
  console.log(storeStore.patients);
}
</script>
