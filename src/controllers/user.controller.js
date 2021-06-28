let _createUserUseCase, _updateUserUseCase, _deleteUserUseCase, _getUserUseCase, _getAllUseCase = null;
class UserController {

    constructor({CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase, GetUserUseCase, GetAllUserUseCase}){
        _createUserUseCase = CreateUserUseCase;
        _updateUserUseCase = UpdateUserUseCase;
        _deleteUserUseCase = DeleteUserUseCase,
        _getUserUseCase = GetUserUseCase;
        _getAllUseCase = GetAllUserUseCase
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await _createUserUseCase.execute(body);
        return res.json({statuscode:200, message: 'succesfully query', data: [createdUser]});

    }

    async update(req, res) {
        const { body } = req;
        const updateUser = await _updateUserUseCase.execute(body);
        return res.json({statuscode:201, message: 'succesfull query', data: [updateUser]});
    }

    async delete(req, res) {
        const {userId } = req.params; 
        const deletedUser = await _deleteUserUseCase.execute(userId);
        return res.json({statuscode:204, message: 'succesfull query', data: [deletedUser]});
    }

    async get(req, res) {
        const { userId } = req.params;
        const data = await _getUserUseCase.execute(userId) 
        return res.json({statuscode:200, message: 'succesfull query', data: [...data]});
    }

    async getAll(req, res) {
        const { userId } = req.params;
        const data = await _getAllUseCase.execute(userId) 
        return res.json({statuscode:200, message: 'succesfull query', data: [...data]});
    }
  
  
}


module.exports = UserController;