

const myApp = new Vue({
  el: "#root",
  data: {
    navMenu: [
      'Home',
      'Pages',
      'Courses',
      'Features',
      'Blog',
      'Shop'
    ],
    sectionOneCards: [
      {
        imgUrl: 'img/home-5-image-box-01.png',
        title: 'idea discussion',
        text: 'Get teamed up with the specialists who work and teach codng for years at famous universities.'
      },
      {
        imgUrl: 'img/home-5-image-box-02.png',
        title: 'web development',
        text: 'Learn to start building a webpage from scratch. You decide ypur own pace, course and speed.'
      },
      {
        imgUrl: 'img/home-5-image-box-03.png',
        title: 'system administration',
        text: 'Learners are encouraged to study the mechanism and structure of system administration.'
      },
      {
        imgUrl: 'img/home-5-image-box-04.png',
        title: 'graphic design',
        text: 'Have a passion for graphics and arts? Show your tam+lents with confidence and self-assertiveness.'
      }
    ]
  },
  methods: {

  }
})
