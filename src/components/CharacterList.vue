<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="character in characters" :key="character.id">
          <v-card>
            <v-img :src="character.image" height="200px"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-text>
              <v-btn @click="viewDetails(character)" color="primary">View Details</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        characters: [],
      };
    },
    created() {
      this.fetchCharacters();
    },
    methods: {
      fetchCharacters() {
        // Fetching Star Wars characters from an API (simplified for demo)
        fetch('https://swapi.dev/api/people/')
          .then(response => response.json())
          .then(data => {
            this.characters = data.results.map((character, index) => ({
              id: index + 1,
              name: character.name,
              image: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`,
              details: {
                birthYear: character.birth_year,
                height: character.height,
                mass: character.mass,
                hairColor: character.hair_color,
                eyeColor: character.eye_color,
              }
            }));
          })
          .catch(error => {
            console.error('Error fetching characters:', error);
          });
      },
      viewDetails(character) {
        this.$router.push({ name: 'CharacterDetails', params: { id: character.id } });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>