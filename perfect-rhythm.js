const bodyLineHeight = 1.4;

const rhythm = bodyLineHeight;
const extraLead = bodyLineHeight - 1;

let sizes = [];

for (let i = 1; i <= 5; i++) {
  const rhythmMultiple = rhythm * i;
  const size = rhythmMultiple - extraLead;
  const lineHeight = rhythmMultiple / size;
  sizes.push(
    { size: `${size}em`, lineHeight },
    { size: `${rhythmMultiple}em`, lineHeight: 1 }
  );
}

console.log(sizes);
