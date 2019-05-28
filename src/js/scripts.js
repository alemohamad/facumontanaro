window.onload = function(){
  console.log('scripts loaded');
};

var app = new Vue({
  el: '#app',
  data: {
    homeScreen: true,
    workScreen: false,
    aboutScreen: false,
    contactScreen: false,
    homeScreenLate: false,
    workScreenLate: true,
    aboutScreenLate: true,
    contactScreenLate: true
  },
  methods: {
    show: function(section) {
      this.resetSections();
      switch(section) {
        case 'home':
          setTimeout(function() { this.lateHome(); }.bind(this), 500);
          break;
        case 'work':
          setTimeout(function() { this.lateWork(); }.bind(this), 500);
          break;
        case 'about':
          setTimeout(function() { this.lateAbout(); }.bind(this), 500);
          break;
        case 'contact':
          setTimeout(function() { this.lateContact(); }.bind(this), 500);
          break;
      }
    },
    resetSections: function() {
      this.homeScreen = false;
      this.workScreen = false;
      this.aboutScreen = false;
      this.contactScreen = false;
    },
    lateHome: function() {
      this.resetLates();
      this.homeScreenLate = false;
      setTimeout(function() { this.homeScreen = true; }.bind(this), 200);
    },
    lateWork: function() {
      this.resetLates();
      this.workScreenLate = false;
      setTimeout(function() { this.workScreen = true; }.bind(this), 200);
    },
    lateAbout: function() {
      this.resetLates();
      this.aboutScreenLate = false;
      setTimeout(function() { this.aboutScreen = true; }.bind(this), 200);
    },
    lateContact: function() {
      this.resetLates();
      this.contactScreenLate = false;
      setTimeout(function() { this.contactScreen = true; }.bind(this), 200);
    },
    resetLates: function() {
      this.homeScreenLate = true;
      this.workScreenLate = true;
      this.aboutScreenLate = true;
      this.contactScreenLate = true;
    }
  }
});
