<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex mx-auto offset-md3>
            <v-card
              class="card mx-auto"
              elevation="4"
              light
              tag="section"
              max-width="480"
            >
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">Login</h3>
                </v-layout>
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-col class="input" cols="12" sm="6" md="12">
                    <v-text-field label="E-mail ou usuário"></v-text-field>
                  </v-col>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="login"
                  large
                  block
                  rounded
                  @click="redirectLogin()"
                >
                  Continuar
                </v-btn>
              </v-card-actions>
              <v-row class="mt-4 ma-1" justify="center">
                <v-col cols="5"><v-divider /> </v-col>
                <span class="mr-2 ml-2">ou</span>
                <v-col cols="5"><v-divider /> </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  class="redes-sociais"
                  large
                  block
                  rounded
                  @click="redirectLogin()"
                >
                  <span class="mdi mdi-google mr-2"></span> Continuar com Google
                </v-btn> </v-card-actions
              ><v-card-actions>
                <v-btn
                  class="redes-sociais"
                  large
                  block
                  rounded
                  @click="redirectLogin()"
                >
                  <span class="mdi mdi-facebook mr-2"></span> Continuar com o
                  Facebook
                </v-btn> </v-card-actions
              ><v-card-actions>
                <v-btn
                  class="redes-sociais"
                  large
                  block
                  rounded
                  @click="redirectLogin()"
                >
                  <span class="mdi mdi-apple mr-2"></span> Continuar com a Apple
                </v-btn>
              </v-card-actions>
              <v-row class="mt-4 ma-1" justify="center">
                <span class="mr-2 ml-2 mb-16">Cadastrar</span>
              </v-row>
              <v-divider />
              <v-row class="mt-4 ma-1" justify="space-between">
                <span class="ma-2 text-caption">Termos e privacidade</span>
                <span class="ma-2 text-caption">Português (Brasil)</span>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script escoped>
export default {
  name: "Login-user",

  methods: {
    redirectLogin() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  padding: 44px 32px 25px 32px;
}
.input {
  background-color: #f4f5f5;
  border-radius: 8px;
  height: 68px;
  width: 100%;
  outline: none !important;
  padding: 8px 16px 0 16px;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.044em;
  color: #333;
}
.login {
  background-color: #4707ff !important;
  border: 1px solid #4707ff;
  color: #ffffffff;
}
.redes-sociais {
  background-color: #ffffffff !important;
}
</style>