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

CountryCodes.GB         // "GB"
LanguageCodes.RU        // "ru"
LocaleCodes.EN_US       // "en-US"
```

### Extensible

Define and reuse your own constants with full autocompletion and type safety:

```ts
import {LocaleCodes} from '@monolithed/locale-codes';

class CustomLocaleCodes extends LocaleCodes {
    public static readonly ZH_HANS_CN = 'zh-Hans-CN';
}

CustomHeaders.ZH_HANS_CN    // "zh-Hans-CN"
```


### Benefits

* **Type-safe**: Avoid typos in locales
* **Autocompletion**: Full IDE support with TypeScript
* **Zero dependencies**: Lightweight and fast
* **Compatible**: Supports both ESM and CJS
* **Extensible**: Easily add custom directives and headers


### Contributing


Please motivate yourself to submit a PR.


### License

MIT
