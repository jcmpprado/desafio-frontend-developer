<template>
    <div id="app">
      <v-app id="inspire">
        <v-container>
          <v-layout wrap>
            <v-flex mx-auto offset-md3>
              <v-card class="card mx-auto" elevation="1" light tag="section" max-width="480">
                <v-card-title class="mx-auto">
                  <v-layout justify-center>
                    <h3 class="headline">Área de Login</h3>
                  </v-layout>
                </v-card-title>
                <v-card-text class="text">
                  <span>Faça login para acessar nosso super-aplicativo</span>
                </v-card-text>
                <v-card-actions>
                  <v-row align="center" justify="space-around">
                    <v-btn class="login mt-14" @click="redirectLogin()"> Fazer login com a Huggy </v-btn>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app>
    </div>
  </template>
  
  <script escoped>
  export default {
    name: "Open-user",
    data() {
      return {
        darkTheme: true,
        platformName: "Platform name",
        password: null,
        username: null,
      };
    },
  
    methods:{
      redirectLogin(){
        this.$router.push({name: "Login-user"})
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 12px;
    padding: 44px 32px 25px 32px;
  }
  
  .headline{
    color: #2934A5;
  }
  .text {
    text-align: center;
  }
  .login {
    background-color: #293ea5 !important;
    border: 1px solid #293ea5;
    color: #ffffffff;
  }
  </style>