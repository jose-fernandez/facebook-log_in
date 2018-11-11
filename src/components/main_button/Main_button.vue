<template>
  <MainButton :authenticated="authenticated" @click.native="action()">
    <TextButton>{{ text }}</TextButton>
  </MainButton>
</template>

<script src="./main_button.js"></script>