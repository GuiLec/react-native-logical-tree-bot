export type NestedKeys<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: NestedKeys<
        T[K],
        `${Prefix}${K extends string ? `.${K}` : ''}`
      >;
    }[keyof T]
  : Prefix extends ''
    ? never
    : // eslint-disable-next-line unused-imports/no-unused-vars
      Prefix extends `${infer _Head}.${infer Tail}`
      ? Tail
      : never;
