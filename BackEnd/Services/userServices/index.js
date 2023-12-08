const { userModel } = require("../../Schemas/userCollectionSchema/index");

exports.registerUsers = (obj) => {

    return userModel.insertMany([obj]);
}


exports.findUser = (obj) => {

    return userModel.findOne({ $and: [{ email: obj.email }, { password: obj.password }] }, { password: 0 });

}