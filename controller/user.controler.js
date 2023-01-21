const user = {
    addUser: async (req, res) => {
        try {
            res.send('add user now')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports=user