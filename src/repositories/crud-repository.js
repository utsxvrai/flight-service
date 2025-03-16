const { Logger } = require('../config');

class crudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(err){
            Logger.error("Something went wrong in create method of crudRepository");
            throw err;
        }
    }
    async destroy(data){
        try{
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            });
            return response;
        }
        catch(err){
            Logger.error("Something went wrong in get method of crudRepository");
            throw err;
        }
    }

    async get(data){
        try{
            const response = await this.model.findByPk(data);
            return response;
        }
        catch(err){
            Logger.error("Something went wrong in get method of crudRepository");
            throw err;
        }
    }

    async getAll(data){
        try{
            const response = await this.model.findAll(data);
            return response;
        }
        catch(err){
            Logger.error("Something went wrong in create method of crudRepository");
            throw err;
        }
    }

    async update(id,data){
        try{
            const response = await this.model.update(data, { //data is an object
                where: {
                    id:id
                }
            });
            return response;
        }
        catch(err){
            Logger.error("Something went wrong in update method of crudRepository");
            throw err;
        }
    }
}

module.exports = crudRepository;