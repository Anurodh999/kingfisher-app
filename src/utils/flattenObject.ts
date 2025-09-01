type Primitive = string | number | boolean | null | undefined;

export function flattenObject<T extends object>(
obj: T,
parentKey = "",
result: Record<string, Primitive> = {}
): Record<string, Primitive> {
for (const [key, value] of Object.entries(obj)) {
const newKey = parentKey ? `${parentKey}.${key}` : key;

if (Array.isArray(value)) {
value.forEach((item, index) => {
if (typeof item === "object" && item !== null) {
flattenObject(item, `${newKey}.${index}`, result);
} else {
result[`${newKey}.${index}`] = item as Primitive;
}
});
} else if (typeof value === "object" && value !== null) {
flattenObject(value as object, newKey, result);
} else {
result[newKey] = value as Primitive;
}
}
return result;
}

// Utility type
export type Flatten<T, P extends string = ""> =
T extends Primitive ? { [K in P]: T } :
T extends Array<infer U> ? Flatten<U, `${P}.${number}`> :
T extends object ? {
[K in keyof T & string as P extends "" ? K : `${P}.${K}`]:
Flatten<T[K], P extends "" ? K : `${P}.${K}`>[keyof Flatten<T[K], P extends "" ? K : `${P}.${K}`>]
} : {};