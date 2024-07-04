"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://danishdmseo:Danish123@myfirstproject.flxpytt.mongodb.net/QuizApp?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log("hello");
    res.send("hi am learner");
});
//redirect /user to userRoute
app.use('/user', user_1.default);
// mongoose.connect(connectionString,(err)=>{
//     console.log(err);
// })
// app.listen(3000);
mongoose_1.default.connect(connectionString)
    .then((success) => app.listen(3000))
    .catch((err) => console.log(err.message));
