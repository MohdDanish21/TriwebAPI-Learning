"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const user = new user_1.default(req.body);
        const result = yield user.save();
        if (!result) {
            resp = { status: "error", message: "no result found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "Registration done!", data: { userId: result._id } };
            res.send(resp);
        }
    }
    catch (error) {
        // console.log(error);
        resp = { status: "error", message: "something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userId = req.params.userId;
        const user = yield user_1.default.findById(userId, { name: 1, email: 1 });
        if (!user) {
            resp = { status: "error", message: "no user found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "User found", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "something went wrong", data: {} };
        res.status(500).send(resp);
    }
    // // console.log("body",req.body);
    // console.log("query",req.query);
    // console.log("params",req.params.userId);
    // res.send("done");
});
exports.getUser = getUser;
// const updateUser= async (req:Request,res:Response)=>{
//     let resp:ReturnResponse;
//     try {
//          const userId=req.body._id;
//          const user = await User.findById(userId);
//          if(!user){
//             resp={status:"error",message:"no user found",data:{}};
//             res.send(resp);
//         }
//         user.name= req.body.name;
//          await user.save()
//     } catch (error) {
//         console.log(error);
//         resp={status:"error",message:"something went wrong",data:{}};
//         res.status(500).send(resp);
//     }
// }
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userId = req.body._id;
        // Check if userId is present in the request body
        if (!userId) {
            // resp = { status: "error", message: "User _id is required", data: {} };
            // return res.status(400).send(resp);
            resp = { status: "error", message: "User _id is required", data: {} };
            res.send(resp);
        }
        // Find user by _id
        const user = yield user_1.default.findById(userId);
        // Check if user exists
        if (!user) {
            resp = { status: "error", message: "User not found", data: {} };
            return res.status(404).send(resp);
        }
        // Update user name
        user.name = req.body.name;
        yield user.save();
        // Send success response
        resp = { status: "success", message: "User updated", data: {} };
        res.send(resp);
    }
    catch (error) {
        console.error("Error in updateUser:", error);
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.updateUser = updateUser;
