"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const schema_1 = require("./schema");
function createTransaction(signerId, publicKey, receiverId, nonce, actions, blockHash) {
    return new schema_1.Transaction({ signerId, publicKey, nonce: new bn_js_1.default(nonce), receiverId, actions, blockHash });
}
exports.createTransaction = createTransaction;
