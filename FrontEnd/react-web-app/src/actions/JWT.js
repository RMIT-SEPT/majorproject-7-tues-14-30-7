import {TOKEN_NAME} from "./types"
import jwt_decode from "jwt-decode";
/* 
kirlich, Arseniy-II, May 2020, Get cookie by name, Stackoverflow,
 * viewed on 12/10/2020, 
 * <https://stackoverflow.com/questions/10730362/get-cookie-by-name> 
 */

export function getJWT() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${TOKEN_NAME}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    };
}

export function getUsername() {
    const payload = jwt_decode(getJWT());
    return payload.sub;
}