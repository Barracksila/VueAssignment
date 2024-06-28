<template>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-img :src="character.image" height="400px"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-text>
              <div><strong>Birth Year:</strong> {{ character.details.birthYear }}</div>
              <div><strong>Height:</strong> {{ character.details.height }}</div>
              <div><strong>Mass:</strong> {{ character.details.mass }}</div>
              <div><strong>Hair Color:</strong> {{ character.details.hairColor }}</div>
              <div><strong>Eye Color:</strong> {{ character.details.eyeColor }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="goBack" color="primary">Back</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        character: null,
      };
    },
    created() {
      const id = parseInt(this.$route.params.id);
      this.fetchCharacter(id);
    },
    methods: {
      fetchCharacter(id) {
        // Fetching a specific character details (simplified for demo)
        const character = this.$parent.characters.find(char => char.id === id);
        this.character = {
          ...character,
          details: {
            ...character.details,
          },
        };
      },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>