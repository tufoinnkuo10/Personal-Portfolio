window.onload = () => {
  const burger = document.querySelector('#hamburger');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.add('showing');
  });

  const iconx = document.querySelector('.iconx');

  iconx.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('showing');
  });

  const mobileMenuList = document.querySelector('.mobile-menu ul');

  mobileMenuList.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('showing');
  });
};

// content description

const projectContent = [
  {
    Image: './image/docdoc.png',
    description:
      'Recovon is an online site aimed at facilitating the interaction between doctors and patients. It contains a variety of ready available doctors from a patient to chose from depending on what he or she is sick of. All you have to do is book an appointment with a doctor of your choice',
    name: 'RecoOn Application',
    // technologies: ['Ruby on rails', 'Bootstrap', 'JavaScript'],
    links: [
      'https://recovon.netlify.app/',
      'https://github.com/tufoinnkuo10/recovon-frontend',
    ],
  },
  {
    Image: './image/awesome.png',
    description:
      'This project is designed to add and remove Books added to the local storage with the use of classes... Books are being added in order..Books are also being removed respectively..All the books are being stored in the local storage unless when it is removed...Books wont be added unless both author and title fields are filled.',
    name: 'Space Rockets',
    // technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/AWESOME-BOOKS/',
      'https://github.com/tufoinnkuo10/AWESOME-BOOKS',
    ],
  },
  {
    Image: './image/con1.png',
    description:
      'a conference page (the home and the about section). in contains information about a conference held in preparation for the afcon 2022. It has both the desktop and mobile version and they work well responsively. Hope you like what you see!',
    name: 'card 3',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Capstone-1/',
      'https://github.com/tufoinnkuo10/Capstone-1',
    ],
  },
  {
    Image: './image/bookstore.png',
    description:
      'A simple React app that collects and displays books, App has a home page and a category page..  Books added can also be removed as well .. The Books author and Category are been displayed Books are stored and gotten from an Api ..Unwanted books can be removed,,  App styled according to recommended style in Zeplin',
    name: 'card 4',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoins-bookstore.netlify.app/',
      'https://github.com/tufoinnkuo10/react-bookstore',
    ],
  },
  {
    Image: './image/rocketapp2.png',
    description:
      'SPA that gets data from an API and displays that information on the different pages.The app has a rocket page, mission page and dragon page.. Rockets can be reserved as well as reservation can be cancelled, Missions can be joined and left as well, All reserved rockets and joined missions are displayed in the profile page, All information on the different pages are gotten from a given API',
    name: 'card 5',
    technologies: ['Python', 'React', 'bootstrap'],
    links: [
      'https://space-ships-and-missions.netlify.app/',
      'https://github.com/tufoinnkuo10/Space-Rockets_Hub',
    ],
  },
  {
    Image: './image/maths1.png',
    description:
    'This is a SPA Calculator app that solves basic math problems. Built with React It consist Three basic pages, the Home/Calculator and Quote page...Additional description about the project and its features. The Home page is the main page and welcomes you to the app The Calculator page is where you make all the basic calculations The Quote page has some Quotes made by maths heroes',
    name: 'card 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoins-maths-app.netlify.app/',
      'https://github.com/tufoinnkuo10/Maths-magician',
    ],
  },
  {
    Image: './image/transaction.png',
    description:
    'This is a mobile Application(responsive), based on managing and analysing different categories of user transactions and checking what was spent on what by a particular user.',
    name: 'card 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://my-transaction-app.herokuapp.com/groups',
      'https://github.com/tufoinnkuo10/Transaction_App',
    ],
  },
];

const buttons = document.querySelectorAll('.cproject');
buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const project = projectContent[i];

    const popup = document.querySelector('.pop-up');
    popup.style.display = 'flex';

    // get title of popup
    const popupTitle = popup.querySelector('.title');
    const popupImage = popup.querySelector('.pop-img');
    const popupTech = popup.querySelector('.btns');
    const popupDesc = popup.querySelector('.pop-text2');

    popupTitle.textContent = project.name;
    popupImage.src = project.Image;
    popupDesc.textContent = project.description;

    popupTech.querySelectorAll('button').forEach((tech, j) => {
      tech.textContent = project.technologies[j];
    });


    const aTags = popup.querySelectorAll('.bbttnn');
    const [liveLink, sourceLink] = project.links;

    aTags[0].href = liveLink;
    aTags[1].href = sourceLink;
  });
});

const closeElement = document.querySelector('.pop-close');
closeElement.addEventListener('click', () => {
  const popup = document.querySelector('.pop-up');
  popup.style.display = 'none';
});

//  email validity section
const form = document.getElementById('input-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.user_email.value;
  if (email.toLowerCase() !== email) {
    const errorSpan = form.querySelector('#form-error-message');
    errorSpan.textContent = 'Expected Email in lowercase';
    errorSpan.style.display = 'block';
  } else {
    form.submit();
  }
});

// Setting local Storage for input form

const storageName = 'inputFormDetails';

const currentStorage = JSON.parse(window.localStorage.getItem(storageName));

if (currentStorage) {
  form.user_name.value = currentStorage.username;
  form.user_email.value = currentStorage.email;
  form.message.value = currentStorage.message;
}

form.addEventListener('input', () => {
  const newData = {
    username: form.user_name.value,
    email: form.user_email.value,
    message: form.message.value,
  };

  window.localStorage.setItem(storageName, JSON.stringify(newData));
});
