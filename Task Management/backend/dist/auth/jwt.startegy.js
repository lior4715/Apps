"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStartegy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const users_repository_1 = require("./users.repository");
let JwtStartegy = class JwtStartegy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersRepository) {
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            name: 'jwt'
        });
        this.usersRepository = usersRepository;
    }
    async validate(payload) {
        console.log('in validate');
        const { username } = payload;
        const user = await this.usersRepository.findUserbyUsername(username);
        if (!user) {
            throw new common_1.UnauthorizedException('Problem in va');
        }
        return user;
    }
};
exports.JwtStartegy = JwtStartegy;
exports.JwtStartegy = JwtStartegy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], JwtStartegy);
//# sourceMappingURL=jwt.startegy.js.map