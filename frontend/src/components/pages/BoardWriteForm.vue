<template>
  <form>
    <v-text-field v-model="title" placeholder="제목을 입력해주세요."></v-text-field>

    <!-- <ImageInput :imgurl='img' v-on:changeImg="img = $event"/> -->

    <v-textarea rows="15" solo v-model="body"></v-textarea>
    <v-flex xs12 text-xs-center round my-5 class="text-center;" >
      <v-btn rounded color="primary" dark @click="onSubmit">작성</v-btn>
      <router-link to="/board" style="text-decoration:none;">
        <v-btn rounded color="warning" dark>뒤로</v-btn>
      </router-link>
    </v-flex>
  </form>
</template>

<script>
export default {
  props: {
    submit: {
      type: Function,
      default: () => {}
    }
  },

  data: () => ({
    title: "",
    body: ""
  }),

  methods: {
    onSubmit: function() {

      const params = {
        title: this.title,
        body: this.body,
        writer: this.$store.state.data.user,
        // when : today
      };
      console.log('boardwriterform 의 params')
      console.log(params);
            this.submit(params);
      this.$router.go(-1)
    }
  }
};
</script>