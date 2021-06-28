let _userRepository = null;
class GetUserUseCase {
    
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

    execute(id) {
        return _userRepository.get(id)
    }
}

module.exports = GetUserUseCase