module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            user: req.user,
            root: 'accueil'
        })
    })

    app.get('/projets', (req, res) => {
        res.render('building', {
            user: req.user,
            root: 'projets'

        })
    })

    app.get('/parcours', (req, res) => {
        res.render('building', {
            user: req.user,
            root: 'parcours'

        })
    })

    app.get('/espace-membre', (req, res) => {
        res.render('building', {
            user: req.user,
            root: 'espace-membre'
        })
    })

    app.get('/connexion', (req, res) => {
        res.render('building', {
            user: req.user,
            root: 'connexion'
        })
    })

    app.get('/inscription', (req, res) => {
        res.render('enscription', {
            user: req.user,
            root: 'inscription'
        })
    })
}