exports.getHome = (req, res) => {
    try {
        res.render('index'); 
    } catch (error) {
        console.log(error);
    }
};

exports.getDahboard = (req, res) => {
    try {
        res.render('dashboard'); 
    } catch (error) {
        console.log(error);
    }
};

exports.editPriscription = (req, res) => {
    try {
        res.render('editPrescription');
    } catch (error) {
        console.log(error);
    }
};

exports.bookAppoinment = (req, res) => {
    try {
        res.render('bookAppoinment');
    } catch (error) {
        console.log(error);
    }
};

exports.login = (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
    }
};

exports.logout = (req, res) => {
    try {
        res.render('logout');
    } catch (error) {
        console.log(error);
    }
};
exports.patients = (req, res) => {
    try {
        res.render('patientList');
    } catch (error) {
        console.log(error);
    }
}
exports.patientsPrescription = (req, res) => {
    try {
        res.render('patientPrescription');
    } catch (error) {
        console.log(error);
    }
}

exports.priscriptionEntry = (req, res) => {
    try {
        res.render('priscriptionEntry');
    } catch (error) {
        console.log(error);
    }
};

exports.priscriptions = (req, res) => {
    try {
        res.render('priscriptions');
    } catch (error) {
        console.log(error);
    }
};

exports.register = (req, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(error);
    }
};

exports.getSurah = (req, res) => {
    try {
        res.render('support');
    } catch (error) {
        console.log(error);
    }
};