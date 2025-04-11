const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/constroller');

router.get('/', controller.getHome);
router.get('/dashboard',controller.getDahboard);
router.get('/edit-prescription',controller.editPriscription);
router.get('/book-appoinment',controller.bookAppoinment);
router.get('/login',controller.login);
router.get('/logout',controller.logout);
router.get('/patients',controller.patients);
router.get('/patients-prescription',controller.patientsPrescription);
router.get('/priscription-entry',controller.priscriptionEntry);
router.get('/priscriptions',controller.priscriptions);
router.get('/register',controller.register);
router.get('/support',controller.getSurah);

module.exports = router;