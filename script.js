// Speaker cards
const speakers = [
  {
    Id: 0,
    Name: 'Daniel Haqiqatjou',
    Image: 'assets/Daniel-Haqiqatjou.jpg',
    Job: 'Author',
    Acheivements: 'Haqiqatjou studied physics and philosophy at harvard, and now he debates libralism and defend islam.',
  },
  {
    Id: 1,
    Name: 'Ben Shapiro',
    Image: 'assets/Ben-Shapiro.jpg',
    Job: 'Public Speaker',
    Acheivements: 'Ben Shapiro is a conservetive political speaker he is currently working with daily wire.',
  },
  {
    Id: 2,
    Name: 'Jordan Peterson',
    Image: 'assets/Jordan-Peterson.webp',
    Job: 'A canadian phsycologist and media personality',
    Acheivements: 'Jordan Bernt Peterson is a Canadian psychologist, author, and media commentator.',
  },
  {
    Id: 3,
    Name: 'Ali Dawah',
    Image: 'assets/Ali-Dawah.webp',
    Job: 'Content creator',
    Acheivements: 'Ali Dawah is mostly known for his funny, direct and unapologetic style of debating',
  },
  {
    Id: 4,
    Name: 'Andrew Tate',
    Image: 'assets/89dcd9ed59d16f7c77f001daa35c38e30b16c8dc.webp',
    Job: 'Top G',
    Acheivements: 'Emory Andrew Tate III is a British-American social media personality, businessman, and former professional kickboxer.',
  },
];

let i = 0;
while (i < 2) {
  const card = document.createElement('div');
  card.classList.add('speaker-card', 'row', 'container-fluid', `featured-speaker-${speakers[i].Id}`);
  card.innerHTML = `
    <div class="col-5 image-container">
        <img src="${speakers[i].Image}" alt="${speakers[i].Name}" class="speaker-card-img">
    </div>
    <div class="col-7">
        <h6>${speakers[i].Name}</h5>
        <p class="text-danger">${speakers[i].Job}<p>
        <hr>
        <P>${speakers[i].Acheivements}</P>
    </div>
    `;
  document.querySelector('.featured-speakers').appendChild(card);
  i += 1;
}

// Current Date
const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = currentDate.getMonth();
const dd = currentDate.getDate();
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const dayName = days[currentDate.getDay()];
document.querySelector('.date').innerHTML = `${yyyy}.${mm}.${dd}(${dayName}) ~ 16(FRI)`;

// More button functionality
const moreButton = document.querySelector('.more');
const moreText = document.querySelector('.more-text');

function showMore() {
  let i = 2;
  while (i < speakers.length) {
    const card = document.createElement('div');
    card.classList.add('speaker-card', 'row', 'container-fluid');
    card.innerHTML = `
        <div class="col-5 image-container">
            <img src="${speakers[i].Image}" alt="${speakers[i].Name}">
        </div>
        <div class="col-7">
            <h6>${speakers[i].Name}</h5>
            <p class="text-danger">${speakers[i].Job}<p>
            <hr>
            <P>${speakers[i].Acheivements}</P>
        </div>
        `;
    document.querySelector('.featured-speakers').appendChild(card);
    i += 1;
  }
  moreText.textContent = 'LESS';
  document.querySelector('.arrow').src = 'assets/up-arrow.png';
}

function showLess() {
  let i = 0;
  while (i < 5) {
    document.querySelector('.speaker-card').remove();
    i += 1;
  }
  i = 0;
  while (i < 2) {
    const card = document.createElement('div');
    card.classList.add('speaker-card', 'row', 'container-fluid');
    card.innerHTML = `
        <div class="col-5 image-container">
            <img src="${speakers[i].Image}" alt="${speakers[i].Name}">
        </div>
        <div class="col-7">
            <h6>${speakers[i].Name}</h5>
            <p class="text-danger">${speakers[i].Job}<p>
            <hr>
            <P>${speakers[i].Acheivements}</P>
        </div>
        `;
    document.querySelector('.featured-speakers').appendChild(card);
    i += 1;
  }
  moreText.textContent = 'MORE';
  document.querySelector('.arrow').src = 'assets/arrow-down-sign-to-navigate.png';
}

let callOne = true;

function showToggle() {
  if (callOne) {
    showMore();
  } else {
    showLess();
  }
  callOne = !callOne;
}

moreButton.addEventListener('click', showToggle);
