'use strict';

var nearApiJs = require('near-api-js');
var react = require('react');
var zustand = require('zustand');

var myKeysStore = new nearApiJs.keyStores.BrowserLocalStorageKeyStore();
var connectionConfig = {
    networkId: 'testnet',
    keyStore: myKeysStore,
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://nearblocks.io/',
};
var NEAR_BLOCK_EXPLORER_BASE_URL = 'https://api-testnet.nearblocks.io/v1';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useZustandNearWallet = zustand.create(function (set) { return ({
    isLoading: true,
    wallet: undefined,
    saveWallet: function (wallet) {
        return set(function () { return ({ isLoading: false, wallet: wallet }); });
    },
}); });

function useNearWallet() {
    var _a = useZustandNearWallet(), isLoading = _a.isLoading, wallet = _a.wallet, saveWallet = _a.saveWallet;
    function onGet() {
        return __awaiter(this, void 0, void 0, function () {
            var connection, walletConnection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nearApiJs.connect(connectionConfig)];
                    case 1:
                        connection = _a.sent();
                        walletConnection = new nearApiJs.WalletConnection(connection, '');
                        saveWallet(walletConnection);
                        return [2 /*return*/];
                }
            });
        });
    }
    react.useEffect(function () {
        onGet();
    }, []);
    return {
        wallet: wallet,
        isLoading: isLoading,
    };
}

function onGetNearWalletConnection() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, walletConnection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nearApiJs.connect(connectionConfig)];
                case 1:
                    connection = _a.sent();
                    walletConnection = new nearApiJs.WalletConnection(connection, '');
                    return [2 /*return*/, walletConnection];
            }
        });
    });
}

function useSignin(_a) {
    var contractId = _a.contractId, failureUrl = _a.failureUrl, methodNames = _a.methodNames, successUrl = _a.successUrl;
    function onSignin() {
        return __awaiter(this, void 0, void 0, function () {
            var wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, onGetNearWalletConnection()];
                    case 1:
                        wallet = _a.sent();
                        return [4 /*yield*/, (wallet === null || wallet === void 0 ? void 0 : wallet.requestSignIn({
                                contractId: contractId,
                                failureUrl: failureUrl,
                                methodNames: methodNames,
                                successUrl: successUrl,
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return {
        onSignin: onSignin,
    };
}

function useSignout() {
    function onSignout() {
        return __awaiter(this, void 0, void 0, function () {
            var wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, onGetNearWalletConnection()];
                    case 1:
                        wallet = _a.sent();
                        wallet === null || wallet === void 0 ? void 0 : wallet.signOut();
                        return [2 /*return*/];
                }
            });
        });
    }
    return {
        onSignout: onSignout,
    };
}

function useAccount(accountId) {
    var _a = react.useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react.useState(null), account = _b[0], setAccount = _b[1];
    function onGetAccount() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(NEAR_BLOCK_EXPLORER_BASE_URL, "/account/").concat(accountId))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log('data', data);
                        setAccount(data.account[0]);
                        setIsLoading(false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        setIsLoading(false);
                        return [2 /*return*/, err_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    react.useEffect(function () {
        onGetAccount();
    }, []);
    return { account: account, isLoading: isLoading };
}

function useInventory(accountId) {
    var _a = react.useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react.useState(null), inventory = _b[0], setInvetory = _b[1];
    function onGetAccountInventory() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(NEAR_BLOCK_EXPLORER_BASE_URL, "/account/").concat(accountId, "/inventory"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setInvetory(data.inventory);
                        setIsLoading(false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        setIsLoading(false);
                        return [2 /*return*/, err_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    react.useEffect(function () {
        onGetAccountInventory();
    }, []);
    return {
        isLoading: isLoading,
        inventory: inventory,
    };
}

function parseYocto(nearAmount) {
    var amountInYocto = nearApiJs.utils.format.parseNearAmount(nearAmount);
    return amountInYocto || '';
}
function parseNear(yoctoNearAmount) {
    var amountInNEAR = nearApiJs.utils.format.formatNearAmount(yoctoNearAmount);
    return amountInNEAR || '';
}

exports.NEAR_BLOCK_EXPLORER_BASE_URL = NEAR_BLOCK_EXPLORER_BASE_URL;
exports.connectionConfig = connectionConfig;
exports.parseNear = parseNear;
exports.parseYocto = parseYocto;
exports.useAccount = useAccount;
exports.useInventory = useInventory;
exports.useNearWallet = useNearWallet;
exports.useSignin = useSignin;
exports.useSignout = useSignout;
