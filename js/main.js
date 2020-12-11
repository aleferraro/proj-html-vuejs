

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
        text: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
      },
      {
        imgUrl: 'img/home-5-image-box-02.png',
        title: 'web development',
        text: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
      },
      {
        imgUrl: 'img/home-5-image-box-03.png',
        title: 'system administration',
        text: 'Learners are encouraged to study the mechanism and structure of system administration.'
      },
      {
        imgUrl: 'img/home-5-image-box-04.png',
        title: 'graphic design',
        text: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.'
      }
    ],
    sectionTwoCards: [
      {
        title: 'Multiple Platforms Supported for Teaching & Studying',
        text: 'MaxCoach supports the act of taching and learning on multiple platforms like online or offline via material downloads. We know things aren\'t supposed to be devoured in a short time, you can always access our knowledge base from any device.',
        active: true
      },
      {
        title: 'Multiple Course Participation at the Same Time',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: false
      },
      {
        title: 'Track Study Progress & Deliver Prompt Feedback',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        active: false
      }
    ],
    courses: [
      {
        imgUrl: 'img/course-02-480x298.jpg',
        price: '$40.00',
        teacher: 'Blanche Fields',
        teacherImgUrl: 'img/73ee246daf47502812ccefc84bf02898.jpeg',
        courseTitle: 'Learning to Write as a Professional Author',
        lessonsNumber: 20,
        studentsNumber: 50
      },
      {
        imgUrl: 'img/stock-full-hd-03-480x298.jpg',
        price: 'Free',
        teacher: 'Maggie Strickland',
        teacherImgUrl: 'img/d0d504142acfde820eef2f11feea6253.jpeg',
        courseTitle: 'Customer-centric Info-Tech Strategies',
        lessonsNumber: 24,
        studentsNumber: 769
      },
      {
        imgUrl: 'img/stock-full-hd-04-480x298.jpg',
        price: '$19.00',
        teacher: 'Maggie Strickland',
        teacherImgUrl: 'img/d0d504142acfde820eef2f11feea6253.jpeg',
        courseTitle: 'Open Programming Courses for Everyone: Python',
        lessonsNumber: 71,
        studentsNumber: 62
      },
      {
        imgUrl: 'img/stock-full-hd-06-480x298.jpg',
        price: '$26.00',
        teacher: 'Blanche Fields',
        teacherImgUrl: 'img/73ee246daf47502812ccefc84bf02898.jpeg',
        courseTitle: 'Academic Listening and Note-taking',
        lessonsNumber: 14,
        studentsNumber: 67
      },
      {
        imgUrl: 'img/course-featured-image-01-480x298.jpg',
        price: '$39.00',
        teacher: 'Blanche Fields',
        teacherImgUrl: 'img/73ee246daf47502812ccefc84bf02898.jpeg',
        courseTitle: 'Master jQuery in a Short Period of Time',
        lessonsNumber: 6,
        studentsNumber: 51
      },
      {
        imgUrl: 'img/stock-full-hd-05-480x298.jpg',
        price: '$59.00',
        teacher: 'Blanche Fields',
        teacherImgUrl: 'img/73ee246daf47502812ccefc84bf02898.jpeg',
        courseTitle: 'Introduction to Javascript for Beginners',
        lessonsNumber: 14,
        studentsNumber: 76
      }
    ],
    upcomingEvents: [
      {
        position: 'Texas, US',
        eventName: 'Storytelling Workshop',
        eventDay: '22',
        eventMonth: 'nov'
      },
      {
        position: 'New York, US',
        eventName: 'Painting Art Contest 2020',
        eventDay: '10',
        eventMonth: 'oct'
      },
      {
        position: 'Hamburg, Germany',
        eventName: 'International Art Fair 2020',
        eventDay: '23',
        eventMonth: 'nov'
      },
      {
        position: 'Illinois, US',
        eventName: 'Street Performance: Call for Artist',
        eventDay: '15',
        eventMonth: 'dec'
      },
      {
        position: 'Illinois, US',
        eventName: 'Consumer Food Safety Education Conference',
        eventDay: '22',
        eventMonth: 'jul'
      },
      {
        position: 'Dubai',
        eventName: 'How meditation improve your mental health?',
        eventDay: '12',
        eventMonth: 'aug'
      }
    ],
    testimonials: [
      {
        avatar: 'img/testimonial-avata-02.jpg',
        text: 'I am free to lear at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.',
        name: 'Mina Hollace',
        profession: 'Freelancer'
      },
      {
        avatar: 'img/testimonial-avata-04.jpg',
        text: 'MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        name: 'Madley Pondor',
        profession: 'IT Specialist'
      },
      {
        avatar: 'img/testimonial-avata-01.jpg',
        text: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.',
        name: 'Luvic Dubble',
        profession: 'Private Tutor'
      }
    ],
    footerMenu: [
      {
        title: 'Explore',
        list: [
          'Start here',
          'Blog',
          'About us'
        ]
      },
      {
        title: '',
        list: [
          'Success story',
          'Courses',
          'Contact us'
        ]
      },
      {
        title: 'Information',
        list: [
          'Membership',
          'Purchase guide',
          'Privacy policy',
          'Terms of services'
        ]
      }
    ],
    isActiveBox: false
  },
  methods: {
    showBox(e){
      e.active = !e.active;
    },
    backToTop(){
      window.scrollTo(0,0);
    }
  }
})
