const cheerio = require('cheerio');
const request = require('request-promise');

async function init(){
	const $  = await request({
		uri : 'https://www.quora.com/search?q=web+scraping&type=question',
		transform:  body => cheerio.load(body)
		});
	console.log($)
	const preguntas = $('.question_link').each((i, el) =>{
		console.log(i, $(el).html());
	})
}

init();