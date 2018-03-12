var express = require('express');
var bodyParser = require('body-parser');
var main_routes = require('./routes');
var port = process.env.PORT || 5000;
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', main_routes);

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});















// MVC
// - Model
// - View
// - Controller

























// const Note = sequelize.define('note', {
//   title: {
//     type: Sequelize.STRING
//   },
//   details: {
//     type: Sequelize.TEXT
//   }
// });

// Note.findAll().then(function(notes) {
// 	console.log(notes);
// }).catch(function(err) {console.log(err)});

// Note.create({
// 	title: 'Some title',
// 	details: 'Some details about note 1'
// });

// force: true will drop the table if it already exists
// Note.sync().then(() => {
//   console.log('synced worked!');
// });
