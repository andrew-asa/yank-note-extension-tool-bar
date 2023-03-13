import { formatDate, getCurrentTimestamp, getLastWorkDate, getNextWordDay, getTimestamp } from '../ghost_base_date';
test('formatDate', () => {
    expect(formatDate(1678089258966)).toStrictEqual('2023-03-06 15:54:18')
})
test('getNextWordDay', () => {
    // expect(getNextWordDay(getTimestamp('2023-02-28'))).toBe('2023-03-01')
    // expect(getNextWordDay(getTimestamp('2023-03-02'))).toBe('2023-03-03')
    // expect(getNextWordDay(getTimestamp('2023-03-03'))).toBe('2023-03-06')
    // expect(getNextWordDay(getTimestamp('2023-03-04'))).toBe('2023-03-06')
    // expect(getNextWordDay(getTimestamp('2023-03-05'))).toBe('2023-03-06')
    // expect(getNextWordDay(getTimestamp('2023-03-06'))).toBe('2023-03-07')
})

test('getLastWorkDate', () => {
    // expect(getLastWorkDate(getTimestamp('2023-03-01'))).toStrictEqual('2023-02-08')
    // expect(getLastWorkDate(getTimestamp('2023-03-01'))).toBe('2023-02-08')
    // expect(getLastWorkDate(getTimestamp('2023-03-03'))).toBe('2023-03-02')
    // expect(getLastWorkDate(getTimestamp('2023-03-04'))).toBe('2023-03-03')
    // expect(getLastWorkDate(getTimestamp('2023-03-05'))).toBe('2023-03-03')
    // expect(getLastWorkDate(getTimestamp('2023-03-06'))).toBe('2023-03-03')
    // expect(getLastWorkDate(getTimestamp('2023-03-07'))).toBe('2023-03-03')
})