"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = exports.Relation = exports.Model = exports.FireEnjinModel = void 0;
function FireEnjinModel(_a) {
    var _b = _a === void 0 ? {} : _a, hooks = _b.hooks, driver = _b.driver;
    var BaseModel = /** @class */ (function () {
        function BaseModel(_partial, options) {
            if (_partial === void 0) { _partial = {}; }
            this._partial = _partial;
            this._filterKeys = [];
            if (typeof (hooks === null || hooks === void 0 ? void 0 : hooks.beforeInit) === "function")
                hooks.beforeInit();
            Object.assign(this, this._partial);
            this._storagePath =
                (options === null || options === void 0 ? void 0 : options.storagePath) ||
                    this.constructor.name.toLocaleLowerCase().replace(" ", "_");
            this._filterKeys = (options === null || options === void 0 ? void 0 : options.filterKeys) || [];
            if (typeof (hooks === null || hooks === void 0 ? void 0 : hooks.afterInit) === "function")
                hooks.afterInit();
        }
        BaseModel.add = function (input, id) {
            return __awaiter(this, void 0, void 0, function () {
                var data, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = __assign({}, input);
                            res = null;
                            if (id)
                                data.id = id;
                            if (!(typeof (hooks === null || hooks === void 0 ? void 0 : hooks.beforeAdd) === "function")) return [3 /*break*/, 2];
                            return [4 /*yield*/, hooks.beforeAdd(data)];
                        case 1:
                            data = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(typeof (driver === null || driver === void 0 ? void 0 : driver.add) === "function")) return [3 /*break*/, 4];
                            return [4 /*yield*/, driver.add(data)];
                        case 3:
                            res = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (!(typeof (hooks === null || hooks === void 0 ? void 0 : hooks.afterAdd) === "function")) return [3 /*break*/, 6];
                            return [4 /*yield*/, hooks.afterAdd(res)];
                        case 5:
                            res = _a.sent();
                            _a.label = 6;
                        case 6: return [2 /*return*/, res];
                    }
                });
            });
        };
        BaseModel.edit = function (id, input) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = __assign({}, input);
                    if (id)
                        data.id = id;
                    return [2 /*return*/, data];
                });
            });
        };
        BaseModel.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = { id: id };
                    return [2 /*return*/, data];
                });
            });
        };
        BaseModel.find = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = { id: id };
                    return [2 /*return*/, data];
                });
            });
        };
        BaseModel.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, []];
                });
            });
        };
        BaseModel.prototype.save = function () {
            console.log("Saving: ", this);
            return {};
        };
        BaseModel.prototype.data = function () {
            for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (!key || this._filterKeys.includes(key) || key.charAt(0) === "_")
                    continue;
                this._partial[key] = value;
            }
            return this._partial;
        };
        return BaseModel;
    }());
    return BaseModel;
}
exports.FireEnjinModel = FireEnjinModel;
function Model(_a) {
    var _b = _a === void 0 ? {} : _a, storagePath = _b.storagePath;
    return function (constructor) {
        console.log(constructor);
    };
}
exports.Model = Model;
function Relation(_a) {
    var _b = _a === void 0 ? {} : _a, model = _b.model, storagePath = _b.storagePath;
    return function (target, key) {
        delete target[key];
        var backingField = "_" + key;
        Object.defineProperty(target, backingField, {
            writable: true,
            enumerable: true,
            configurable: true,
        });
        Object.defineProperty(target, key, {
            get: function () {
                var currentValue = this[backingField];
                console.log("Get: ".concat(key, " => ").concat(currentValue));
                return currentValue;
            },
            set: function (newValue) {
                console.log("Set: ".concat(key, " => ").concat(newValue));
                this[backingField] = newValue;
                this._partial[key] = newValue;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
exports.Relation = Relation;
function Transform(_a) {
    var _b = _a === void 0 ? {} : _a, get = _b.get, set = _b.set;
    return function (target, key) {
        delete target[key];
        var backingField = "_" + key;
        Object.defineProperty(target, backingField, {
            writable: true,
            enumerable: true,
            configurable: true,
        });
        Object.defineProperty(target, key, {
            get: function () {
                var currentValue = this[backingField];
                console.log("Transform Get: ".concat(key, " => ").concat(currentValue));
                return typeof get === "function" ? get(currentValue) : currentValue;
            },
            set: function (newValue) {
                var value = typeof set === "function" ? set(newValue) : newValue;
                console.log("Transform Set: ".concat(key, " => ").concat(value));
                this[backingField] = value;
                this._partial[key] = value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
exports.Transform = Transform;
