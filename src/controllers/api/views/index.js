const renderLogin = (req, res) => {
    res.send("renderLogin");
}
const renderSignUp = (req, res) => {
    res.send("renderSignUp");
}
const renderDashboard = (req, res)  => {
    res.send("renderDashboard");
}
const renderCreateBlog = (req, res) => {
    res.send("renderCreateBlog");
}
const renderBlogById = (req, res) => {
    res.send("renderBlogById");
}
const renderEditBlogsId = (req, res) => {
    res.send("renderEditBlogsId");
}
const renderHome = (req, res) => {
    res.send("renderHome");
}

module.exports =  {
    renderLogin,
    renderSignUp,
    renderDashboard,
    renderCreateBlog,
    renderBlogById,
    renderEditBlogsId,
    renderHome,
}