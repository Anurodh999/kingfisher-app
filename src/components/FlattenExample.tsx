import React from "react";
import { flattenObject } from "../utils/flattenObject";

const obj = {
a: 1,
b: {
c: "hello",
d: { e: true },
},
f: [{ g: "world" }],
};

const flattened = flattenObject(obj);

export const FlattenExample: React.FC = () => {
return (
<div>
<h2>Flattened Object</h2>
<pre data-testid="flattened-output">{JSON.stringify(flattened, null, 2)}</pre>
</div>
);
};