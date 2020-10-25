"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const datetime_1 = require("./datetime");
describe('datetime', () => {
    describe('parseDateTime', () => {
        describe.each([
            null,
            undefined,
            '11.01.1998',
            '01/09/2001',
        ])('v = %o', (v) => {
            it('shouls return null if input cannot be parsed as luxon.DateTime', () => {
                expect(datetime_1.parseDateTime(v)).toBeNull();
            });
        });
        describe.each([
            '2020-01-01',
            new Date(),
            1600275033,
            1600275033000,
            luxon_1.DateTime.local(),
        ])('v = %o', (v) => {
            it('should return DateTime if input can be parsed as luxon.DateTime', () => {
                const dt = datetime_1.parseDateTime(v);
                expect(dt).toBeInstanceOf(luxon_1.DateTime);
                expect(dt.isValid).toBeTruthy();
            });
        });
    });
});
//# sourceMappingURL=datetime.spec.js.map