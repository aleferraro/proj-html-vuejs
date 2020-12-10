

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
    ],
    sectionTwoCards: [
      {
        title: 'Multiple Platforms Supported for Teaching & Studying',
        text: 'MaxCoach supports the act of taching and learning on multiple platforms like online or offline via material downloads. We know things aren\'t supposed to be devoured in a short time, you can always access our knowledge base from any device.'
      },
      {
        title: 'Multiple Course Participation at the Same Time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Track Study Progress & Deliver Prompt Feedback',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
  methods: {
    openBox(e){

    }
  }
})
