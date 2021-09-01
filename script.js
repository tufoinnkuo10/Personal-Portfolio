window.onload = () => {
  const burger = document.querySelector('#hamburger');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('');
    const mobileMenu = document.querySelector('.mobile-menu');
    console.log(mobileMenu);
    mobileMenu.classList.add('show');
  });

  const iconx = document.querySelector('.iconx');

  iconx.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
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
    description: 'A daily selection of privately personalized!',
    name: 'multi post stories',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
  {
    Image: './image/prof-print.png',
    description: ' A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
    name: 'card 2',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
  {
    Image: './image/dash-data.png',
    description: 'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard!',
    name: 'card 3',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
  {
    Image: './image/dash-data.png',
    description: 'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
    name: 'card 4',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
  {
    Image: './image/websitepro.png',
    description: 'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
    name: 'card 5',
    technologies: ['Python', 'React', 'bootstrap'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
  {
    Image: './image/websitepro.png',
    description: 'A daily selection of privatel personalized reads; no accountssign-ups required. Has been the industry standard',
    name: 'card 6',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    links: ['https://tufoinnkuo10.github.io/Personal-Portfolio', 'https://github.com/tufoinnkuo10/Personal-Portfolio'],
  },
];

const buttons = document.querySelectorAll('.cproject');
buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const project = projectContent[i];

    const popup = document.querySelector('.pop-up');
    popup.style.display = 'block';

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
