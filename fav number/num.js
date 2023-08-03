let favNum = 5;
let BASE_URL = "http://numbersapi.com";

// Question 1.
async function part1() {
  let data = await $.getJSON(`${BASE_URL}/${favNum}?json`);
  console.log(data);
}
part1();

// Question 2.
const favNums = [7, 11, 22];
async function part2() {
  let data = await $.getJSON(`${BASE_URL}/${favNums}?json`);
  console.log(data);
}
part2();


// Question 3.
async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${BASE_URL}/${favNum}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();
