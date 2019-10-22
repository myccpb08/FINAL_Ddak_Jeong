import Vue from 'vue'
import VueRouter from 'vue-router'
import EmptyPage from '../components/pages/EmptyPage'
import Mypage from '../components/pages/Mypage'
import AdminPage from '../components/pages/AdminPage'
import SignUpPage from '../components/pages/SignUpPage'
import LoginPage from '../components/pages/LoginPage'
import NoticePage from '../components/pages/NoticePage'
import NoticeWritePage from '../components/pages/NoticeWritePage'
import BoardPage from '../components/pages/BoardPage'
import BoardWritePage from '../components/pages/BoardWritePage'
import BoardDetailPage from '../components/pages/BoardDetailPage'
import FavoritePage from '../components/pages/FavoritePage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: EmptyPage, name: 'home' },
    { path: '/mypage', component: Mypage, name:'mypage'},
    { path: '/user/list', component: AdminPage, name: "user-list"},
    { path: '/signup', component: SignUpPage, name: 'SignUp' },
    { path: '/login', component: LoginPage, name: 'Login'},
    { path: '/notice', component: NoticePage, name: 'Notice'},
    { path: '/notice/write', component: NoticeWritePage, name: 'NoticeWrite'},
    { path: '/board', component: BoardPage, name: 'Board'},
    { path: '/board/write', component: BoardWritePage, name: 'BoardWrite'},
    { path: '/favorite', component: FavoritePage, name: 'Favorite'},
    { path: '/boardDetail/:boardId',component: BoardDetailPage, name: 'boardDetail', props: true},
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router