var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        while (_) try {
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
var _a, _b;
function FireEnjinModel() {
    var Resource = /** @class */ (function () {
        function Resource(partial, options) {
            this.partial = partial;
            Object.assign(this, this.partial);
            this.storagePath = (options === null || options === void 0 ? void 0 : options.storagePath) || this.constructor.name;
            // options?.storagePath || pluralize(this.constructor.name);
        }
        Resource.add = function (input, id) {
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
        Resource.edit = function (id, input) {
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
        Resource.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = { id: id };
                    return [2 /*return*/, data];
                });
            });
        };
        Resource.find = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = { id: id };
                    return [2 /*return*/, data];
                });
            });
        };
        Resource.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, []];
                });
            });
        };
        Resource.prototype.save = function () {
            console.log(this);
            return {};
        };
        Resource.prototype.data = function () {
            for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                console.log(key, value);
                this.partial[key] = value;
            }
            return this.partial;
        };
        return Resource;
    }());
    return Resource;
}
function Model(_a) {
    var _b = _a === void 0 ? {} : _a, storagePath = _b.storagePath;
    return function (constructor) {
        console.log(constructor);
    };
}
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
                if (newValue === null || newValue === void 0 ? void 0 : newValue.id)
                    console.log("Set: ".concat(key, " => ").concat(newValue));
                this[backingField] = newValue;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User = __decorate([
        Model()
    ], User);
    return User;
}(FireEnjinModel()));
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Relation({ model: User })
    ], Test.prototype, "user", void 0);
    Test = __decorate([
        Model()
    ], Test);
    return Test;
}(FireEnjinModel()));
var testing = new Test();
testing.name = "wee";
testing.wee = "woo";
console.log((_a = testing.user) === null || _a === void 0 ? void 0 : _a.firstName);
testing.user = new User({
    firstName: "Bobby",
    lastName: "Johnson",
});
console.log((_b = testing.user) === null || _b === void 0 ? void 0 : _b.firstName);
testing.save();