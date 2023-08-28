<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" class="border">
          <v-app-bar flat class="bars">
            <v-toolbar-title class="title ma-8">
              Minhas Mensagens
            </v-toolbar-title>
          </v-app-bar>
          <v-divider />

          <v-list two-line class="list">
            <v-list-item-group
              v-model="selected"
              active-class="blue lighten-4"
              color="blue accent-4"
              multiple
            >
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        v-text="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <div v-if="index < items.length - 1" :key="index"></div>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" sm="9">
          <v-app-bar class="bar" flat>
            <v-avatar class="mt-n7" size="40" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" />
            </v-avatar>
            <v-toolbar-title class="title pl-0 ml-2 mt-n4">
              Sara Samuel
            </v-toolbar-title>
          </v-app-bar>
          <v-app-bar flat class="bars mb-16">
            <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" />
            </v-avatar>
            <v-card class="mt-10" max-width="350px">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">Olá Jéssica, como vai?</div>
                  <v-list-item-subtitle>12 mins ago</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-app-bar>
          <v-app-bar flat class="bars mb-16">
            <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" />
            </v-avatar>
            <v-card class="mt-10" max-width="350px">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    Trouxe novidades sobre seu processo seletivo. Você foi
                    aprovada!
                  </div>
                  <v-list-item-subtitle>12 mins ago</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-app-bar>
          <v-app-bar flat class="bars mb-8">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="indigo accent-4" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">Oi Sara, Bom dia!</div>
                  <v-list-item-subtitle
                    >2 mins ago
                    <span class="ml-16">Seen 1:23PM</span></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-avatar class="mt-n5" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
            </v-avatar>
          </v-app-bar>
          <v-app-bar flat class="bars mb-16">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="indigo accent-4" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">Que notícia maravilhosa!!!</div>
                  <v-list-item-subtitle
                    >3 mins ago
                    <span class="ml-16">Seen 1:24PM</span></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-avatar class="mt-n5" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
            </v-avatar>
          </v-app-bar>
          <v-app-bar flat class="bars mb-16">
            <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" />
            </v-avatar>
            <v-card class="mt-10" max-width="350px">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    Também estamos felizes!
                  </div>
                  <v-list-item-subtitle>1 mins ago</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-app-bar>
          <v-app-bar flat class="bars mb-16">
            <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" />
            </v-avatar>
            <v-card class="mt-10 mb-15" max-width="350px">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    Seja bem vinda a Huggy! Entro em contato amanhã para darmos início a admissão
                  </div>
                  <v-list-item-subtitle>1 mins ago</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-app-bar>
          <v-app-bar class="bars" flat>
            <v-text-field
              v-model="message"
              append-icon="mdi-image-outline"
              filled
              clear-icon="mdi-close-circle"
              clearable
              type="text"
              height="5rem"
              @click:append-outer="sendMessage"
              @click:clear="clearMessage"
            ></v-text-field> </v-app-bar
          ><v-app-bar class="bars" flat>
            <v-btn class="success" block>Enviar</v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    selected: [1],
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        subtitle: `Bem vinda! Parabéns.`,
        title: "Douglas Cruz",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle: `Seja bem vinda a Huggy! Entro em contato amanhã para darmos início a admissão`,
        title: "Sara Samuel",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        subtitle: "Parabéns Jéssica, bem vinda!",
        title: "Rafael Macedo",
      },
    ],
  
    password: "Password",
    show: false,
    message: "Escreva sua mensagem...",
    marker: true,
    iconIndex: 0,
  }),

  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
  },
};
</script>
<style scoped>
.border {
  border-right: 1px solid grey;
}
.bars {
  background-color: #ffffff !important;
  color: #2934a5;
}
.list,
.bar {
  background-color: #ffffff !important;
}
</style>