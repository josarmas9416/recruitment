let _userRepository = null;
class DeleteUserUseCase {
    
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

     execute(params) {
        return _userRepository.delete(params)
    }
}

module.exports = DeleteUserUseCase