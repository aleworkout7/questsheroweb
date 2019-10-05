const db = require('./mongo')

module.exports = async (req, res) => {

    console.log(req.query)

    var p_title, p_status;

    p_title = req.query.title;
    p_status = req.query.status;

    await db.criaCollation('quests')

    insertQuest = async (p_title, p_status) => {
        await db.insertDados('quests', { title : p_title, status : p_status }).then(result => {
            console.log(result)
        })
    }

    res.sendStatus(200)

}