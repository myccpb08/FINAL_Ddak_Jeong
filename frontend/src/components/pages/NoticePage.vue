<template>
  <v-container>
    <div class="row">
      <div class="span_10">
        <img class="imgOne" src="../../images/loudspeaker_gray_row.png" style="width:17%;">
      </div>
      <div class="span_2" style="text-align:right;">
        <router-link to="/notice/write" style="text-decoration:none;">
          <v-btn class="ma-2" tile outlined color="success">
            <v-icon left>mdi-pencil</v-icon>Write
          </v-btn>
        </router-link>
      </div>
    </div>
    <br/>
    <NoticePageList :getAllNotices="getAllNotices" />
  </v-container>
</template>


<script>
import { mapState, mapActions } from "vuex";
import NoticePageList from "./NoticePageList";

export default {
  components: {
    NoticePageList
  },

  methods: {
    ...mapActions("data", ["getAllNotices"])
  },
};
</script>

<style>
/* .container {
          margin: 2%;
          padding: 0;
        } */
.row {
  overflow: hidden;
  width: 100%;
}
.row [class*="span"] {
  float: left;
  margin-left: 2%;
}
.row [class*="span"]:first-child {
  margin-left: 0;
}
.span_1 {
  width: 6.5%;
  *width: 6%;
}
.span_2 {
  width: 15%;
  *width: 14.5%;
}
.span_3 {
  width: 23.5%;
  *width: 23%;
}
.span_4 {
  width: 32%;
  *width: 31.5%;
}
.span_5 {
  width: 40.5%;
  *width: 40%;
}
.span_6 {
  width: 49%;
  *width: 48.5%;
}
.span_7 {
  width: 57.5%;
  *width: 57%;
}
.span_8 {
  width: 66%;
  *width: 65.5%;
}
.span_9 {
  width: 74.5%;
  *width: 74%;
}
.span_10 {
  width: 83%;
  *width: 82.5%;
}
.span_11 {
  width: 91.5%;
  *width: 91%;
}
.span_12 {
  width: 100%;
  *width: 99.5%;
}

/* 게시판 리스트 목록 */
#atag {
    text-align: left;
    color : gray;
}

.sub_news,
.sub_news th,
.sub_news td {
  border: 0;
}
.sub_news a {
  color: #383838;
  text-decoration: none;
}
.sub_news {
  width: 100%;
  border-bottom: 1px solid #999;
  color: #666;
  font-size: 12px;
  table-layout: fixed;
}
.sub_news caption {
  display: none;
}
.sub_news th {
  padding: 5px 0 6px;
  border-top: solid 1px #999;
  border-bottom: solid 1px #b2b2b2;
  background-color: orange;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 20px;
  vertical-align: top;
}
.sub_news td {
  padding: 8px 0 9px;
  border-bottom: solid 1px #d2d2d2;
  text-align: center;
  line-height: 18px;
}
.sub_news .date,
.sub_news .hit {
  padding: 0;
  font-family: Tahoma;
  font-size: 11px;
  line-height: normal;
}
.sub_news .title {
  text-align: center;
  padding-left: 0%;
  font-size: 13px;
}
.sub_news .title .pic,
.sub_news .title .new {
  margin: 0 0 2px;
  vertical-align: middle;
}
.sub_news .title a.comment {
  padding-left: 0%;
  background: none;
  color: #f00;
  font-size: 12px;
  font-weight: bold;
}

.imgOne {
        margin-top: 1%;
        margin-left: 3%;
        float: left;
}
/* .sub_news tr.reply .title a{padding-left:16px;background:url(첨부파일/ic_reply.png) 0 1px no-repeat} */
/* //게시판 리스트 목록 */
</style>