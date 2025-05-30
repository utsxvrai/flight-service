const { Logger } = require('../config');
const {StatusCodes} = require('http-status-codes');
const { AppError } = require('../utils');
class crudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
            const response = await this.model.create(data);
            return response;
        
    }
    async destroy(data){
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            });
            // console.log(response);
            if(response == 0){
                throw new AppError('Not able to found the resource', StatusCodes.NOT_FOUND);
            }
            return response;
        }

    async get(data){
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError('Not able to found the resource', StatusCodes.NOT_FOUND);
            
            }
            return response;
    }

    async getAll(data){
            const response = await this.model.findAll(data);
            return response;
    }

    async update(id,data){
        
            const response = await this.model.update(data, { //data is an object
                where: {
                    id:id
                }
            });
            return response;
    }
}

module.exports = crudRepository;