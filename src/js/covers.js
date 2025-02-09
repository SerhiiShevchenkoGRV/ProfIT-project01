const coversArr = [
  {
    src1x: '../img/covers/cover01@1x.jpg',
    src2x: '../img/covers/cover01@2x.jpg',
    alt: 'Power pulse',
  },
  {
    src1x: '../img/covers/cover02@1x.jpg',
    src2x: '../img/covers/cover02@2x.jpg',
    alt: 'Mimino',
  },
  {
    src1x: '../img/covers/cover03@1x.jpg',
    src2x: '../img/covers/cover03@2x.jpg',
    alt: 'Ukrainian artistry',
  },
  {
    src1x: '../img/covers/cover04@1x.jpg',
    src2x: '../img/covers/cover04@2x.jpg',
    alt: 'Organic vegetables',
  },
  {
    src1x: '../img/covers/cover05@1x.jpg',
    src2x: '../img/covers/cover05@2x.jpg',
    alt: 'Wallet',
  },
  {
    src1x: '../img/covers/cover06@1x.jpg',
    src2x: '../img/covers/cover06@2x.jpg',
    alt: 'Chego jewellery',
  },
  {
    src1x: '../img/covers/cover07@1x.jpg',
    src2x: '../img/covers/cover07@2x.jpg',
    alt: 'Energy flow',
  },
  {
    src1x: '../img/covers/cover08@1x.jpg',
    src2x: '../img/covers/cover08@2x.jpg',
    alt: 'Fruitbox',
  },
  {
    src1x: '../img/covers/cover09@1x.jpg',
    src2x: '../img/covers/cover09@2x.jpg',
    alt: 'English excellence',
  },
  {
    src1x: '../img/covers/cover10@1x.jpg',
    src2x: '../img/covers/cover10@2x.jpg',
    alt: 'Starlight studio',
  },
];

const picturesLines = Array.from(document.querySelectorAll('.covers-line'));

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const covers = coversArr
  .map(
    ({ src1x, src2x, alt }) =>
      `<img
              srcset="
                ${src1x},
                ${src2x} 2x
              "
              src=${src1x}
              alt="${alt}"
              class="covers-picture"
            />`
  )
  .join('');

picturesLines.forEach(li => {
  const shuffledCovers = shuffleArray(coversArr)
    .map(
      ({ src1x, src2x, alt }) =>
        `<img
            srcset="${src1x}, ${src2x} 2x"
            src="${src1x}"
            alt="${alt}"
            class="covers-picture"
        />`
    )
    .join('');

  li.innerHTML = shuffledCovers;
});

function coversGalleryRender(array) {}
