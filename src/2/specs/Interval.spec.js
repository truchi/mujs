import Interval from '../Interval'

describe('Construction', () => {
  test('Default to root without args', () => {
    const interval = new Interval()

    expect(interval.semi).toBe(0)
    expect(interval.name).toBe('1')
    expect(interval.base).toBe('1')
    expect(interval.accs).toBe(0)
  })
})

describe('Arithmetic', () => {
  test('add', () => {
    expect(new Interval(0).add(new Interval(0)).semi).toBe(0)
    expect(new Interval(2).add(new Interval(3)).semi).toBe(5)
    // Outbound
    expect(new Interval(5).add(new Interval(7)).semi).toBe(0)
    expect(new Interval(7).add(new Interval(7)).semi).toBe(2)
  })

  test('sub', () => {
    expect(new Interval(7).sub(new Interval(7)).semi).toBe(0)
    expect(new Interval(3).sub(new Interval(2)).semi).toBe(1)
    // Outbound
    expect(new Interval(5).sub(new Interval(7)).semi).toBe(10)
  })
})

describe('Comparison', () => {
  test('equals', () => {
    expect(new Interval('3').equals(new Interval( '3'))).toBe(true)
    expect(new Interval('3').equals(new Interval('♭4'))).toBe(false)
  })

  test('equivs', () => {
    expect(new Interval('3').equivs(new Interval( '3'))).toBe(true)
    expect(new Interval('3').equivs(new Interval('♭4'))).toBe(true)
  })
})
