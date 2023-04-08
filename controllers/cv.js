
const Candidat = require('../models/candidat');

exports.getAllCandidats = async (req, res, next) => {

    // Vesion avec async / await
    try {
        const result = await Candidat.find();
        res.status(200).json(result)

    }
    catch (err) {
        // next(err);
        console.log(err);
    }

    // Version asynchrone
    // Candidat.find().then(result => {

    // })
    // .catch(err => {

    // })

}
exports.getCandidat = (req, res, next) => {
    const cId = req.params.myid;
    Candidat.findById(cId).then(result => {
        if (!result) {
            const error = new Error("Il n'existe aucun candidat avec cet Id");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(result)
    })

}
exports.createCandidat = (req, res, next) => {
    let prenom = req.body.prenom;
    let nom = req.body.nom;
    let age = req.body.age;
    let prof = req.body.profession;
    let avatar = req.body.avatar;

    const newCandidat = new Candidat({
        prenom: prenom,
        nom: nom,
        age: age,
        profession: prof,
        avatar: avatar
    });
    newCandidat.save().then(result => {
        res.status(201).json({
            message: 'Création réussie du candidat',
            result: result

        })
    })
        .catch(err => {
            console.log(err);
        })

}
exports.updateCandidat = (req, res, next) => {
    const id = req.params.id;
    Candidat.findById(id).then(result => {
        if (!result) {
            const error = new Error("Il n'existe aucun candidat avec cet Id");
            error.statusCode = 404;
            throw error;
        }
        result['prenom'] = req.body.prenom;
        result['nom'] = req.body.nom;
        result['age'] = req.body.age;
        result['profession'] = req.body.prof;
        result['avatar'] = req.body.avatar;

        result.save().then(result => {
            res.status(200).json({
                message: 'Mise à jour réussie du candidat',
                result: result

            })
        })
            .catch(err => {
                console.log(err);
            })



    })

}
exports.deleteCandidat = (req, res, next) => {
    let id = req.params.id;

    Candidat.findByIdAndRemove(id).then(result => {
        console.log(result);
        if (!result) {
            const error = new Error("Il n'existe aucun candidat avec cet Id");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            message: 'Candidat supprimé avec succès',
            prenom: result['prenom']   // result.prenom
        })
    })

}