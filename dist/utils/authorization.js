"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Authorization {
    constructor() {
        this.auth = '';
    }
    get() {
        return this.auth;
    }
    set(data) {
        this.auth = `${data.tokenType} ${data.accessToken}`;
    }
}
exports.default = Authorization;
