var router = require('express').Router();
var Note = require('../models').note;

router.get('/', function(request, response) {
	Note.findAll().then(function(results) {
		response.render('index', {
			notes: results
			// test: 'Test Header',
			// fruits: ['apple', 'orange', 'grape'],
			// data: [
			// 	{
			// 		name: 'JD',
			// 		age: 38
			// 	},
			// 	{
			// 		name: 'Sarah',
			// 		age: 34
			// 	},
			// 	{
			// 		name: 'Bob',
			// 		age: 99
			// 	}
			// ]
		});
	});
});

router.post('/notes', function(request, response) {
	Note.create(request.body).then(function() {
		response.redirect('/');
	});
});

module.exports = router;




