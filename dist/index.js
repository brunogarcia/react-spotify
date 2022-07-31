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
require("dotenv/config");
const axios_1 = __importDefault(require("axios"));
const query_string_1 = __importDefault(require("query-string"));
const express_1 = __importDefault(require("express"));
const generateRandomString_1 = __importDefault(require("./utils/generateRandomString"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
// Authorization Code Flow
// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
const stateKey = 'spotify_auth_state';
const scope = 'user-read-private user-read-email';
app.get('/', (req, res) => {
    res.redirect('/login');
});
// 1) Request authorization from Spotify
app.get('/login', (req, res) => {
    const state = (0, generateRandomString_1.default)(16);
    const params = query_string_1.default.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        state,
        scope
    });
    res.cookie(stateKey, state);
    res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});
// 2) Use auth code to request access token
app.get('/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = query_string_1.default.stringify({
        code: req.query.code || null,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
    });
    const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const auth = `${buffer.toString('base64')}`;
    const headers = {
        Authorization: `Basic ${auth}`,
        'content-type': 'application/x-www-form-urlencoded'
    };
    try {
        const responseToken = yield (0, axios_1.default)({
            method: 'post',
            data,
            headers,
            url: 'https://accounts.spotify.com/api/token'
        });
        if (responseToken.status === 200) {
            // 3) Use access token to request user data from Spotify API
            const { access_token: accessToken, token_type: tokenType } = responseToken.data;
            try {
                const responseUser = yield axios_1.default.get('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: `${tokenType} ${accessToken}`
                    }
                });
                res.send(`<pre>${JSON.stringify(responseUser.data, null, 2)}</pre>`);
            }
            catch (error) {
                res.send(error);
            }
        }
        else {
            res.send(responseToken);
        }
    }
    catch (error) {
        res.send(error);
    }
}));
// 4) Request refresh token
app.get('/refresh_token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refresh_token: refreshToken } = req.query;
    const buffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const auth = `${buffer.toString('base64')}`;
    const headers = {
        Authorization: `Basic ${auth}`,
        'content-type': 'application/x-www-form-urlencoded'
    };
    try {
        const response = yield (0, axios_1.default)({
            method: 'post',
            headers,
            url: 'https://accounts.spotify.com/api/token',
            data: query_string_1.default.stringify({
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            })
        });
        res.send(response.data);
    }
    catch (error) {
        res.send(error);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
