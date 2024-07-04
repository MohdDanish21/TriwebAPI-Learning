"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerUser = (req, res, next) => {
    const user = new user_1.default(req.body);
    user.save();
    res.send("Registration Done");
};
exports.registerUser = registerUser;
