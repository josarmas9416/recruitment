class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findAll({
                        where: { id: id }});
    }

    async getAll() {
        return await this.model.findAll();
    }

    async create(entity) {
        return await this.model.create(entity)
    }

    async update(body) {
        return await this.model.update(boody, {
            where: {
              id: body.id
            }
          });
    }

    async delete(id) {
        return await this.model.destroy({
            where: {
              id: id
            }
          });
    }
}

module.exports = BaseRepository; 
