const readFiles = () => {
    const testFolder = './images/';
    const fs = require('fs');
    const path = require('path');

    const dirName = path.dirname(__filename);

    return fs.readdirSync(testFolder).map(file => path.join(dirName, testFolder, file))
}

const generateCards = (r, n) => {
    let result = [];
    
    let card = [];
    for (let i = 1; i<= n+1; i++) {
        card.push(i);
    }

    result.push(card)
    for (let j=1; j<=n; j++)  {
       r=r+1
       card = [1]
       for (let k=1; k<=n; k++) {
            card.push(n + n * (j-1) + k+1)
       }
       result.push(card)
    }
    for (let i= 1; i<=n; i++) {
       for (let j=1; j<=n; j++) {
          r=r+1
          card = [i+1]
          for (let k=1; k<= n; k++) {
            card.push(n + 2 + n * (k-1) + (((i-1) * (k-1) +j-1) % n))
          }
          result.push(card)
        }
    }
    return result;
}

const random = (min = 1, max = 4) => Math.floor(Math.random() * (max - min + 1)) + min;


const cards = generateCards(1, 3);
const images = readFiles();

console.log(`Cards (Images Needed): ${cards.length}`);
console.log(`Images: ${images.length}`);

console.log(cards);
console.log(cards.length)

const width = 160;

const css = content => () => `style="${typeof content === "function" ? content() : content}"`;

const imageCss = css(() => `width: ${width}px; height: ${width}; max-height: ${width}px; transform: rotate(${random()*90}deg);`)
const cardCss = css(`page-break-inside: avoid; width: ${2*width}; border: 1px solid; display:grid; grid-template-columns: 50% 50%;`)

const itemTemplate = (number) => `
    <div><img ${imageCss()} src="${images[number-1]}"></div>
`
const cardTemplate = (content) => `
    <div ${cardCss()}>
    ${content}
    </div> 
`


fs = require('fs');
fs.writeFileSync("output.html", cards.map(card => cardTemplate(card.map(itemTemplate).join(''))).join(''));


