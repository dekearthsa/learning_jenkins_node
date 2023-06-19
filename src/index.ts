const {app} = require("./router/app")
const PORT = 5500;

app.listen(PORT, () => {
    console.log(`service backend_node listen to port ${PORT} check at http://localhost:${PORT}/api/debug`);
})


