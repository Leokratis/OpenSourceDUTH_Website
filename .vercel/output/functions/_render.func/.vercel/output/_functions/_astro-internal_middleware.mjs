import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D0xUzDgA.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_B7cL-PBv.mjs';
import mapValues from 'just-map-values';
import { z } from 'zod';

async function validateForm({ formData, validator, }) {
    const result = await z
        .preprocess((formData) => {
        if (!(formData instanceof FormData))
            return formData;
        return mapValues(Object.fromEntries(formData), (value, key) => {
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
