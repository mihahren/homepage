//------------------------------ MODULES -----------------------------//

var path = require('path');

//------------------------------ EXTERNAL MODULES -----------------------------//

var express = require('express');
var debug = require('debug')('homepage');
var favicon = require('static-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var jade = require('jade');

//------------------------------ EXPRESS SETTINGS -----------------------------//

var app = express();

app.use(logger('dev'));
app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../client')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

//------------------------------ DATA -----------------------------//

var data = {
	menu: {
		title: 'Homepage',
		brand: 'Miha Hren',
		projects: {
			title: 'Projects',
			projects: [
				{name: 'CondorUI', url:'http://condorui.mihahren.com'},
				{name: 'Structure', url:'http://structure.mihahren.com'},
				{name: 'Vapor', url:'http://www.vapourpowered.com'}
			]
		},
		about: 'About',
		contact: 'Contact'
	}
};

//------------------------------ ROUTES -----------------------------//

app.get('/', function(req, res) {
	res.render('./index.jade', data);
});

app.get('/about', function(req, res) {
	res.render('./about.jade', data);
});

app.get('/contact', function(req, res) {
	res.render('./contact.jade', data);
});

//------------------------------ EXPORT -----------------------------//

module.exports = app;