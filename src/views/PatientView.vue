<template>
  <div>
    <h1>liste patients - patient view</h1>
    <button @click="fetch_patients">Bouton Fetch Client</button>
    <div @click="log">{{ msg }}</div>
    <ul>
      We are in ul
      <li v-for="item of patient_spaghetti_id" :key="item">
        <PatientItem :patient="item" />
      </li>a
    </ul>
  </div>

  <h1>Fin liste</h1>
  <br />
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import PatientItem from "../components/PatientItem.vue";
// import { usetoken_store } from "../stores/token_store";
import { ref } from "vue";

//lapinno
const patients = ref(0);
// let patient_spaghetti_id = [];
const patient_spaghetti_id = ref([]);

onMounted(() => {
  // console.log("On mounted");
  // console.log(sessionStorage.getItem("r_response_token"));
  fetch_patients();
});

async function fetch_patients() {
  // console.log("fetch patients");
  // const storeStore = usetoken_store();
  let collected_patients = await fetch(
    "https://apidoctor.quidam.re/api/consultations",
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("r_response_token")}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((e) => e);
  // console.log(collected_patients);
  // console.log(collected_patients["hydra:member"]); //This one works
  // console.log(collected_patients["hydra:member"][0]); //This one works
  // console.log(collected_patients["hydra:member"][0]["id"]); //This one works

  if (collected_patients instanceof Object) {
    // console.log("Collected patients check");
    patients.value = collected_patients["hydra:member"];
    // storeStore.patients = collected_patients;
    // console.log(patients.value);

    // console.log(storeStore.patients);

    //C'est juste une array de test
    let target_array = [];
    target_array = patients.value;
    // console.log(target_array);
    for (var i = 0; i < 8; i++) {
      // console.log(target_array[i].id);
      patient_spaghetti_id.value.push(target_array[i]);
    }
    //Fin de l'array de test

    // console.log("lapin");
    // console.log(patients)
    // console.log(patients.value[0].id)
    // console.log(patient_spaghetti_id);
  }
}
</script>
