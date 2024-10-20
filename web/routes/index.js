var express = require('express');
var path = require('path');  // Asegúrate de importar el módulo 'path'
var router = express.Router();

// Ruta para servir el archivo home.html
router.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

router.get('/support', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'support.html'));
});

router.get('/singIn', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'singIn.html'));
});

router.get('/userpage', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'userpage.html'));
});



module.exports = router;
