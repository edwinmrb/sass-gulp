// An object literal

var sidebar = document.getElementsByClassName("sidebar")[0].classList;
var x = window.matchMedia("(max-width: 766px)");

var app = {
  init: function () {
    app.functionOne();
  },
  functionOne: function () {
    executeSidebar(x.matches);
  },

  scrollTop: function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

};

(function () {
  // your page initialization code here
  // the DOM will be available here
  app.init();

})();


// Toggle the side navigation
document.getElementById("sidebarToggleTop").addEventListener("click",  () => executeSidebar(!sidebar.contains('toggled')));
/* Listener change */
x.addListener( ()=> executeSidebar(x.matches));

function  executeSidebar(flag){
 flag? sidebar.add("toggled",):sidebar.remove("toggled",) ;
}

