window.onload = () => {
  const burger = document.querySelector('#hamburger');

  burger.addEventListener('click', (element) => {
    event.preventDefault();
    // console.log('');
    const mobileMenu = document.querySelector('.mobile-menu');
    // console.log(mobileMenu);
    mobileMenu.classList.add('show');
  });

  const iconx = document.querySelector('.iconx');

  iconx.addEventListener('click', () => {
    const mobileMenu = document.querySelectorAll('.mobile-menu');
    mobileMenu.classList.remove('show');
  });

  const mobileMenuList = document.querySelector('.mobile-menu ul');

  mobileMenuList.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.remove('show');
  });
};

// content description

const projectContent = [
  {
    Image: './image/ref.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    name: 'Multi-Post Stories',
    technologies: ['Ruby on rails', 'Bootstrap', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
  {
    Image: './image/prof-print.png',
    description:
      ' A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
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
      'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
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
      'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
    name: 'card 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: [
      'https://tufoinnkuo10.github.io/Personal-Portfolio',
      'https://github.com/tufoinnkuo10/Personal-Portfolio',
    ],
  },
];

const buttons = document.querySelectorAll('.cproject');
buttons.for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}((btn, i) => {
  btn.addEventListener('click', () => {
     project = projectContent[];

    const popup = document.querySelector('.pop-up');
    popup.style.display = 'flex';

    // get title of popup
    const popupTitle = popup.querySelector('.title');
    const popupImage = popup.querySelector('.pop-img');
    const popupTech = popup.querySelector('.btns');
    const popupDesc = popup.querySelector('.pop-text2');

    popupTitle.textContent = project.name;
    popupImage.src = project.Image;

    popupTech.querySelector('button').forEach((tech, j) => {
      tech = project.technologies[j];
    });

    popupDesc.textContent = project.description;

    const aTags = popup.querySelectorAll('.bbttnn');
    const [liveLink, sourceLink] = project.links;

    aTags[].href = liveLink;
    aTags[].href = sourceLink;
  });
});

const closeElement = document.querySelector('.pop-close');
closeElement.addEventListener('click', () => {
  const popup = document.querySelector('.pop-up');
  popup.style.display = 'flex';
});

// const email = document.getElementById('mail');

// email.addEventListener('input', (event) => {
// if (email.validity.typeMismatch) {
///  email.setCustomValidity('please use an E-mail address!');
// } else {
//   email.setCustomValidity('');
// }
// });
