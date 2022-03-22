/* MyChart */

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-undef
new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});

// Menu

function toggleMenu() {
  const navButton = document.querySelector('.menu');
  const sidenav = document.querySelector('.sidebar-menu');

  navButton.addEventListener('click', function(e){
    e.preventDefault();

    sidenav.classList.toggle('nav-active');
  });
}
toggleMenu();

// Funkcja przełączania stron (obecnie nieużywana)

// const navLinks = document.querySelectorAll('.navigation-list .nav-elem');
// const pages = document.querySelectorAll('.page');

// const titleClickHandler = function (event) {
//   event.preventDefault();
//   const clickedPage = this;
//   console.log('link was clicked');
//   console.log(event);
//   console.log(navLinks);
//   console.log(pages);
  

//   const activeLinks = document.querySelectorAll('.nav-elem a.active');

//   for (let activeLink of activeLinks) {
//     activeLink.classList.remove('active');
//   }
//   clickedPage.classList.add('active');

//   const activePages = document.querySelectorAll('.active');
//   for (let activePage of activePages) {
//     activePage.classList.remove('active');
//   }

//   const pageSelector = clickedPage.getAttribute('href');
//   const targetPage = document.querySelector(pageSelector);
//   targetPage.classList.add('active');
// };
// console.log(titleClickHandler);
// const links = document.querySelectorAll('.navigation-list a');
// for (let link of links) {
//   link.addEventListener('click', titleClickHandler);
// }