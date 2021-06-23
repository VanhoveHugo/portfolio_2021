module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            root: 'accueil'
        })
    })

    app.get('/projets', (req, res) => {
        res.render('projets', {
            root: 'projets'
        })
    })

    app.get('/parcours', (req, res) => {
        res.render('about', {
            root: 'parcours'
        })
    })

    app.get('*', (req, res) => {
        res.render('error', {
            root: '404'
        })
    })
}