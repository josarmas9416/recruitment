let _userRepository = null;
class UpdateUserUseCase {
    
    constructor({UserRepository}){
        _userRepository = UserRepository;
    }

    execute(params) {
        return _userRepository.update(params)
    }
}

module.exports = UpdateUserUseCase