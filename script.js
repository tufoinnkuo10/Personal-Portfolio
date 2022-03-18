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
    Image: './image/prof-print.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    name: 'card 2',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
  {
    Image: './image/dash-data.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    name: 'card 3',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
  {
    Image: './image/dash-data.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    name: 'card 4',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
  {
    Image: './image/websitepro.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    name: 'card 5',
    technologies: ['Python', 'React', 'bootstrap'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
  {
    Image: './image/websitepro.png',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    name: 'card 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
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

    popupTech.querySelectorAll('button').forEach((tech, j) => {
      tech.textContent = project.technologies[j];
    });

    popupDesc.textContent = project.description;

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
