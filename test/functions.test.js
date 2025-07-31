import { describe, expect, it } from 'vitest'
import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../src/constants'
import { formatSecondsWithSign, normalizeSelectValue } from '../src/functions'

describe('formatSecondsWithSign', () => {
  it.each([
    [SECONDS_IN_MINUTE * 0, '+00:00:00'],
    [SECONDS_IN_MINUTE * 1, '+00:01:00'],
    [SECONDS_IN_MINUTE * 3, '+00:03:00'],
    [SECONDS_IN_MINUTE * 30, '+00:30:00'],
    [SECONDS_IN_HOUR, '+01:00:00'],
    [SECONDS_IN_DAY, '+00:00:00']
  ])('positive: formatSecondsWithSign(%i) -> %j', (seconds, formattedSeconds) => {
    expect(formatSecondsWithSign(seconds)).toBe(formattedSeconds)
  })

  it.each([
    [-SECONDS_IN_MINUTE * 0, '+00:00:00'],
    [-SECONDS_IN_MINUTE * 1, '-00:01:00'],
    [-SECONDS_IN_MINUTE * 3, '-00:03:00'],
    [-SECONDS_IN_MINUTE * 30, '-00:30:00'],
    [-SECONDS_IN_HOUR, '-01:00:00'],
    [-SECONDS_IN_DAY, '-00:00:00']
  ])('negative: formatSecondsWithSign(%i) -> %o', (seconds, formattedSeconds) => {
    expect(formatSecondsWithSign(seconds)).toBe(formattedSeconds)
  })
})

//Convert string to number if the input is a valid number
it.each([
  ['random-string', 'random-string'],
  [null, null],
  ['1', 1]
])('normalizeSelectValue(%o) -> %o', (value, normalizedValue) => {
  expect(normalizeSelectValue(value)).toBe(normalizedValue)
})
