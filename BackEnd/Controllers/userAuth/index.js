const { registerUsers, findUser } = require("../../Services/userServices");
const generateToken = require("../../generateToken/index");

/**
 * @description User Registration Controller Which check the existance of user and then create user if not exist
 * @param {*} req 
 * @param {*} resp 
 */
exports.registerUser = async (req, resp) => {
    try {

        const jsonData = req.body;
        const user = await findUser(jsonData);
        if (user == null) {
            const ack = await registerUsers(jsonData);
            if (ack) {
                const token = generateToken(user, process.env.SECRET_KEY);
                resp.status(201).json({ message: "User Created Successfull", data: { user, token } });
            }
            else {
                resp.status(400).json({ message: "User Created unSuccessfull" });
            }
        }
        else { resp.status(400).json({ message: "Email Already In Use" }); }

    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Server Error", error: error });
    }
};



exports.login = async (req, resp) => {

    try {
        const userData = req.body;
        const userExist = await findUser(userData);
        if (userExist !== null) {
            const token = generateToken(userExist, process.env.SECRET_KEY);
            resp.status(200).json({ message: "User Login Successfull"  });
        }
        else {
            resp.status(404).json({ message: "User Not Found By that Credentials" });

        }
    } catch (error) {
        console.log(error)
        resp.status(500).json({ message: "Server Error" });
    }
};
