const app = require("./app") //this line is importing express and cors.
require("dontenv").config();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));