const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require("../../config");
const app = require("./index");
const { UserRepository, ContactRepository } = require("../repositories");
const { CreateUserUsecase, UpdateUserUseCase,
        DeleteUserUseCase, GetUserUseCase, GetAllUserUseCase} = require('../case-uses/user');
const { UserController, ContactController } = require('../controllers');
const { UserRoutes, ContactRoutes } = require("../routes/index.routes");
const Routes = require("../routes/index"); 
const db = require('../../models')
const container = createContainer();
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        db: asValue(db) 
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        ContactRepository: asClass(ContactRepository).singleton(),
    })
    .register({
        CreateUserUseCase: asClass(CreateUserUsecase).singleton(),
        UpdateUserUseCase: asClass(UpdateUserUseCase).singleton(),
        DeleteUserUseCase: asClass(DeleteUserUseCase).singleton(),
        GetUserUseCase: asClass(GetUserUseCase).singleton(),
        GetAllUserUseCase: asClass(GetAllUserUseCase).singleton()
    })
    .register({
        UserController: asClass(UserController.bind(UserController)).singleton(),    
        ContactController: asClass(ContactController.bind(ContactController)).singleton(),       
   
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton(),
        ContactRoutes: asFunction(ContactRoutes).singleton(),
    })
    .register({
        User: asValue(db.User),
        Contact: asValue(db.Contact)
    })
    

module.exports = container;