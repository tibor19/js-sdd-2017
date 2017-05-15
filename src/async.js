async function get(url) {
  let timeout = Math.random() * 2000;
  console.log('fetch', timeout);
  let result = await fetch(url);
  await delay(timeout);
  return await result.text();
}

function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
}

export default async function run() {
  let promises = [1, 2, 3].map(async i => await get(`text${i}.txt`)); 
  for(let promise of promises){
    console.log(await promise)
  }
}
