<template>
  <div>
    <br />
    <hr />
    <h3>Patient item</h3>
    <p>{{ patient }}</p>
    <!-- <ul>
      <li>
        id: {{patient.id}}
      </li>
      <li>
        date :
        {{ patient.date }}
      </li>
    </ul> -->
    <hr />
  </div>
</template>

<script>
export default {
  props: ["patient"],
};
</script>
