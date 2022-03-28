<template>
  <div>
    <button @click="lapiaaan">Test</button>
    <form @submit.prevent="lapiaaan">
      <label for="username">username is "{{ form_e.username }}" </label><br />
      <input
        v-model="form_e.username"
        type="text"
        name="username"
        id="username"
      />
      <br />
      <label for="password">password is "{{ form_e.password }}"</label><br />
      <input
        v-model="form_e.password"
        type="text"
        name="password"
        id="password"
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script setup>
const form_e = { username: "", password: "" };

function lapiaaan() {
  console.log("function onSubmit");

  start_submit();
}

async function start_submit() {
  let response = await fetch("https://apidoctor.quidam.re/api/login_check", {
    method: "POST",
    body: JSON.stringify({
      username: form_e.username,
      password: form_e.password,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((err) => err);

  console.log(response.token);
  console.log(response.refresh_token);
  sessionStorage.setItem("r_response_token", response.token);
  sessionStorage.setItem("r_refresh_token", response.refresh_token);
}
</script>
