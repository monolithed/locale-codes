type StringStaticValues<T> = T[
    keyof {[K in keyof T as T[K] extends string ? K : never]: T[K]}
];

export type {StringStaticValues};
