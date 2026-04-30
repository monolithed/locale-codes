import {
    describe,
    test,
    expect
} from 'vitest';

import {
    CountryCodes,
    LanguageCodes,
    LocaleCodes
} from '../src/index.ts';

describe('Directives', async () => {
    test('Constants', async () => {
        expect(CountryCodes.AD).toBe('AD');
        expect(LocaleCodes.AR_LB).toBe('ar-LB');
        expect(LanguageCodes.RU).toBe('ru');
    });

    test('Extensibility', async () => {
        class CustomLocaleCodes extends LocaleCodes {
            public static readonly ZH_HANS_CN = 'zh-Hans-CN';
        }

        expect(CustomLocaleCodes.ZH_HANS_CN).toBe('zh-Hans-CN');
    });
});
