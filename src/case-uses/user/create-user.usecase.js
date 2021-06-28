let _userRepository = null;
class CreateUserUseCase {
    
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

    execute(params) {
        return _userRepository.create(params)
    }
}

module.exports = CreateUserUseCase