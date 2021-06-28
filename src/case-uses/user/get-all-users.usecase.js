let _userRepository = null;
class GetAllUserUseCase {
    
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

    execute(params) {
        return _userRepository.getAll(params)
    }
}
module.exports = GetAllUserUseCase