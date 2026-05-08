# @monolithed/locale-codes

A TypeScript package providing strongly typed constants for locale, language, and country codes. <br/>
Say goodbye to string typos and make your locale code safer, cleaner, and more maintainable.


### Installation

```sh
npm i @monolithed/locale-codes
```

### Usage example

```tsx
import {
    CountryCodes,
    LanguageCodes,
    LocaleCodes
} from '@monolithed/locale-codes';

CountryCodes.GB;         // "GB"
LanguageCodes.RU;        // "ru"
LocaleCodes.EN_US;       // "en-US"
```

### Extensible

Define and reuse your own constants with full autocompletion and type safety:

```ts
import {LocaleCodes} from '@monolithed/locale-codes';

class CustomLocaleCodes extends LocaleCodes {
    public static readonly ZH_HANS_CN = 'zh-Hans-CN';
}

CustomHeaders.ZH_HANS_CN;    // "zh-Hans-CN"
```

### The extensibility trade-off

To make interfaces extensible, we use static class properties. Unlike enums, a class cannot be used directly as a type representing a set of fields:

```ts
type Languages = {
    [key in LanguageCodes]?: string; // ❌
};
```
The code above will throw an error. To fix it:

```ts
import type {LocaleCode} from '@monolithed/locale-codes';

type Languages = {
    [key in LocaleCode]?: string; // ✅
};

const locale: Languages = {
    en: 'magic!'
};
```

In most cases, you don't need this, but it's a trade‑off you make for extensibility.

Available types are derived from static class values and should be used instead of referencing the class directly in type positions. These include `LocaleCode`, `LanguageCode`, and `CountryCode`.


### Benefits

* **Standard-compliant**: ISO 3166-1 and ISO 639-1 
* **Type-safe**: Avoid typos in locales
* **Autocompletion**: Full IDE support with TypeScript
* **Zero dependencies**: Lightweight and fast
* **Compatible**: Supports both ESM and CJS
* **Extensible**: Easily add custom directives and headers


### Contributing

Please motivate yourself to submit a PR.


### License

MIT
