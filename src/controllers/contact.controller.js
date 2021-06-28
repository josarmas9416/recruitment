let _contactRepository = null;
class ContactController {

    constructor({ContactRepository}){
        _contactRepository = ContactRepository
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await _contactRepository.create(body);
        return res.json({statuscode:200, message: 'succesfully query', data: [createdUser]});
    }

    async update(req, res) {
        const { body } = req;
        const updateUser = await _contactRepository.update(body);
        return res.json({statuscode:201, message: 'succesfull query', data: [updateUser]});
    }

    async delete(req, res) {
        const {userId } = req.params; 
        const deletedUser = await _contactRepository.delete(userId);
        return res.json({statuscode:204, message: 'succesfull query', data: [deletedUser]});
    }

    async get(req, res) {
        const { userId } = req.params;
        const data = await _contactRepository.get(userId) 
        return res.json({statuscode:200, message: 'succesfull query', data: [...data]});
    }

    async getAll(req, res) {
        const { userId } = req.params;
        const data = await _contactRepository.getAll(userId) 
        return res.json({statuscode:200, message: 'succesfull query', data: [...data]});
    }
}


module.exports = ContactController;