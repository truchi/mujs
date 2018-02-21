import Note from '../Note'

describe('Construction', () => {
  test('Default to C without args', () => {
    const interval = new Note()

    expect(interval.semi).toBe(0)
    expect(interval.name).toBe('C')
    expect(interval.base).toBe('C')
    expect(interval.accs).toBe(0)
  })
})

describe('Arithmetic', () => {
  test('add', () => {
    expect(new Note(0).add(new Note(0)).semi).toBe(0)
    expect(new Note(2).add(new Note(3)).semi).toBe(5)
    // Outbound
    expect(new Note(5).add(new Note(7)).semi).toBe(0)
    expect(new Note(7).add(new Note(7)).semi).toBe(2)
  })

  test('sub', () => {
    expect(new Note(7).sub(new Note(7)).semi).toBe(0)
    expect(new Note(3).sub(new Note(2)).semi).toBe(1)
    // Outbound
    expect(new Note(5).sub(new Note(7)).semi).toBe(10)
  })
})

describe('Comparison', () => {
  test('equals', () => {
    expect(new Note('E').equals(new Note('E' ))).toBe(true)
    expect(new Note('E').equals(new Note('F♭'))).toBe(false)
  })

  test('equivs', () => {
    expect(new Note('E').equivs(new Note('E' ))).toBe(true)
    expect(new Note('E').equivs(new Note('F♭'))).toBe(true)
  })
})
