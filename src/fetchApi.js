async function logJSONData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&amount=10");
    const jsonData = await response.json();
    return jsonData.jokes[0];
    //console.log(jsonData);
}

//testing
// function postJSONData() {
//     fetch("https://v2.jokeapi.dev/joke/", {
//     method: "POST",
//     body: JSON.stringify({
//         category: 'Programming',
//         type: 'twopart',
//         setup: 'Why did the edge server go bankrupt?',
//         delivery: 'It ran out of cache.',
//         flags: [Object],
//         id: 500,
//         safe: true,
//         lang: 'en'
//     }),

//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
//     });
// }

module.exports.logJSONData = logJSONData;