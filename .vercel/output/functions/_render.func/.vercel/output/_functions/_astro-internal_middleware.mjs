import './chunks/astro-designed-error-pages_CKJPS4dC.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_CbIQdUng.mjs';
import { z } from 'zod';

var objectMapValues = map;

/*
  // returns a new object with the predicate applied to each value
  // like just-map-object, but (value, key, object) are passed to the predicate
  map({a: 3, b: 5, c: 9}, (value) => value + 1); // {a: 4, b: 6, c: 10}
  map({a: 3, b: 5, c: 9}, (value, key) => value + key); // {a: 3a, b: 5b, c: 9c}
  map({a: 3, b: 5, c: 9}, (value, key, object) => object.b); // {a: 5, b: 5, c: 5}
*/

function map(obj, predicate) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    result[key] = predicate(obj[key], key, obj);
  }
  return result;
}

async function validateForm({ formData, validator, }) {
    const result = await z
        .preprocess((formData) => {
        if (!(formData instanceof FormData))
            return formData;
        return objectMapValues(Object.fromEntries(formData), (value, key) => {
            const all = formData.getAll(String(key));
            return all.length > 1 ? all : value;
        });
    }, z.object(validator))
        .safeParseAsync(formData);
    if (result.success) {
        return { data: result.data, fieldErrors: undefined };
    }
    return {
        data: undefined,
        fieldErrors: result.error.formErrors.fieldErrors,
    };
}

const formContentTypes = [
    "application/x-www-form-urlencoded",
    "multipart/form-data",
];
function isFormRequest(request) {
    return (request.method === "POST" &&
        formContentTypes.some((t) => request.headers.get("content-type")?.startsWith(t)));
}
const onRequest$1 = defineMiddleware(({ request, locals }, next) => {
    locals.form = {
        async getData(form) {
            if (!isFormRequest(request))
                return undefined;
            // TODO: hoist exceptions as `formErrors`
            const formData = await request.clone().formData();
            return validateForm({ formData, validator: form.validator });
        },
        async getDataByName(name, form) {
            if (!isFormRequest(request))
                return undefined;
            // TODO: hoist exceptions as `formErrors`
            const formData = await request.clone().formData();
            if (formData.get("_formName") === name) {
                formData.delete("_formName");
                return validateForm({ formData, validator: form.validator });
            }
            return undefined;
        },
    };
    return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
