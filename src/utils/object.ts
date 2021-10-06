import { replaceVariables } from 'utils/string';

export function filterKeys(obj1 = {}, obj2 = {}, filterMap = []): any {
    const merged = { ...obj1, ...obj2 };
    const filtered = {};

    Object.keys(merged).forEach(key => {
        if (filterMap.includes(key)) {
            filtered[key] = merged[key];
        }
    });

    return filtered;
}


export function deserialize(json: object): any {
    const instance = { ...json };

    for(const prop in json) {
        if(!json[prop]) {
            instance[prop] = json[prop];
        }

        if(Array.isArray(json[prop])) {
            instance[prop] = json[prop];
        } else if(typeof json[prop] === 'object') {
            instance[prop] = deserialize(json[prop]);
        } else {
            instance[prop] = json[prop];
        }
    }
    
    return instance;
}

export function replaceObjectVariables(object: object, variables: object):any {
    if(typeof object === 'string') {
        return replaceVariables(object, variables);
    }

    if (!object || object.constructor !== Object) {
        return object;
    }

    for(const prop in object) {
        if(!object[prop]) {
            continue;
        }

        if(Array.isArray(object[prop])) {
            object[prop] =  object[prop].map(propValue => replaceObjectVariables(propValue, variables));
        } else if(typeof object[prop] === 'object') {
            object[prop] = replaceObjectVariables(object[prop], variables);
        } else if(typeof object[prop] === 'string') {
            object[prop] = replaceVariables(object[prop], variables);
        }
    }

    return object;
}

export function getKeyValyeByString(object: object, match: string): any {
    const path = match.split('.');
    return getKeyValueByPath(object, path);
}

export function getKeyValueByPath(object: object, path: string[]): any {
    const nextPath = path.shift();

    if(!object) {
        return undefined;
    }

    if(typeof object[nextPath] === 'object') {
        return getKeyValueByPath(object[nextPath], path);
    } else {
        return object[nextPath] || undefined;
    }
}
