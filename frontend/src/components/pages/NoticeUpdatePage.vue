<template>
  <div>
    <div style="margin-top:68px"></div>
    <v-container>

          <form>
    <v-text-field v-model="board.title" placeholder="제목을 입력해주세요."></v-text-field>

    <!-- <ImageInput :imgurl='img' v-on:changeImg="img = $event"/> -->

    <v-textarea rows="15" solo v-model="board.content"></v-textarea>
    <v-flex xs12 text-xs-center round my-5 class="text-center;" >
      <v-btn rounded color="primary" dark @click="edit">수정완료</v-btn>
      <v-btn :to="{ name: 'Notice'}" color="warning" dark rounded style="text-decoration:none;">목록으로</v-btn>
    </v-flex>
  </form>

    </v-container>
    <br><br><br>
  </div>
</template>

<script>
import store from "../../store/modules/data.js";
import router from "../../router/index.js";

export default {
  name: 'NoticeDetail',
  data(){
    return{
      noticeId: this.$route.params.noticeId,
      board :{},
      content: '',
      update_content: '',
      check:false
    }
  },
   components: {
   },
  mounted(){
    this.getNotice(this.noticeId).then((result) => {
      this.board = result
    })
  },
  methods:{

    async getNotice(id) {
        return this.$store.dispatch("data/getNoticeDetail", id)
    },

    async edit(){
        const params = {
        title: this.board.title,
        body: this.board.content,
        id : this.noticeId
      };
        this.$store.dispatch("data/noticeUpdate", params)
        router.push({name : 'noticeDetail', params: {noticeId: this.noticeId}})
    }
  },
}
</script>
