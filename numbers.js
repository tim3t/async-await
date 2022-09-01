async function getOneNumberFact() {
	const res = await axios.get('http://numbersapi.com/16/trivia/?json');
	console.log(res.data.text);
}

getOneNumberFact();

async function getThreeNumberFacts() {
	const res1 = await axios.get('http://numbersapi.com/16/trivia/?json');
	const res2 = await axios.get('http://numbersapi.com/22/trivia/?json');
	const res3 = await axios.get('http://numbersapi.com/34/trivia/?json');
	console.log(res1.data.text);
	console.log(res2.data.text);
	console.log(res3.data.text);
}

getThreeNumberFacts();

async function getFourFactsAboutSixteen() {
	const baseURL = 'http://numbersapi.com/16/trivia/?json';
	let p1Promise = axios.get(`${baseURL}`);
	let p2Promise = axios.get(`${baseURL}`);
	let p3Promise = axios.get(`${baseURL}`);

	let p1 = await p1Promise;
	let p2 = await p2Promise;
	let p3 = await p3Promise;

	console.log(`Fact 1: ${p1.data.text}`);
	console.log(`Fact 2: ${p2.data.text}`);
	console.log(`Fact 3: ${p3.data.text}`);

	$('#numberList').append(`<li>${p1.data.text}`);
	$('#numberList').append(`<li>${p2.data.text}`);
	$('#numberList').append(`<li>${p3.data.text}`);
}

getFourFactsAboutSixteen();
