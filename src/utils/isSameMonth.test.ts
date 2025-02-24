import { isSameMonth } from 'date-fns'

describe('isSameMonth function', () => {
  it('return true', () => {
    // Given
    const baseDate = new Date(2020, 11, 27)
    const targetDate1 = new Date(2020, 11, 22)
    // When
    const result1 = isSameMonth(baseDate, targetDate1)
    // Then
    expect(result1).toBeTruthy()
  })

  it('return false', () => {
    // Given
    const baseDate = new Date(2020, 11, 27)
    const targetDate1 = new Date(2021, 11, 27)
    const targetDate2 = new Date(2020, 10, 27)
    const targetDate3 = new Date(2021, 10, 27)
    // When
    const result1 = isSameMonth(baseDate, targetDate1)
    const result2 = isSameMonth(baseDate, targetDate2)
    const result3 = isSameMonth(baseDate, targetDate3)
    // Then
    expect(result1).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()
  })
})
