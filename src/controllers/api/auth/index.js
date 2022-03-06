const login = (req, res) => {
    return res.send("login");
};

const signup = (req, res) => {
    return res.send("signup");
};

const logout = (req, res) => {
    return res.send("logout");
};

module.exports = {login, logout, signup};