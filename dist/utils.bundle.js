"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["utils"],{

/***/ "./src/modules/luxon.js":
/*!******************************!*\
  !*** ./src/modules/luxon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTime": () => (/* binding */ DateTime),
/* harmony export */   "Duration": () => (/* binding */ Duration),
/* harmony export */   "FixedOffsetZone": () => (/* binding */ FixedOffsetZone),
/* harmony export */   "IANAZone": () => (/* binding */ IANAZone),
/* harmony export */   "Info": () => (/* binding */ Info),
/* harmony export */   "Interval": () => (/* binding */ Interval),
/* harmony export */   "InvalidZone": () => (/* binding */ InvalidZone),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "SystemZone": () => (/* binding */ SystemZone),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "Zone": () => (/* binding */ Zone)
/* harmony export */ });
/* eslint-disable */

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
  * @private
  */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class ConflictingSpecificationError extends LuxonError {}

/**
  * @private
  */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
  * @private
  */
class InvalidArgumentError extends LuxonError {}

/**
  * @private
  */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super('Zone is an abstract class');
  }
}

/**
  * @private
  */

const n = 'numeric';
const s = 'short';
const l = 'long';

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: 'h23',
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

/*
   This is just a junk drawer, containing anything used across multiple classes.
   Because Luxon is small(ish), this should stay small and we won't worry about splitting
   it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
 */

/**
  * @private
  */

// TYPES

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isInteger(o) {
  return typeof o === 'number' && o % 1 === 0;
}

function isString(o) {
  return typeof o === 'string';
}

function isDate(o) {
  return Object.prototype.toString.call(o) === '[object Date]';
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } if (compare(best[0], pair[0]) === best[0]) {
      return best;
    }
    return pair;
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = `-${(`${-input}`).padStart(n, '0')}`;
  } else {
    padded = (`${input}`).padStart(n, '0');
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === '') {
    return undefined;
  }
  return parseInt(string, 10);
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === '') {
    return undefined;
  }
  return parseFloat(string);
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === '') {
    return undefined;
  }
  const f = parseFloat(`0.${fraction}`) * 1000;
  return Math.floor(f);
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits;
  const rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1;
  const modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  }
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond,
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 = (weekYear
         + Math.floor(weekYear / 4)
         - Math.floor(weekYear / 100)
         + Math.floor(weekYear / 400))
       % 7;
  const last = weekYear - 1;
  const p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts);
  const intlOpts = {
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === 'timezonename');
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0;
  const offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === 'boolean' || value === '' || Number.isNaN(numericValue)) { throw new InvalidArgumentError(`Invalid unit value ${value}`); }
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60));
  const minutes = Math.trunc(Math.abs(offset % 60));
  const sign = offset >= 0 ? '+' : '-';

  switch (format) {
    case 'short':
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case 'narrow':
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ''}`;
    case 'techie':
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ['hour', 'minute', 'second', 'millisecond']);
}

const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

/**
  * @private
  */

const monthsLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const monthsNarrow = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function months(length) {
  switch (length) {
    case 'narrow':
      return [...monthsNarrow];
    case 'short':
      return [...monthsShort];
    case 'long':
      return [...monthsLong];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    case '2-digit':
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    default:
      return null;
  }
}

const weekdaysLong = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekdaysNarrow = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function weekdays(length) {
  switch (length) {
    case 'narrow':
      return [...weekdaysNarrow];
    case 'short':
      return [...weekdaysShort];
    case 'long':
      return [...weekdaysLong];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];
    default:
      return null;
  }
}

const meridiems = ['AM', 'PM'];

const erasLong = ['Before Christ', 'Anno Domini'];

const erasShort = ['BC', 'AD'];

const erasNarrow = ['B', 'A'];

function eras(length) {
  switch (length) {
    case 'narrow':
      return [...erasNarrow];
    case 'short':
      return [...erasShort];
    case 'long':
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = 'always', narrow = false) {
  const units = {
    years: ['year', 'yr.'],
    quarters: ['quarter', 'qtr.'],
    months: ['month', 'mo.'],
    weeks: ['week', 'wk.'],
    days: ['day', 'day', 'days'],
    hours: ['hour', 'hr.'],
    minutes: ['minute', 'min.'],
    seconds: ['second', 'sec.'],
  };

  const lastable = ['hours', 'minutes', 'seconds'].indexOf(unit) === -1;

  if (numeric === 'auto' && lastable) {
    const isDay = unit === 'days';
    switch (count) {
      case 1:
        return isDay ? 'tomorrow' : `next ${units[unit][0]}`;
      case -1:
        return isDay ? 'yesterday' : `last ${units[unit][0]}`;
      case 0:
        return isDay ? 'today' : `this ${units[unit][0]}`;
    }
  }

  const isInPast = Object.is(count, -0) || count < 0;
  const fmtValue = Math.abs(count);
  const singular = fmtValue === 1;
  const lilUnits = units[unit];
  const fmtUnit = narrow
    ? singular
      ? lilUnits[1]
      : lilUnits[2] || lilUnits[1]
    : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function stringifyTokens(splits, tokenToString) {
  let s = '';
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS,
};

/**
  * @private
  */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    let current = null;
    let currentFull = '';
    let bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = '';
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === 'en';
    const useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory';
    const string = (opts, extract) => this.loc.extract(dt, opts, extract);
    const formatOffset = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return 'Z';
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : '';
    };
    const meridiem = () => (knownEnglish
      ? meridiemForDateTime(dt)
      : string({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod'));
    const month = (length, standalone) => (knownEnglish
      ? monthForDateTime(dt, length)
      : string(standalone ? { month: length } : { month: length, day: 'numeric' }, 'month'));
    const weekday = (length, standalone) => (knownEnglish
      ? weekdayForDateTime(dt, length)
      : string(
        standalone ? { weekday: length } : { weekday: length, month: 'long', day: 'numeric' },
        'weekday',
      ));
    const maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      }
      return token;
    };
    const era = (length) => (knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, 'era'));
    const tokenToString = (token) => {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case 'S':
          return this.num(dt.millisecond);
        case 'u':
          // falls through
        case 'SSS':
          return this.num(dt.millisecond, 3);
          // seconds
        case 's':
          return this.num(dt.second);
        case 'ss':
          return this.num(dt.second, 2);
          // fractional seconds
        case 'uu':
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case 'uuu':
          return this.num(Math.floor(dt.millisecond / 100));
          // minutes
        case 'm':
          return this.num(dt.minute);
        case 'mm':
          return this.num(dt.minute, 2);
          // hours
        case 'h':
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case 'hh':
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case 'H':
          return this.num(dt.hour);
        case 'HH':
          return this.num(dt.hour, 2);
          // offset
        case 'Z':
          // like +6
          return formatOffset({ format: 'narrow', allowZ: this.opts.allowZ });
        case 'ZZ':
          // like +06:00
          return formatOffset({ format: 'short', allowZ: this.opts.allowZ });
        case 'ZZZ':
          // like +0600
          return formatOffset({ format: 'techie', allowZ: this.opts.allowZ });
        case 'ZZZZ':
          // like EST
          return dt.zone.offsetName(dt.ts, { format: 'short', locale: this.loc.locale });
        case 'ZZZZZ':
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, { format: 'long', locale: this.loc.locale });
          // zone
        case 'z':
          // like America/New_York
          return dt.zoneName;
          // meridiems
        case 'a':
          return meridiem();
          // dates
        case 'd':
          return useDateTimeFormatter ? string({ day: 'numeric' }, 'day') : this.num(dt.day);
        case 'dd':
          return useDateTimeFormatter ? string({ day: '2-digit' }, 'day') : this.num(dt.day, 2);
          // weekdays - standalone
        case 'c':
          // like 1
          return this.num(dt.weekday);
        case 'ccc':
          // like 'Tues'
          return weekday('short', true);
        case 'cccc':
          // like 'Tuesday'
          return weekday('long', true);
        case 'ccccc':
          // like 'T'
          return weekday('narrow', true);
          // weekdays - format
        case 'E':
          // like 1
          return this.num(dt.weekday);
        case 'EEE':
          // like 'Tues'
          return weekday('short', false);
        case 'EEEE':
          // like 'Tuesday'
          return weekday('long', false);
        case 'EEEEE':
          // like 'T'
          return weekday('narrow', false);
          // months - standalone
        case 'L':
          // like 1
          return useDateTimeFormatter
            ? string({ month: 'numeric', day: 'numeric' }, 'month')
            : this.num(dt.month);
        case 'LL':
          // like 01, doesn't seem to work
          return useDateTimeFormatter
            ? string({ month: '2-digit', day: 'numeric' }, 'month')
            : this.num(dt.month, 2);
        case 'LLL':
          // like Jan
          return month('short', true);
        case 'LLLL':
          // like January
          return month('long', true);
        case 'LLLLL':
          // like J
          return month('narrow', true);
          // months - format
        case 'M':
          // like 1
          return useDateTimeFormatter
            ? string({ month: 'numeric' }, 'month')
            : this.num(dt.month);
        case 'MM':
          // like 01
          return useDateTimeFormatter
            ? string({ month: '2-digit' }, 'month')
            : this.num(dt.month, 2);
        case 'MMM':
          // like Jan
          return month('short', false);
        case 'MMMM':
          // like January
          return month('long', false);
        case 'MMMMM':
          // like J
          return month('narrow', false);
          // years
        case 'y':
          // like 2014
          return useDateTimeFormatter ? string({ year: 'numeric' }, 'year') : this.num(dt.year);
        case 'yy':
          // like 14
          return useDateTimeFormatter
            ? string({ year: '2-digit' }, 'year')
            : this.num(dt.year.toString().slice(-2), 2);
        case 'yyyy':
          // like 0012
          return useDateTimeFormatter
            ? string({ year: 'numeric' }, 'year')
            : this.num(dt.year, 4);
        case 'yyyyyy':
          // like 000012
          return useDateTimeFormatter
            ? string({ year: 'numeric' }, 'year')
            : this.num(dt.year, 6);
          // eras
        case 'G':
          // like AD
          return era('short');
        case 'GG':
          // like Anno Domini
          return era('long');
        case 'GGGGG':
          return era('narrow');
        case 'kk':
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case 'kkkk':
          return this.num(dt.weekYear, 4);
        case 'W':
          return this.num(dt.weekNumber);
        case 'WW':
          return this.num(dt.weekNumber, 2);
        case 'o':
          return this.num(dt.ordinal);
        case 'ooo':
          return this.num(dt.ordinal, 3);
        case 'q':
          // like 1
          return this.num(dt.quarter);
        case 'qq':
          // like 01
          return this.num(dt.quarter, 2);
        case 'X':
          return this.num(Math.floor(dt.ts / 1000));
        case 'x':
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case 'S':
          return 'millisecond';
        case 's':
          return 'second';
        case 'm':
          return 'minute';
        case 'h':
          return 'hour';
        case 'd':
          return 'day';
        case 'w':
          return 'week';
        case 'M':
          return 'month';
        case 'y':
          return 'year';
        default:
          return null;
      }
    };
    const tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      }
      return token;
    };
    const tokens = Formatter.parseFormat(fmt);
    const realTokens = tokens.reduce(
      (found, { literal, val }) => (literal ? found : found.concat(val)),
      [],
    );
    const collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}

class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    }
    return this.reason;
  }
}

/**
  * @interface
  */
class Zone {
  /**
    * The type of zone
    * @abstract
    * @type {string}
    */
  get type() {
    throw new ZoneIsAbstractError();
  }

  /**
    * The name of this zone.
    * @abstract
    * @type {string}
    */
  get name() {
    throw new ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
    * Returns whether the offset is known to be fixed for the whole year.
    * @abstract
    * @type {boolean}
    */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }

  /**
    * Returns the offset's common name (such as EST) at the specified timestamp
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to get the name
    * @param {Object} opts - Options to affect the format
    * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
    * @param {string} opts.locale - What locale to return the offset name in.
    * @return {string}
    */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Returns the offset's value as a string
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to get the offset
    * @param {string} format - What style of offset to return.
    *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
    * @return {string}
    */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return the offset in minutes for this zone at the specified timestamp.
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to compute the offset
    * @return {number}
    */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return whether this Zone is equal to another zone
    * @abstract
    * @param {Zone} otherZone - the zone to compare
    * @return {boolean}
    */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return whether this Zone is valid.
    * @abstract
    * @type {boolean}
    */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}

let singleton$1 = null;

/**
  * Represents the local zone for this JavaScript environment.
  * @implements {Zone}
  */
class SystemZone extends Zone {
  /**
    * Get a singleton instance of the local zone
    * @return {SystemZone}
    */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }

  /** @override * */
  get type() {
    return 'system';
  }

  /** @override * */
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override * */
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'system';
  }

  /** @override * */
  get isValid() {
    return true;
  }
}

let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      era: 'short',
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, '');
  const parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted);
  const [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === 'era') {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
  * A zone identified by an IANA identifier, like America/New_York
  * @implements {Zone}
  */
class IANAZone extends Zone {
  /**
    * @param {string} name - Zone name
    * @return {IANAZone}
    */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
    * Reset local caches. Should only be necessary in testing scenarios.
    * @return {void}
    */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
    * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
    * @param {string} s - The string to check validity on
    * @example IANAZone.isValidSpecifier("America/New_York") //=> true
    * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
    * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
    * @return {boolean}
    */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
    * Returns whether the provided string identifies a real zone
    * @param {string} zone - The string to check
    * @example IANAZone.isValidZone("America/New_York") //=> true
    * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
    * @example IANAZone.isValidZone("Sport~~blorp") //=> false
    * @return {boolean}
    */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private * */
    this.zoneName = name;
    /** @private * */
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override * */
  get type() {
    return 'iana';
  }

  /** @override * */
  get name() {
    return this.zoneName;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override * */
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === 'BC') {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'iana' && otherZone.name === this.name;
  }

  /** @override * */
  get isValid() {
    return this.valid;
  }
}

let singleton = null;

/**
  * A zone with a fixed offset (meaning no DST)
  * @implements {Zone}
  */
class FixedOffsetZone extends Zone {
  /**
    * Get a singleton instance of UTC
    * @return {FixedOffsetZone}
    */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
    * Get an instance with a specified offset
    * @param {number} offset - The offset in minutes
    * @return {FixedOffsetZone}
    */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
    * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
    * @param {string} s - The offset string to parse
    * @example FixedOffsetZone.parseSpecifier("UTC+6")
    * @example FixedOffsetZone.parseSpecifier("UTC+06")
    * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
    * @return {FixedOffsetZone}
    */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private * */
    this.fixed = offset;
  }

  /** @override * */
  get type() {
    return 'fixed';
  }

  /** @override * */
  get name() {
    return this.fixed === 0 ? 'UTC' : `UTC${formatOffset(this.fixed, 'narrow')}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return 'Etc/UTC';
    }
    return `Etc/GMT${formatOffset(-this.fixed, 'narrow')}`;
  }

  /** @override * */
  offsetName() {
    return this.name;
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }

  /** @override * */
  get isUniversal() {
    return true;
  }

  /** @override * */
  offset() {
    return this.fixed;
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'fixed' && otherZone.fixed === this.fixed;
  }

  /** @override * */
  get isValid() {
    return true;
  }
}

/**
  * A zone that failed to parse. You should never need to instantiate this.
  * @implements {Zone}
  */
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override * */
  get type() {
    return 'invalid';
  }

  /** @override * */
  get name() {
    return this.zoneName;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName() {
    return null;
  }

  /** @override * */
  formatOffset() {
    return '';
  }

  /** @override * */
  offset() {
    return NaN;
  }

  /** @override * */
  equals() {
    return false;
  }

  /** @override * */
  get isValid() {
    return false;
  }
}

/**
  * @private
  */

function normalizeZone(input, defaultZone) {
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } if (input instanceof Zone) {
    return input;
  } if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === 'default') return defaultZone;
    if (lowered === 'local' || lowered === 'system') return SystemZone.instance;
    if (lowered === 'utc' || lowered === 'gmt') return FixedOffsetZone.utcInstance;
    return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } if (typeof input === 'object' && input.offset && typeof input.offset === 'number') {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  }
  return new InvalidZone(input);
}

let now = () => Date.now();
let defaultZone = 'system';
let defaultLocale = null;
let defaultNumberingSystem = null;
let defaultOutputCalendar = null;
let throwOnInvalid;

/**
  * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
  */
class Settings {
  /**
    * Get the callback for returning the current timestamp.
    * @type {function}
    */
  static get now() {
    return now;
  }

  /**
    * Set the callback for returning the current timestamp.
    * The function should return a number, which will be interpreted as an Epoch millisecond count
    * @type {function}
    * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
    * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
    */
  static set now(n) {
    now = n;
  }

  /**
    * Set the default time zone to create DateTimes in. Does not affect existing instances.
    * Use the value "system" to reset this value to the system's time zone.
    * @type {string}
    */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
    * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
    * The default value is the system's time zone (the one set on the machine that runs this code).
    * @type {Zone}
    */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }

  /**
    * Get the default locale to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
    * Set the default locale to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
    * Get the default numbering system to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
    * Set the default numbering system to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
    * Get the default output calendar to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
    * Set the default output calendar to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
    * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
    * @type {boolean}
    */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
    * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
    * @type {boolean}
    */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
    * Reset Luxon's global caches. Should only be necessary in testing scenarios.
    * @return {void}
    */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}

// todo - remap caching

const intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  }
  sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
  return sysLocaleCache;
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  const uIndex = localeStr.indexOf('-u-');
  if (uIndex === -1) {
    return [localeStr];
  }
  let options;
  const smaller = localeStr.substring(0, uIndex);
  try {
    options = getCachedDTF(localeStr).resolvedOptions();
  } catch (e) {
    options = getCachedDTF(smaller).resolvedOptions();
  }

  const { numberingSystem, calendar } = options;
  // return the smaller one so that we can append the calendar and numbering overrides to it
  return [smaller, numberingSystem, calendar];
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += '-u';

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  }
  return localeStr;
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === 'error') {
    return null;
  } if (mode === 'en') {
    return englishFn(length);
  }
  return intlFn(length);
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== 'latn') {
    return false;
  }
  return (
    loc.numberingSystem === 'latn'
       || !loc.locale
       || loc.locale.startsWith('en')
       || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === 'latn'
  );
}

/**
  * @private
  */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    }
    // to match the browser's numberformatter defaults
    const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
    return padStart(fixed, this.padTo);
  }
}

/**
  * @private
  */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;

    let z;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = 'UTC';
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === 'system') {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
  * @private
  */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: 'long', ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    }
    return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== 'long');
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    }
    return [];
  }
}

/**
  * @private
  */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? 'en-US' : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === 'latn')
       && (this.outputCalendar === null || this.outputCalendar === 'gregory');
    return isActuallyEn && hasNoWeirdness ? 'en' : 'intl';
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    }
    return Locale.create(
      alts.locale || this.specifiedLocale,
      alts.numberingSystem || this.numberingSystem,
      alts.outputCalendar || this.outputCalendar,
      alts.defaultToEN || false,
    );
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: 'numeric' } : { month: length };
      const formatStr = format ? 'format' : 'standalone';
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, 'month'));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format
        ? {
          weekday: length, year: 'numeric', month: 'long', day: 'numeric',
        }
        : { weekday: length };
      const formatStr = format ? 'format' : 'standalone';
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, 'weekday'));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: 'numeric', hourCycle: 'h12' };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, 'dayperiod'),
          );
        }

        return this.meridiemCache;
      },
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, 'era'));
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts);
    const results = df.formatToParts();
    const matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === 'en'
       || this.locale.toLowerCase() === 'en-us'
       || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us')
    );
  }

  equals(other) {
    return (
      this.locale === other.locale
       && this.numberingSystem === other.numberingSystem
       && this.outputCalendar === other.outputCalendar
    );
  }
}

/*
  * This file handles parsing for well-specified formats. Here's how it works:
  * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
  * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
  * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
  * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
  * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
  * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
  */

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, '');
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) => extractors
    .reduce(
      ([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m, cursor);
        return [{ ...mergedVals, ...val }, zone || mergedZone, next];
      },
      [{}, null, 1],
    )
    .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse('weekYear', 'weekNumber', 'weekDay');
const extractISOOrdinalData = simpleParse('year', 'ordinal');
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`,
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1];
  const fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]);
  const zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match;

  const hasNegativePrefix = s[0] === '-';
  const negativeSeconds = secondStr && secondStr[0] === '-';

  const maybeNegate = (num, force = false) => (num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num);

  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === '-0'),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr),
  };

  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3
      ? weekdaysLong.indexOf(weekdayStr) + 1
      : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr,
  ] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .trim();
}

// http date

const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
const rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
const ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);

/*
  * @private
  */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset],
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII],
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone],
  );
}

const INVALID$2 = 'Invalid Duration';

// unit conversion constants
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000,
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000,
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
  minutes: { seconds: 60, milliseconds: 60 * 1000 },
  seconds: { milliseconds: 1000 },
};
const casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000,
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000,
  },

  ...lowOrderMatrix,
};
const daysInYearAccurate = 146097.0 / 400;
const daysInMonthAccurate = 146097.0 / 4800;
const accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: (daysInYearAccurate * 24) / 4,
    minutes: (daysInYearAccurate * 24 * 60) / 4,
    seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
    milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
  },
  ...lowOrderMatrix,
};

// units ordered by size
const orderedUnits$1 = [
  'years',
  'quarters',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
];

const reverseUnits = orderedUnits$1.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit];
  const raw = fromMap[fromUnit] / conv;
  const sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]);
  // ok, so this is wild, but see the matrix in the tests
  const added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    }
    return previous;
  }, null);
}

/**
  * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
  *
  * Here is a brief overview of commonly used methods and getters in Duration:
  *
  * * **Creation** To create a Duration, use {@link Duration#fromMillis}, {@link Duration#fromObject}, or {@link Duration#fromISO}.
  * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
  * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
  * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
  * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
  *
  * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
  */
class Duration {
  /**
    * @private
    */
  constructor(config) {
    const accurate = config.conversionAccuracy === 'longterm' || false;
    /**
      * @access private
      */
    this.values = config.values;
    /**
      * @access private
      */
    this.loc = config.loc || Locale.create();
    /**
      * @access private
      */
    this.conversionAccuracy = accurate ? 'longterm' : 'casual';
    /**
      * @access private
      */
    this.invalid = config.invalid || null;
    /**
      * @access private
      */
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
      * @access private
      */
    this.isLuxonDuration = true;
  }

  /**
    * Create Duration from a number of milliseconds.
    * @param {number} count of milliseconds
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
    * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
    * If this object is empty then a zero milliseconds duration is returned.
    * @param {Object} obj - the object to create the DateTime from
    * @param {number} obj.years
    * @param {number} obj.quarters
    * @param {number} obj.months
    * @param {number} obj.weeks
    * @param {number} obj.days
    * @param {number} obj.hours
    * @param {number} obj.minutes
    * @param {number} obj.seconds
    * @param {number} obj.milliseconds
    * @param {Object} [opts=[]] - options for creating this Duration
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== 'object') {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? 'null' : typeof obj
        }`,
      );
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
    });
  }

  /**
    * Create a Duration from DurationLike.
    *
    * @param {Object | number | Duration} durationLike
    * One of:
    * - object with keys like 'years' and 'hours'.
    * - number representing milliseconds
    * - Duration instance
    * @return {Duration}
    */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } if (Duration.isDuration(durationLike)) {
      return durationLike;
    } if (typeof durationLike === 'object') {
      return Duration.fromObject(durationLike);
    }
    throw new InvalidArgumentError(
      `Unknown duration argument ${durationLike} of type ${typeof durationLike}`,
    );
  }

  /**
    * Create a Duration from an ISO 8601 duration string.
    * @param {string} text - text to parse
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
    * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
    * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
    * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
    * @return {Duration}
    */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    }
    return Duration.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Create a Duration from an ISO 8601 time string.
    * @param {string} text - text to parse
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @see https://en.wikipedia.org/wiki/ISO_8601#Times
    * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
    * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @return {Duration}
    */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    }
    return Duration.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Create an invalid Duration.
    * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {Duration}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the Duration is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
    * @private
    */
  static normalizeUnit(unit) {
    const normalized = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds',
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new InvalidUnitError(unit);

    return normalized;
  }

  /**
    * Check if an object is a Duration. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
    * Get  the locale of a Duration, such 'en-GB'
    * @type {string}
    */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
    * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
    *
    * @type {string}
    */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
    * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
    * * `S` for milliseconds
    * * `s` for seconds
    * * `m` for minutes
    * * `h` for hours
    * * `d` for days
    * * `w` for weeks
    * * `M` for months
    * * `y` for years
    * Notes:
    * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
    * * Tokens can be escaped by wrapping with single quotes.
    * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
    * @param {string} fmt - the format string
    * @param {Object} opts - options
    * @param {boolean} [opts.floor=true] - floor numerical values
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
    * @return {string}
    */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID$2;
  }

  /**
    * Returns a string representation of a Duration with all units included.
    * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
    * @example
    * ```js
    * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
    * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
    * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
    * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
    * ```
    */
  toHuman(opts = {}) {
    const l = orderedUnits$1
      .map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({
            style: 'unit', unitDisplay: 'long', ...opts, unit: unit.slice(0, -1),
          })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: 'conjunction', style: opts.listStyle || 'narrow', ...opts })
      .format(l);
  }

  /**
    * Returns a JavaScript object with this Duration's values.
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
    * @return {Object}
    */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Duration.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
    * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
    * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
    * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
    * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
    * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
    * @return {string}
    */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = 'P';
    if (this.years !== 0) s += `${this.years}Y`;
    if (this.months !== 0 || this.quarters !== 0) s += `${this.months + this.quarters * 3}M`;
    if (this.weeks !== 0) s += `${this.weeks}W`;
    if (this.days !== 0) s += `${this.days}D`;
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) { s += 'T'; }
    if (this.hours !== 0) s += `${this.hours}H`;
    if (this.minutes !== 0) s += `${this.minutes}M`;
    if (this.seconds !== 0 || this.milliseconds !== 0)
    // this will handle "floating point madness" by removing extra decimal places
    // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
    { s += `${roundTo(this.seconds + this.milliseconds / 1000, 3)}S`; }
    if (s === 'P') s += 'T0S';
    return s;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
    * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Times
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
    * @return {string}
    */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: 'extended',
      ...opts,
    };

    const value = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');

    let fmt = opts.format === 'basic' ? 'hhmm' : 'hh:mm';

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === 'basic' ? 'ss' : ':ss';
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += '.SSS';
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = `T${str}`;
    }

    return str;
  }

  /**
    * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
    * @return {string}
    */
  toJSON() {
    return this.toISO();
  }

  /**
    * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
    * @return {string}
    */
  toString() {
    return this.toISO();
  }

  /**
    * Returns an milliseconds value of this Duration.
    * @return {number}
    */
  toMillis() {
    return this.as('milliseconds');
  }

  /**
    * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
    * @return {number}
    */
  valueOf() {
    return this.toMillis();
  }

  /**
    * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
    * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @return {Duration}
    */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    const result = {};

    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(this, { values: result }, true);
  }

  /**
    * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
    * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @return {Duration}
    */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
    * Scale this Duration by the specified amount. Return a newly-constructed Duration.
    * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
    * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
    * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
    * @return {Duration}
    */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }

  /**
    * Get the value of unit.
    * @param {string} unit - a unit such as 'minute' or 'day'
    * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
    * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
    * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
    * @return {number}
    */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
    * "Set" the values of specified units. Return a newly-constructed Duration.
    * @param {Object} values - a mapping of units to numbers
    * @example dur.set({ years: 2017 })
    * @example dur.set({ hours: 8, minutes: 30 })
    * @return {Duration}
    */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
    return clone$1(this, { values: mixed });
  }

  /**
    * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
    * @example dur.reconfigure({ locale: 'en-GB' })
    * @return {Duration}
    */
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone$1(this, opts);
  }

  /**
    * Return the length of the duration in the specified unit.
    * @param {string} unit - a unit such as 'minutes' or 'days'
    * @example Duration.fromObject({years: 1}).as('days') //=> 365
    * @example Duration.fromObject({years: 1}).as('months') //=> 12
    * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
    * @return {number}
    */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
    * Reduce this Duration to its canonical representation in its current units.
    * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
    * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
    * @return {Duration}
    */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }

  /**
    * Convert this Duration into its representation in a different set of units.
    * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
    * @return {Duration}
    */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {};
    const accumulated = {};
    const vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if (isNumber(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit]
           += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(this, { values: built }, true).normalize();
  }

  /**
    * Return the negative of this Duration.
    * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
    * @return {Duration}
    */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }

  /**
    * Get the years.
    * @type {number}
    */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
    * Get the quarters.
    * @type {number}
    */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
    * Get the months.
    * @type {number}
    */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
    * Get the weeks
    * @type {number}
    */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
    * Get the days.
    * @type {number}
    */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
    * Get the hours.
    * @type {number}
    */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
    * Get the minutes.
    * @type {number}
    */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
    * Get the seconds.
    * @return {number}
    */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
    * Get the milliseconds.
    * @return {number}
    */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
    * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
    * on invalid DateTimes or Intervals.
    * @return {boolean}
    */
  get isValid() {
    return this.invalid === null;
  }

  /**
    * Returns an error code if this Duration became invalid, or null if the Duration is valid
    * @return {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Equality check
    * Two Durations are equal iff they have the same units and the same values for each unit.
    * @param {Duration} other
    * @return {boolean}
    */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}

const INVALID$1 = 'Invalid Interval';

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid('missing or invalid start');
  } if (!end || !end.isValid) {
    return Interval.invalid('missing or invalid end');
  } if (end < start) {
    return Interval.invalid(
      'end before start',
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`,
    );
  }
  return null;
}

/**
  * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
  *
  * Here is a brief overview of the most commonly used methods and getters in Interval:
  *
  * * **Creation** To create an Interval, use {@link Interval#fromDateTimes}, {@link Interval#after}, {@link Interval#before}, or {@link Interval#fromISO}.
  * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
  * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
  * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
  * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
  * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
  */
class Interval {
  /**
    * @private
    */
  constructor(config) {
    /**
      * @access private
      */
    this.s = config.start;
    /**
      * @access private
      */
    this.e = config.end;
    /**
      * @access private
      */
    this.invalid = config.invalid || null;
    /**
      * @access private
      */
    this.isLuxonInterval = true;
  }

  /**
    * Create an invalid Interval.
    * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {Interval}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the Interval is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
    * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
    * @param {DateTime|Date|Object} start
    * @param {DateTime|Date|Object} end
    * @return {Interval}
    */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start);
    const builtEnd = friendlyDateTime(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    }
    return validateError;
  }

  /**
    * Create an Interval from a start DateTime and a Duration to extend to.
    * @param {DateTime|Date|Object} start
    * @param {Duration|Object|number} duration - the length of the Interval.
    * @return {Interval}
    */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration);
    const dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
    * Create an Interval from an end DateTime and a Duration to extend backwards to.
    * @param {DateTime|Date|Object} end
    * @param {Duration|Object|number} duration - the length of the Interval.
    * @return {Interval}
    */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration);
    const dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
    * Create an Interval from an ISO 8601 string.
    * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
    * @param {string} text - the ISO string to parse
    * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @return {Interval}
    */
  static fromISO(text, opts) {
    const [s, e] = (text || '').split('/', 2);
    if (s && e) {
      let start; let
        startIsValid;
      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end; let
        endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Check if an object is an Interval. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
    * Returns the start of the Interval
    * @type {DateTime}
    */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
    * Returns the end of the Interval
    * @type {DateTime}
    */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
    * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
    * @type {boolean}
    */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
    * Returns an error code if this Interval is invalid, or null if the Interval is valid
    * @type {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Returns the length of the Interval in the specified unit.
    * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
    * @return {number}
    */
  length(unit = 'milliseconds') {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
    * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
    * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
    * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
    * @param {string} [unit='milliseconds'] - the unit of time to count.
    * @return {number}
    */
  count(unit = 'milliseconds') {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit);
    const end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }

  /**
    * Returns whether this Interval's start and end are both in the same unit of time
    * @param {string} unit - the unit of time to check sameness on
    * @return {boolean}
    */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
    * Return whether this Interval has the same start and end DateTimes.
    * @return {boolean}
    */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
    * Return whether this Interval's start is after the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
    * Return whether this Interval's end is before the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
    * Return whether this Interval contains the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
    * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
    * @param {Object} values - the values to set
    * @param {DateTime} values.start - the starting DateTime
    * @param {DateTime} values.end - the ending DateTime
    * @return {Interval}
    */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
    * Split this Interval at each of the specified DateTimes
    * @param {...DateTime} dateTimes - the unit of time to count.
    * @return {Array}
    */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
      .map(friendlyDateTime)
      .filter((d) => this.contains(d))
      .sort();
    const results = [];
    let { s } = this;
    let i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e;
      const next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
    * Split this Interval into smaller Intervals, each of the specified length.
    * Left over time is grouped into a smaller interval
    * @param {Duration|Object|number} duration - The length of each resulting interval.
    * @return {Array}
    */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as('milliseconds') === 0) {
      return [];
    }

    let { s } = this;
    let idx = 1;
    let next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
    * Split this Interval into the specified number of smaller intervals.
    * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
    * @return {Array}
    */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
    * Return whether this Interval overlaps with the specified Interval
    * @param {Interval} other
    * @return {boolean}
    */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
    * Return whether this Interval's end is adjacent to the specified Interval's start.
    * @param {Interval} other
    * @return {boolean}
    */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
    * Return whether this Interval's start is adjacent to the specified Interval's end.
    * @param {Interval} other
    * @return {boolean}
    */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
    * Return whether this Interval engulfs the start and end of the specified Interval.
    * @param {Interval} other
    * @return {boolean}
    */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
    * Return whether this Interval has the same start and end as the specified Interval.
    * @param {Interval} other
    * @return {boolean}
    */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
    * Return an Interval representing the intersection of this Interval and the specified Interval.
    * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
    * Returns null if the intersection is empty, meaning, the intervals don't intersect.
    * @param {Interval} other
    * @return {Interval}
    */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s;
    const e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    }
    return Interval.fromDateTimes(s, e);
  }

  /**
    * Return an Interval representing the union of this Interval and the specified Interval.
    * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
    * @param {Interval} other
    * @return {Interval}
    */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s;
    const e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
    * Merge an array of Intervals into a equivalent minimal set of Intervals.
    * Combines overlapping and adjacent Intervals.
    * @param {Array} intervals
    * @return {Array}
    */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          }
          return [sofar.concat([current]), item];
        },
        [[], null],
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
    * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
    * @param {Array} intervals
    * @return {Array}
    */
  static xor(intervals) {
    let start = null;
    let currentCount = 0;
    const results = [];
    const ends = intervals.map((i) => [
      { time: i.s, type: 's' },
      { time: i.e, type: 'e' },
    ]);
    const flattened = Array.prototype.concat(...ends);
    const arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === 's' ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
    * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
    * @param {...Interval} intervals
    * @return {Array}
    */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
    * Returns a string representation of this Interval appropriate for debugging.
    * @return {string}
    */
  toString() {
    if (!this.isValid) return INVALID$1;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Interval.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @param {Object} opts - The same options as {@link DateTime#toISO}
    * @return {string}
    */
  toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of date of this Interval.
    * The time components are ignored.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @return {string}
    */
  toISODate() {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of time of this Interval.
    * The date components are ignored.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @param {Object} opts - The same options as {@link DateTime#toISO}
    * @return {string}
    */
  toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
    * Returns a string representation of this Interval formatted according to the specified format string.
    * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
    * @param {Object} opts - options
    * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
    * @return {string}
    */
  toFormat(dateFormat, { separator = ' – ' } = {}) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
    * Return a Duration representing the time spanned by this interval.
    * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
    * @return {Duration}
    */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
    * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
    * @param {function} mapFn
    * @return {Interval}
    * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
    * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
    */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}

/**
  * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
  */
class Info {
  /**
    * Return whether the specified zone contains a DST.
    * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
    * @return {boolean}
    */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
    * Return whether the specified zone is a valid IANA specifier.
    * @param {string} zone - Zone to check
    * @return {boolean}
    */
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }

  /**
    * Converts the input into a {@link Zone} instance.
    *
    * * If `input` is already a Zone instance, it is returned unchanged.
    * * If `input` is a string containing a valid time zone name, a Zone instance
    *   with that name is returned.
    * * If `input` is a string that doesn't refer to a known time zone, a Zone
    *   instance with {@link Zone#isValid} == false is returned.
    * * If `input is a number, a Zone instance with the specified fixed offset
    *   in minutes is returned.
    * * If `input` is `null` or `undefined`, the default zone is returned.
    * @param {string|Zone|number} [input] - the value to be converted
    * @return {Zone}
    */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }

  /**
    * Return an array of standalone month names.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @param {string} [opts.outputCalendar='gregory'] - the calendar
    * @example Info.months()[0] //=> 'January'
    * @example Info.months('short')[0] //=> 'Jan'
    * @example Info.months('numeric')[0] //=> '1'
    * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
    * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
    * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
    * @return {Array}
    */
  static months(
    length = 'long',
    {
      locale = null, numberingSystem = null, locObj = null, outputCalendar = 'gregory',
    } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
    * Return an array of format month names.
    * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
    * changes the string.
    * See {@link Info#months}
    * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @param {string} [opts.outputCalendar='gregory'] - the calendar
    * @return {Array}
    */
  static monthsFormat(
    length = 'long',
    {
      locale = null, numberingSystem = null, locObj = null, outputCalendar = 'gregory',
    } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
    * Return an array of standalone week names.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @example Info.weekdays()[0] //=> 'Monday'
    * @example Info.weekdays('short')[0] //=> 'Mon'
    * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
    * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
    * @return {Array}
    */
  static weekdays(length = 'long', { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
    * Return an array of format week names.
    * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
    * changes the string.
    * See {@link Info#weekdays}
    * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale=null] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @return {Array}
    */
  static weekdaysFormat(
    length = 'long',
    { locale = null, numberingSystem = null, locObj = null } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
    * Return an array of meridiems.
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @example Info.meridiems() //=> [ 'AM', 'PM' ]
    * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
    * @return {Array}
    */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }

  /**
    * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
    * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @example Info.eras() //=> [ 'BC', 'AD' ]
    * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
    * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
    * @return {Array}
    */
  static eras(length = 'short', { locale = null } = {}) {
    return Locale.create(locale, null, 'gregory').eras(length);
  }

  /**
    * Return the set of available features in this environment.
    * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
    * Keys:
    * * `relative`: whether this environment supports relative time formatting
    * @example Info.features() //=> { relative: false }
    * @return {Object}
    */
  static features() {
    return { relative: hasRelative() };
  }
}

function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf('day').valueOf();
  const ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as('days'));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ['years', (a, b) => b.year - a.year],
    ['quarters', (a, b) => b.quarter - a.quarter],
    ['months', (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      'weeks',
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ['days', dayDiff],
  ];

  const results = {};
  let lowestOrder; let
    highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });

      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0,
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  }
  return duration;
}

const numberingSystems = {
  arab: '[\u0660-\u0669]',
  arabext: '[\u06F0-\u06F9]',
  bali: '[\u1B50-\u1B59]',
  beng: '[\u09E6-\u09EF]',
  deva: '[\u0966-\u096F]',
  fullwide: '[\uFF10-\uFF19]',
  gujr: '[\u0AE6-\u0AEF]',
  hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
  khmr: '[\u17E0-\u17E9]',
  knda: '[\u0CE6-\u0CEF]',
  laoo: '[\u0ED0-\u0ED9]',
  limb: '[\u1946-\u194F]',
  mlym: '[\u0D66-\u0D6F]',
  mong: '[\u1810-\u1819]',
  mymr: '[\u1040-\u1049]',
  orya: '[\u0B66-\u0B6F]',
  tamldec: '[\u0BE6-\u0BEF]',
  telu: '[\u0C66-\u0C6F]',
  thai: '[\u0E50-\u0E59]',
  tibt: '[\u0F20-\u0F29]',
  latn: '\\d',
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, '').split('');

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = '';
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  }
  return value;
}

function digitRegex({ numberingSystem }, append = '') {
  return new RegExp(`${numberingSystems[numberingSystem || 'latn']}${append}`);
}

const MISSING_FTP = 'missing Intl.DateTimeFormat.formatToParts support';

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post(parseDigits(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, 'g');

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, '\\.?').replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, '') // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, ' ') // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  }
  return {
    regex: RegExp(strings.map(fixListRegex).join('|')),
    deser: ([s]) => strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
  };
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

function unitForToken(token, loc) {
  const one = digitRegex(loc);
  const two = digitRegex(loc, '{2}');
  const three = digitRegex(loc, '{3}');
  const four = digitRegex(loc, '{4}');
  const six = digitRegex(loc, '{6}');
  const oneOrTwo = digitRegex(loc, '{1,2}');
  const oneToThree = digitRegex(loc, '{1,3}');
  const oneToSix = digitRegex(loc, '{1,6}');
  const oneToNine = digitRegex(loc, '{1,9}');
  const twoToFour = digitRegex(loc, '{2,4}');
  const fourToSix = digitRegex(loc, '{4,6}');
  const literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true });
  const unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case 'G':
        return oneOf(loc.eras('short', false), 0);
      case 'GG':
        return oneOf(loc.eras('long', false), 0);
        // years
      case 'y':
        return intUnit(oneToSix);
      case 'yy':
        return intUnit(twoToFour, untruncateYear);
      case 'yyyy':
        return intUnit(four);
      case 'yyyyy':
        return intUnit(fourToSix);
      case 'yyyyyy':
        return intUnit(six);
        // months
      case 'M':
        return intUnit(oneOrTwo);
      case 'MM':
        return intUnit(two);
      case 'MMM':
        return oneOf(loc.months('short', true, false), 1);
      case 'MMMM':
        return oneOf(loc.months('long', true, false), 1);
      case 'L':
        return intUnit(oneOrTwo);
      case 'LL':
        return intUnit(two);
      case 'LLL':
        return oneOf(loc.months('short', false, false), 1);
      case 'LLLL':
        return oneOf(loc.months('long', false, false), 1);
        // dates
      case 'd':
        return intUnit(oneOrTwo);
      case 'dd':
        return intUnit(two);
        // ordinals
      case 'o':
        return intUnit(oneToThree);
      case 'ooo':
        return intUnit(three);
        // time
      case 'HH':
        return intUnit(two);
      case 'H':
        return intUnit(oneOrTwo);
      case 'hh':
        return intUnit(two);
      case 'h':
        return intUnit(oneOrTwo);
      case 'mm':
        return intUnit(two);
      case 'm':
        return intUnit(oneOrTwo);
      case 'q':
        return intUnit(oneOrTwo);
      case 'qq':
        return intUnit(two);
      case 's':
        return intUnit(oneOrTwo);
      case 'ss':
        return intUnit(two);
      case 'S':
        return intUnit(oneToThree);
      case 'SSS':
        return intUnit(three);
      case 'u':
        return simple(oneToNine);
      case 'uu':
        return simple(oneOrTwo);
      case 'uuu':
        return intUnit(one);
        // meridiem
      case 'a':
        return oneOf(loc.meridiems(), 0);
        // weekYear (k)
      case 'kkkk':
        return intUnit(four);
      case 'kk':
        return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
      case 'W':
        return intUnit(oneOrTwo);
      case 'WW':
        return intUnit(two);
        // weekdays
      case 'E':
      case 'c':
        return intUnit(one);
      case 'EEE':
        return oneOf(loc.weekdays('short', false, false), 1);
      case 'EEEE':
        return oneOf(loc.weekdays('long', false, false), 1);
      case 'ccc':
        return oneOf(loc.weekdays('short', true, false), 1);
      case 'cccc':
        return oneOf(loc.weekdays('long', true, false), 1);
        // offset/zone
      case 'Z':
      case 'ZZ':
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case 'ZZZ':
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
      case 'z':
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    '2-digit': 'yy',
    numeric: 'yyyyy',
  },
  month: {
    numeric: 'M',
    '2-digit': 'MM',
    short: 'MMM',
    long: 'MMMM',
  },
  day: {
    numeric: 'd',
    '2-digit': 'dd',
  },
  weekday: {
    short: 'EEE',
    long: 'EEEE',
  },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: {
    numeric: 'h',
    '2-digit': 'hh',
  },
  minute: {
    numeric: 'm',
    '2-digit': 'mm',
  },
  second: {
    numeric: 's',
    '2-digit': 'ss',
  },
  timeZoneName: {
    long: 'ZZZZZ',
    short: 'ZZZ',
  },
};

function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;

  if (type === 'literal') {
    return {
      literal: true,
      val: value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === 'object') {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, '');
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i];
        const groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  }
  return [matches, {}];
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      case 'q':
        return 'quarter';
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }

  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
  * @private
  */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
  const units = tokens.map((t) => unitForToken(t, locale));
  const disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  }
  const [regexString, handlers] = buildRegex(units);
  const regex = RegExp(regexString, 'i');
  const [rawMatches, matches] = match(input, regex, handlers);
  const [result, zone, specificOffset] = matches
    ? dateTimeFromMatches(matches)
    : [null, null, undefined];
  if (hasOwnProperty(matches, 'a') && hasOwnProperty(matches, 'H')) {
    throw new ConflictingSpecificationError(
      "Can't include meridiem when specifying 24-hour format",
    );
  }
  return {
    input, tokens, regex, rawMatches, matches, result, zone, specificOffset,
  };
}

function parseFromTokens(locale, input, format) {
  const {
    result, zone, specificOffset, invalidReason,
  } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, locale, formatOpts));
}

const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid(
    'unit out of range',
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`,
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder;
  const month0 = table.findIndex((i) => i < ordinal);
  const day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
  * @private
  */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj;
  const ordinal = computeOrdinal(year, month, day);
  const weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7);
  let weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return {
    weekYear, weekNumber, weekday, ...timeObject(gregObj),
  };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData;
  const weekdayOfJan4 = dayOfWeek(weekYear, 1, 4);
  const yearInDays = daysInYear(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3;
  let year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return {
    year, month, day, ...timeObject(weekData),
  };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return {
    year, month, day, ...timeObject(ordinalData),
  };
}

function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear);
  const validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear));
  const validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange('weekYear', obj.weekYear);
  } if (!validWeek) {
    return unitOutOfRange('week', obj.week);
  } if (!validWeekday) {
    return unitOutOfRange('weekday', obj.weekday);
  } return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year);
  const validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange('year', obj.year);
  } if (!validOrdinal) {
    return unitOutOfRange('ordinal', obj.ordinal);
  } return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year);
  const validMonth = integerBetween(obj.month, 1, 12);
  const validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange('year', obj.year);
  } if (!validMonth) {
    return unitOutOfRange('month', obj.month);
  } if (!validDay) {
    return unitOutOfRange('day', obj.day);
  } return false;
}

function hasInvalidTimeData(obj) {
  const {
    hour, minute, second, millisecond,
  } = obj;
  const validHour = integerBetween(hour, 0, 23)
       || (hour === 24 && minute === 0 && second === 0 && millisecond === 0);
  const validMinute = integerBetween(minute, 0, 59);
  const validSecond = integerBetween(second, 0, 59);
  const validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange('hour', hour);
  } if (!validMinute) {
    return unitOutOfRange('minute', minute);
  } if (!validSecond) {
    return unitOutOfRange('second', second);
  } if (!validMillisecond) {
    return unitOutOfRange('millisecond', millisecond);
  } return false;
}

const INVALID = 'Invalid DateTime';
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid('unsupported zone', `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o;
  const year = inst.c.year + Math.trunc(dur.years);
  const month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3;
  const c = {
    ...inst.c,
    year,
    month,
    day:
         Math.min(inst.c.day, daysInMonth(year, month))
         + Math.trunc(dur.days)
         + Math.trunc(dur.weeks) * 7,
  };
  const millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds,
  }).as('milliseconds');
  const localTS = objToLocalTS(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone;
    const inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone,
      specificOffset,
    });
    return setZone ? inst : inst.setZone(zone);
  }
  return DateTime.invalid(
    new Invalid('unparsable', `the input "${text}" can't be parsed as ${format}`),
  );
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? Formatter.create(Locale.create('en-US'), {
      allowZ,
      forceSimple: true,
    }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = '';
  if (longFormat && o.c.year >= 0) c += '+';
  c += padStart(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += '-';
    c += padStart(o.c.month);
    c += '-';
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone,
) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ':';
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ':';
    }
  } else {
    c += padStart(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += '.';
      c += padStart(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += 'Z';
    } else if (o.o < 0) {
      c += '-';
      c += padStart(Math.trunc(-o.o / 60));
      c += ':';
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += '+';
      c += padStart(Math.trunc(o.o / 60));
      c += ':';
      c += padStart(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += `[${o.zone.ianaName}]`;
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};
const defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};
const defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};

// Units in the supported calendars, sorted by bigness
const orderedUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
const orderedWeekUnits = [
  'weekYear',
  'weekNumber',
  'weekday',
  'hour',
  'minute',
  'second',
  'millisecond',
];
const orderedOrdinalUnits = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[unit.toLowerCase()];

  if (!normalized) throw new InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone);
  const loc = Locale.fromObject(opts);
  const tsNow = Settings.now();

  let ts; let
    o;

  // assume we have the higher-order units
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({
    ts, zone, loc, o,
  });
}

function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round;
  const format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  };
  const differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } return 0;
    }
    return end.diff(start, unit).get(unit);
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {};
  let args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === 'object') {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
  * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
  *
  * A DateTime comprises of:
  * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
  * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
  * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
  *
  * Here is a brief overview of the most commonly used functionality it provides:
  *
  * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime#local}, {@link DateTime#utc}, and (most flexibly) {@link DateTime#fromObject}. To create one from a standard string format, use {@link DateTime#fromISO}, {@link DateTime#fromHTTP}, and {@link DateTime#fromRFC2822}. To create one from a custom string format, use {@link DateTime#fromFormat}. To create one from a native JS date, use {@link DateTime#fromJSDate}.
  * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
  * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
  * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
  * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
  * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
  * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
  *
  * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
  */
class DateTime {
  /**
    * @access private
    */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;

    let invalid = config.invalid
       || (Number.isNaN(config.ts) ? new Invalid('invalid input') : null)
       || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
      * @access private
      */
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;

    let c = null;
    let o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid('invalid input') : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
      * @access private
      */
    this._zone = zone;
    /**
      * @access private
      */
    this.loc = config.loc || Locale.create();
    /**
      * @access private
      */
    this.invalid = invalid;
    /**
      * @access private
      */
    this.weekData = null;
    /**
      * @access private
      */
    this.c = c;
    /**
      * @access private
      */
    this.o = o;
    /**
      * @access private
      */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
    * Create a DateTime for the current instant, in the system's time zone.
    *
    * Use Settings to override these default values if needed.
    * @example DateTime.now().toISO() //~> now in the ISO format
    * @return {DateTime}
    */
  static now() {
    return new DateTime({});
  }

  /**
    * Create a local DateTime
    * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
    * @param {number} [month=1] - The month, 1-indexed
    * @param {number} [day=1] - The day of the month, 1-indexed
    * @param {number} [hour=0] - The hour of the day, in 24-hour time
    * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
    * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
    * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
    * @example DateTime.local()                                  //~> now
    * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
    * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
    * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
    * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
    * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
    * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
    * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
    * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
    * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
    * @return {DateTime}
    */
  static local() {
    const [opts, args] = lastOpts(arguments);
    const [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({
      year, month, day, hour, minute, second, millisecond,
    }, opts);
  }

  /**
    * Create a DateTime in UTC
    * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
    * @param {number} [month=1] - The month, 1-indexed
    * @param {number} [day=1] - The day of the month
    * @param {number} [hour=0] - The hour of the day, in 24-hour time
    * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
    * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
    * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
    * @param {Object} options - configuration options for the DateTime
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
    * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
    * @example DateTime.utc()                                              //~> now
    * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
    * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
    * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
    * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
    * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
    * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
    * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
    * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
    * @return {DateTime}
    */
  static utc() {
    const [opts, args] = lastOpts(arguments);
    const [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({
      year, month, day, hour, minute, second, millisecond,
    }, opts);
  }

  /**
    * Create a DateTime from a JavaScript Date object. Uses the default zone.
    * @param {Date} date - a JavaScript Date object
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @return {DateTime}
    */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid('invalid input');
    }

    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options),
    });
  }

  /**
    * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
    * @param {number} milliseconds - a number of milliseconds since 1970 UTC
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`,
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid('Timestamp out of range');
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
    * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
    * @param {number} seconds - a number of seconds since 1970 UTC
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError('fromSeconds requires a numerical input');
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
    * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
    * @param {Object} obj - the object to create the DateTime from
    * @param {number} obj.year - a year, such as 1987
    * @param {number} obj.month - a month, 1-12
    * @param {number} obj.day - a day of the month, 1-31, depending on the month
    * @param {number} obj.ordinal - day of the year, 1-365 or 366
    * @param {number} obj.weekYear - an ISO week year
    * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
    * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
    * @param {number} obj.hour - hour of the day, 0-23
    * @param {number} obj.minute - minute of the hour, 0-59
    * @param {number} obj.second - second of the minute, 0-59
    * @param {number} obj.millisecond - millisecond of the second, 0-999
    * @param {Object} opts - options for creating this DateTime
    * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
    * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
    * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
    * @return {DateTime}
    */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = Settings.now();
    const offsetProvis = !isUndefined(opts.specificOffset)
      ? opts.specificOffset
      : zoneToUse.offset(tsNow);
    const normalized = normalizeObject(obj, normalizeUnit);
    const containsOrdinal = !isUndefined(normalized.ordinal);
    const containsGregorYear = !isUndefined(normalized.year);
    const containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day);
    const containsGregor = containsGregorYear || containsGregorMD;
    const definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    const loc = Locale.fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units;
    let defaultValues;
    let objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
      ? hasInvalidWeekData(normalized)
      : containsOrdinal
        ? hasInvalidOrdinalData(normalized)
        : hasInvalidGregorianData(normalized);
    const invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
      ? weekToGregorian(normalized)
      : containsOrdinal
        ? ordinalToGregorian(normalized)
        : normalized;
    const [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse);
    const inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc,
    });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        'mismatched weekday',
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`,
      );
    }

    return inst;
  }

  /**
    * Create a DateTime from an ISO 8601 string
    * @param {string} text - the ISO string
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
    * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromISO('2016-05-25T09:08:34.123')
    * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
    * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
    * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
    * @example DateTime.fromISO('2016-W05-4')
    * @return {DateTime}
    */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'ISO 8601', text);
  }

  /**
    * Create a DateTime from an RFC 2822 string
    * @param {string} text - the RFC 2822 string
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
    * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
    * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
    * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
    * @return {DateTime}
    */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'RFC 2822', text);
  }

  /**
    * Create a DateTime from an HTTP header date
    * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
    * @param {string} text - the HTTP header date
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
    * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
    * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
    * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
    * @return {DateTime}
    */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'HTTP', opts);
  }

  /**
    * Create a DateTime from an input string and format string.
    * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
    * @param {string} text - the string to parse
    * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
    * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError('fromFormat requires an input string and a format');
    }

    const { locale = null, numberingSystem = null } = opts;
    const localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true,
    });
    const [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
  }

  /**
    * @deprecated use fromFormat instead
    */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
    * Create a DateTime from a SQL date, time, or datetime
    * Defaults to en-US if no locale has been specified, regardless of the system's locale
    * @param {string} text - the string to parse
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
    * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @example DateTime.fromSQL('2017-05-15')
    * @example DateTime.fromSQL('2017-05-15 09:12:34')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
    * @example DateTime.fromSQL('09:12:34.342')
    * @return {DateTime}
    */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'SQL', text);
  }

  /**
    * Create an invalid DateTime.
    * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {DateTime}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
    * Check if an object is an instance of DateTime. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
    * Produce the format string for a set of options
    * @param formatOpts
    * @param localeOpts
    * @returns {string}
    */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join('');
  }

  // INFO

  /**
    * Get the value of unit.
    * @param {string} unit - a unit such as 'minute' or 'day'
    * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
    * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
    * @return {number}
    */
  get(unit) {
    return this[unit];
  }

  /**
    * Returns whether the DateTime is valid. Invalid DateTimes occur when:
    * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
    * * The DateTime was created by an operation on another invalid date
    * @type {boolean}
    */
  get isValid() {
    return this.invalid === null;
  }

  /**
    * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
    * @type {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
    *
    * @type {string}
    */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
    * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
    *
    * @type {string}
    */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
    * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
    *
    * @type {string}
    */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
    * Get the time zone associated with this DateTime.
    * @type {Zone}
    */
  get zone() {
    return this._zone;
  }

  /**
    * Get the name of the time zone.
    * @type {string}
    */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
    * Get the year
    * @example DateTime.local(2017, 5, 25).year //=> 2017
    * @type {number}
    */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
    * Get the quarter
    * @example DateTime.local(2017, 5, 25).quarter //=> 2
    * @type {number}
    */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
    * Get the month (1-12).
    * @example DateTime.local(2017, 5, 25).month //=> 5
    * @type {number}
    */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
    * Get the day of the month (1-30ish).
    * @example DateTime.local(2017, 5, 25).day //=> 25
    * @type {number}
    */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
    * Get the hour of the day (0-23).
    * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
    * @type {number}
    */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
    * Get the minute of the hour (0-59).
    * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
    * @type {number}
    */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
    * Get the second of the minute (0-59).
    * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
    * @type {number}
    */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
    * Get the millisecond of the second (0-999).
    * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
    * @type {number}
    */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
    * Get the week year
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
    * @type {number}
    */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
    * Get the week number of the week year (1-52ish).
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
    * @type {number}
    */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
    * Get the day of the week.
    * 1 is Monday and 7 is Sunday
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2014, 11, 31).weekday //=> 4
    * @type {number}
    */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
    * Get the ordinal (meaning the day of the year)
    * @example DateTime.local(2017, 5, 25).ordinal //=> 145
    * @type {number|DateTime}
    */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }

  /**
    * Get the human readable short month name, such as 'Oct'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
    * @type {string}
    */
  get monthShort() {
    return this.isValid ? Info.months('short', { locObj: this.loc })[this.month - 1] : null;
  }

  /**
    * Get the human readable long month name, such as 'October'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).monthLong //=> October
    * @type {string}
    */
  get monthLong() {
    return this.isValid ? Info.months('long', { locObj: this.loc })[this.month - 1] : null;
  }

  /**
    * Get the human readable short weekday, such as 'Mon'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
    * @type {string}
    */
  get weekdayShort() {
    return this.isValid ? Info.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
    * Get the human readable long weekday, such as 'Monday'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
    * @type {string}
    */
  get weekdayLong() {
    return this.isValid ? Info.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
    * Get the UTC offset of this DateTime in minutes
    * @example DateTime.now().offset //=> -240
    * @example DateTime.utc().offset //=> 0
    * @type {number}
    */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
    * Get the short human name for the zone's current offset, for example "EST" or "EDT".
    * Defaults to the system's locale if no locale has been specified
    * @type {string}
    */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: 'short',
        locale: this.locale,
      });
    }
    return null;
  }

  /**
    * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
    * Defaults to the system's locale if no locale has been specified
    * @type {string}
    */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: 'long',
        locale: this.locale,
      });
    }
    return null;
  }

  /**
    * Get whether this zone's offset ever changes, as in a DST.
    * @type {boolean}
    */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
    * Get whether the DateTime is in a DST.
    * @type {boolean}
    */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    }
    return (
      this.offset > this.set({ month: 1, day: 1 }).offset
         || this.offset > this.set({ month: 5 }).offset
    );
  }

  /**
    * Returns true if this DateTime is in a leap year, false otherwise
    * @example DateTime.local(2016).isInLeapYear //=> true
    * @example DateTime.local(2013).isInLeapYear //=> false
    * @type {boolean}
    */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }

  /**
    * Returns the number of days in this DateTime's month
    * @example DateTime.local(2016, 2).daysInMonth //=> 29
    * @example DateTime.local(2016, 3).daysInMonth //=> 31
    * @type {number}
    */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }

  /**
    * Returns the number of days in this DateTime's year
    * @example DateTime.local(2016).daysInYear //=> 366
    * @example DateTime.local(2013).daysInYear //=> 365
    * @type {number}
    */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }

  /**
    * Returns the number of weeks in this DateTime's year
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2004).weeksInWeekYear //=> 53
    * @example DateTime.local(2013).weeksInWeekYear //=> 52
    * @type {number}
    */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }

  /**
    * Returns the resolved Intl options for this DateTime.
    * This is useful in understanding the behavior of formatting methods
    * @param {Object} opts - the same options as toLocaleString
    * @return {Object}
    */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts,
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
    * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
    *
    * Equivalent to {@link DateTime#setZone}('utc')
    * @param {number} [offset=0] - optionally, an offset from UTC in minutes
    * @param {Object} [opts={}] - options to pass to `setZone()`
    * @return {DateTime}
    */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }

  /**
    * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
    *
    * Equivalent to `setZone('local')`
    * @return {DateTime}
    */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }

  /**
    * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
    *
    * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
    * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
    * @param {Object} opts - options
    * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
    * @return {DateTime}
    */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    }
    let newTS = this.ts;
    if (keepLocalTime || keepCalendarTime) {
      const offsetGuess = zone.offset(this.ts);
      const asObj = this.toObject();
      [newTS] = objToTS(asObj, offsetGuess, zone);
    }
    return clone(this, { ts: newTS, zone });
  }

  /**
    * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
    * @param {Object} properties - the properties to set
    * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
    * @return {DateTime}
    */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
    * "Set" the locale. Returns a newly-constructed DateTime.
    * Just a convenient alias for reconfigure({ locale })
    * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
    * @return {DateTime}
    */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
    * "Set" the values of specified units. Returns a newly-constructed DateTime.
    * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
    * @param {Object} values - a mapping of units to numbers
    * @example dt.set({ year: 2017 })
    * @example dt.set({ hour: 8, minute: 30 })
    * @example dt.set({ weekday: 5 })
    * @example dt.set({ year: 2005, ordinal: 234 })
    * @return {DateTime}
    */
  set(values) {
    if (!this.isValid) return this;

    const normalized = normalizeObject(values, normalizeUnit);
    const settingWeekStuff = !isUndefined(normalized.weekYear)
         || !isUndefined(normalized.weekNumber)
         || !isUndefined(normalized.weekday);
    const containsOrdinal = !isUndefined(normalized.ordinal);
    const containsGregorYear = !isUndefined(normalized.year);
    const containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day);
    const containsGregor = containsGregorYear || containsGregorMD;
    const definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
    * Add a period of time to this DateTime and return the resulting DateTime
    *
    * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
    * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @example DateTime.now().plus(123) //~> in 123 milliseconds
    * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
    * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
    * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
    * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
    * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
    * @return {DateTime}
    */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
    * Subtract a period of time to this DateTime and return the resulting DateTime
    * See {@link DateTime#plus}
    * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    @return {DateTime}
    */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
    * "Set" this DateTime to the beginning of a unit of time.
    * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
    * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
    * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
    * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
    * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
    * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
    * @return {DateTime}
    */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {};
    const normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case 'years':
        o.month = 1;
        // falls through
      case 'quarters':
      case 'months':
        o.day = 1;
        // falls through
      case 'weeks':
      case 'days':
        o.hour = 0;
        // falls through
      case 'hours':
        o.minute = 0;
        // falls through
      case 'minutes':
        o.second = 0;
        // falls through
      case 'seconds':
        o.millisecond = 0;
        break;
       // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === 'weeks') {
      o.weekday = 1;
    }

    if (normalizedUnit === 'quarters') {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
    * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
    * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
    * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
    * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
    * @return {DateTime}
    */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
        .startOf(unit)
        .minus(1)
      : this;
  }

  // OUTPUT

  /**
    * Returns a string representation of this DateTime formatted according to the specified format string.
    * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
    * Defaults to en-US if no locale has been specified, regardless of the system's locale.
    * @param {string} fmt - the format string
    * @param {Object} opts - opts to override the configuration options on this DateTime
    * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
    * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
    * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
    * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
    * @return {string}
    */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
    * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
    * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
    * of the DateTime in the assigned locale.
    * Defaults to the system's locale if no locale has been specified
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
    * @param {Object} opts - opts to override the configuration options on this DateTime
    * @example DateTime.now().toLocaleString(); //=> 4/20/2017
    * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
    * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
    * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
    * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
    * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
    * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
    * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
    * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
    * @return {string}
    */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
    * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
    * Defaults to the system's locale if no locale has been specified
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
    * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
    * @example DateTime.now().toLocaleParts(); //=> [
    *                                   //=>   { type: 'day', value: '25' },
    *                                   //=>   { type: 'literal', value: '/' },
    *                                   //=>   { type: 'month', value: '05' },
    *                                   //=>   { type: 'literal', value: '/' },
    *                                   //=>   { type: 'year', value: '1982' }
    *                                   //=> ]
    */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
    * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
    * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
    * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
    * @return {string}
    */
  toISO({
    format = 'extended',
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === 'extended';

    let c = toISODate(this, ext);
    c += 'T';
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's date component
    * @param {Object} opts - options
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
    * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
    * @return {string}
    */
  toISODate({ format = 'extended' } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === 'extended');
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's week date
    * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
    * @return {string}
    */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's time component
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
    * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
    * @return {string}
    */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = 'extended',
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const c = includePrefix ? 'T' : '';
    return (
      c
       + toISOTime(
         this,
         format === 'extended',
         suppressSeconds,
         suppressMilliseconds,
         includeOffset,
         extendedZone,
       )
    );
  }

  /**
    * Returns an RFC 2822-compatible string representation of this DateTime
    * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
    * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
    * @return {string}
    */
  toRFC2822() {
    return toTechFormat(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', false);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
    * Specifically, the string conforms to RFC 1123.
    * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
    * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
    * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
    * @return {string}
    */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL Date
    * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
    * @return {string}
    */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL Time
    * @param {Object} opts - options
    * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
    * @example DateTime.utc().toSQL() //=> '05:15:16.345'
    * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
    * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
    * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
    * @return {string}
    */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = 'HH:mm:ss.SSS';

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += ' ';
      }
      if (includeZone) {
        fmt += 'z';
      } else if (includeOffset) {
        fmt += 'ZZ';
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL DateTime
    * @param {Object} opts - options
    * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
    * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
    * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
    * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
    * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
    * @return {string}
    */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
    * Returns a string representation of this DateTime appropriate for debugging
    * @return {string}
    */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
    * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
    * @return {number}
    */
  valueOf() {
    return this.toMillis();
  }

  /**
    * Returns the epoch milliseconds of this DateTime.
    * @return {number}
    */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
    * Returns the epoch seconds of this DateTime.
    * @return {number}
    */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
    * Returns the epoch seconds (as a whole number) of this DateTime.
    * @return {number}
    */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
    * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
    * @return {string}
    */
  toJSON() {
    return this.toISO();
  }

  /**
    * Returns a BSON serializable equivalent to this DateTime.
    * @return {Date}
    */
  toBSON() {
    return this.toJSDate();
  }

  /**
    * Returns a JavaScript object with this DateTime's year, month, day, and so on.
    * @param opts - options for generating the object
    * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
    * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
    * @return {Object}
    */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
    * Returns a JavaScript Date equivalent to this DateTime.
    * @return {Date}
    */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
    * Return the difference between two DateTimes as a Duration.
    * @param {DateTime} otherDateTime - the DateTime to compare this one to
    * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @example
    * var i1 = DateTime.fromISO('1982-05-25T09:45'),
    *     i2 = DateTime.fromISO('1983-10-14T10:30');
    * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
    * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
    * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
    * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
    * @return {Duration}
    */
  diff(otherDateTime, unit = 'milliseconds', opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid('created by diffing an invalid DateTime');
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = maybeArray(unit).map(Duration.normalizeUnit);
    const otherIsLater = otherDateTime.valueOf() > this.valueOf();
    const earlier = otherIsLater ? this : otherDateTime;
    const later = otherIsLater ? otherDateTime : this;
    const diffed = diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
    * Return the difference between this DateTime and right now.
    * See {@link DateTime#diff}
    * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  diffNow(unit = 'milliseconds', opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
    * Return an Interval spanning between this DateTime and another DateTime
    * @param {DateTime} otherDateTime - the other end point of the Interval
    * @return {Interval}
    */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }

  /**
    * Return whether this DateTime is in the same unit of time as another DateTime.
    * Higher-order units must also be identical for this function to return `true`.
    * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
    * @param {DateTime} otherDateTime - the other DateTime
    * @param {string} unit - the unit of time to check sameness on
    * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
    * @return {boolean}
    */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
    * Equality check
    * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
    * To compare just the millisecond values, use `+dt1 === +dt2`.
    * @param {DateTime} other - the other DateTime
    * @return {boolean}
    */
  equals(other) {
    return (
      this.isValid
       && other.isValid
       && this.valueOf() === other.valueOf()
       && this.zone.equals(other.zone)
       && this.loc.equals(other.loc)
    );
  }

  /**
    * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
    * platform supports Intl.RelativeTimeFormat. Rounds down by default.
    * @param {Object} options - options that affect the output
    * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
    * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
    * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
    * @param {boolean} [options.round=true] - whether to round the numbers in the output.
    * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
    * @param {string} options.locale - override the locale of this DateTime
    * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
    * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
    * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
    * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
    * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
    * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
    * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
    */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone });
    const padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    let { unit } = options;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: 'always',
      units,
      unit,
    });
  }

  /**
    * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
    * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
    * @param {Object} options - options that affect the output
    * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
    * @param {string} options.locale - override the locale of this DateTime
    * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
    * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
    * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
    * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
    * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
    * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
    */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: 'auto',
      units: ['years', 'months', 'days'],
      calendary: true,
    });
  }

  /**
    * Return the min of several date times
    * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
    * @return {DateTime} the min DateTime, or undefined if called with no argument
    */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError('min requires all arguments be DateTimes');
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
    * Return the max of several date times
    * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
    * @return {DateTime} the max DateTime, or undefined if called with no argument
    */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError('max requires all arguments be DateTimes');
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
    * Explain how a string would be parsed by fromFormat()
    * @param {string} text - the string to parse
    * @param {string} fmt - the format the string is expected to be in (see description)
    * @param {Object} options - options taken by fromFormat()
    * @return {Object}
    */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options;
    const localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true,
    });
    return explainFromTokens(localeToUse, text, fmt);
  }

  /**
    * @deprecated use fromFormatExplain instead
    */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
    * {@link DateTime#toLocaleString} format like 10/14/1983
    * @type {Object}
    */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
    * @type {Object}
    */
  static get DATE_MED() {
    return DATE_MED;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
    * @type {Object}
    */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983'
    * @type {Object}
    */
  static get DATE_FULL() {
    return DATE_FULL;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
    * @type {Object}
    */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }

  /**
    * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
  * @private
  */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } if (dateTimeish && typeof dateTimeish === 'object') {
    return DateTime.fromObject(dateTimeish);
  }
  throw new InvalidArgumentError(
    `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`,
  );
}

const VERSION = '3.0.1';


// # sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

/***/ }),

/***/ "./src/modules/scorelist.js":
/*!**********************************!*\
  !*** ./src/modules/scorelist.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreList {
  constructor() {
    this.list = [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreList);

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "displayDate": () => (/* binding */ displayDate),
/* harmony export */   "refreshScores": () => (/* binding */ refreshScores)
/* harmony export */ });
/* harmony import */ var _luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.js */ "./src/modules/luxon.js");
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.js */ "./src/modules/score.js");
/* harmony import */ var _scorelist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scorelist.js */ "./src/modules/scorelist.js");




// **********GLOBAL VARIABLES**********//
const scoreList = new _scorelist_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

// **********Date Display Function**********//
const displayDate = () => {
  const mainDate = document.getElementById('main_date');
  mainDate.innerText = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toLocaleString(_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.DATETIME_MED_WITH_SECONDS);
};

// **********Scores API-Fetch Function**********//
const fetchScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/');
  const json = await response.json();
  // json.result => a list of scores
  return json.result;
};

// **********Score Render Function**********//
const renderScore = async (obj) => {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.innerHTML = `
            <div class="score-info">
              <h3>${obj.user}: ${obj.score}</h3>
            </div>  
        `;
  document.querySelector('#scores_list').appendChild(scoreElement);
};

// **********Scores Refresh Function**********//
const refreshScores = async () => {
  scoreList.list = await fetchScores();
  const scoresListElement = document.querySelector('#scores_list');
  scoresListElement.innerHTML = '';
  scoreList.list.forEach((obj) => renderScore(obj));
};

// **********Score AddFunction**********//
const addScore = async () => {
  const user = document.querySelector('#name_field').value;
  const score = document.querySelector('#score_field').value;
  if (user === '' || score === '') {
    throw new Error('Please fill in all fields');
  } else {
    // Resetting the input fields
    document.querySelector('#name_field').value = '';
    document.querySelector('#score_field').value = '';
    // Creating a new score object & adding it to the list of scores
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/', {
      method: 'POST',
      body: JSON.stringify(new _score_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, score)),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // Refreshing scores list in the DOM
    refreshScores();
    const message = await response.json();
    return message;
  }
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEtBQUssUUFBUSxLQUFLLGVBQWUsS0FBSyxRQUFRLEtBQUssZUFBZSxLQUFLLFFBQVEsS0FBSyxtQkFBbUIsS0FBSyxRQUFRLEtBQUssZUFBZSxLQUFLLFFBQVEsS0FBSyxlQUFlLEtBQUssY0FBYyxLQUFLO0FBQ3ZRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSSwwREFBMEQsSUFBSTtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsRUFBRTtBQUNoSDtBQUNBLG9JQUFvSSxFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyw2REFBNkQ7QUFDeEUsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9DQUFvQyxHQUFHO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEVBQUUsR0FBRyxTQUFTO0FBQ3pFLGNBQWMsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTyxXQUFXLGFBQWEsU0FBUyxLQUFLO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdDQUFnQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUIsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFVBQVU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSyx1QkFBdUIsT0FBTztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsa0JBQWtC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QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFlBQVksWUFBWSxtQkFBbUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ2ozTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDUHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05jO0FBQ1A7QUFDUTs7QUFFdkM7QUFDQSxzQkFBc0IscURBQVM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBYyxrQkFBa0IseUVBQWtDO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLElBQUksVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFLO0FBQ3BDO0FBQ0EsMkNBQTJDO0FBQzNDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sdXhvbi5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3Njb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvc2NvcmVsaXN0LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuXHJcbi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICovXHJcbmNsYXNzIEx1eG9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIEludmFsaWREYXRlVGltZUVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XHJcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XHJcbiAgICBzdXBlcihgSW52YWxpZCBEYXRlVGltZTogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZEludGVydmFsRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcclxuICAgIHN1cGVyKGBJbnZhbGlkIEludGVydmFsOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkRHVyYXRpb25FcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xyXG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIEludmFsaWRVbml0RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcclxuICBjb25zdHJ1Y3Rvcih1bml0KSB7XHJcbiAgICBzdXBlcihgSW52YWxpZCB1bml0ICR7dW5pdH1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBab25lSXNBYnN0cmFjdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignWm9uZSBpcyBhbiBhYnN0cmFjdCBjbGFzcycpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jb25zdCBuID0gJ251bWVyaWMnO1xyXG5jb25zdCBzID0gJ3Nob3J0JztcclxuY29uc3QgbCA9ICdsb25nJztcclxuXHJcbmNvbnN0IERBVEVfU0hPUlQgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbixcclxuICBkYXk6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFX01FRCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBzLFxyXG4gIGRheTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBzLFxyXG4gIGRheTogbixcclxuICB3ZWVrZGF5OiBzLFxyXG59O1xyXG5cclxuY29uc3QgREFURV9GVUxMID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURV9IVUdFID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG4gIHdlZWtkYXk6IGwsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FX1NJTVBMRSA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfV0lUSF9TRUNPTkRTID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIHRpbWVab25lTmFtZTogcyxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBsLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV8yNF9TSU1QTEUgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgaG91ckN5Y2xlOiAnaDIzJyxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfMjRfV0lUSF9TRUNPTkRTID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICBob3VyQ3ljbGU6ICdoMjMnLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgaG91ckN5Y2xlOiAnaDIzJyxcclxuICB0aW1lWm9uZU5hbWU6IHMsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIGhvdXJDeWNsZTogJ2gyMycsXHJcbiAgdGltZVpvbmVOYW1lOiBsLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfU0hPUlQgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbixcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbixcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfTUVEID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IHMsXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBzLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IHMsXHJcbiAgZGF5OiBuLFxyXG4gIHdlZWtkYXk6IHMsXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9GVUxMID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHRpbWVab25lTmFtZTogcyxcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICB0aW1lWm9uZU5hbWU6IHMsXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9IVUdFID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG4gIHdlZWtkYXk6IGwsXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBsLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbiAgd2Vla2RheTogbCxcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBsLFxyXG59O1xyXG5cclxuLypcclxuICAgVGhpcyBpcyBqdXN0IGEganVuayBkcmF3ZXIsIGNvbnRhaW5pbmcgYW55dGhpbmcgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgY2xhc3Nlcy5cclxuICAgQmVjYXVzZSBMdXhvbiBpcyBzbWFsbChpc2gpLCB0aGlzIHNob3VsZCBzdGF5IHNtYWxsIGFuZCB3ZSB3b24ndCB3b3JyeSBhYm91dCBzcGxpdHRpbmdcclxuICAgaXQgdXAgaW50bywgc2F5LCBwYXJzaW5nVXRpbC5qcyBhbmQgYmFzaWNVdGlsLmpzIGFuZCBzbyBvbi4gQnV0IHRoZXkgYXJlIGRpdmlkZWQgdXAgYnkgZmVhdHVyZSBhcmVhLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuLy8gVFlQRVNcclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHtcclxuICByZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcihvKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcclxuICByZXR1cm4gdHlwZW9mIG8gPT09ICdudW1iZXInICYmIG8gJSAxID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyhvKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKG8pIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbi8vIENBUEFCSUxJVElFU1xyXG5cclxuZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiB0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCcgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcclxuXHJcbmZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGluZykgPyB0aGluZyA6IFt0aGluZ107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlc3RCeShhcnIsIGJ5LCBjb21wYXJlKSB7XHJcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCBwYWlyID0gW2J5KG5leHQpLCBuZXh0XTtcclxuICAgIGlmICghYmVzdCkge1xyXG4gICAgICByZXR1cm4gcGFpcjtcclxuICAgIH0gaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcclxuICAgICAgcmV0dXJuIGJlc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFpcjtcclxuICB9LCBudWxsKVsxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcclxuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGEsIGspID0+IHtcclxuICAgIGFba10gPSBvYmpba107XHJcbiAgICByZXR1cm4gYTtcclxuICB9LCB7fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcclxufVxyXG5cclxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xyXG5cclxuZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XHJcbiAgcmV0dXJuIGlzSW50ZWdlcih0aGluZykgJiYgdGhpbmcgPj0gYm90dG9tICYmIHRoaW5nIDw9IHRvcDtcclxufVxyXG5cclxuLy8geCAlIG4gYnV0IHRha2VzIHRoZSBzaWduIG9mIG4gaW5zdGVhZCBvZiB4XHJcbmZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcclxuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4gPSAyKSB7XHJcbiAgY29uc3QgaXNOZWcgPSBpbnB1dCA8IDA7XHJcbiAgbGV0IHBhZGRlZDtcclxuICBpZiAoaXNOZWcpIHtcclxuICAgIHBhZGRlZCA9IGAtJHsoYCR7LWlucHV0fWApLnBhZFN0YXJ0KG4sICcwJyl9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFkZGVkID0gKGAke2lucHV0fWApLnBhZFN0YXJ0KG4sICcwJyk7XHJcbiAgfVxyXG4gIHJldHVybiBwYWRkZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcclxuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSAnJykge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUZsb2F0aW5nKHN0cmluZykge1xyXG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xyXG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcclxuICBpZiAoaXNVbmRlZmluZWQoZnJhY3Rpb24pIHx8IGZyYWN0aW9uID09PSBudWxsIHx8IGZyYWN0aW9uID09PSAnJykge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgY29uc3QgZiA9IHBhcnNlRmxvYXQoYDAuJHtmcmFjdGlvbn1gKSAqIDEwMDA7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoZik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8gPSBmYWxzZSkge1xyXG4gIGNvbnN0IGZhY3RvciA9IDEwICoqIGRpZ2l0cztcclxuICBjb25zdCByb3VuZGVyID0gdG93YXJkWmVybyA/IE1hdGgudHJ1bmMgOiBNYXRoLnJvdW5kO1xyXG4gIHJldHVybiByb3VuZGVyKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7XHJcbn1cclxuXHJcbi8vIERBVEUgQkFTSUNTXHJcblxyXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcclxuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xyXG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xyXG4gIGNvbnN0IG1vZE1vbnRoID0gZmxvb3JNb2QobW9udGggLSAxLCAxMikgKyAxO1xyXG4gIGNvbnN0IG1vZFllYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XHJcblxyXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIGlzTGVhcFllYXIobW9kWWVhcikgPyAyOSA6IDI4O1xyXG4gIH1cclxuICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcclxufVxyXG5cclxuLy8gY292ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbilcclxuZnVuY3Rpb24gb2JqVG9Mb2NhbFRTKG9iaikge1xyXG4gIGxldCBkID0gRGF0ZS5VVEMoXHJcbiAgICBvYmoueWVhcixcclxuICAgIG9iai5tb250aCAtIDEsXHJcbiAgICBvYmouZGF5LFxyXG4gICAgb2JqLmhvdXIsXHJcbiAgICBvYmoubWludXRlLFxyXG4gICAgb2JqLnNlY29uZCxcclxuICAgIG9iai5taWxsaXNlY29uZCxcclxuICApO1xyXG5cclxuICAvLyBmb3IgbGVnYWN5IHJlYXNvbnMsIHllYXJzIGJldHdlZW4gMCBhbmQgOTkgYXJlIGludGVycHJldGVkIGFzIDE5WFg7IHJldmVydCB0aGF0XHJcbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcclxuICAgIGQgPSBuZXcgRGF0ZShkKTtcclxuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XHJcbiAgfVxyXG4gIHJldHVybiArZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKSB7XHJcbiAgY29uc3QgcDEgPSAod2Vla1llYXJcclxuICAgICAgICAgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNClcclxuICAgICAgICAgLSBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKVxyXG4gICAgICAgICArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKVxyXG4gICAgICAgJSA3O1xyXG4gIGNvbnN0IGxhc3QgPSB3ZWVrWWVhciAtIDE7XHJcbiAgY29uc3QgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcclxuICByZXR1cm4gcDEgPT09IDQgfHwgcDIgPT09IDMgPyA1MyA6IDUyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XHJcbiAgaWYgKHllYXIgPiA5OSkge1xyXG4gICAgcmV0dXJuIHllYXI7XHJcbiAgfSByZXR1cm4geWVhciA+IDYwID8gMTkwMCArIHllYXIgOiAyMDAwICsgeWVhcjtcclxufVxyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuZnVuY3Rpb24gcGFyc2Vab25lSW5mbyh0cywgb2Zmc2V0Rm9ybWF0LCBsb2NhbGUsIHRpbWVab25lID0gbnVsbCkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyk7XHJcbiAgY29uc3QgaW50bE9wdHMgPSB7XHJcbiAgICBob3VyQ3ljbGU6ICdoMjMnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRpbWVab25lKSB7XHJcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xyXG5cclxuICBjb25zdCBwYXJzZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKVxyXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcclxuICAgIC5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RpbWV6b25lbmFtZScpO1xyXG4gIHJldHVybiBwYXJzZWQgPyBwYXJzZWQudmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG4vLyBzaWduZWRPZmZzZXQoJy01JywgJzMwJykgLT4gLTMzMFxyXG5mdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XHJcbiAgbGV0IG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7XHJcblxyXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXHJcbiAgaWYgKE51bWJlci5pc05hTihvZmZIb3VyKSkge1xyXG4gICAgb2ZmSG91ciA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvZmZNaW4gPSBwYXJzZUludChvZmZNaW51dGVTdHIsIDEwKSB8fCAwO1xyXG4gIGNvbnN0IG9mZk1pblNpZ25lZCA9IG9mZkhvdXIgPCAwIHx8IE9iamVjdC5pcyhvZmZIb3VyLCAtMCkgPyAtb2ZmTWluIDogb2ZmTWluO1xyXG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XHJcbn1cclxuXHJcbi8vIENPRVJDSU9OXHJcblxyXG5mdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xyXG4gIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJyB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSkgeyB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApOyB9XHJcbiAgcmV0dXJuIG51bWVyaWNWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7fTtcclxuICBmb3IgKGNvbnN0IHUgaW4gb2JqKSB7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xyXG4gICAgICBjb25zdCB2ID0gb2JqW3VdO1xyXG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxpemVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRPZmZzZXQob2Zmc2V0LCBmb3JtYXQpIHtcclxuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0IC8gNjApKTtcclxuICBjb25zdCBtaW51dGVzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgJSA2MCkpO1xyXG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPj0gMCA/ICcrJyA6ICctJztcclxuXHJcbiAgc3dpdGNoIChmb3JtYXQpIHtcclxuICAgIGNhc2UgJ3Nob3J0JzpcclxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9OiR7cGFkU3RhcnQobWludXRlcywgMil9YDtcclxuICAgIGNhc2UgJ25hcnJvdyc6XHJcbiAgICAgIHJldHVybiBgJHtzaWdufSR7aG91cnN9JHttaW51dGVzID4gMCA/IGA6JHttaW51dGVzfWAgOiAnJ31gO1xyXG4gICAgY2FzZSAndGVjaGllJzpcclxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFZhbHVlIGZvcm1hdCAke2Zvcm1hdH0gaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVPYmplY3Qob2JqKSB7XHJcbiAgcmV0dXJuIHBpY2sob2JqLCBbJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCddKTtcclxufVxyXG5cclxuY29uc3QgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg/Ojo/XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KD86XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KT8pPy87XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNvbnN0IG1vbnRoc0xvbmcgPSBbXHJcbiAgJ0phbnVhcnknLFxyXG4gICdGZWJydWFyeScsXHJcbiAgJ01hcmNoJyxcclxuICAnQXByaWwnLFxyXG4gICdNYXknLFxyXG4gICdKdW5lJyxcclxuICAnSnVseScsXHJcbiAgJ0F1Z3VzdCcsXHJcbiAgJ1NlcHRlbWJlcicsXHJcbiAgJ09jdG9iZXInLFxyXG4gICdOb3ZlbWJlcicsXHJcbiAgJ0RlY2VtYmVyJyxcclxuXTtcclxuXHJcbmNvbnN0IG1vbnRoc1Nob3J0ID0gW1xyXG4gICdKYW4nLFxyXG4gICdGZWInLFxyXG4gICdNYXInLFxyXG4gICdBcHInLFxyXG4gICdNYXknLFxyXG4gICdKdW4nLFxyXG4gICdKdWwnLFxyXG4gICdBdWcnLFxyXG4gICdTZXAnLFxyXG4gICdPY3QnLFxyXG4gICdOb3YnLFxyXG4gICdEZWMnLFxyXG5dO1xyXG5cclxuY29uc3QgbW9udGhzTmFycm93ID0gWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddO1xyXG5cclxuZnVuY3Rpb24gbW9udGhzKGxlbmd0aCkge1xyXG4gIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICBjYXNlICduYXJyb3cnOlxyXG4gICAgICByZXR1cm4gWy4uLm1vbnRoc05hcnJvd107XHJcbiAgICBjYXNlICdzaG9ydCc6XHJcbiAgICAgIHJldHVybiBbLi4ubW9udGhzU2hvcnRdO1xyXG4gICAgY2FzZSAnbG9uZyc6XHJcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTG9uZ107XHJcbiAgICBjYXNlICdudW1lcmljJzpcclxuICAgICAgcmV0dXJuIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcclxuICAgIGNhc2UgJzItZGlnaXQnOlxyXG4gICAgICByZXR1cm4gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB3ZWVrZGF5c0xvbmcgPSBbXHJcbiAgJ01vbmRheScsXHJcbiAgJ1R1ZXNkYXknLFxyXG4gICdXZWRuZXNkYXknLFxyXG4gICdUaHVyc2RheScsXHJcbiAgJ0ZyaWRheScsXHJcbiAgJ1NhdHVyZGF5JyxcclxuICAnU3VuZGF5JyxcclxuXTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzU2hvcnQgPSBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JywgJ1N1biddO1xyXG5cclxuY29uc3Qgd2Vla2RheXNOYXJyb3cgPSBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXTtcclxuXHJcbmZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xyXG4gIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICBjYXNlICduYXJyb3cnOlxyXG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTmFycm93XTtcclxuICAgIGNhc2UgJ3Nob3J0JzpcclxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c1Nob3J0XTtcclxuICAgIGNhc2UgJ2xvbmcnOlxyXG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTG9uZ107XHJcbiAgICBjYXNlICdudW1lcmljJzpcclxuICAgICAgcmV0dXJuIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNyddO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtZXJpZGllbXMgPSBbJ0FNJywgJ1BNJ107XHJcblxyXG5jb25zdCBlcmFzTG9uZyA9IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddO1xyXG5cclxuY29uc3QgZXJhc1Nob3J0ID0gWydCQycsICdBRCddO1xyXG5cclxuY29uc3QgZXJhc05hcnJvdyA9IFsnQicsICdBJ107XHJcblxyXG5mdW5jdGlvbiBlcmFzKGxlbmd0aCkge1xyXG4gIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICBjYXNlICduYXJyb3cnOlxyXG4gICAgICByZXR1cm4gWy4uLmVyYXNOYXJyb3ddO1xyXG4gICAgY2FzZSAnc2hvcnQnOlxyXG4gICAgICByZXR1cm4gWy4uLmVyYXNTaG9ydF07XHJcbiAgICBjYXNlICdsb25nJzpcclxuICAgICAgcmV0dXJuIFsuLi5lcmFzTG9uZ107XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcclxuICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcclxuICByZXR1cm4gd2Vla2RheXMobGVuZ3RoKVtkdC53ZWVrZGF5IC0gMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xyXG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XHJcbiAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCBudW1lcmljID0gJ2Fsd2F5cycsIG5hcnJvdyA9IGZhbHNlKSB7XHJcbiAgY29uc3QgdW5pdHMgPSB7XHJcbiAgICB5ZWFyczogWyd5ZWFyJywgJ3lyLiddLFxyXG4gICAgcXVhcnRlcnM6IFsncXVhcnRlcicsICdxdHIuJ10sXHJcbiAgICBtb250aHM6IFsnbW9udGgnLCAnbW8uJ10sXHJcbiAgICB3ZWVrczogWyd3ZWVrJywgJ3drLiddLFxyXG4gICAgZGF5czogWydkYXknLCAnZGF5JywgJ2RheXMnXSxcclxuICAgIGhvdXJzOiBbJ2hvdXInLCAnaHIuJ10sXHJcbiAgICBtaW51dGVzOiBbJ21pbnV0ZScsICdtaW4uJ10sXHJcbiAgICBzZWNvbmRzOiBbJ3NlY29uZCcsICdzZWMuJ10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGFzdGFibGUgPSBbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddLmluZGV4T2YodW5pdCkgPT09IC0xO1xyXG5cclxuICBpZiAobnVtZXJpYyA9PT0gJ2F1dG8nICYmIGxhc3RhYmxlKSB7XHJcbiAgICBjb25zdCBpc0RheSA9IHVuaXQgPT09ICdkYXlzJztcclxuICAgIHN3aXRjaCAoY291bnQpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBpc0RheSA/ICd0b21vcnJvdycgOiBgbmV4dCAke3VuaXRzW3VuaXRdWzBdfWA7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gJ3llc3RlcmRheScgOiBgbGFzdCAke3VuaXRzW3VuaXRdWzBdfWA7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gaXNEYXkgPyAndG9kYXknIDogYHRoaXMgJHt1bml0c1t1bml0XVswXX1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDA7XHJcbiAgY29uc3QgZm10VmFsdWUgPSBNYXRoLmFicyhjb3VudCk7XHJcbiAgY29uc3Qgc2luZ3VsYXIgPSBmbXRWYWx1ZSA9PT0gMTtcclxuICBjb25zdCBsaWxVbml0cyA9IHVuaXRzW3VuaXRdO1xyXG4gIGNvbnN0IGZtdFVuaXQgPSBuYXJyb3dcclxuICAgID8gc2luZ3VsYXJcclxuICAgICAgPyBsaWxVbml0c1sxXVxyXG4gICAgICA6IGxpbFVuaXRzWzJdIHx8IGxpbFVuaXRzWzFdXHJcbiAgICA6IHNpbmd1bGFyXHJcbiAgICAgID8gdW5pdHNbdW5pdF1bMF1cclxuICAgICAgOiB1bml0O1xyXG4gIHJldHVybiBpc0luUGFzdCA/IGAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9IGFnb2AgOiBgaW4gJHtmbXRWYWx1ZX0gJHtmbXRVbml0fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVRva2VucyhzcGxpdHMsIHRva2VuVG9TdHJpbmcpIHtcclxuICBsZXQgcyA9ICcnO1xyXG4gIGZvciAoY29uc3QgdG9rZW4gb2Ygc3BsaXRzKSB7XHJcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xyXG4gICAgICBzICs9IHRva2VuLnZhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcztcclxufVxyXG5cclxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcclxuICBEOiBEQVRFX1NIT1JULFxyXG4gIEREOiBEQVRFX01FRCxcclxuICBEREQ6IERBVEVfRlVMTCxcclxuICBEREREOiBEQVRFX0hVR0UsXHJcbiAgdDogVElNRV9TSU1QTEUsXHJcbiAgdHQ6IFRJTUVfV0lUSF9TRUNPTkRTLFxyXG4gIHR0dDogVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcclxuICB0dHR0OiBUSU1FX1dJVEhfTE9OR19PRkZTRVQsXHJcbiAgVDogVElNRV8yNF9TSU1QTEUsXHJcbiAgVFQ6IFRJTUVfMjRfV0lUSF9TRUNPTkRTLFxyXG4gIFRUVDogVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCxcclxuICBUVFRUOiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXHJcbiAgZjogREFURVRJTUVfU0hPUlQsXHJcbiAgZmY6IERBVEVUSU1FX01FRCxcclxuICBmZmY6IERBVEVUSU1FX0ZVTEwsXHJcbiAgZmZmZjogREFURVRJTUVfSFVHRSxcclxuICBGOiBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMsXHJcbiAgRkY6IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXHJcbiAgRkZGOiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcclxuICBGRkZGOiBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyxcclxufTtcclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY2xhc3MgRm9ybWF0dGVyIHtcclxuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhcnNlRm9ybWF0KGZtdCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSBudWxsO1xyXG4gICAgbGV0IGN1cnJlbnRGdWxsID0gJyc7XHJcbiAgICBsZXQgYnJhY2tldGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBzcGxpdHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGMgPSBmbXQuY2hhckF0KGkpO1xyXG4gICAgICBpZiAoYyA9PT0gXCInXCIpIHtcclxuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIGN1cnJlbnRGdWxsID0gJyc7XHJcbiAgICAgICAgYnJhY2tldGVkID0gIWJyYWNrZXRlZDtcclxuICAgICAgfSBlbHNlIGlmIChicmFja2V0ZWQpIHtcclxuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xyXG4gICAgICB9IGVsc2UgaWYgKGMgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGZhbHNlLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XHJcbiAgICAgICAgY3VycmVudCA9IGM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xyXG4gICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCwgdmFsOiBjdXJyZW50RnVsbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3BsaXRzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcclxuICAgIHJldHVybiBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzW3Rva2VuXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvY2FsZSwgZm9ybWF0T3B0cykge1xyXG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcclxuICAgIHRoaXMubG9jID0gbG9jYWxlO1xyXG4gICAgdGhpcy5zeXN0ZW1Mb2MgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIG9wdHMpIHtcclxuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcclxuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGVUaW1lKGR0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xyXG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0RGF0ZVRpbWVQYXJ0cyhkdCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcclxuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XHJcbiAgfVxyXG5cclxuICByZXNvbHZlZE9wdGlvbnMoZHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XHJcbiAgICByZXR1cm4gZGYucmVzb2x2ZWRPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBudW0obiwgcCA9IDApIHtcclxuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxyXG4gICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkge1xyXG4gICAgICByZXR1cm4gcGFkU3RhcnQobiwgcCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XHJcblxyXG4gICAgaWYgKHAgPiAwKSB7XHJcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmbXQpIHtcclxuICAgIGNvbnN0IGtub3duRW5nbGlzaCA9IHRoaXMubG9jLmxpc3RpbmdNb2RlKCkgPT09ICdlbic7XHJcbiAgICBjb25zdCB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSAnZ3JlZ29yeSc7XHJcbiAgICBjb25zdCBzdHJpbmcgPSAob3B0cywgZXh0cmFjdCkgPT4gdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCk7XHJcbiAgICBjb25zdCBmb3JtYXRPZmZzZXQgPSAob3B0cykgPT4ge1xyXG4gICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcclxuICAgICAgICByZXR1cm4gJ1onO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiAnJztcclxuICAgIH07XHJcbiAgICBjb25zdCBtZXJpZGllbSA9ICgpID0+IChrbm93bkVuZ2xpc2hcclxuICAgICAgPyBtZXJpZGllbUZvckRhdGVUaW1lKGR0KVxyXG4gICAgICA6IHN0cmluZyh7IGhvdXI6ICdudW1lcmljJywgaG91ckN5Y2xlOiAnaDEyJyB9LCAnZGF5cGVyaW9kJykpO1xyXG4gICAgY29uc3QgbW9udGggPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PiAoa25vd25FbmdsaXNoXHJcbiAgICAgID8gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxyXG4gICAgICA6IHN0cmluZyhzdGFuZGFsb25lID8geyBtb250aDogbGVuZ3RoIH0gOiB7IG1vbnRoOiBsZW5ndGgsIGRheTogJ251bWVyaWMnIH0sICdtb250aCcpKTtcclxuICAgIGNvbnN0IHdlZWtkYXkgPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PiAoa25vd25FbmdsaXNoXHJcbiAgICAgID8gd2Vla2RheUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXHJcbiAgICAgIDogc3RyaW5nKFxyXG4gICAgICAgIHN0YW5kYWxvbmUgPyB7IHdlZWtkYXk6IGxlbmd0aCB9IDogeyB3ZWVrZGF5OiBsZW5ndGgsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0sXHJcbiAgICAgICAgJ3dlZWtkYXknLFxyXG4gICAgICApKTtcclxuICAgIGNvbnN0IG1heWJlTWFjcm8gPSAodG9rZW4pID0+IHtcclxuICAgICAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcclxuICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgZm9ybWF0T3B0cyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVyYSA9IChsZW5ndGgpID0+IChrbm93bkVuZ2xpc2ggPyBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7IGVyYTogbGVuZ3RoIH0sICdlcmEnKSk7XHJcbiAgICBjb25zdCB0b2tlblRvU3RyaW5nID0gKHRva2VuKSA9PiB7XHJcbiAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUtMS9kYXRlLXRpbWUjVE9DLVN0YW5kYWxvbmUtdnMuLUZvcm1hdC1TdHlsZXNcclxuICAgICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAgIC8vIG1zXHJcbiAgICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xyXG4gICAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICAgIGNhc2UgJ1NTUyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQsIDMpO1xyXG4gICAgICAgICAgLy8gc2Vjb25kc1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCk7XHJcbiAgICAgICAgY2FzZSAnc3MnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCwgMik7XHJcbiAgICAgICAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHNcclxuICAgICAgICBjYXNlICd1dSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwKSwgMik7XHJcbiAgICAgICAgY2FzZSAndXV1JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTAwKSk7XHJcbiAgICAgICAgICAvLyBtaW51dGVzXHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlKTtcclxuICAgICAgICBjYXNlICdtbSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlLCAyKTtcclxuICAgICAgICAgIC8vIGhvdXJzXHJcbiAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xyXG4gICAgICAgIGNhc2UgJ2hoJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMiwgMik7XHJcbiAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91cik7XHJcbiAgICAgICAgY2FzZSAnSEgnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIsIDIpO1xyXG4gICAgICAgICAgLy8gb2Zmc2V0XHJcbiAgICAgICAgY2FzZSAnWic6XHJcbiAgICAgICAgICAvLyBsaWtlICs2XHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiAnbmFycm93JywgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xyXG4gICAgICAgIGNhc2UgJ1paJzpcclxuICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiAnc2hvcnQnLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XHJcbiAgICAgICAgY2FzZSAnWlpaJzpcclxuICAgICAgICAgIC8vIGxpa2UgKzA2MDBcclxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6ICd0ZWNoaWUnLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XHJcbiAgICAgICAgY2FzZSAnWlpaWic6XHJcbiAgICAgICAgICAvLyBsaWtlIEVTVFxyXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6ICdzaG9ydCcsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xyXG4gICAgICAgIGNhc2UgJ1paWlpaJzpcclxuICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXHJcbiAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogJ2xvbmcnLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcclxuICAgICAgICAgIC8vIHpvbmVcclxuICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xyXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xyXG4gICAgICAgICAgLy8gbWVyaWRpZW1zXHJcbiAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICByZXR1cm4gbWVyaWRpZW0oKTtcclxuICAgICAgICAgIC8vIGRhdGVzXHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6ICdudW1lcmljJyB9LCAnZGF5JykgOiB0aGlzLm51bShkdC5kYXkpO1xyXG4gICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogJzItZGlnaXQnIH0sICdkYXknKSA6IHRoaXMubnVtKGR0LmRheSwgMik7XHJcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIHN0YW5kYWxvbmVcclxuICAgICAgICBjYXNlICdjJzpcclxuICAgICAgICAgIC8vIGxpa2UgMVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xyXG4gICAgICAgIGNhc2UgJ2NjYyc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ3Nob3J0JywgdHJ1ZSk7XHJcbiAgICAgICAgY2FzZSAnY2NjYyc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ2xvbmcnLCB0cnVlKTtcclxuICAgICAgICBjYXNlICdjY2NjYyc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUJ1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ25hcnJvdycsIHRydWUpO1xyXG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBmb3JtYXRcclxuICAgICAgICBjYXNlICdFJzpcclxuICAgICAgICAgIC8vIGxpa2UgMVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xyXG4gICAgICAgIGNhc2UgJ0VFRSc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ3Nob3J0JywgZmFsc2UpO1xyXG4gICAgICAgIGNhc2UgJ0VFRUUnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCdsb25nJywgZmFsc2UpO1xyXG4gICAgICAgIGNhc2UgJ0VFRUVFJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1QnXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnbmFycm93JywgZmFsc2UpO1xyXG4gICAgICAgICAgLy8gbW9udGhzIC0gc3RhbmRhbG9uZVxyXG4gICAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgICAgLy8gbGlrZSAxXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9LCAnbW9udGgnKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcclxuICAgICAgICBjYXNlICdMTCc6XHJcbiAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnbnVtZXJpYycgfSwgJ21vbnRoJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XHJcbiAgICAgICAgY2FzZSAnTExMJzpcclxuICAgICAgICAgIC8vIGxpa2UgSmFuXHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ3Nob3J0JywgdHJ1ZSk7XHJcbiAgICAgICAgY2FzZSAnTExMTCc6XHJcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcclxuICAgICAgICAgIHJldHVybiBtb250aCgnbG9uZycsIHRydWUpO1xyXG4gICAgICAgIGNhc2UgJ0xMTExMJzpcclxuICAgICAgICAgIC8vIGxpa2UgSlxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCduYXJyb3cnLCB0cnVlKTtcclxuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxyXG4gICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgLy8gbGlrZSAxXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogJ251bWVyaWMnIH0sICdtb250aCcpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xyXG4gICAgICAgIGNhc2UgJ01NJzpcclxuICAgICAgICAgIC8vIGxpa2UgMDFcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiAnMi1kaWdpdCcgfSwgJ21vbnRoJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XHJcbiAgICAgICAgY2FzZSAnTU1NJzpcclxuICAgICAgICAgIC8vIGxpa2UgSmFuXHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ3Nob3J0JywgZmFsc2UpO1xyXG4gICAgICAgIGNhc2UgJ01NTU0nOlxyXG4gICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ2xvbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgY2FzZSAnTU1NTU0nOlxyXG4gICAgICAgICAgLy8gbGlrZSBKXHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ25hcnJvdycsIGZhbHNlKTtcclxuICAgICAgICAgIC8vIHllYXJzXHJcbiAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDIwMTRcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpIDogdGhpcy5udW0oZHQueWVhcik7XHJcbiAgICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgICAgLy8gbGlrZSAxNFxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogJzItZGlnaXQnIH0sICd5ZWFyJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcclxuICAgICAgICBjYXNlICd5eXl5JzpcclxuICAgICAgICAgIC8vIGxpa2UgMDAxMlxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogJ251bWVyaWMnIH0sICd5ZWFyJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA0KTtcclxuICAgICAgICBjYXNlICd5eXl5eXknOlxyXG4gICAgICAgICAgLy8gbGlrZSAwMDAwMTJcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNik7XHJcbiAgICAgICAgICAvLyBlcmFzXHJcbiAgICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgICAvLyBsaWtlIEFEXHJcbiAgICAgICAgICByZXR1cm4gZXJhKCdzaG9ydCcpO1xyXG4gICAgICAgIGNhc2UgJ0dHJzpcclxuICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcclxuICAgICAgICAgIHJldHVybiBlcmEoJ2xvbmcnKTtcclxuICAgICAgICBjYXNlICdHR0dHRyc6XHJcbiAgICAgICAgICByZXR1cm4gZXJhKCduYXJyb3cnKTtcclxuICAgICAgICBjYXNlICdrayc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla1llYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xyXG4gICAgICAgIGNhc2UgJ2tra2snOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcclxuICAgICAgICBjYXNlICdXJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyKTtcclxuICAgICAgICBjYXNlICdXVyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla051bWJlciwgMik7XHJcbiAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCk7XHJcbiAgICAgICAgY2FzZSAnb29vJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsLCAzKTtcclxuICAgICAgICBjYXNlICdxJzpcclxuICAgICAgICAgIC8vIGxpa2UgMVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIpO1xyXG4gICAgICAgIGNhc2UgJ3FxJzpcclxuICAgICAgICAgIC8vIGxpa2UgMDFcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyLCAyKTtcclxuICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0LnRzIC8gMTAwMCkpO1xyXG4gICAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnRzKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XHJcbiAgICBjb25zdCB0b2tlblRvRmllbGQgPSAodG9rZW4pID0+IHtcclxuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xyXG4gICAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgICAgcmV0dXJuICdtaWxsaXNlY29uZCc7XHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICByZXR1cm4gJ3NlY29uZCc7XHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICByZXR1cm4gJ21pbnV0ZSc7XHJcbiAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICByZXR1cm4gJ2hvdXInO1xyXG4gICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgcmV0dXJuICdkYXknO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgcmV0dXJuICd3ZWVrJztcclxuICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgcmV0dXJuICd5ZWFyJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCB0b2tlblRvU3RyaW5nID0gKGxpbGR1cikgPT4gKHRva2VuKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcHBlZCA9IHRva2VuVG9GaWVsZCh0b2tlbik7XHJcbiAgICAgIGlmIChtYXBwZWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW0obGlsZHVyLmdldChtYXBwZWQpLCB0b2tlbi5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH07XHJcbiAgICBjb25zdCB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KTtcclxuICAgIGNvbnN0IHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxyXG4gICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXHJcbiAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IGR1ci5zaGlmdFRvKC4uLnJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKCh0KSA9PiB0KSk7XHJcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEludmFsaWQge1xyXG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcclxuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xyXG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9NZXNzYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcclxuICAgICAgcmV0dXJuIGAke3RoaXMucmVhc29ufTogJHt0aGlzLmV4cGxhbmF0aW9ufWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZWFzb247XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBpbnRlcmZhY2VcclxuICAqL1xyXG5jbGFzcyBab25lIHtcclxuICAvKipcclxuICAgICogVGhlIHR5cGUgb2Ygem9uZVxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFRoZSBuYW1lIG9mIHRoaXMgem9uZS5cclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIGdldCBpYW5hTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvZmZzZXQgaXMga25vd24gdG8gYmUgZml4ZWQgZm9yIHRoZSB3aG9sZSB5ZWFyLlxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBvZmZzZXROYW1lKHRzLCBvcHRzKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgZm9yIHRoaXMgem9uZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC5cclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gY29tcHV0ZSB0aGUgb2Zmc2V0XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgb2Zmc2V0KHRzKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBlcXVhbHMob3RoZXJab25lKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2luZ2xldG9uJDEgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAgKiBSZXByZXNlbnRzIHRoZSBsb2NhbCB6b25lIGZvciB0aGlzIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXHJcbiAgKiBAaW1wbGVtZW50cyB7Wm9uZX1cclxuICAqL1xyXG5jbGFzcyBTeXN0ZW1ab25lIGV4dGVuZHMgWm9uZSB7XHJcbiAgLyoqXHJcbiAgICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbG9jYWwgem9uZVxyXG4gICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgaWYgKHNpbmdsZXRvbiQxID09PSBudWxsKSB7XHJcbiAgICAgIHNpbmdsZXRvbiQxID0gbmV3IFN5c3RlbVpvbmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaW5nbGV0b24kMTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdzeXN0ZW0nO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldE5hbWUodHMsIHsgZm9ybWF0LCBsb2NhbGUgfSkge1xyXG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XHJcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldCh0cykge1xyXG4gICAgcmV0dXJuIC1uZXcgRGF0ZSh0cykuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcclxuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gJ3N5c3RlbSc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGR0ZkNhY2hlID0ge307XHJcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xyXG4gIGlmICghZHRmQ2FjaGVbem9uZV0pIHtcclxuICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICBob3VyMTI6IGZhbHNlLFxyXG4gICAgICB0aW1lWm9uZTogem9uZSxcclxuICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgc2Vjb25kOiAnMi1kaWdpdCcsXHJcbiAgICAgIGVyYTogJ3Nob3J0JyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZHRmQ2FjaGVbem9uZV07XHJcbn1cclxuXHJcbmNvbnN0IHR5cGVUb1BvcyA9IHtcclxuICB5ZWFyOiAwLFxyXG4gIG1vbnRoOiAxLFxyXG4gIGRheTogMixcclxuICBlcmE6IDMsXHJcbiAgaG91cjogNCxcclxuICBtaW51dGU6IDUsXHJcbiAgc2Vjb25kOiA2LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XHJcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcclxuICBjb25zdCBwYXJzZWQgPSAvKFxcZCspXFwvKFxcZCspXFwvKFxcZCspIChBRHxCQyksPyAoXFxkKyk6KFxcZCspOihcXGQrKS8uZXhlYyhmb3JtYXR0ZWQpO1xyXG4gIGNvbnN0IFssIGZNb250aCwgZkRheSwgZlllYXIsIGZhZE9yQmMsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXSA9IHBhcnNlZDtcclxuICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZhZE9yQmMsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XHJcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdFRvUGFydHMoZGF0ZSk7XHJcbiAgY29uc3QgZmlsbGVkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IGZvcm1hdHRlZFtpXTtcclxuICAgIGNvbnN0IHBvcyA9IHR5cGVUb1Bvc1t0eXBlXTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2VyYScpIHtcclxuICAgICAgZmlsbGVkW3Bvc10gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcclxuICAgICAgZmlsbGVkW3Bvc10gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmlsbGVkO1xyXG59XHJcblxyXG5sZXQgaWFuYVpvbmVDYWNoZSA9IHt9O1xyXG4vKipcclxuICAqIEEgem9uZSBpZGVudGlmaWVkIGJ5IGFuIElBTkEgaWRlbnRpZmllciwgbGlrZSBBbWVyaWNhL05ld19Zb3JrXHJcbiAgKiBAaW1wbGVtZW50cyB7Wm9uZX1cclxuICAqL1xyXG5jbGFzcyBJQU5BWm9uZSBleHRlbmRzIFpvbmUge1xyXG4gIC8qKlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFpvbmUgbmFtZVxyXG4gICAgKiBAcmV0dXJuIHtJQU5BWm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIGNyZWF0ZShuYW1lKSB7XHJcbiAgICBpZiAoIWlhbmFab25lQ2FjaGVbbmFtZV0pIHtcclxuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpYW5hWm9uZUNhY2hlW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJlc2V0IGxvY2FsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcclxuICAgIGlhbmFab25lQ2FjaGUgPSB7fTtcclxuICAgIGR0ZkNhY2hlID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cclxuICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXHJcbiAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxyXG4gICAgKiBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlIGZvciBzb21lIHZhbGlkIElBTkEgbmFtZXMuIFVzZSBpc1ZhbGlkWm9uZSBpbnN0ZWFkLlxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNWYWxpZFNwZWNpZmllcihzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkWm9uZShzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xyXG4gICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXHJcbiAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcclxuICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNWYWxpZFpvbmUoem9uZSkge1xyXG4gICAgaWYgKCF6b25lKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgdGltZVpvbmU6IHpvbmUgfSkuZm9ybWF0KCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLyoqIEBwcml2YXRlICogKi9cclxuICAgIHRoaXMuem9uZU5hbWUgPSBuYW1lO1xyXG4gICAgLyoqIEBwcml2YXRlICogKi9cclxuICAgIHRoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdpYW5hJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNVbml2ZXJzYWwoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcclxuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSwgdGhpcy5uYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XHJcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldCh0cykge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKTtcclxuXHJcbiAgICBpZiAoaXNOYU4oZGF0ZSkpIHJldHVybiBOYU47XHJcblxyXG4gICAgY29uc3QgZHRmID0gbWFrZURURih0aGlzLm5hbWUpO1xyXG4gICAgbGV0IFt5ZWFyLCBtb250aCwgZGF5LCBhZE9yQmMsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IGR0Zi5mb3JtYXRUb1BhcnRzXHJcbiAgICAgID8gcGFydHNPZmZzZXQoZHRmLCBkYXRlKVxyXG4gICAgICA6IGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSk7XHJcblxyXG4gICAgaWYgKGFkT3JCYyA9PT0gJ0JDJykge1xyXG4gICAgICB5ZWFyID0gLU1hdGguYWJzKHllYXIpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIGhvdXIxMiBhbmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTAyNTU2NCZjYW49MiZxPSUyMjI0JTNBMDAlMjIlMjBkYXRldGltZWZvcm1hdFxyXG4gICAgY29uc3QgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcclxuXHJcbiAgICBjb25zdCBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XHJcbiAgICAgIHllYXIsXHJcbiAgICAgIG1vbnRoLFxyXG4gICAgICBkYXksXHJcbiAgICAgIGhvdXI6IGFkanVzdGVkSG91cixcclxuICAgICAgbWludXRlLFxyXG4gICAgICBzZWNvbmQsXHJcbiAgICAgIG1pbGxpc2Vjb25kOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFzVFMgPSArZGF0ZTtcclxuICAgIGNvbnN0IG92ZXIgPSBhc1RTICUgMTAwMDtcclxuICAgIGFzVFMgLT0gb3ZlciA+PSAwID8gb3ZlciA6IDEwMDAgKyBvdmVyO1xyXG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBlcXVhbHMob3RoZXJab25lKSB7XHJcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09ICdpYW5hJyAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZDtcclxuICB9XHJcbn1cclxuXHJcbmxldCBzaW5nbGV0b24gPSBudWxsO1xyXG5cclxuLyoqXHJcbiAgKiBBIHpvbmUgd2l0aCBhIGZpeGVkIG9mZnNldCAobWVhbmluZyBubyBEU1QpXHJcbiAgKiBAaW1wbGVtZW50cyB7Wm9uZX1cclxuICAqL1xyXG5jbGFzcyBGaXhlZE9mZnNldFpvbmUgZXh0ZW5kcyBab25lIHtcclxuICAvKipcclxuICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xyXG4gICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgdXRjSW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XHJcbiAgICAgIHNpbmdsZXRvbiA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2luZ2xldG9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCBhbiBpbnN0YW5jZSB3aXRoIGEgc3BlY2lmaWVkIG9mZnNldFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCBpbiBtaW51dGVzXHJcbiAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIGluc3RhbmNlKG9mZnNldCkge1xyXG4gICAgcmV0dXJuIG9mZnNldCA9PT0gMCA/IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZSA6IG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxyXG4gICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxyXG4gICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcclxuICAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcclxuICAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgcGFyc2VTcGVjaWZpZXIocykge1xyXG4gICAgaWYgKHMpIHtcclxuICAgICAgY29uc3QgciA9IHMubWF0Y2goL151dGMoPzooWystXVxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KT8kL2kpO1xyXG4gICAgICBpZiAocikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRml4ZWRPZmZzZXRab25lKHNpZ25lZE9mZnNldChyWzFdLCByWzJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob2Zmc2V0KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLyoqIEBwcml2YXRlICogKi9cclxuICAgIHRoaXMuZml4ZWQgPSBvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnZml4ZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/ICdVVEMnIDogYFVUQyR7Zm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsICduYXJyb3cnKX1gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlhbmFOYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQgPT09IDApIHtcclxuICAgICAgcmV0dXJuICdFdGMvVVRDJztcclxuICAgIH1cclxuICAgIHJldHVybiBgRXRjL0dNVCR7Zm9ybWF0T2Zmc2V0KC10aGlzLmZpeGVkLCAnbmFycm93Jyl9YDtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcclxuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgZm9ybWF0KTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBlcXVhbHMob3RoZXJab25lKSB7XHJcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09ICdmaXhlZCcgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cclxuICAqIEBpbXBsZW1lbnRzIHtab25lfVxyXG4gICovXHJcbmNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XHJcbiAgY29uc3RydWN0b3Ioem9uZU5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvKiogIEBwcml2YXRlICovXHJcbiAgICB0aGlzLnpvbmVOYW1lID0gem9uZU5hbWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnaW52YWxpZCc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0TmFtZSgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZm9ybWF0T2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGVxdWFscygpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xyXG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBkZWZhdWx0Wm9uZTtcclxuICB9IGlmIChpbnB1dCBpbnN0YW5jZW9mIFpvbmUpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9IGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIGNvbnN0IGxvd2VyZWQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKGxvd2VyZWQgPT09ICdkZWZhdWx0JykgcmV0dXJuIGRlZmF1bHRab25lO1xyXG4gICAgaWYgKGxvd2VyZWQgPT09ICdsb2NhbCcgfHwgbG93ZXJlZCA9PT0gJ3N5c3RlbScpIHJldHVybiBTeXN0ZW1ab25lLmluc3RhbmNlO1xyXG4gICAgaWYgKGxvd2VyZWQgPT09ICd1dGMnIHx8IGxvd2VyZWQgPT09ICdnbXQnKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xyXG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBJQU5BWm9uZS5jcmVhdGUoaW5wdXQpO1xyXG4gIH0gaWYgKGlzTnVtYmVyKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XHJcbiAgfSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiBpbnB1dC5vZmZzZXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuICAgIC8vIFRoaXMgaXMgZHVtYiwgYnV0IHRoZSBpbnN0YW5jZW9mIGNoZWNrIGFib3ZlIGRvZXNuJ3Qgc2VlbSB0byByZWFsbHkgd29ya1xyXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcclxufVxyXG5cclxubGV0IG5vdyA9ICgpID0+IERhdGUubm93KCk7XHJcbmxldCBkZWZhdWx0Wm9uZSA9ICdzeXN0ZW0nO1xyXG5sZXQgZGVmYXVsdExvY2FsZSA9IG51bGw7XHJcbmxldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbDtcclxubGV0IGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG51bGw7XHJcbmxldCB0aHJvd09uSW52YWxpZDtcclxuXHJcbi8qKlxyXG4gICogU2V0dGluZ3MgY29udGFpbnMgc3RhdGljIGdldHRlcnMgYW5kIHNldHRlcnMgdGhhdCBjb250cm9sIEx1eG9uJ3Mgb3ZlcmFsbCBiZWhhdmlvci4gTHV4b24gaXMgYSBzaW1wbGUgbGlicmFyeSB3aXRoIGZldyBvcHRpb25zLCBidXQgdGhlIG9uZXMgaXQgZG9lcyBoYXZlIGxpdmUgaGVyZS5cclxuICAqL1xyXG5jbGFzcyBTZXR0aW5ncyB7XHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXHJcbiAgICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBub3coKSB7XHJcbiAgICByZXR1cm4gbm93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXHJcbiAgICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbnVtYmVyLCB3aGljaCB3aWxsIGJlIGludGVycHJldGVkIGFzIGFuIEVwb2NoIG1pbGxpc2Vjb25kIGNvdW50XHJcbiAgICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gRGF0ZS5ub3coKSArIDMwMDAgLy8gcHJldGVuZCBpdCBpcyAzIHNlY29uZHMgaW4gdGhlIGZ1dHVyZVxyXG4gICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiAwIC8vIGFsd2F5cyBwcmV0ZW5kIGl0J3MgSmFuIDEsIDE5NzAgYXQgbWlkbmlnaHQgaW4gVVRDIHRpbWVcclxuICAgICovXHJcbiAgc3RhdGljIHNldCBub3cobikge1xyXG4gICAgbm93ID0gbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIFVzZSB0aGUgdmFsdWUgXCJzeXN0ZW1cIiB0byByZXNldCB0aGlzIHZhbHVlIHRvIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgZGVmYXVsdFpvbmUoem9uZSkge1xyXG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxyXG4gICAgKiBAdHlwZSB7Wm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBkZWZhdWx0Wm9uZSgpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVab25lKGRlZmF1bHRab25lLCBTeXN0ZW1ab25lLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgZGVmYXVsdExvY2FsZShsb2NhbGUpIHtcclxuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0oKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcclxuICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmdTeXN0ZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIHNldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIob3V0cHV0Q2FsZW5kYXIpIHtcclxuICAgIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCB0aHJvd09uSW52YWxpZCgpIHtcclxuICAgIHJldHVybiB0aHJvd09uSW52YWxpZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgdGhyb3dPbkludmFsaWQodCkge1xyXG4gICAgdGhyb3dPbkludmFsaWQgPSB0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJlc2V0IEx1eG9uJ3MgZ2xvYmFsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICBzdGF0aWMgcmVzZXRDYWNoZXMoKSB7XHJcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xyXG4gICAgSUFOQVpvbmUucmVzZXRDYWNoZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdG9kbyAtIHJlbWFwIGNhY2hpbmdcclxuXHJcbmNvbnN0IGludGxMRkNhY2hlID0ge307XHJcbmZ1bmN0aW9uIGdldENhY2hlZExGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xyXG4gIGxldCBkdGYgPSBpbnRsTEZDYWNoZVtrZXldO1xyXG4gIGlmICghZHRmKSB7XHJcbiAgICBkdGYgPSBuZXcgSW50bC5MaXN0Rm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XHJcbiAgICBpbnRsTEZDYWNoZVtrZXldID0gZHRmO1xyXG4gIH1cclxuICByZXR1cm4gZHRmO1xyXG59XHJcblxyXG5sZXQgaW50bERUQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xyXG4gIGxldCBkdGYgPSBpbnRsRFRDYWNoZVtrZXldO1xyXG4gIGlmICghZHRmKSB7XHJcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xyXG4gICAgaW50bERUQ2FjaGVba2V5XSA9IGR0ZjtcclxuICB9XHJcbiAgcmV0dXJuIGR0ZjtcclxufVxyXG5cclxubGV0IGludGxOdW1DYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBnZXRDYWNoZWRJTkYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcclxuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XHJcbiAgbGV0IGluZiA9IGludGxOdW1DYWNoZVtrZXldO1xyXG4gIGlmICghaW5mKSB7XHJcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcclxuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xyXG4gIH1cclxuICByZXR1cm4gaW5mO1xyXG59XHJcblxyXG5sZXQgaW50bFJlbENhY2hlID0ge307XHJcbmZ1bmN0aW9uIGdldENhY2hlZFJURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xyXG4gIGNvbnN0IHsgYmFzZSwgLi4uY2FjaGVLZXlPcHRzIH0gPSBvcHRzOyAvLyBleGNsdWRlIGBiYXNlYCBmcm9tIHRoZSBvcHRpb25zXHJcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XHJcbiAgbGV0IGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xyXG4gIGlmICghaW5mKSB7XHJcbiAgICBpbmYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcclxuICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mO1xyXG4gIH1cclxuICByZXR1cm4gaW5mO1xyXG59XHJcblxyXG5sZXQgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xyXG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XHJcbiAgaWYgKHN5c0xvY2FsZUNhY2hlKSB7XHJcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XHJcbiAgfVxyXG4gIHN5c0xvY2FsZUNhY2hlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7XHJcbiAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGVTdHIpIHtcclxuICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyXHJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XHJcbiAgLy8gSW5zdGVhZCwgd2UnbGwgZG8gdGhpczpcclxuXHJcbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxyXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xyXG4gIC8vIGMpIGlmIEludGwgZmFpbHMsIHRyeSBhZ2FpbiB3aXRob3V0IHRoZSAtdVxyXG5cclxuICBjb25zdCB1SW5kZXggPSBsb2NhbGVTdHIuaW5kZXhPZignLXUtJyk7XHJcbiAgaWYgKHVJbmRleCA9PT0gLTEpIHtcclxuICAgIHJldHVybiBbbG9jYWxlU3RyXTtcclxuICB9XHJcbiAgbGV0IG9wdGlvbnM7XHJcbiAgY29uc3Qgc21hbGxlciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgdUluZGV4KTtcclxuICB0cnkge1xyXG4gICAgb3B0aW9ucyA9IGdldENhY2hlZERURihsb2NhbGVTdHIpLnJlc29sdmVkT3B0aW9ucygpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYoc21hbGxlcikucmVzb2x2ZWRPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXIgfSA9IG9wdGlvbnM7XHJcbiAgLy8gcmV0dXJuIHRoZSBzbWFsbGVyIG9uZSBzbyB0aGF0IHdlIGNhbiBhcHBlbmQgdGhlIGNhbGVuZGFyIGFuZCBudW1iZXJpbmcgb3ZlcnJpZGVzIHRvIGl0XHJcbiAgcmV0dXJuIFtzbWFsbGVyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50bENvbmZpZ1N0cmluZyhsb2NhbGVTdHIsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpIHtcclxuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XHJcbiAgICBsb2NhbGVTdHIgKz0gJy11JztcclxuXHJcbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcclxuICAgICAgbG9jYWxlU3RyICs9IGAtY2EtJHtvdXRwdXRDYWxlbmRhcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChudW1iZXJpbmdTeXN0ZW0pIHtcclxuICAgICAgbG9jYWxlU3RyICs9IGAtbnUtJHtudW1iZXJpbmdTeXN0ZW19YDtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbGVTdHI7XHJcbiAgfVxyXG4gIHJldHVybiBsb2NhbGVTdHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7XHJcbiAgY29uc3QgbXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcclxuICAgIG1zLnB1c2goZihkdCkpO1xyXG4gIH1cclxuICByZXR1cm4gbXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHtcclxuICBjb25zdCBtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xyXG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XHJcbiAgICBtcy5wdXNoKGYoZHQpKTtcclxuICB9XHJcbiAgcmV0dXJuIG1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHtcclxuICBjb25zdCBtb2RlID0gbG9jLmxpc3RpbmdNb2RlKGRlZmF1bHRPSyk7XHJcblxyXG4gIGlmIChtb2RlID09PSAnZXJyb3InKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGlmIChtb2RlID09PSAnZW4nKSB7XHJcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBpbnRsRm4obGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VwcG9ydHNGYXN0TnVtYmVycyhsb2MpIHtcclxuICBpZiAobG9jLm51bWJlcmluZ1N5c3RlbSAmJiBsb2MubnVtYmVyaW5nU3lzdGVtICE9PSAnbGF0bicpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09ICdsYXRuJ1xyXG4gICAgICAgfHwgIWxvYy5sb2NhbGVcclxuICAgICAgIHx8IGxvYy5sb2NhbGUuc3RhcnRzV2l0aCgnZW4nKVxyXG4gICAgICAgfHwgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gJ2xhdG4nXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jbGFzcyBQb2x5TnVtYmVyRm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xyXG4gICAgdGhpcy5wYWRUbyA9IG9wdHMucGFkVG8gfHwgMDtcclxuICAgIHRoaXMuZmxvb3IgPSBvcHRzLmZsb29yIHx8IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHsgcGFkVG8sIGZsb29yLCAuLi5vdGhlck9wdHMgfSA9IG9wdHM7XHJcblxyXG4gICAgaWYgKCFmb3JjZVNpbXBsZSB8fCBPYmplY3Qua2V5cyhvdGhlck9wdHMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgaW50bE9wdHMgPSB7IHVzZUdyb3VwaW5nOiBmYWxzZSwgLi4ub3B0cyB9O1xyXG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcclxuICAgICAgdGhpcy5pbmYgPSBnZXRDYWNoZWRJTkYoaW50bCwgaW50bE9wdHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGkpIHtcclxuICAgIGlmICh0aGlzLmluZikge1xyXG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogaTtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5mLmZvcm1hdChmaXhlZCk7XHJcbiAgICB9XHJcbiAgICAvLyB0byBtYXRjaCB0aGUgYnJvd3NlcidzIG51bWJlcmZvcm1hdHRlciBkZWZhdWx0c1xyXG4gICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XHJcbiAgICByZXR1cm4gcGFkU3RhcnQoZml4ZWQsIHRoaXMucGFkVG8pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jbGFzcyBQb2x5RGF0ZUZvcm1hdHRlciB7XHJcbiAgY29uc3RydWN0b3IoZHQsIGludGwsIG9wdHMpIHtcclxuICAgIHRoaXMub3B0cyA9IG9wdHM7XHJcblxyXG4gICAgbGV0IHo7XHJcbiAgICBpZiAoZHQuem9uZS5pc1VuaXZlcnNhbCkge1xyXG4gICAgICAvLyBVVEMtOCBvciBFdGMvVVRDLTggYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YSwgb25seSBFdGMvR01UKzggYW5kIHRoZSBsaWtlLlxyXG4gICAgICAvLyBUaGF0IGlzIHdoeSBmaXhlZC1vZmZzZXQgVFogaXMgc2V0IHRvIHRoYXQgdW5sZXNzIGl0IGlzOlxyXG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cclxuICAgICAgLy8gMi4gVW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXI6XHJcbiAgICAgIC8vICAgIC0gc29tZSBkbyBub3Qgc3VwcG9ydCBFdGMvXHJcbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxyXG4gICAgICBjb25zdCBnbXRPZmZzZXQgPSAtMSAqIChkdC5vZmZzZXQgLyA2MCk7XHJcbiAgICAgIGNvbnN0IG9mZnNldFogPSBnbXRPZmZzZXQgPj0gMCA/IGBFdGMvR01UKyR7Z210T2Zmc2V0fWAgOiBgRXRjL0dNVCR7Z210T2Zmc2V0fWA7XHJcbiAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgSUFOQVpvbmUuY3JlYXRlKG9mZnNldFopLnZhbGlkKSB7XHJcbiAgICAgICAgeiA9IG9mZnNldFo7XHJcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YS5cclxuICAgICAgICAvLyBTbyB3ZSBoYXZlIHRvIG1ha2UgZG8uIFR3byBjYXNlczpcclxuICAgICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdFxyXG4gICAgICAgIC8vIHdlIGNhbiBkbyBpcyBmb3JtYXQgdGhlIGRhdGUgaW4gVVRDLlxyXG4gICAgICAgIC8vIDIuIFRoZSBmb3JtYXQgb3B0aW9ucyBkb24ndCB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFRoZW4gd2UgY2FuIGFkanVzdCB0aGVtXHJcbiAgICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodFxyXG4gICAgICAgIC8vIGFuZCB0aGUgYmFkIHpvbmUgZG9lc24ndCBzaG93IHVwLlxyXG4gICAgICAgIHogPSAnVVRDJztcclxuICAgICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcclxuICAgICAgICAgIHRoaXMuZHQgPSBkdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gJ3N5c3RlbScpIHtcclxuICAgICAgdGhpcy5kdCA9IGR0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kdCA9IGR0O1xyXG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludGxPcHRzID0geyAuLi50aGlzLm9wdHMgfTtcclxuICAgIGlmICh6KSB7XHJcbiAgICAgIGludGxPcHRzLnRpbWVab25lID0gejtcclxuICAgIH1cclxuICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXQodGhpcy5kdC50b0pTRGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFRvUGFydHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZWRPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHRmLnJlc29sdmVkT3B0aW9ucygpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIFBvbHlSZWxGb3JtYXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xyXG4gICAgdGhpcy5vcHRzID0geyBzdHlsZTogJ2xvbmcnLCAuLi5vcHRzIH07XHJcbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XHJcbiAgICAgIHRoaXMucnRmID0gZ2V0Q2FjaGVkUlRGKGludGwsIG9wdHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGNvdW50LCB1bml0KSB7XHJcbiAgICBpZiAodGhpcy5ydGYpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdChjb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmVUaW1lKHVuaXQsIGNvdW50LCB0aGlzLm9wdHMubnVtZXJpYywgdGhpcy5vcHRzLnN0eWxlICE9PSAnbG9uZycpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCkge1xyXG4gICAgaWYgKHRoaXMucnRmKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY2xhc3MgTG9jYWxlIHtcclxuICBzdGF0aWMgZnJvbU9wdHMob3B0cykge1xyXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUob3B0cy5sb2NhbGUsIG9wdHMubnVtYmVyaW5nU3lzdGVtLCBvcHRzLm91dHB1dENhbGVuZGFyLCBvcHRzLmRlZmF1bHRUb0VOKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCBkZWZhdWx0VG9FTiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzcGVjaWZpZWRMb2NhbGUgPSBsb2NhbGUgfHwgU2V0dGluZ3MuZGVmYXVsdExvY2FsZTtcclxuICAgIC8vIHRoZSBzeXN0ZW0gbG9jYWxlIGlzIHVzZWZ1bCBmb3IgaHVtYW4gcmVhZGFibGUgc3RyaW5ncyBidXQgYW5ub3lpbmcgZm9yIHBhcnNpbmcvZm9ybWF0dGluZyBrbm93biBmb3JtYXRzXHJcbiAgICBjb25zdCBsb2NhbGVSID0gc3BlY2lmaWVkTG9jYWxlIHx8IChkZWZhdWx0VG9FTiA/ICdlbi1VUycgOiBzeXN0ZW1Mb2NhbGUoKSk7XHJcbiAgICBjb25zdCBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XHJcbiAgICBjb25zdCBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XHJcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzZXRDYWNoZSgpIHtcclxuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcclxuICAgIGludGxEVENhY2hlID0ge307XHJcbiAgICBpbnRsTnVtQ2FjaGUgPSB7fTtcclxuICAgIGludGxSZWxDYWNoZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21PYmplY3QoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSA9IHt9KSB7XHJcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcclxuICAgIGNvbnN0IFtwYXJzZWRMb2NhbGUsIHBhcnNlZE51bWJlcmluZ1N5c3RlbSwgcGFyc2VkT3V0cHV0Q2FsZW5kYXJdID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKTtcclxuXHJcbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcclxuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nIHx8IHBhcnNlZE51bWJlcmluZ1N5c3RlbSB8fCBudWxsO1xyXG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyIHx8IHBhcnNlZE91dHB1dENhbGVuZGFyIHx8IG51bGw7XHJcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XHJcblxyXG4gICAgdGhpcy53ZWVrZGF5c0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xyXG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcclxuICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IG51bGw7XHJcbiAgICB0aGlzLmVyYUNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XHJcbiAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBmYXN0TnVtYmVycygpIHtcclxuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcclxuICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQ7XHJcbiAgfVxyXG5cclxuICBsaXN0aW5nTW9kZSgpIHtcclxuICAgIGNvbnN0IGlzQWN0dWFsbHlFbiA9IHRoaXMuaXNFbmdsaXNoKCk7XHJcbiAgICBjb25zdCBoYXNOb1dlaXJkbmVzcyA9ICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gJ2xhdG4nKVxyXG4gICAgICAgJiYgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gJ2dyZWdvcnknKTtcclxuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyAnZW4nIDogJ2ludGwnO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoYWx0cykge1xyXG4gICAgaWYgKCFhbHRzIHx8IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFsdHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKFxyXG4gICAgICBhbHRzLmxvY2FsZSB8fCB0aGlzLnNwZWNpZmllZExvY2FsZSxcclxuICAgICAgYWx0cy5udW1iZXJpbmdTeXN0ZW0gfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sXHJcbiAgICAgIGFsdHMub3V0cHV0Q2FsZW5kYXIgfHwgdGhpcy5vdXRwdXRDYWxlbmRhcixcclxuICAgICAgYWx0cy5kZWZhdWx0VG9FTiB8fCBmYWxzZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZWRlZmF1bHRUb0VOKGFsdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBtb250aHMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgbW9udGhzLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXQgPyB7IG1vbnRoOiBsZW5ndGgsIGRheTogJ251bWVyaWMnIH0gOiB7IG1vbnRoOiBsZW5ndGggfTtcclxuICAgICAgY29uc3QgZm9ybWF0U3RyID0gZm9ybWF0ID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XHJcbiAgICAgIGlmICghdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcclxuICAgICAgICB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocygoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgJ21vbnRoJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgd2Vla2RheXMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgd2Vla2RheXMsICgpID0+IHtcclxuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgd2Vla2RheTogbGVuZ3RoLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHsgd2Vla2RheTogbGVuZ3RoIH07XHJcbiAgICAgIGNvbnN0IGZvcm1hdFN0ciA9IGZvcm1hdCA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xyXG4gICAgICBpZiAoIXRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcclxuICAgICAgICB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwV2Vla2RheXMoKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsICd3ZWVrZGF5JykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtZXJpZGllbXMoZGVmYXVsdE9LID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIGxpc3RTdHVmZihcclxuICAgICAgdGhpcyxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICBkZWZhdWx0T0ssXHJcbiAgICAgICgpID0+IG1lcmlkaWVtcyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXHJcbiAgICAgICAgLy8gZm9yIEFNIGFuZCBQTS4gVGhpcyBpcyBwcm9iYWJseSB3cm9uZywgYnV0IGl0J3MgbWFrZXMgcGFyc2luZyB3YXkgZWFzaWVyLlxyXG4gICAgICAgIGlmICghdGhpcy5tZXJpZGllbUNhY2hlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbnRsID0geyBob3VyOiAnbnVtZXJpYycsIGhvdXJDeWNsZTogJ2gxMicgfTtcclxuICAgICAgICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoXHJcbiAgICAgICAgICAgIChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCAnZGF5cGVyaW9kJyksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVyaWRpZW1DYWNoZTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlcmFzKGxlbmd0aCwgZGVmYXVsdE9LID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgZXJhcywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRsID0geyBlcmE6IGxlbmd0aCB9O1xyXG5cclxuICAgICAgLy8gVGhpcyBpcyBwcm9ibGVtYXRpYy4gRGlmZmVyZW50IGNhbGVuZGFycyBhcmUgZ29pbmcgdG8gZGVmaW5lIGVyYXMgdG90YWxseSBkaWZmZXJlbnRseS4gV2hhdCBJIG5lZWQgaXMgdGhlIG1pbmltdW0gc2V0IG9mIGRhdGVzXHJcbiAgICAgIC8vIHRvIGRlZmluaXRlbHkgZW51bWVyYXRlIHRoZW0uXHJcbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XHJcbiAgICAgICAgdGhpcy5lcmFDYWNoZVtsZW5ndGhdID0gW0RhdGVUaW1lLnV0YygtNDAsIDEsIDEpLCBEYXRlVGltZS51dGMoMjAxNywgMSwgMSldLm1hcCgoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgJ2VyYScpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFjdChkdCwgaW50bE9wdHMsIGZpZWxkKSB7XHJcbiAgICBjb25zdCBkZiA9IHRoaXMuZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCk7XHJcbiAgICBjb25zdCBtYXRjaGluZyA9IHJlc3VsdHMuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkKTtcclxuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIG51bWJlckZvcm1hdHRlcihvcHRzID0ge30pIHtcclxuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxyXG4gICAgLy8gKGluIGNvbnRyYXN0LCB0aGUgcmVzdCBvZiB0aGUgY29uZGl0aW9uIGlzIHVzZWQgaGVhdmlseSlcclxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XHJcbiAgfVxyXG5cclxuICBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XHJcbiAgfVxyXG5cclxuICByZWxGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIGxpc3RGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIGlzRW5nbGlzaCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMubG9jYWxlID09PSAnZW4nXHJcbiAgICAgICB8fCB0aGlzLmxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSAnZW4tdXMnXHJcbiAgICAgICB8fCBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmludGwpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZS5zdGFydHNXaXRoKCdlbi11cycpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlXHJcbiAgICAgICAmJiB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gb3RoZXIubnVtYmVyaW5nU3lzdGVtXHJcbiAgICAgICAmJiB0aGlzLm91dHB1dENhbGVuZGFyID09PSBvdGhlci5vdXRwdXRDYWxlbmRhclxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxyXG4gICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXHJcbiAgKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XHJcbiAgKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cclxuICAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxyXG4gICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cclxuICAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxyXG4gICovXHJcblxyXG5mdW5jdGlvbiBjb21iaW5lUmVnZXhlcyguLi5yZWdleGVzKSB7XHJcbiAgY29uc3QgZnVsbCA9IHJlZ2V4ZXMucmVkdWNlKChmLCByKSA9PiBmICsgci5zb3VyY2UsICcnKTtcclxuICByZXR1cm4gUmVnRXhwKGBeJHtmdWxsfSRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoLi4uZXh0cmFjdG9ycykge1xyXG4gIHJldHVybiAobSkgPT4gZXh0cmFjdG9yc1xyXG4gICAgLnJlZHVjZShcclxuICAgICAgKFttZXJnZWRWYWxzLCBtZXJnZWRab25lLCBjdXJzb3JdLCBleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt2YWwsIHpvbmUsIG5leHRdID0gZXgobSwgY3Vyc29yKTtcclxuICAgICAgICByZXR1cm4gW3sgLi4ubWVyZ2VkVmFscywgLi4udmFsIH0sIHpvbmUgfHwgbWVyZ2VkWm9uZSwgbmV4dF07XHJcbiAgICAgIH0sXHJcbiAgICAgIFt7fSwgbnVsbCwgMV0sXHJcbiAgICApXHJcbiAgICAuc2xpY2UoMCwgMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlKHMsIC4uLnBhdHRlcm5zKSB7XHJcbiAgaWYgKHMgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XHJcbiAgICBjb25zdCBtID0gcmVnZXguZXhlYyhzKTtcclxuICAgIGlmIChtKSB7XHJcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBbbnVsbCwgbnVsbF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcclxuICByZXR1cm4gKG1hdGNoLCBjdXJzb3IpID0+IHtcclxuICAgIGNvbnN0IHJldCA9IHt9O1xyXG4gICAgbGV0IGk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXHJcbmNvbnN0IG9mZnNldFJlZ2V4ID0gLyg/OihaKXwoWystXVxcZFxcZCkoPzo6PyhcXGRcXGQpKT8pLztcclxuY29uc3QgaXNvRXh0ZW5kZWRab25lID0gYCg/OiR7b2Zmc2V0UmVnZXguc291cmNlfT8oPzpcXFxcWygke2lhbmFSZWdleC5zb3VyY2V9KVxcXFxdKT8pP2A7XHJcbmNvbnN0IGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy87XHJcbmNvbnN0IGlzb1RpbWVSZWdleCA9IFJlZ0V4cChgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0ke2lzb0V4dGVuZGVkWm9uZX1gKTtcclxuY29uc3QgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzpUJHtpc29UaW1lUmVnZXguc291cmNlfSk/YCk7XHJcbmNvbnN0IGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vO1xyXG5jb25zdCBpc29XZWVrUmVnZXggPSAvKFxcZHs0fSktP1coXFxkXFxkKSg/Oi0/KFxcZCkpPy87XHJcbmNvbnN0IGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvO1xyXG5jb25zdCBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZSgnd2Vla1llYXInLCAnd2Vla051bWJlcicsICd3ZWVrRGF5Jyk7XHJcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0YSA9IHNpbXBsZVBhcnNlKCd5ZWFyJywgJ29yZGluYWwnKTtcclxuY29uc3Qgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvOyAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXHJcbmNvbnN0IHNxbFRpbWVSZWdleCA9IFJlZ0V4cChcclxuICBgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0gPyg/OiR7b2Zmc2V0UmVnZXguc291cmNlfXwoJHtpYW5hUmVnZXguc291cmNlfSkpP2AsXHJcbik7XHJcbmNvbnN0IHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86ICR7c3FsVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xyXG5cclxuZnVuY3Rpb24gaW50KG1hdGNoLCBwb3MsIGZhbGxiYWNrKSB7XHJcbiAgY29uc3QgbSA9IG1hdGNoW3Bvc107XHJcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG0pID8gZmFsbGJhY2sgOiBwYXJzZUludGVnZXIobSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RJU09ZbWQobWF0Y2gsIGN1cnNvcikge1xyXG4gIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICB5ZWFyOiBpbnQobWF0Y2gsIGN1cnNvciksXHJcbiAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSxcclxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XHJcbiAgY29uc3QgaXRlbSA9IHtcclxuICAgIGhvdXJzOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksXHJcbiAgICBtaW51dGVzOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDApLFxyXG4gICAgc2Vjb25kczogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcclxuICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xyXG4gIGNvbnN0IGxvY2FsID0gIW1hdGNoW2N1cnNvcl0gJiYgIW1hdGNoW2N1cnNvciArIDFdO1xyXG4gIGNvbnN0IGZ1bGxPZmZzZXQgPSBzaWduZWRPZmZzZXQobWF0Y2hbY3Vyc29yICsgMV0sIG1hdGNoW2N1cnNvciArIDJdKTtcclxuICBjb25zdCB6b25lID0gbG9jYWwgPyBudWxsIDogRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGZ1bGxPZmZzZXQpO1xyXG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xyXG4gIGNvbnN0IHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcclxuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAxXTtcclxufVxyXG5cclxuLy8gSVNPIHRpbWUgcGFyc2luZ1xyXG5cclxuY29uc3QgaXNvVGltZU9ubHkgPSBSZWdFeHAoYF5UPyR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JGApO1xyXG5cclxuLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcclxuXHJcbmNvbnN0IGlzb0R1cmF0aW9uID0gL14tP1AoPzooPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylZKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylXKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylEKT8oPzpUKD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pSCk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pTSk/KD86KC0/XFxkezEsMjB9KSg/OlsuLF0oLT9cXGR7MSwyMH0pKT9TKT8pPykkLztcclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RJU09EdXJhdGlvbihtYXRjaCkge1xyXG4gIGNvbnN0IFtzLCB5ZWFyU3RyLCBtb250aFN0ciwgd2Vla1N0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgbWlsbGlzZWNvbmRzU3RyXSA9IG1hdGNoO1xyXG5cclxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09ICctJztcclxuICBjb25zdCBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSAnLSc7XHJcblxyXG4gIGNvbnN0IG1heWJlTmVnYXRlID0gKG51bSwgZm9yY2UgPSBmYWxzZSkgPT4gKG51bSAhPT0gdW5kZWZpbmVkICYmIChmb3JjZSB8fCAobnVtICYmIGhhc05lZ2F0aXZlUHJlZml4KSkgPyAtbnVtIDogbnVtKTtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoeWVhclN0cikpLFxyXG4gICAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcclxuICAgICAgd2Vla3M6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcod2Vla1N0cikpLFxyXG4gICAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGRheVN0cikpLFxyXG4gICAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXHJcbiAgICAgIG1pbnV0ZXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobWludXRlU3RyKSksXHJcbiAgICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoc2Vjb25kU3RyKSwgc2Vjb25kU3RyID09PSAnLTAnKSxcclxuICAgICAgbWlsbGlzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZU1pbGxpcyhtaWxsaXNlY29uZHNTdHIpLCBuZWdhdGl2ZVNlY29uZHMpLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG4vLyBUaGVzZSBhcmUgYSBsaXR0bGUgYnJhaW5kZWFkLiBFRFQgKnNob3VsZCogdGVsbCB1cyB0aGF0IHdlJ3JlIGluLCBzYXksIEFtZXJpY2EvTmV3X1lvcmtcclxuLy8gYW5kIG5vdCBqdXN0IHRoYXQgd2UncmUgaW4gLTI0MCAqcmlnaHQgbm93Ki4gQnV0IHNpbmNlIEkgZG9uJ3QgdGhpbmsgdGhlc2UgYXJlIHVzZWQgdGhhdCBvZnRlblxyXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxyXG5jb25zdCBvYnNPZmZzZXRzID0ge1xyXG4gIEdNVDogMCxcclxuICBFRFQ6IC00ICogNjAsXHJcbiAgRVNUOiAtNSAqIDYwLFxyXG4gIENEVDogLTUgKiA2MCxcclxuICBDU1Q6IC02ICogNjAsXHJcbiAgTURUOiAtNiAqIDYwLFxyXG4gIE1TVDogLTcgKiA2MCxcclxuICBQRFQ6IC03ICogNjAsXHJcbiAgUFNUOiAtOCAqIDYwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpIHtcclxuICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXHJcbiAgICBtb250aDogbW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxyXG4gICAgZGF5OiBwYXJzZUludGVnZXIoZGF5U3RyKSxcclxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcclxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0ciksXHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xyXG4gIGlmICh3ZWVrZGF5U3RyKSB7XHJcbiAgICByZXN1bHQud2Vla2RheSA9IHdlZWtkYXlTdHIubGVuZ3RoID4gM1xyXG4gICAgICA/IHdlZWtkYXlzTG9uZy5pbmRleE9mKHdlZWtkYXlTdHIpICsgMVxyXG4gICAgICA6IHdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBSRkMgMjgyMi81MzIyXHJcbmNvbnN0IHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoPzooWystXVxcZFxcZCkoXFxkXFxkKSkpJC87XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0UkZDMjgyMihtYXRjaCkge1xyXG4gIGNvbnN0IFtcclxuICAgICxcclxuICAgIHdlZWtkYXlTdHIsXHJcbiAgICBkYXlTdHIsXHJcbiAgICBtb250aFN0cixcclxuICAgIHllYXJTdHIsXHJcbiAgICBob3VyU3RyLFxyXG4gICAgbWludXRlU3RyLFxyXG4gICAgc2Vjb25kU3RyLFxyXG4gICAgb2JzT2Zmc2V0LFxyXG4gICAgbWlsT2Zmc2V0LFxyXG4gICAgb2ZmSG91clN0cixcclxuICAgIG9mZk1pbnV0ZVN0cixcclxuICBdID0gbWF0Y2g7XHJcbiAgY29uc3QgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xyXG5cclxuICBsZXQgb2Zmc2V0O1xyXG4gIGlmIChvYnNPZmZzZXQpIHtcclxuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcclxuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xyXG4gICAgb2Zmc2V0ID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW3Jlc3VsdCwgbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xyXG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXHJcbiAgcmV0dXJuIHNcclxuICAgIC5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCAnICcpXHJcbiAgICAucmVwbGFjZSgvKFxcc1xccyspL2csICcgJylcclxuICAgIC50cmltKCk7XHJcbn1cclxuXHJcbi8vIGh0dHAgZGF0ZVxyXG5cclxuY29uc3QgcmZjMTEyMyA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC87XHJcbmNvbnN0IHJmYzg1MCA9IC9eKE1vbmRheXxUdWVzZGF5fFdlZG5lc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLztcclxuY29uc3QgYXNjaWkgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xyXG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyXSA9IG1hdGNoO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcclxuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XHJcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIHllYXJTdHJdID0gbWF0Y2g7XHJcbiAgY29uc3QgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xyXG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xyXG59XHJcblxyXG5jb25zdCBpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvWW1kUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XHJcbmNvbnN0IGlzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvV2Vla1JlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xyXG5jb25zdCBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcclxuY29uc3QgaXNvVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpO1xyXG5cclxuY29uc3QgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcclxuICBleHRyYWN0SVNPWW1kLFxyXG4gIGV4dHJhY3RJU09UaW1lLFxyXG4gIGV4dHJhY3RJU09PZmZzZXQsXHJcbiAgZXh0cmFjdElBTkFab25lLFxyXG4pO1xyXG5jb25zdCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcclxuICBleHRyYWN0SVNPV2Vla0RhdGEsXHJcbiAgZXh0cmFjdElTT1RpbWUsXHJcbiAgZXh0cmFjdElTT09mZnNldCxcclxuICBleHRyYWN0SUFOQVpvbmUsXHJcbik7XHJcbmNvbnN0IGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWUgPSBjb21iaW5lRXh0cmFjdG9ycyhcclxuICBleHRyYWN0SVNPT3JkaW5hbERhdGEsXHJcbiAgZXh0cmFjdElTT1RpbWUsXHJcbiAgZXh0cmFjdElTT09mZnNldCxcclxuICBleHRyYWN0SUFOQVpvbmUsXHJcbik7XHJcbmNvbnN0IGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXHJcbiAgZXh0cmFjdElTT1RpbWUsXHJcbiAgZXh0cmFjdElTT09mZnNldCxcclxuICBleHRyYWN0SUFOQVpvbmUsXHJcbik7XHJcblxyXG4vKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcclxuICByZXR1cm4gcGFyc2UoXHJcbiAgICBzLFxyXG4gICAgW2lzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcclxuICAgIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSxcclxuICAgIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sXHJcbiAgICBbaXNvVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0XSxcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVJGQzI4MjJEYXRlKHMpIHtcclxuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHtcclxuICByZXR1cm4gcGFyc2UoXHJcbiAgICBzLFxyXG4gICAgW3JmYzExMjMsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxyXG4gICAgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sXHJcbiAgICBbYXNjaWksIGV4dHJhY3RBU0NJSV0sXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7XHJcbn1cclxuXHJcbmNvbnN0IGV4dHJhY3RJU09UaW1lT25seSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlSVNPVGltZU9ubHkocykge1xyXG4gIHJldHVybiBwYXJzZShzLCBbaXNvVGltZU9ubHksIGV4dHJhY3RJU09UaW1lT25seV0pO1xyXG59XHJcblxyXG5jb25zdCBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XHJcbmNvbnN0IHNxbFRpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsVGltZVJlZ2V4KTtcclxuXHJcbmNvbnN0IGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcclxuICBleHRyYWN0SVNPVGltZSxcclxuICBleHRyYWN0SVNPT2Zmc2V0LFxyXG4gIGV4dHJhY3RJQU5BWm9uZSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcclxuICByZXR1cm4gcGFyc2UoXHJcbiAgICBzLFxyXG4gICAgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcclxuICAgIFtzcWxUaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZV0sXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgSU5WQUxJRCQyID0gJ0ludmFsaWQgRHVyYXRpb24nO1xyXG5cclxuLy8gdW5pdCBjb252ZXJzaW9uIGNvbnN0YW50c1xyXG5jb25zdCBsb3dPcmRlck1hdHJpeCA9IHtcclxuICB3ZWVrczoge1xyXG4gICAgZGF5czogNyxcclxuICAgIGhvdXJzOiA3ICogMjQsXHJcbiAgICBtaW51dGVzOiA3ICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgZGF5czoge1xyXG4gICAgaG91cnM6IDI0LFxyXG4gICAgbWludXRlczogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIGhvdXJzOiB7IG1pbnV0ZXM6IDYwLCBzZWNvbmRzOiA2MCAqIDYwLCBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwIH0sXHJcbiAgbWludXRlczogeyBzZWNvbmRzOiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDAgfSxcclxuICBzZWNvbmRzOiB7IG1pbGxpc2Vjb25kczogMTAwMCB9LFxyXG59O1xyXG5jb25zdCBjYXN1YWxNYXRyaXggPSB7XHJcbiAgeWVhcnM6IHtcclxuICAgIHF1YXJ0ZXJzOiA0LFxyXG4gICAgbW9udGhzOiAxMixcclxuICAgIHdlZWtzOiA1MixcclxuICAgIGRheXM6IDM2NSxcclxuICAgIGhvdXJzOiAzNjUgKiAyNCxcclxuICAgIG1pbnV0ZXM6IDM2NSAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICBxdWFydGVyczoge1xyXG4gICAgbW9udGhzOiAzLFxyXG4gICAgd2Vla3M6IDEzLFxyXG4gICAgZGF5czogOTEsXHJcbiAgICBob3VyczogOTEgKiAyNCxcclxuICAgIG1pbnV0ZXM6IDkxICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICBtb250aHM6IHtcclxuICAgIHdlZWtzOiA0LFxyXG4gICAgZGF5czogMzAsXHJcbiAgICBob3VyczogMzAgKiAyNCxcclxuICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuXHJcbiAgLi4ubG93T3JkZXJNYXRyaXgsXHJcbn07XHJcbmNvbnN0IGRheXNJblllYXJBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDAwO1xyXG5jb25zdCBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwO1xyXG5jb25zdCBhY2N1cmF0ZU1hdHJpeCA9IHtcclxuICB5ZWFyczoge1xyXG4gICAgcXVhcnRlcnM6IDQsXHJcbiAgICBtb250aHM6IDEyLFxyXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDcsXHJcbiAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsXHJcbiAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQsXHJcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgcXVhcnRlcnM6IHtcclxuICAgIG1vbnRoczogMyxcclxuICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyAyOCxcclxuICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSAvIDQsXHJcbiAgICBob3VyczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0KSAvIDQsXHJcbiAgICBtaW51dGVzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCkgLyA0LFxyXG4gICAgc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCkgLyA0LFxyXG4gICAgbWlsbGlzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyA0LFxyXG4gIH0sXHJcbiAgbW9udGhzOiB7XHJcbiAgICB3ZWVrczogZGF5c0luTW9udGhBY2N1cmF0ZSAvIDcsXHJcbiAgICBkYXlzOiBkYXlzSW5Nb250aEFjY3VyYXRlLFxyXG4gICAgaG91cnM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCxcclxuICAgIG1pbnV0ZXM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICAuLi5sb3dPcmRlck1hdHJpeCxcclxufTtcclxuXHJcbi8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZVxyXG5jb25zdCBvcmRlcmVkVW5pdHMkMSA9IFtcclxuICAneWVhcnMnLFxyXG4gICdxdWFydGVycycsXHJcbiAgJ21vbnRocycsXHJcbiAgJ3dlZWtzJyxcclxuICAnZGF5cycsXHJcbiAgJ2hvdXJzJyxcclxuICAnbWludXRlcycsXHJcbiAgJ3NlY29uZHMnLFxyXG4gICdtaWxsaXNlY29uZHMnLFxyXG5dO1xyXG5cclxuY29uc3QgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzJDEuc2xpY2UoMCkucmV2ZXJzZSgpO1xyXG5cclxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcclxuZnVuY3Rpb24gY2xvbmUkMShkdXIsIGFsdHMsIGNsZWFyID0gZmFsc2UpIHtcclxuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXHJcbiAgY29uc3QgY29uZiA9IHtcclxuICAgIHZhbHVlczogY2xlYXIgPyBhbHRzLnZhbHVlcyA6IHsgLi4uZHVyLnZhbHVlcywgLi4uKGFsdHMudmFsdWVzIHx8IHt9KSB9LFxyXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcclxuICAgIGNvbnZlcnNpb25BY2N1cmFjeTogYWx0cy5jb252ZXJzaW9uQWNjdXJhY3kgfHwgZHVyLmNvbnZlcnNpb25BY2N1cmFjeSxcclxuICB9O1xyXG4gIHJldHVybiBuZXcgRHVyYXRpb24oY29uZik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFudGlUcnVuYyhuKSB7XHJcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5mbG9vcihuKSA6IE1hdGguY2VpbChuKTtcclxufVxyXG5cclxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xyXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcclxuICBjb25zdCBjb252ID0gbWF0cml4W3RvVW5pdF1bZnJvbVVuaXRdO1xyXG4gIGNvbnN0IHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udjtcclxuICBjb25zdCBzYW1lU2lnbiA9IE1hdGguc2lnbihyYXcpID09PSBNYXRoLnNpZ24odG9NYXBbdG9Vbml0XSk7XHJcbiAgLy8gb2ssIHNvIHRoaXMgaXMgd2lsZCwgYnV0IHNlZSB0aGUgbWF0cml4IGluIHRoZSB0ZXN0c1xyXG4gIGNvbnN0IGFkZGVkID0gIXNhbWVTaWduICYmIHRvTWFwW3RvVW5pdF0gIT09IDAgJiYgTWF0aC5hYnMocmF3KSA8PSAxID8gYW50aVRydW5jKHJhdykgOiBNYXRoLnRydW5jKHJhdyk7XHJcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcclxuICBmcm9tTWFwW2Zyb21Vbml0XSAtPSBhZGRlZCAqIGNvbnY7XHJcbn1cclxuXHJcbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcclxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWVzKG1hdHJpeCwgdmFscykge1xyXG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XHJcbiAgICAgIGlmIChwcmV2aW91cykge1xyXG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJldmlvdXM7XHJcbiAgfSwgbnVsbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxyXG4gICpcclxuICAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XHJcbiAgKlxyXG4gICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24jZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbiNmcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uI2Zyb21JU099LlxyXG4gICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24jeWVhcnN9LCB7QGxpbmsgRHVyYXRpb24jbW9udGhzfSwge0BsaW5rIER1cmF0aW9uI3dlZWtzfSwge0BsaW5rIER1cmF0aW9uI2RheXN9LCB7QGxpbmsgRHVyYXRpb24jaG91cnN9LCB7QGxpbmsgRHVyYXRpb24jbWludXRlc30sIHtAbGluayBEdXJhdGlvbiNzZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uI21pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxyXG4gICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbiNsb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24jbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXHJcbiAgKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbiNwbHVzfSwge0BsaW5rIER1cmF0aW9uI21pbnVzfSwge0BsaW5rIER1cmF0aW9uI25vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbiNzZXR9LCB7QGxpbmsgRHVyYXRpb24jcmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24jbmVnYXRlfS5cclxuICAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbiNhc30sIHtAbGluayBEdXJhdGlvbiN0b0lTT30sIHtAbGluayBEdXJhdGlvbiN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24jdG9KU09OfVxyXG4gICpcclxuICAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cclxuICAqL1xyXG5jbGFzcyBEdXJhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgY29uc3QgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSAnbG9uZ3Rlcm0nIHx8IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXM7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyAnbG9uZ3Rlcm0nIDogJ2Nhc3VhbCc7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMubWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pc0x1eG9uRHVyYXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XHJcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogY291bnQgfSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXHJcbiAgICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPVtdXSAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRHVyYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XHJcbiAgICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxyXG4gICAgICAgIGBEdXJhdGlvbi5mcm9tT2JqZWN0OiBhcmd1bWVudCBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGdvdCAke1xyXG4gICAgICAgICAgb2JqID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIG9ialxyXG4gICAgICAgIH1gLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xyXG4gICAgICB2YWx1ZXM6IG5vcm1hbGl6ZU9iamVjdChvYmosIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxyXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxyXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9wdHMuY29udmVyc2lvbkFjY3VyYWN5LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBEdXJhdGlvbkxpa2UuXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0IHwgbnVtYmVyIHwgRHVyYXRpb259IGR1cmF0aW9uTGlrZVxyXG4gICAgKiBPbmUgb2Y6XHJcbiAgICAqIC0gb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXHJcbiAgICAqIC0gbnVtYmVyIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHNcclxuICAgICogLSBEdXJhdGlvbiBpbnN0YW5jZVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb25MaWtlKSB7XHJcbiAgICBpZiAoaXNOdW1iZXIoZHVyYXRpb25MaWtlKSkge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhkdXJhdGlvbkxpa2UpO1xyXG4gICAgfSBpZiAoRHVyYXRpb24uaXNEdXJhdGlvbihkdXJhdGlvbkxpa2UpKSB7XHJcbiAgICAgIHJldHVybiBkdXJhdGlvbkxpa2U7XHJcbiAgICB9IGlmICh0eXBlb2YgZHVyYXRpb25MaWtlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbkxpa2UpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxyXG4gICAgICBgVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCAke2R1cmF0aW9uTGlrZX0gb2YgdHlwZSAke3R5cGVvZiBkdXJhdGlvbkxpa2V9YCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XHJcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCk7XHJcbiAgICBpZiAocGFyc2VkKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCgndW5wYXJzYWJsZScsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSB0aW1lIHN0cmluZy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMToyMjozMy40NDQnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDIyLCBzZWNvbmRzOiAzMywgbWlsbGlzZWNvbmRzOiA0NDQgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21JU09UaW1lKHRleHQsIG9wdHMpIHtcclxuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KTtcclxuICAgIGlmIChwYXJzZWQpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKCd1bnBhcnNhYmxlJywgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xyXG4gICAgaWYgKCFyZWFzb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCduZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIER1cmF0aW9uIGlzIGludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xyXG5cclxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHsgaW52YWxpZCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICBzdGF0aWMgbm9ybWFsaXplVW5pdCh1bml0KSB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0ge1xyXG4gICAgICB5ZWFyOiAneWVhcnMnLFxyXG4gICAgICB5ZWFyczogJ3llYXJzJyxcclxuICAgICAgcXVhcnRlcjogJ3F1YXJ0ZXJzJyxcclxuICAgICAgcXVhcnRlcnM6ICdxdWFydGVycycsXHJcbiAgICAgIG1vbnRoOiAnbW9udGhzJyxcclxuICAgICAgbW9udGhzOiAnbW9udGhzJyxcclxuICAgICAgd2VlazogJ3dlZWtzJyxcclxuICAgICAgd2Vla3M6ICd3ZWVrcycsXHJcbiAgICAgIGRheTogJ2RheXMnLFxyXG4gICAgICBkYXlzOiAnZGF5cycsXHJcbiAgICAgIGhvdXI6ICdob3VycycsXHJcbiAgICAgIGhvdXJzOiAnaG91cnMnLFxyXG4gICAgICBtaW51dGU6ICdtaW51dGVzJyxcclxuICAgICAgbWludXRlczogJ21pbnV0ZXMnLFxyXG4gICAgICBzZWNvbmQ6ICdzZWNvbmRzJyxcclxuICAgICAgc2Vjb25kczogJ3NlY29uZHMnLFxyXG4gICAgICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcycsXHJcbiAgICAgIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kcycsXHJcbiAgICB9W3VuaXQgPyB1bml0LnRvTG93ZXJDYXNlKCkgOiB1bml0XTtcclxuXHJcbiAgICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xyXG5cclxuICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXHJcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc0R1cmF0aW9uKG8pIHtcclxuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25EdXJhdGlvbikgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0ICB0aGUgbG9jYWxlIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2VuLUdCJ1xyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRHVyYXRpb25cclxuICAgICpcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOlxyXG4gICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzXHJcbiAgICAqICogYHNgIGZvciBzZWNvbmRzXHJcbiAgICAqICogYG1gIGZvciBtaW51dGVzXHJcbiAgICAqICogYGhgIGZvciBob3Vyc1xyXG4gICAgKiAqIGBkYCBmb3IgZGF5c1xyXG4gICAgKiAqIGB3YCBmb3Igd2Vla3NcclxuICAgICogKiBgTWAgZm9yIG1vbnRoc1xyXG4gICAgKiAqIGB5YCBmb3IgeWVhcnNcclxuICAgICogTm90ZXM6XHJcbiAgICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXHJcbiAgICAqICogVG9rZW5zIGNhbiBiZSBlc2NhcGVkIGJ5IHdyYXBwaW5nIHdpdGggc2luZ2xlIHF1b3Rlcy5cclxuICAgICogKiBUaGUgZHVyYXRpb24gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHNldCBvZiB1bml0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyB1c2luZyB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30gYW5kIHRoZSBEdXJhdGlvbnMncyBjb252ZXJzaW9uIGFjY3VyYWN5IHNldHRpbmcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbG9vcj10cnVlXSAtIGZsb29yIG51bWVyaWNhbCB2YWx1ZXNcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieSBkIHNcIikgLy89PiBcIjEgNiAyXCJcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieXkgZGQgc3NzXCIpIC8vPT4gXCIwMSAwNiAwMDJcIlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJNIFNcIikgLy89PiBcIjEyIDUxODQwMjAwMFwiXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcclxuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcclxuICAgIGNvbnN0IGZtdE9wdHMgPSB7XHJcbiAgICAgIC4uLm9wdHMsXHJcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXHJcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYywgZm10T3B0cykuZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKHRoaXMsIGZtdClcclxuICAgICAgOiBJTlZBTElEJDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIER1cmF0aW9uIHdpdGggYWxsIHVuaXRzIGluY2x1ZGVkLlxyXG4gICAgKiBUbyBtb2RpZnkgaXRzIGJlaGF2aW9yIHVzZSB0aGUgYGxpc3RTdHlsZWAgYW5kIGFueSBJbnRsLk51bWJlckZvcm1hdCBvcHRpb24sIHRob3VnaCBgdW5pdERpc3BsYXlgIGlzIGVzcGVjaWFsbHkgcmVsZXZhbnQuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9OdW1iZXJGb3JtYXRcclxuICAgICogQHBhcmFtIG9wdHMgLSBPbiBvcHRpb24gb2JqZWN0IHRvIG92ZXJyaWRlIHRoZSBmb3JtYXR0aW5nLiBBY2NlcHRzIHRoZSBzYW1lIGtleXMgYXMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludC5OdW1iZXJGb3JtYXRgIGNvbnN0cnVjdG9yLCBhcyB3ZWxsIGFzIGBsaXN0U3R5bGVgLlxyXG4gICAgKiBAZXhhbXBsZVxyXG4gICAgKiBgYGBqc1xyXG4gICAgKiB2YXIgZHVyID0gRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEsIGhvdXJzOiA1LCBtaW51dGVzOiA2IH0pXHJcbiAgICAqIGR1ci50b0h1bWFuKCkgLy89PiAnMSBkYXksIDUgaG91cnMsIDYgbWludXRlcydcclxuICAgICogZHVyLnRvSHVtYW4oeyBsaXN0U3R5bGU6IFwibG9uZ1wiIH0pIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCBhbmQgNiBtaW51dGVzJ1xyXG4gICAgKiBkdXIudG9IdW1hbih7IHVuaXREaXNwbGF5OiBcInNob3J0XCIgfSkgLy89PiAnMSBkYXksIDUgaHIsIDYgbWluJ1xyXG4gICAgKiBgYGBcclxuICAgICovXHJcbiAgdG9IdW1hbihvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IGwgPSBvcmRlcmVkVW5pdHMkMVxyXG4gICAgICAubWFwKCh1bml0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZXNbdW5pdF07XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NcclxuICAgICAgICAgIC5udW1iZXJGb3JtYXR0ZXIoe1xyXG4gICAgICAgICAgICBzdHlsZTogJ3VuaXQnLCB1bml0RGlzcGxheTogJ2xvbmcnLCAuLi5vcHRzLCB1bml0OiB1bml0LnNsaWNlKDAsIC0xKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZm9ybWF0KHZhbCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maWx0ZXIoKG4pID0+IG4pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmxvY1xyXG4gICAgICAubGlzdEZvcm1hdHRlcih7IHR5cGU6ICdjb25qdW5jdGlvbicsIHN0eWxlOiBvcHRzLmxpc3RTdHlsZSB8fCAnbmFycm93JywgLi4ub3B0cyB9KVxyXG4gICAgICAuZm9ybWF0KGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XHJcbiAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICovXHJcbiAgdG9PYmplY3QoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xyXG4gICAgcmV0dXJuIHsgLi4udGhpcy52YWx1ZXMgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbi5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAzLCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1AzWVQ0NVMnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDQsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDRNVDQ1UydcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNSB9KS50b0lTTygpIC8vPT4gJ1A1TSdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDUgfSkudG9JU08oKSAvLz0+ICdQVDVNJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiA2IH0pLnRvSVNPKCkgLy89PiAnUFQwLjAwNlMnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU08oKSB7XHJcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHMgPSAnUCc7XHJcbiAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSBgJHt0aGlzLnllYXJzfVlgO1xyXG4gICAgaWYgKHRoaXMubW9udGhzICE9PSAwIHx8IHRoaXMucXVhcnRlcnMgIT09IDApIHMgKz0gYCR7dGhpcy5tb250aHMgKyB0aGlzLnF1YXJ0ZXJzICogM31NYDtcclxuICAgIGlmICh0aGlzLndlZWtzICE9PSAwKSBzICs9IGAke3RoaXMud2Vla3N9V2A7XHJcbiAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IGAke3RoaXMuZGF5c31EYDtcclxuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwIHx8IHRoaXMubWludXRlcyAhPT0gMCB8fCB0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApIHsgcyArPSAnVCc7IH1cclxuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwKSBzICs9IGAke3RoaXMuaG91cnN9SGA7XHJcbiAgICBpZiAodGhpcy5taW51dGVzICE9PSAwKSBzICs9IGAke3RoaXMubWludXRlc31NYDtcclxuICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXHJcbiAgICAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cclxuICAgIHsgcyArPSBgJHtyb3VuZFRvKHRoaXMuc2Vjb25kcyArIHRoaXMubWlsbGlzZWNvbmRzIC8gMTAwMCwgMyl9U2A7IH1cclxuICAgIGlmIChzID09PSAnUCcpIHMgKz0gJ1QwUyc7XHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiwgZm9ybWF0dGVkIGFzIGEgdGltZSBvZiBkYXkuXHJcbiAgICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlIGR1cmF0aW9uIGlzIGludmFsaWQsIG5lZ2F0aXZlLCBvciBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gMjQgaG91cnMuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoKSAvLz0+ICcxMTowMDowMC4wMDAnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NNaWxsaXNlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDA6MDAnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDExOjAwOjAwLjAwMCdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTEwMDAwLjAwMCdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT1RpbWUob3B0cyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgbWlsbGlzID0gdGhpcy50b01pbGxpcygpO1xyXG4gICAgaWYgKG1pbGxpcyA8IDAgfHwgbWlsbGlzID49IDg2NDAwMDAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBvcHRzID0ge1xyXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kczogZmFsc2UsXHJcbiAgICAgIHN1cHByZXNzU2Vjb25kczogZmFsc2UsXHJcbiAgICAgIGluY2x1ZGVQcmVmaXg6IGZhbHNlLFxyXG4gICAgICBmb3JtYXQ6ICdleHRlbmRlZCcsXHJcbiAgICAgIC4uLm9wdHMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zaGlmdFRvKCdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJyk7XHJcblxyXG4gICAgbGV0IGZtdCA9IG9wdHMuZm9ybWF0ID09PSAnYmFzaWMnID8gJ2hobW0nIDogJ2hoOm1tJztcclxuXHJcbiAgICBpZiAoIW9wdHMuc3VwcHJlc3NTZWNvbmRzIHx8IHZhbHVlLnNlY29uZHMgIT09IDAgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XHJcbiAgICAgIGZtdCArPSBvcHRzLmZvcm1hdCA9PT0gJ2Jhc2ljJyA/ICdzcycgOiAnOnNzJztcclxuICAgICAgaWYgKCFvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xyXG4gICAgICAgIGZtdCArPSAnLlNTUyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyID0gdmFsdWUudG9Gb3JtYXQoZm10KTtcclxuXHJcbiAgICBpZiAob3B0cy5pbmNsdWRlUHJlZml4KSB7XHJcbiAgICAgIHN0ciA9IGBUJHtzdHJ9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdG9NaWxsaXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcygnbWlsbGlzZWNvbmRzJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHZhbHVlT2YoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBsb25nZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBwbHVzKGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGsgb2Ygb3JkZXJlZFVuaXRzJDEpIHtcclxuICAgICAgaWYgKGhhc093blByb3BlcnR5KGR1ci52YWx1ZXMsIGspIHx8IGhhc093blByb3BlcnR5KHRoaXMudmFsdWVzLCBrKSkge1xyXG4gICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiByZXN1bHQgfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogTWFrZSB0aGlzIER1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIG1pbnVzKGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3VyXCIgPyB4ICogMiA6IHgpIC8vPT4geyBob3VyczogMiwgbWludXRlczogMzAgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgbWFwVW5pdHMoZm4pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xyXG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ3llYXJzJykgLy89PiAyXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdtb250aHMnKSAvLz0+IDBcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ2RheXMnKSAvLz0+IDNcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQodW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xyXG4gICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcclxuICAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc2V0KHZhbHVlcykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IG1peGVkID0geyAuLi50aGlzLnZhbHVlcywgLi4ubm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkgfTtcclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiBtaXhlZCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cclxuICAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjb252ZXJzaW9uQWNjdXJhY3kgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xyXG4gICAgY29uc3Qgb3B0cyA9IHsgbG9jIH07XHJcblxyXG4gICAgaWYgKGNvbnZlcnNpb25BY2N1cmFjeSkge1xyXG4gICAgICBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGNvbnZlcnNpb25BY2N1cmFjeTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgZHVyYXRpb24gaW4gdGhlIHNwZWNpZmllZCB1bml0LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGVzJyBvciAnZGF5cydcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnZGF5cycpIC8vPT4gMzY1XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ21vbnRocycpIC8vPT4gMTJcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7aG91cnM6IDYwfSkuYXMoJ2RheXMnKSAvLz0+IDIuNVxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGFzKHVuaXQpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIG5vcm1hbGl6ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XHJcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IHZhbHMgfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ29udmVydCB0aGlzIER1cmF0aW9uIGludG8gaXRzIHJlcHJlc2VudGF0aW9uIGluIGEgZGlmZmVyZW50IHNldCBvZiB1bml0cy5cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5zaGlmdFRvKCdtaW51dGVzJywgJ21pbGxpc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDYwLCBtaWxsaXNlY29uZHM6IDMwMDAwIH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHNoaWZ0VG8oLi4udW5pdHMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuaXRzID0gdW5pdHMubWFwKCh1KSA9PiBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHUpKTtcclxuXHJcbiAgICBjb25zdCBidWlsdCA9IHt9O1xyXG4gICAgY29uc3QgYWNjdW11bGF0ZWQgPSB7fTtcclxuICAgIGNvbnN0IHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XHJcbiAgICBsZXQgbGFzdFVuaXQ7XHJcblxyXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cyQxKSB7XHJcbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcclxuICAgICAgICBsYXN0VW5pdCA9IGs7XHJcblxyXG4gICAgICAgIGxldCBvd24gPSAwO1xyXG5cclxuICAgICAgICAvLyBhbnl0aGluZyB3ZSBoYXZlbid0IGJvaWxlZCBkb3duIHlldCBzaG91bGQgZ2V0IGJvaWxlZCB0byB0aGlzIHVuaXRcclxuICAgICAgICBmb3IgKGNvbnN0IGFrIGluIGFjY3VtdWxhdGVkKSB7XHJcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xyXG4gICAgICAgICAgYWNjdW11bGF0ZWRbYWtdID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBsdXMgYW55dGhpbmcgdGhhdCdzIGFscmVhZHkgaW4gdGhpcyB1bml0XHJcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XHJcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLnRydW5jKG93bik7XHJcbiAgICAgICAgYnVpbHRba10gPSBpO1xyXG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gKG93biAqIDEwMDAgLSBpICogMTAwMCkgLyAxMDAwO1xyXG5cclxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIGZ1cnRoZXIgZG93biB0aGUgY2hhaW4gdGhhdCBzaG91bGQgYmUgcm9sbGVkIHVwIGluIHRvIHRoaXNcclxuICAgICAgICBmb3IgKGNvbnN0IGRvd24gaW4gdmFscykge1xyXG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cyQxLmluZGV4T2YoZG93bikgPiBvcmRlcmVkVW5pdHMkMS5pbmRleE9mKGspKSB7XHJcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcclxuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XHJcbiAgICAvLyBsYXN0VW5pdCBtdXN0IGJlIGRlZmluZWQgc2luY2UgdW5pdHMgaXMgbm90IGVtcHR5XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY2N1bXVsYXRlZCkge1xyXG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xyXG4gICAgICAgIGJ1aWx0W2xhc3RVbml0XVxyXG4gICAgICAgICAgICs9IGtleSA9PT0gbGFzdFVuaXQgPyBhY2N1bXVsYXRlZFtrZXldIDogYWNjdW11bGF0ZWRba2V5XSAvIHRoaXMubWF0cml4W2xhc3RVbml0XVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IGJ1aWx0IH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBuZWdhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBuZWdhdGVkID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XHJcbiAgICAgIG5lZ2F0ZWRba10gPSB0aGlzLnZhbHVlc1trXSA9PT0gMCA/IDAgOiAtdGhpcy52YWx1ZXNba107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogbmVnYXRlZCB9LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHllYXJzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgeWVhcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMueWVhcnMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHF1YXJ0ZXJzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgcXVhcnRlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1vbnRocy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1vbnRocygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5tb250aHMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHdlZWtzXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy53ZWVrcyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGF5cy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGRheXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaG91cnMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBob3VycygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5ob3VycyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbWludXRlcy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1pbnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWludXRlcyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgc2Vjb25kcy5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgc2Vjb25kcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1pbGxpc2Vjb25kcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taWxsaXNlY29uZHMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIER1cmF0aW9uIGlzIGludmFsaWQuIEludmFsaWQgZHVyYXRpb25zIGFyZSByZXR1cm5lZCBieSBkaWZmIG9wZXJhdGlvbnNcclxuICAgICogb24gaW52YWxpZCBEYXRlVGltZXMgb3IgSW50ZXJ2YWxzLlxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEVxdWFsaXR5IGNoZWNrXHJcbiAgICAqIFR3byBEdXJhdGlvbnMgYXJlIGVxdWFsIGlmZiB0aGV5IGhhdmUgdGhlIHNhbWUgdW5pdHMgYW5kIHRoZSBzYW1lIHZhbHVlcyBmb3IgZWFjaCB1bml0LlxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBlcXVhbHMob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHtcclxuICAgICAgLy8gQ29uc2lkZXIgMCBhbmQgdW5kZWZpbmVkIGFzIGVxdWFsXHJcbiAgICAgIGlmICh2MSA9PT0gdW5kZWZpbmVkIHx8IHYxID09PSAwKSByZXR1cm4gdjIgPT09IHVuZGVmaW5lZCB8fCB2MiA9PT0gMDtcclxuICAgICAgcmV0dXJuIHYxID09PSB2MjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzJDEpIHtcclxuICAgICAgaWYgKCFlcSh0aGlzLnZhbHVlc1t1XSwgb3RoZXIudmFsdWVzW3VdKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBJTlZBTElEJDEgPSAnSW52YWxpZCBJbnRlcnZhbCc7XHJcblxyXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xyXG4gIGlmICghc3RhcnQgfHwgIXN0YXJ0LmlzVmFsaWQpIHtcclxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKCdtaXNzaW5nIG9yIGludmFsaWQgc3RhcnQnKTtcclxuICB9IGlmICghZW5kIHx8ICFlbmQuaXNWYWxpZCkge1xyXG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoJ21pc3Npbmcgb3IgaW52YWxpZCBlbmQnKTtcclxuICB9IGlmIChlbmQgPCBzdGFydCkge1xyXG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXHJcbiAgICAgICdlbmQgYmVmb3JlIHN0YXJ0JyxcclxuICAgICAgYFRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSR7c3RhcnQudG9JU08oKX0gYW5kIGVuZD0ke2VuZC50b0lTTygpfWAsXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBBbiBJbnRlcnZhbCBvYmplY3QgcmVwcmVzZW50cyBhIGhhbGYtb3BlbiBpbnRlcnZhbCBvZiB0aW1lLCB3aGVyZSBlYWNoIGVuZHBvaW50IGlzIGEge0BsaW5rIERhdGVUaW1lfS4gQ29uY2VwdHVhbGx5LCBpdCdzIGEgY29udGFpbmVyIGZvciB0aG9zZSB0d28gZW5kcG9pbnRzLCBhY2NvbXBhbmllZCBieSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgY29tcGFyaW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXHJcbiAgKlxyXG4gICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBJbnRlcnZhbDpcclxuICAqXHJcbiAgKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYW4gSW50ZXJ2YWwsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZnJvbURhdGVUaW1lc30sIHtAbGluayBJbnRlcnZhbCNhZnRlcn0sIHtAbGluayBJbnRlcnZhbCNiZWZvcmV9LCBvciB7QGxpbmsgSW50ZXJ2YWwjZnJvbUlTT30uXHJcbiAgKiAqICoqQWNjZXNzb3JzKiogVXNlIHtAbGluayBJbnRlcnZhbCNzdGFydH0gYW5kIHtAbGluayBJbnRlcnZhbCNlbmR9IHRvIGdldCB0aGUgc3RhcnQgYW5kIGVuZC5cclxuICAqICogKipJbnRlcnJvZ2F0aW9uKiogVG8gYW5hbHl6ZSB0aGUgSW50ZXJ2YWwsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjY291bnR9LCB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSwge0BsaW5rIEludGVydmFsI2hhc1NhbWV9LCB7QGxpbmsgSW50ZXJ2YWwjY29udGFpbnN9LCB7QGxpbmsgSW50ZXJ2YWwjaXNBZnRlcn0sIG9yIHtAbGluayBJbnRlcnZhbCNpc0JlZm9yZX0uXHJcbiAgKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgb3RoZXIgSW50ZXJ2YWxzIG91dCBvZiB0aGlzIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNzZXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRBdH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEJ5fSwge0BsaW5rIEludGVydmFsI2RpdmlkZUVxdWFsbHl9LCB7QGxpbmsgSW50ZXJ2YWwjbWVyZ2V9LCB7QGxpbmsgSW50ZXJ2YWwjeG9yfSwge0BsaW5rIEludGVydmFsI3VuaW9ufSwge0BsaW5rIEludGVydmFsI2ludGVyc2VjdGlvbn0sIG9yIHtAbGluayBJbnRlcnZhbCNkaWZmZXJlbmNlfS5cclxuICAqICogKipDb21wYXJpc29uKiogVG8gY29tcGFyZSB0aGlzIEludGVydmFsIHRvIGFub3RoZXIgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI2VxdWFsc30sIHtAbGluayBJbnRlcnZhbCNvdmVybGFwc30sIHtAbGluayBJbnRlcnZhbCNhYnV0c1N0YXJ0fSwge0BsaW5rIEludGVydmFsI2FidXRzRW5kfSwge0BsaW5rIEludGVydmFsI2VuZ3VsZnN9XHJcbiAgKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgSW50ZXJ2YWwgaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgSW50ZXJ2YWwjdG9TdHJpbmd9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU099LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09EYXRlfSwge0BsaW5rIEludGVydmFsI3RvSVNPVGltZX0sIHtAbGluayBJbnRlcnZhbCN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgSW50ZXJ2YWwjdG9EdXJhdGlvbn0uXHJcbiAgKi9cclxuY2xhc3MgSW50ZXJ2YWwge1xyXG4gIC8qKlxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcclxuICAgIGlmICghcmVhc29uKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBJbnRlcnZhbCBpcyBpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcclxuXHJcbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7IGludmFsaWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcclxuICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XHJcbiAgICBjb25zdCBidWlsdFN0YXJ0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XHJcbiAgICBjb25zdCBidWlsdEVuZCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcclxuICAgICAgICBzdGFydDogYnVpbHRTdGFydCxcclxuICAgICAgICBlbmQ6IGJ1aWx0RW5kLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZGF0ZUVycm9yO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzdGF0aWMgYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IGR0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBiZWZvcmUoZW5kLCBkdXJhdGlvbikge1xyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcbiAgICBjb25zdCBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBJU08gODYwMSBzdHJpbmcuXHJcbiAgICAqIEFjY2VwdHMgYDxzdGFydD4vPGVuZD5gLCBgPHN0YXJ0Pi88ZHVyYXRpb24+YCwgYW5kIGA8ZHVyYXRpb24+LzxlbmQ+YCBmb3JtYXRzLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nIHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBvcHRpb25zIHRvIHBhc3Mge0BsaW5rIERhdGVUaW1lI2Zyb21JU099IGFuZCBvcHRpb25hbGx5IHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfVxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XHJcbiAgICBjb25zdCBbcywgZV0gPSAodGV4dCB8fCAnJykuc3BsaXQoJy8nLCAyKTtcclxuICAgIGlmIChzICYmIGUpIHtcclxuICAgICAgbGV0IHN0YXJ0OyBsZXRcclxuICAgICAgICBzdGFydElzVmFsaWQ7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc3RhcnQgPSBEYXRlVGltZS5mcm9tSVNPKHMsIG9wdHMpO1xyXG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IHN0YXJ0LmlzVmFsaWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzdGFydElzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVuZDsgbGV0XHJcbiAgICAgICAgZW5kSXNWYWxpZDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBlbmQgPSBEYXRlVGltZS5mcm9tSVNPKGUsIG9wdHMpO1xyXG4gICAgICAgIGVuZElzVmFsaWQgPSBlbmQuaXNWYWxpZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGVuZElzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCAmJiBlbmRJc1ZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGFydElzVmFsaWQpIHtcclxuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpO1xyXG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmFmdGVyKHN0YXJ0LCBkdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChlbmRJc1ZhbGlkKSB7XHJcbiAgICAgICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhzLCBvcHRzKTtcclxuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBkdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoJ3VucGFyc2FibGUnLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBJbnRlcnZhbC4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb1xyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNJbnRlcnZhbChvKSB7XHJcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwpIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxyXG4gICAgKiBAdHlwZSB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIGdldCBzdGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnMgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGVuZCBvZiB0aGUgSW50ZXJ2YWxcclxuICAgICogQHR5cGUge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBnZXQgZW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYXQgbGVhc3QgaXRzIHN0YXJ0LCBtZWFuaW5nIHRoYXQgdGhlIEludGVydmFsIGlzbid0ICdiYWNrd2FyZHMnLlxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gcmV0dXJuIHRoZSBsZW5ndGggaW4uXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgbGVuZ3RoKHVuaXQgPSAnbWlsbGlzZWNvbmRzJykge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9EdXJhdGlvbiguLi5bdW5pdF0pLmdldCh1bml0KSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBjb3VudCBvZiBtaW51dGVzLCBob3VycywgZGF5cywgbW9udGhzLCBvciB5ZWFycyBpbmNsdWRlZCBpbiB0aGUgSW50ZXJ2YWwsIGV2ZW4gaW4gcGFydC5cclxuICAgICogVW5saWtlIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9IHRoaXMgY291bnRzIHNlY3Rpb25zIG9mIHRoZSBjYWxlbmRhciwgbm90IHBlcmlvZHMgb2YgdGltZSwgZS5nLiBzcGVjaWZ5aW5nICdkYXknXHJcbiAgICAqIGFza3MgJ3doYXQgZGF0ZXMgYXJlIGluY2x1ZGVkIGluIHRoaXMgaW50ZXJ2YWw/Jywgbm90ICdob3cgbWFueSBkYXlzIGxvbmcgaXMgdGhpcyBpbnRlcnZhbD8nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdD0nbWlsbGlzZWNvbmRzJ10gLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGNvdW50KHVuaXQgPSAnbWlsbGlzZWNvbmRzJykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XHJcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuc3RhcnRPZih1bml0KTtcclxuICAgIGNvbnN0IGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpKSArIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBhbmQgZW5kIGFyZSBib3RoIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgaGFzU2FtZSh1bml0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5lLm1pbnVzKDEpLmhhc1NhbWUodGhpcy5zLCB1bml0KSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgaXNCZWZvcmUoZGF0ZVRpbWUpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgY29udGFpbnMoZGF0ZVRpbWUpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHNldCh7IHN0YXJ0LCBlbmQgfSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xyXG4gICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3BsaXRBdCguLi5kYXRlVGltZXMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XHJcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcclxuICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxyXG4gICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxyXG4gICAgICAuc29ydCgpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgbGV0IHsgcyB9ID0gdGhpcztcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xyXG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmU7XHJcbiAgICAgIGNvbnN0IG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XHJcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcclxuICAgICAgcyA9IG5leHQ7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXHJcbiAgICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzcGxpdEJ5KGR1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhZHVyLmlzVmFsaWQgfHwgZHVyLmFzKCdtaWxsaXNlY29uZHMnKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHsgcyB9ID0gdGhpcztcclxuICAgIGxldCBpZHggPSAxO1xyXG4gICAgbGV0IG5leHQ7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcclxuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XHJcbiAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XHJcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcclxuICAgICAgcyA9IG5leHQ7XHJcbiAgICAgIGlkeCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzbWFsbGVyIGludGVydmFscy5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mUGFydHMgLSBUaGUgbnVtYmVyIG9mIEludGVydmFscyB0byBkaXZpZGUgdGhlIEludGVydmFsIGludG8uXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBkaXZpZGVFcXVhbGx5KG51bWJlck9mUGFydHMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gdGhpcy5zcGxpdEJ5KHRoaXMubGVuZ3RoKCkgLyBudW1iZXJPZlBhcnRzKS5zbGljZSgwLCBudW1iZXJPZlBhcnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIG92ZXJsYXBzIHdpdGggdGhlIHNwZWNpZmllZCBJbnRlcnZhbFxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBvdmVybGFwcyhvdGhlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgYWJ1dHNTdGFydChvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgYWJ1dHNFbmQob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGVuZ3VsZnMob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBlcXVhbHMob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxyXG4gICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxyXG4gICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucztcclxuICAgIGNvbnN0IGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcclxuXHJcbiAgICBpZiAocyA+PSBlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cclxuICAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHVuaW9uKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnM7XHJcbiAgICBjb25zdCBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLlxyXG4gICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLlxyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtZXJnZShpbnRlcnZhbHMpIHtcclxuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnMgLSBiLnMpXHJcbiAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLCBpdGVtXTtcclxuICAgICAgICAgIH0gaWYgKGN1cnJlbnQub3ZlcmxhcHMoaXRlbSkgfHwgY3VycmVudC5hYnV0c1N0YXJ0KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIFtzb2Zhci5jb25jYXQoW2N1cnJlbnRdKSwgaXRlbV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbW10sIG51bGxdLFxyXG4gICAgICApO1xyXG4gICAgaWYgKGZpbmFsKSB7XHJcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyB4b3IoaW50ZXJ2YWxzKSB7XHJcbiAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgbGV0IGN1cnJlbnRDb3VudCA9IDA7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBjb25zdCBlbmRzID0gaW50ZXJ2YWxzLm1hcCgoaSkgPT4gW1xyXG4gICAgICB7IHRpbWU6IGkucywgdHlwZTogJ3MnIH0sXHJcbiAgICAgIHsgdGltZTogaS5lLCB0eXBlOiAnZScgfSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKTtcclxuICAgIGNvbnN0IGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xyXG5cclxuICAgIGZvciAoY29uc3QgaSBvZiBhcnIpIHtcclxuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gJ3MnID8gMSA6IC0xO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHN0YXJ0ID0gaS50aW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzdGFydCAmJiArc3RhcnQgIT09ICtpLnRpbWUpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBpLnRpbWUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cclxuICAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBkaWZmZXJlbmNlKC4uLmludGVydmFscykge1xyXG4gICAgcmV0dXJuIEludGVydmFsLnhvcihbdGhpc10uY29uY2F0KGludGVydmFscykpXHJcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxyXG4gICAgICAuZmlsdGVyKChpKSA9PiBpICYmICFpLmlzRW1wdHkoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcclxuICAgIHJldHVybiBgWyR7dGhpcy5zLnRvSVNPKCl9IOKAkyAke3RoaXMuZS50b0lTTygpfSlgO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUjdG9JU099XHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU08ob3B0cykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPKG9wdHMpfS8ke3RoaXMuZS50b0lTTyhvcHRzKX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBkYXRlIG9mIHRoaXMgSW50ZXJ2YWwuXHJcbiAgICAqIFRoZSB0aW1lIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT0RhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcclxuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU09EYXRlKCl9LyR7dGhpcy5lLnRvSVNPRGF0ZSgpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgb2YgdGhpcyBJbnRlcnZhbC5cclxuICAgICogVGhlIGRhdGUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPVGltZShvcHRzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcclxuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU09UaW1lKG9wdHMpfS8ke3RoaXMuZS50b0lTT1RpbWUob3B0cyl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0gZm9yIGRldGFpbHMuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0Zvcm1hdChkYXRlRm9ybWF0LCB7IHNlcGFyYXRvciA9ICcg4oCTICcgfSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcclxuICAgIHJldHVybiBgJHt0aGlzLnMudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9JHtzZXBhcmF0b3J9JHt0aGlzLmUudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIHRpbWUgc3Bhbm5lZCBieSB0aGlzIGludGVydmFsLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA4ODQ4OTI1NyB9XHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ2RheXMnKS50b09iamVjdCgpIC8vPT4geyBkYXlzOiAxLjAyNDE4MTIxNTI3Nzc3NzggfVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LjgyMDk1IH1cclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LCBzZWNvbmRzOiA0OS4yNTcgfVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgc2Vjb25kczogODg0ODkuMjU3IH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHRvRHVyYXRpb24odW5pdCwgb3B0cykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQodGhpcy5pbnZhbGlkUmVhc29uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmUuZGlmZih0aGlzLnMsIHVuaXQsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcclxuICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxyXG4gICAgKi9cclxuICBtYXBFbmRwb2ludHMobWFwRm4pIHtcclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKG1hcEZuKHRoaXMucyksIG1hcEZuKHRoaXMuZSkpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gICovXHJcbmNsYXNzIEluZm8ge1xyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGhhc0RTVCh6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmUpIHtcclxuICAgIGNvbnN0IHByb3RvID0gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZSh6b25lKS5zZXQoeyBtb250aDogMTIgfSk7XHJcblxyXG4gICAgcmV0dXJuICF6b25lLmlzVW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHsgbW9udGg6IDYgfSkub2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBpcyBhIHZhbGlkIElBTkEgc3BlY2lmaWVyLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFpvbmUgdG8gY2hlY2tcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzVmFsaWRJQU5BWm9uZSh6b25lKSB7XHJcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFpvbmUoem9uZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ29udmVydHMgdGhlIGlucHV0IGludG8gYSB7QGxpbmsgWm9uZX0gaW5zdGFuY2UuXHJcbiAgICAqXHJcbiAgICAqICogSWYgYGlucHV0YCBpcyBhbHJlYWR5IGEgWm9uZSBpbnN0YW5jZSwgaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxyXG4gICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhIHZhbGlkIHRpbWUgem9uZSBuYW1lLCBhIFpvbmUgaW5zdGFuY2VcclxuICAgICogICB3aXRoIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cclxuICAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIHRoYXQgZG9lc24ndCByZWZlciB0byBhIGtub3duIHRpbWUgem9uZSwgYSBab25lXHJcbiAgICAqICAgaW5zdGFuY2Ugd2l0aCB7QGxpbmsgWm9uZSNpc1ZhbGlkfSA9PSBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogKiBJZiBgaW5wdXQgaXMgYSBudW1iZXIsIGEgWm9uZSBpbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgZml4ZWQgb2Zmc2V0XHJcbiAgICAqICAgaW4gbWludXRlcyBpcyByZXR1cm5lZC5cclxuICAgICogKiBJZiBgaW5wdXRgIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgdGhlIGRlZmF1bHQgem9uZSBpcyByZXR1cm5lZC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZXxudW1iZXJ9IFtpbnB1dF0gLSB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkXHJcbiAgICAqIEByZXR1cm4ge1pvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBub3JtYWxpemVab25lKGlucHV0KSB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIG1vbnRoIG5hbWVzLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtb250aHMoXHJcbiAgICBsZW5ndGggPSAnbG9uZycsXHJcbiAgICB7XHJcbiAgICAgIGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gJ2dyZWdvcnknLFxyXG4gICAgfSA9IHt9LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IG1vbnRoIG5hbWVzLlxyXG4gICAgKiBGb3JtYXQgbW9udGhzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgbW9udGhzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgZGF5IG9mIHRoZSBtb250aC4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcclxuICAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxyXG4gICAgKiBTZWUge0BsaW5rIEluZm8jbW9udGhzfVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgbW9udGhzRm9ybWF0KFxyXG4gICAgbGVuZ3RoID0gJ2xvbmcnLFxyXG4gICAge1xyXG4gICAgICBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9ICdncmVnb3J5JyxcclxuICAgIH0gPSB7fSxcclxuICApIHtcclxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgd2Vla2RheSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcclxuICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIHdlZWtkYXlzKGxlbmd0aCA9ICdsb25nJywgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fSkge1xyXG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCB3ZWVrIG5hbWVzLlxyXG4gICAgKiBGb3JtYXQgd2Vla2RheXMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSB3ZWVrZGF5cyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gbW9yZSBkYXRlIGluZm9ybWF0aW9uLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxyXG4gICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXHJcbiAgICAqIFNlZSB7QGxpbmsgSW5mbyN3ZWVrZGF5c31cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyB3ZWVrZGF5c0Zvcm1hdChcclxuICAgIGxlbmd0aCA9ICdsb25nJyxcclxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIG1lcmlkaWVtcyh7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XHJcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXHJcbiAgICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBlcmFzKGxlbmd0aCA9ICdzaG9ydCcsIHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcclxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgJ2dyZWdvcnknKS5lcmFzKGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXHJcbiAgICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcgc3VwcG9ydCBpcyBub3QgYXZhaWxhYmxlLiBVc2UgdGhpcyBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IGlmIHRoYXQncyB0aGUgY2FzZS5cclxuICAgICogS2V5czpcclxuICAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXHJcbiAgICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlIH1cclxuICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZmVhdHVyZXMoKSB7XHJcbiAgICByZXR1cm4geyByZWxhdGl2ZTogaGFzUmVsYXRpdmUoKSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xyXG4gIGNvbnN0IHV0Y0RheVN0YXJ0ID0gKGR0KSA9PiBkdC50b1VUQygwLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xyXG4gIGNvbnN0IG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoRHVyYXRpb24uZnJvbU1pbGxpcyhtcykuYXMoJ2RheXMnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XHJcbiAgY29uc3QgZGlmZmVycyA9IFtcclxuICAgIFsneWVhcnMnLCAoYSwgYikgPT4gYi55ZWFyIC0gYS55ZWFyXSxcclxuICAgIFsncXVhcnRlcnMnLCAoYSwgYikgPT4gYi5xdWFydGVyIC0gYS5xdWFydGVyXSxcclxuICAgIFsnbW9udGhzJywgKGEsIGIpID0+IGIubW9udGggLSBhLm1vbnRoICsgKGIueWVhciAtIGEueWVhcikgKiAxMl0sXHJcbiAgICBbXHJcbiAgICAgICd3ZWVrcycsXHJcbiAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5cyA9IGRheURpZmYoYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIChkYXlzIC0gKGRheXMgJSA3KSkgLyA3O1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFsnZGF5cycsIGRheURpZmZdLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSB7fTtcclxuICBsZXQgbG93ZXN0T3JkZXI7IGxldFxyXG4gICAgaGlnaFdhdGVyO1xyXG5cclxuICBmb3IgKGNvbnN0IFt1bml0LCBkaWZmZXJdIG9mIGRpZmZlcnMpIHtcclxuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcclxuICAgICAgbG93ZXN0T3JkZXIgPSB1bml0O1xyXG5cclxuICAgICAgbGV0IGRlbHRhID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xyXG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFt1bml0XTogZGVsdGEgfSk7XHJcblxyXG4gICAgICBpZiAoaGlnaFdhdGVyID4gbGF0ZXIpIHtcclxuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGx1cyh7IFt1bml0XTogZGVsdGEgLSAxIH0pO1xyXG4gICAgICAgIGRlbHRhIC09IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHRzW3VuaXRdID0gZGVsdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpZmYoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBvcHRzKSB7XHJcbiAgbGV0IFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKTtcclxuXHJcbiAgY29uc3QgcmVtYWluaW5nTWlsbGlzID0gbGF0ZXIgLSBjdXJzb3I7XHJcblxyXG4gIGNvbnN0IGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihcclxuICAgICh1KSA9PiBbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXS5pbmRleE9mKHUpID49IDAsXHJcbiAgKTtcclxuXHJcbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcclxuICAgIGlmIChoaWdoV2F0ZXIgPCBsYXRlcikge1xyXG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFtsb3dlc3RPcmRlcl06IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XHJcbiAgICAgIHJlc3VsdHNbbG93ZXN0T3JkZXJdID0gKHJlc3VsdHNbbG93ZXN0T3JkZXJdIHx8IDApICsgcmVtYWluaW5nTWlsbGlzIC8gKGhpZ2hXYXRlciAtIGN1cnNvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkdXJhdGlvbiA9IER1cmF0aW9uLmZyb21PYmplY3QocmVzdWx0cywgb3B0cyk7XHJcblxyXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKVxyXG4gICAgICAuc2hpZnRUbyguLi5sb3dlck9yZGVyVW5pdHMpXHJcbiAgICAgIC5wbHVzKGR1cmF0aW9uKTtcclxuICB9XHJcbiAgcmV0dXJuIGR1cmF0aW9uO1xyXG59XHJcblxyXG5jb25zdCBudW1iZXJpbmdTeXN0ZW1zID0ge1xyXG4gIGFyYWI6ICdbXFx1MDY2MC1cXHUwNjY5XScsXHJcbiAgYXJhYmV4dDogJ1tcXHUwNkYwLVxcdTA2RjldJyxcclxuICBiYWxpOiAnW1xcdTFCNTAtXFx1MUI1OV0nLFxyXG4gIGJlbmc6ICdbXFx1MDlFNi1cXHUwOUVGXScsXHJcbiAgZGV2YTogJ1tcXHUwOTY2LVxcdTA5NkZdJyxcclxuICBmdWxsd2lkZTogJ1tcXHVGRjEwLVxcdUZGMTldJyxcclxuICBndWpyOiAnW1xcdTBBRTYtXFx1MEFFRl0nLFxyXG4gIGhhbmlkZWM6ICdb44CHfOS4gHzkuox85LiJfOWbm3zkupR85YWtfOS4g3zlhat85LmdXScsXHJcbiAga2htcjogJ1tcXHUxN0UwLVxcdTE3RTldJyxcclxuICBrbmRhOiAnW1xcdTBDRTYtXFx1MENFRl0nLFxyXG4gIGxhb286ICdbXFx1MEVEMC1cXHUwRUQ5XScsXHJcbiAgbGltYjogJ1tcXHUxOTQ2LVxcdTE5NEZdJyxcclxuICBtbHltOiAnW1xcdTBENjYtXFx1MEQ2Rl0nLFxyXG4gIG1vbmc6ICdbXFx1MTgxMC1cXHUxODE5XScsXHJcbiAgbXltcjogJ1tcXHUxMDQwLVxcdTEwNDldJyxcclxuICBvcnlhOiAnW1xcdTBCNjYtXFx1MEI2Rl0nLFxyXG4gIHRhbWxkZWM6ICdbXFx1MEJFNi1cXHUwQkVGXScsXHJcbiAgdGVsdTogJ1tcXHUwQzY2LVxcdTBDNkZdJyxcclxuICB0aGFpOiAnW1xcdTBFNTAtXFx1MEU1OV0nLFxyXG4gIHRpYnQ6ICdbXFx1MEYyMC1cXHUwRjI5XScsXHJcbiAgbGF0bjogJ1xcXFxkJyxcclxufTtcclxuXHJcbmNvbnN0IG51bWJlcmluZ1N5c3RlbXNVVEYxNiA9IHtcclxuICBhcmFiOiBbMTYzMiwgMTY0MV0sXHJcbiAgYXJhYmV4dDogWzE3NzYsIDE3ODVdLFxyXG4gIGJhbGk6IFs2OTkyLCA3MDAxXSxcclxuICBiZW5nOiBbMjUzNCwgMjU0M10sXHJcbiAgZGV2YTogWzI0MDYsIDI0MTVdLFxyXG4gIGZ1bGx3aWRlOiBbNjUyOTYsIDY1MzAzXSxcclxuICBndWpyOiBbMjc5MCwgMjc5OV0sXHJcbiAga2htcjogWzYxMTIsIDYxMjFdLFxyXG4gIGtuZGE6IFszMzAyLCAzMzExXSxcclxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXHJcbiAgbGltYjogWzY0NzAsIDY0NzldLFxyXG4gIG1seW06IFszNDMwLCAzNDM5XSxcclxuICBtb25nOiBbNjE2MCwgNjE2OV0sXHJcbiAgbXltcjogWzQxNjAsIDQxNjldLFxyXG4gIG9yeWE6IFsyOTE4LCAyOTI3XSxcclxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXHJcbiAgdGVsdTogWzMxNzQsIDMxODNdLFxyXG4gIHRoYWk6IFszNjY0LCAzNjczXSxcclxuICB0aWJ0OiBbMzg3MiwgMzg4MV0sXHJcbn07XHJcblxyXG5jb25zdCBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csICcnKS5zcGxpdCgnJyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcclxuICBsZXQgdmFsdWUgPSBwYXJzZUludChzdHIsIDEwKTtcclxuICBpZiAoaXNOYU4odmFsdWUpKSB7XHJcbiAgICB2YWx1ZSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG5cclxuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcclxuICAgICAgICB2YWx1ZSArPSBoYW5pZGVjQ2hhcnMuaW5kZXhPZihzdHJbaV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xyXG4gICAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IG51bWJlcmluZ1N5c3RlbXNVVEYxNltrZXldO1xyXG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaWdpdFJlZ2V4KHsgbnVtYmVyaW5nU3lzdGVtIH0sIGFwcGVuZCA9ICcnKSB7XHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7bnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgJ2xhdG4nXX0ke2FwcGVuZH1gKTtcclxufVxyXG5cclxuY29uc3QgTUlTU0lOR19GVFAgPSAnbWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydCc7XHJcblxyXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcclxuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHBvc3QocGFyc2VEaWdpdHMocykpIH07XHJcbn1cclxuXHJcbmNvbnN0IE5CU1AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XHJcbmNvbnN0IHNwYWNlT3JOQlNQID0gYFsgJHtOQlNQfV1gO1xyXG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsICdnJyk7XHJcblxyXG5mdW5jdGlvbiBmaXhMaXN0UmVnZXgocykge1xyXG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxyXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcclxuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuPycpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xyXG4gIHJldHVybiBzXHJcbiAgICAucmVwbGFjZSgvXFwuL2csICcnKSAvLyBpZ25vcmUgZG90cyB0aGF0IHdlcmUgbWFkZSBvcHRpb25hbFxyXG4gICAgLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsICcgJykgLy8gaW50ZXJjaGFuZ2Ugc3BhY2UgYW5kIG5ic3BcclxuICAgIC50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XHJcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oJ3wnKSksXHJcbiAgICBkZXNlcjogKFtzXSkgPT4gc3RyaW5ncy5maW5kSW5kZXgoKGkpID0+IHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpID09PSBzdHJpcEluc2Vuc2l0aXZpdGllcyhpKSkgKyBzdGFydEluZGV4LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZnNldChyZWdleCwgZ3JvdXBzKSB7XHJcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoWywgaCwgbV0pID0+IHNpZ25lZE9mZnNldChoLCBtKSwgZ3JvdXBzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xyXG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xyXG4gIGNvbnN0IG9uZSA9IGRpZ2l0UmVnZXgobG9jKTtcclxuICBjb25zdCB0d28gPSBkaWdpdFJlZ2V4KGxvYywgJ3syfScpO1xyXG4gIGNvbnN0IHRocmVlID0gZGlnaXRSZWdleChsb2MsICd7M30nKTtcclxuICBjb25zdCBmb3VyID0gZGlnaXRSZWdleChsb2MsICd7NH0nKTtcclxuICBjb25zdCBzaXggPSBkaWdpdFJlZ2V4KGxvYywgJ3s2fScpO1xyXG4gIGNvbnN0IG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsICd7MSwyfScpO1xyXG4gIGNvbnN0IG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgJ3sxLDN9Jyk7XHJcbiAgY29uc3Qgb25lVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgJ3sxLDZ9Jyk7XHJcbiAgY29uc3Qgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsICd7MSw5fScpO1xyXG4gIGNvbnN0IHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCAnezIsNH0nKTtcclxuICBjb25zdCBmb3VyVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgJ3s0LDZ9Jyk7XHJcbiAgY29uc3QgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pO1xyXG4gIGNvbnN0IHVuaXRhdGUgPSAodCkgPT4ge1xyXG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcclxuICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHQudmFsKSB7XHJcbiAgICAgIC8vIGVyYVxyXG4gICAgICBjYXNlICdHJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoJ3Nob3J0JywgZmFsc2UpLCAwKTtcclxuICAgICAgY2FzZSAnR0cnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcygnbG9uZycsIGZhbHNlKSwgMCk7XHJcbiAgICAgICAgLy8geWVhcnNcclxuICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xyXG4gICAgICBjYXNlICd5eSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XHJcbiAgICAgIGNhc2UgJ3l5eXknOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xyXG4gICAgICBjYXNlICd5eXl5eSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcclxuICAgICAgY2FzZSAneXl5eXl5JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChzaXgpO1xyXG4gICAgICAgIC8vIG1vbnRoc1xyXG4gICAgICBjYXNlICdNJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ01NJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdNTU0nOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCdzaG9ydCcsIHRydWUsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ01NTU0nOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCdsb25nJywgdHJ1ZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdMTCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnTExMJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygnc2hvcnQnLCBmYWxzZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnTExMTCc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ2xvbmcnLCBmYWxzZSwgZmFsc2UpLCAxKTtcclxuICAgICAgICAvLyBkYXRlc1xyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICAgIC8vIG9yZGluYWxzXHJcbiAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xyXG4gICAgICBjYXNlICdvb28nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcclxuICAgICAgICAvLyB0aW1lXHJcbiAgICAgIGNhc2UgJ0hIJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdIJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ2hoJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdoJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdtJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAncXEnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnc3MnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xyXG4gICAgICBjYXNlICdTU1MnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcclxuICAgICAgY2FzZSAndSc6XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xyXG4gICAgICBjYXNlICd1dSc6XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ3V1dSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcclxuICAgICAgICAvLyBtZXJpZGllbVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTtcclxuICAgICAgICAvLyB3ZWVrWWVhciAoaylcclxuICAgICAgY2FzZSAna2trayc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XHJcbiAgICAgIGNhc2UgJ2trJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcclxuICAgICAgICAvLyB3ZWVrTnVtYmVyIChXKVxyXG4gICAgICBjYXNlICdXJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ1dXJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICAgIC8vIHdlZWtkYXlzXHJcbiAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xyXG4gICAgICBjYXNlICdFRUUnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoJ3Nob3J0JywgZmFsc2UsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ0VFRUUnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoJ2xvbmcnLCBmYWxzZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnY2NjJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdzaG9ydCcsIHRydWUsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ2NjY2MnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoJ2xvbmcnLCB0cnVlLCBmYWxzZSksIDEpO1xyXG4gICAgICAgIC8vIG9mZnNldC96b25lXHJcbiAgICAgIGNhc2UgJ1onOlxyXG4gICAgICBjYXNlICdaWic6XHJcbiAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoPzo6KCR7dHdvLnNvdXJjZX0pKT9gKSwgMik7XHJcbiAgICAgIGNhc2UgJ1paWic6XHJcbiAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoJHt0d28uc291cmNlfSk/YCksIDIpO1xyXG4gICAgICAgIC8vIHdlIGRvbid0IHN1cHBvcnQgWlpaWiAoUFNUKSBvciBaWlpaWiAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKSBpbiBwYXJzaW5nXHJcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXHJcbiAgICAgIGNhc2UgJ3onOlxyXG4gICAgICAgIHJldHVybiBzaW1wbGUoL1thLXpfKy0vXXsxLDI1Nn0/L2kpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XHJcbiAgICBpbnZhbGlkUmVhc29uOiBNSVNTSU5HX0ZUUCxcclxuICB9O1xyXG5cclxuICB1bml0LnRva2VuID0gdG9rZW47XHJcblxyXG4gIHJldHVybiB1bml0O1xyXG59XHJcblxyXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcclxuICB5ZWFyOiB7XHJcbiAgICAnMi1kaWdpdCc6ICd5eScsXHJcbiAgICBudW1lcmljOiAneXl5eXknLFxyXG4gIH0sXHJcbiAgbW9udGg6IHtcclxuICAgIG51bWVyaWM6ICdNJyxcclxuICAgICcyLWRpZ2l0JzogJ01NJyxcclxuICAgIHNob3J0OiAnTU1NJyxcclxuICAgIGxvbmc6ICdNTU1NJyxcclxuICB9LFxyXG4gIGRheToge1xyXG4gICAgbnVtZXJpYzogJ2QnLFxyXG4gICAgJzItZGlnaXQnOiAnZGQnLFxyXG4gIH0sXHJcbiAgd2Vla2RheToge1xyXG4gICAgc2hvcnQ6ICdFRUUnLFxyXG4gICAgbG9uZzogJ0VFRUUnLFxyXG4gIH0sXHJcbiAgZGF5cGVyaW9kOiAnYScsXHJcbiAgZGF5UGVyaW9kOiAnYScsXHJcbiAgaG91cjoge1xyXG4gICAgbnVtZXJpYzogJ2gnLFxyXG4gICAgJzItZGlnaXQnOiAnaGgnLFxyXG4gIH0sXHJcbiAgbWludXRlOiB7XHJcbiAgICBudW1lcmljOiAnbScsXHJcbiAgICAnMi1kaWdpdCc6ICdtbScsXHJcbiAgfSxcclxuICBzZWNvbmQ6IHtcclxuICAgIG51bWVyaWM6ICdzJyxcclxuICAgICcyLWRpZ2l0JzogJ3NzJyxcclxuICB9LFxyXG4gIHRpbWVab25lTmFtZToge1xyXG4gICAgbG9uZzogJ1paWlpaJyxcclxuICAgIHNob3J0OiAnWlpaJyxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGxvY2FsZSwgZm9ybWF0T3B0cykge1xyXG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHBhcnQ7XHJcblxyXG4gIGlmICh0eXBlID09PSAnbGl0ZXJhbCcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpdGVyYWw6IHRydWUsXHJcbiAgICAgIHZhbDogdmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3R5bGUgPSBmb3JtYXRPcHRzW3R5cGVdO1xyXG5cclxuICBsZXQgdmFsID0gcGFydFR5cGVTdHlsZVRvVG9rZW5WYWxbdHlwZV07XHJcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGl0ZXJhbDogZmFsc2UsXHJcbiAgICAgIHZhbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XHJcbiAgY29uc3QgcmUgPSB1bml0cy5tYXAoKHUpID0+IHUucmVnZXgpLnJlZHVjZSgoZiwgcikgPT4gYCR7Zn0oJHtyLnNvdXJjZX0pYCwgJycpO1xyXG4gIHJldHVybiBbYF4ke3JlfSRgLCB1bml0c107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcclxuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAobWF0Y2hlcykge1xyXG4gICAgY29uc3QgYWxsID0ge307XHJcbiAgICBsZXQgbWF0Y2hJbmRleCA9IDE7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gaGFuZGxlcnMpIHtcclxuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xyXG4gICAgICAgIGNvbnN0IGggPSBoYW5kbGVyc1tpXTtcclxuICAgICAgICBjb25zdCBncm91cHMgPSBoLmdyb3VwcyA/IGguZ3JvdXBzICsgMSA6IDE7XHJcbiAgICAgICAgaWYgKCFoLmxpdGVyYWwgJiYgaC50b2tlbikge1xyXG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoSW5kZXggKz0gZ3JvdXBzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW21hdGNoZXMsIGFsbF07XHJcbiAgfVxyXG4gIHJldHVybiBbbWF0Y2hlcywge31dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcclxuICBjb25zdCB0b0ZpZWxkID0gKHRva2VuKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgIHJldHVybiAnbWlsbGlzZWNvbmQnO1xyXG4gICAgICBjYXNlICdzJzpcclxuICAgICAgICByZXR1cm4gJ3NlY29uZCc7XHJcbiAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgIHJldHVybiAnbWludXRlJztcclxuICAgICAgY2FzZSAnaCc6XHJcbiAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgIHJldHVybiAnaG91cic7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgIHJldHVybiAnZGF5JztcclxuICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgcmV0dXJuICdvcmRpbmFsJztcclxuICAgICAgY2FzZSAnTCc6XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgIHJldHVybiAnbW9udGgnO1xyXG4gICAgICBjYXNlICd5JzpcclxuICAgICAgICByZXR1cm4gJ3llYXInO1xyXG4gICAgICBjYXNlICdFJzpcclxuICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgcmV0dXJuICd3ZWVrZGF5JztcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuICd3ZWVrTnVtYmVyJztcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgcmV0dXJuICd3ZWVrWWVhcic7XHJcbiAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgIHJldHVybiAncXVhcnRlcic7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHpvbmUgPSBudWxsO1xyXG4gIGxldCBzcGVjaWZpY09mZnNldDtcclxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHtcclxuICAgIHpvbmUgPSBJQU5BWm9uZS5jcmVhdGUobWF0Y2hlcy56KTtcclxuICB9XHJcblxyXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xyXG4gICAgaWYgKCF6b25lKSB7XHJcbiAgICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XHJcbiAgICB9XHJcbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcclxuICB9XHJcblxyXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xyXG4gICAgbWF0Y2hlcy5NID0gKG1hdGNoZXMucSAtIDEpICogMyArIDE7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuaCkpIHtcclxuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcclxuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xyXG4gICAgfSBlbHNlIGlmIChtYXRjaGVzLmggPT09IDEyICYmIG1hdGNoZXMuYSA9PT0gMCkge1xyXG4gICAgICBtYXRjaGVzLmggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcclxuICAgIG1hdGNoZXMueSA9IC1tYXRjaGVzLnk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMudSkpIHtcclxuICAgIG1hdGNoZXMuUyA9IHBhcnNlTWlsbGlzKG1hdGNoZXMudSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKChyLCBrKSA9PiB7XHJcbiAgICBjb25zdCBmID0gdG9GaWVsZChrKTtcclxuICAgIGlmIChmKSB7XHJcbiAgICAgIHJbZl0gPSBtYXRjaGVzW2tdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByO1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgcmV0dXJuIFt2YWxzLCB6b25lLCBzcGVjaWZpY09mZnNldF07XHJcbn1cclxuXHJcbmxldCBkdW1teURhdGVUaW1lQ2FjaGUgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHtcclxuICBpZiAoIWR1bW15RGF0ZVRpbWVDYWNoZSkge1xyXG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XHJcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbi52YWwpO1xyXG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpO1xyXG5cclxuICBpZiAodG9rZW5zID09IG51bGwgfHwgdG9rZW5zLmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4cGFuZE1hY3JvVG9rZW5zKHRva2VucywgbG9jYWxlKSB7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4udG9rZW5zLm1hcCgodCkgPT4gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHQsIGxvY2FsZSkpKTtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5mdW5jdGlvbiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcclxuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKTtcclxuICBjb25zdCB1bml0cyA9IHRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKTtcclxuICBjb25zdCBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoKHQpID0+IHQuaW52YWxpZFJlYXNvbik7XHJcblxyXG4gIGlmIChkaXNxdWFsaWZ5aW5nVW5pdCkge1xyXG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiB9O1xyXG4gIH1cclxuICBjb25zdCBbcmVnZXhTdHJpbmcsIGhhbmRsZXJzXSA9IGJ1aWxkUmVnZXgodW5pdHMpO1xyXG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHJlZ2V4U3RyaW5nLCAnaScpO1xyXG4gIGNvbnN0IFtyYXdNYXRjaGVzLCBtYXRjaGVzXSA9IG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XSA9IG1hdGNoZXNcclxuICAgID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKVxyXG4gICAgOiBbbnVsbCwgbnVsbCwgdW5kZWZpbmVkXTtcclxuICBpZiAoaGFzT3duUHJvcGVydHkobWF0Y2hlcywgJ2EnKSAmJiBoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCAnSCcpKSB7XHJcbiAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXHJcbiAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIixcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dCwgdG9rZW5zLCByZWdleCwgcmF3TWF0Y2hlcywgbWF0Y2hlcywgcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbixcclxuICB9ID0gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KTtcclxuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb25dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgbG9jYWxlKSB7XHJcbiAgaWYgKCFmb3JtYXRPcHRzKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcclxuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXREYXRlVGltZVBhcnRzKGdldER1bW15RGF0ZVRpbWUoKSk7XHJcbiAgcmV0dXJuIHBhcnRzLm1hcCgocCkgPT4gdG9rZW5Gb3JQYXJ0KHAsIGxvY2FsZSwgZm9ybWF0T3B0cykpO1xyXG59XHJcblxyXG5jb25zdCBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XTtcclxuY29uc3QgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XHJcblxyXG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xyXG4gIHJldHVybiBuZXcgSW52YWxpZChcclxuICAgICd1bml0IG91dCBvZiByYW5nZScsXHJcbiAgICBgeW91IHNwZWNpZmllZCAke3ZhbHVlfSAob2YgdHlwZSAke3R5cGVvZiB2YWx1ZX0pIGFzIGEgJHt1bml0fSwgd2hpY2ggaXMgaW52YWxpZGAsXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXkpKTtcclxuXHJcbiAgaWYgKHllYXIgPCAxMDAgJiYgeWVhciA+PSAwKSB7XHJcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QganMgPSBkLmdldFVUQ0RheSgpO1xyXG5cclxuICByZXR1cm4ganMgPT09IDAgPyA3IDoganM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpIHtcclxuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XHJcbiAgY29uc3QgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXI7XHJcbiAgY29uc3QgbW9udGgwID0gdGFibGUuZmluZEluZGV4KChpKSA9PiBpIDwgb3JkaW5hbCk7XHJcbiAgY29uc3QgZGF5ID0gb3JkaW5hbCAtIHRhYmxlW21vbnRoMF07XHJcbiAgcmV0dXJuIHsgbW9udGg6IG1vbnRoMCArIDEsIGRheSB9O1xyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XHJcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnT2JqO1xyXG4gIGNvbnN0IG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcclxuICBjb25zdCB3ZWVrZGF5ID0gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cclxuICBsZXQgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKG9yZGluYWwgLSB3ZWVrZGF5ICsgMTApIC8gNyk7XHJcbiAgbGV0IHdlZWtZZWFyO1xyXG5cclxuICBpZiAod2Vla051bWJlciA8IDEpIHtcclxuICAgIHdlZWtZZWFyID0geWVhciAtIDE7XHJcbiAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTtcclxuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcclxuICAgIHdlZWtZZWFyID0geWVhciArIDE7XHJcbiAgICB3ZWVrTnVtYmVyID0gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2Vla1llYXIgPSB5ZWFyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5LCAuLi50aW1lT2JqZWN0KGdyZWdPYmopLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlZWtUb0dyZWdvcmlhbih3ZWVrRGF0YSkge1xyXG4gIGNvbnN0IHsgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXkgfSA9IHdlZWtEYXRhO1xyXG4gIGNvbnN0IHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpO1xyXG4gIGNvbnN0IHllYXJJbkRheXMgPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcclxuXHJcbiAgbGV0IG9yZGluYWwgPSB3ZWVrTnVtYmVyICogNyArIHdlZWtkYXkgLSB3ZWVrZGF5T2ZKYW40IC0gMztcclxuICBsZXQgeWVhcjtcclxuXHJcbiAgaWYgKG9yZGluYWwgPCAxKSB7XHJcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xyXG4gICAgb3JkaW5hbCArPSBkYXlzSW5ZZWFyKHllYXIpO1xyXG4gIH0gZWxzZSBpZiAob3JkaW5hbCA+IHllYXJJbkRheXMpIHtcclxuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XHJcbiAgICBvcmRpbmFsIC09IGRheXNJblllYXIod2Vla1llYXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB5ZWFyID0gd2Vla1llYXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qod2Vla0RhdGEpLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xyXG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ0RhdGE7XHJcbiAgY29uc3Qgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xyXG4gIHJldHVybiB7IHllYXIsIG9yZGluYWwsIC4uLnRpbWVPYmplY3QoZ3JlZ0RhdGEpIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xyXG4gIGNvbnN0IHsgeWVhciwgb3JkaW5hbCB9ID0gb3JkaW5hbERhdGE7XHJcbiAgY29uc3QgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyLCBtb250aCwgZGF5LCAuLi50aW1lT2JqZWN0KG9yZGluYWxEYXRhKSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XHJcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhcik7XHJcbiAgY29uc3QgdmFsaWRXZWVrID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIHdlZWtzSW5XZWVrWWVhcihvYmoud2Vla1llYXIpKTtcclxuICBjb25zdCB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XHJcblxyXG4gIGlmICghdmFsaWRZZWFyKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3dlZWtZZWFyJywgb2JqLndlZWtZZWFyKTtcclxuICB9IGlmICghdmFsaWRXZWVrKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3dlZWsnLCBvYmoud2Vlayk7XHJcbiAgfSBpZiAoIXZhbGlkV2Vla2RheSkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCd3ZWVrZGF5Jywgb2JqLndlZWtkYXkpO1xyXG4gIH0gcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNJbnZhbGlkT3JkaW5hbERhdGEob2JqKSB7XHJcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKTtcclxuICBjb25zdCB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xyXG5cclxuICBpZiAoIXZhbGlkWWVhcikge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCd5ZWFyJywgb2JqLnllYXIpO1xyXG4gIH0gaWYgKCF2YWxpZE9yZGluYWwpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnb3JkaW5hbCcsIG9iai5vcmRpbmFsKTtcclxuICB9IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB7XHJcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKTtcclxuICBjb25zdCB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMik7XHJcbiAgY29uc3QgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XHJcblxyXG4gIGlmICghdmFsaWRZZWFyKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3llYXInLCBvYmoueWVhcik7XHJcbiAgfSBpZiAoIXZhbGlkTW9udGgpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnbW9udGgnLCBvYmoubW9udGgpO1xyXG4gIH0gaWYgKCF2YWxpZERheSkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdkYXknLCBvYmouZGF5KTtcclxuICB9IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSW52YWxpZFRpbWVEYXRhKG9iaikge1xyXG4gIGNvbnN0IHtcclxuICAgIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCxcclxuICB9ID0gb2JqO1xyXG4gIGNvbnN0IHZhbGlkSG91ciA9IGludGVnZXJCZXR3ZWVuKGhvdXIsIDAsIDIzKVxyXG4gICAgICAgfHwgKGhvdXIgPT09IDI0ICYmIG1pbnV0ZSA9PT0gMCAmJiBzZWNvbmQgPT09IDAgJiYgbWlsbGlzZWNvbmQgPT09IDApO1xyXG4gIGNvbnN0IHZhbGlkTWludXRlID0gaW50ZWdlckJldHdlZW4obWludXRlLCAwLCA1OSk7XHJcbiAgY29uc3QgdmFsaWRTZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihzZWNvbmQsIDAsIDU5KTtcclxuICBjb25zdCB2YWxpZE1pbGxpc2Vjb25kID0gaW50ZWdlckJldHdlZW4obWlsbGlzZWNvbmQsIDAsIDk5OSk7XHJcblxyXG4gIGlmICghdmFsaWRIb3VyKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ2hvdXInLCBob3VyKTtcclxuICB9IGlmICghdmFsaWRNaW51dGUpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnbWludXRlJywgbWludXRlKTtcclxuICB9IGlmICghdmFsaWRTZWNvbmQpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnc2Vjb25kJywgc2Vjb25kKTtcclxuICB9IGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdtaWxsaXNlY29uZCcsIG1pbGxpc2Vjb25kKTtcclxuICB9IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgSU5WQUxJRCA9ICdJbnZhbGlkIERhdGVUaW1lJztcclxuY29uc3QgTUFYX0RBVEUgPSA4LjY0ZTE1O1xyXG5cclxuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcclxuICByZXR1cm4gbmV3IEludmFsaWQoJ3Vuc3VwcG9ydGVkIHpvbmUnLCBgdGhlIHpvbmUgXCIke3pvbmUubmFtZX1cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XHJcbn1cclxuXHJcbi8vIHdlIGNhY2hlIHdlZWsgZGF0YSBvbiB0aGUgRFQgb2JqZWN0IGFuZCB0aGlzIGludGVybWVkaWF0ZXMgdGhlIGNhY2hlXHJcbmZ1bmN0aW9uIHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEoZHQpIHtcclxuICBpZiAoZHQud2Vla0RhdGEgPT09IG51bGwpIHtcclxuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xyXG4gIH1cclxuICByZXR1cm4gZHQud2Vla0RhdGE7XHJcbn1cclxuXHJcbi8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xyXG4vLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllc1xyXG5mdW5jdGlvbiBjbG9uZShpbnN0LCBhbHRzKSB7XHJcbiAgY29uc3QgY3VycmVudCA9IHtcclxuICAgIHRzOiBpbnN0LnRzLFxyXG4gICAgem9uZTogaW5zdC56b25lLFxyXG4gICAgYzogaW5zdC5jLFxyXG4gICAgbzogaW5zdC5vLFxyXG4gICAgbG9jOiBpbnN0LmxvYyxcclxuICAgIGludmFsaWQ6IGluc3QuaW52YWxpZCxcclxuICB9O1xyXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoeyAuLi5jdXJyZW50LCAuLi5hbHRzLCBvbGQ6IGN1cnJlbnQgfSk7XHJcbn1cclxuXHJcbi8vIGZpbmQgdGhlIHJpZ2h0IG9mZnNldCBhIGdpdmVuIGxvY2FsIHRpbWUuIFRoZSBvIGlucHV0IGlzIG91ciBndWVzcywgd2hpY2ggZGV0ZXJtaW5lcyB3aGljaFxyXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxyXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcclxuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcclxuICBsZXQgdXRjR3Vlc3MgPSBsb2NhbFRTIC0gbyAqIDYwICogMTAwMDtcclxuXHJcbiAgLy8gVGVzdCB3aGV0aGVyIHRoZSB6b25lIG1hdGNoZXMgdGhlIG9mZnNldCBmb3IgdGhpcyB0c1xyXG4gIGNvbnN0IG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcclxuXHJcbiAgLy8gSWYgc28sIG9mZnNldCBkaWRuJ3QgY2hhbmdlIGFuZCB3ZSdyZSBkb25lXHJcbiAgaWYgKG8gPT09IG8yKSB7XHJcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcclxuICB9XHJcblxyXG4gIC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0XHJcbiAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7XHJcblxyXG4gIC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxyXG4gIGNvbnN0IG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcclxuICBpZiAobzIgPT09IG8zKSB7XHJcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07XHJcbiAgfVxyXG5cclxuICAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXHJcbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XHJcbmZ1bmN0aW9uIHRzVG9PYmoodHMsIG9mZnNldCkge1xyXG4gIHRzICs9IG9mZnNldCAqIDYwICogMTAwMDtcclxuXHJcbiAgY29uc3QgZCA9IG5ldyBEYXRlKHRzKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXI6IGQuZ2V0VVRDRnVsbFllYXIoKSxcclxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxyXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcclxuICAgIGhvdXI6IGQuZ2V0VVRDSG91cnMoKSxcclxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXHJcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxyXG4gICAgbWlsbGlzZWNvbmQ6IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29udmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGVwb2NoIHRpbWVzdGFtcFxyXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XHJcbiAgcmV0dXJuIGZpeE9mZnNldChvYmpUb0xvY2FsVFMob2JqKSwgb2Zmc2V0LCB6b25lKTtcclxufVxyXG5cclxuLy8gY3JlYXRlIGEgbmV3IERUIGluc3RhbmNlIGJ5IGFkZGluZyBhIGR1cmF0aW9uLCBhZGp1c3RpbmcgZm9yIERTVHNcclxuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcclxuICBjb25zdCBvUHJlID0gaW5zdC5vO1xyXG4gIGNvbnN0IHllYXIgPSBpbnN0LmMueWVhciArIE1hdGgudHJ1bmMoZHVyLnllYXJzKTtcclxuICBjb25zdCBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzO1xyXG4gIGNvbnN0IGMgPSB7XHJcbiAgICAuLi5pbnN0LmMsXHJcbiAgICB5ZWFyLFxyXG4gICAgbW9udGgsXHJcbiAgICBkYXk6XHJcbiAgICAgICAgIE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSlcclxuICAgICAgICAgKyBNYXRoLnRydW5jKGR1ci5kYXlzKVxyXG4gICAgICAgICArIE1hdGgudHJ1bmMoZHVyLndlZWtzKSAqIDcsXHJcbiAgfTtcclxuICBjb25zdCBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xyXG4gICAgeWVhcnM6IGR1ci55ZWFycyAtIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcclxuICAgIHF1YXJ0ZXJzOiBkdXIucXVhcnRlcnMgLSBNYXRoLnRydW5jKGR1ci5xdWFydGVycyksXHJcbiAgICBtb250aHM6IGR1ci5tb250aHMgLSBNYXRoLnRydW5jKGR1ci5tb250aHMpLFxyXG4gICAgd2Vla3M6IGR1ci53ZWVrcyAtIE1hdGgudHJ1bmMoZHVyLndlZWtzKSxcclxuICAgIGRheXM6IGR1ci5kYXlzIC0gTWF0aC50cnVuYyhkdXIuZGF5cyksXHJcbiAgICBob3VyczogZHVyLmhvdXJzLFxyXG4gICAgbWludXRlczogZHVyLm1pbnV0ZXMsXHJcbiAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcclxuICAgIG1pbGxpc2Vjb25kczogZHVyLm1pbGxpc2Vjb25kcyxcclxuICB9KS5hcygnbWlsbGlzZWNvbmRzJyk7XHJcbiAgY29uc3QgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTtcclxuXHJcbiAgbGV0IFt0cywgb10gPSBmaXhPZmZzZXQobG9jYWxUUywgb1ByZSwgaW5zdC56b25lKTtcclxuXHJcbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XHJcbiAgICB0cyArPSBtaWxsaXNUb0FkZDtcclxuICAgIC8vIHRoYXQgY291bGQgaGF2ZSBjaGFuZ2VkIHRoZSBvZmZzZXQgYnkgZ29pbmcgb3ZlciBhIERTVCwgYnV0IHdlIHdhbnQgdG8ga2VlcCB0aGUgdHMgdGhlIHNhbWVcclxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHRzLCBvIH07XHJcbn1cclxuXHJcbi8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xyXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXHJcbmZ1bmN0aW9uIHBhcnNlRGF0YVRvRGF0ZVRpbWUocGFyc2VkLCBwYXJzZWRab25lLCBvcHRzLCBmb3JtYXQsIHRleHQsIHNwZWNpZmljT2Zmc2V0KSB7XHJcbiAgY29uc3QgeyBzZXRab25lLCB6b25lIH0gPSBvcHRzO1xyXG4gIGlmIChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHtcclxuICAgIGNvbnN0IGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZTtcclxuICAgIGNvbnN0IGluc3QgPSBEYXRlVGltZS5mcm9tT2JqZWN0KHBhcnNlZCwge1xyXG4gICAgICAuLi5vcHRzLFxyXG4gICAgICB6b25lOiBpbnRlcnByZXRhdGlvblpvbmUsXHJcbiAgICAgIHNwZWNpZmljT2Zmc2V0LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XHJcbiAgfVxyXG4gIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFxyXG4gICAgbmV3IEludmFsaWQoJ3VucGFyc2FibGUnLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyAke2Zvcm1hdH1gKSxcclxuICApO1xyXG59XHJcblxyXG4vLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcclxuLy8gaGVscHMgaGFuZGxlIHRoZSBkZXRhaWxzXHJcbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1ogPSB0cnVlKSB7XHJcbiAgcmV0dXJuIGR0LmlzVmFsaWRcclxuICAgID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKCdlbi1VUycpLCB7XHJcbiAgICAgIGFsbG93WixcclxuICAgICAgZm9yY2VTaW1wbGU6IHRydWUsXHJcbiAgICB9KS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZvcm1hdClcclxuICAgIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9JU09EYXRlKG8sIGV4dGVuZGVkKSB7XHJcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XHJcbiAgbGV0IGMgPSAnJztcclxuICBpZiAobG9uZ0Zvcm1hdCAmJiBvLmMueWVhciA+PSAwKSBjICs9ICcrJztcclxuICBjICs9IHBhZFN0YXJ0KG8uYy55ZWFyLCBsb25nRm9ybWF0ID8gNiA6IDQpO1xyXG5cclxuICBpZiAoZXh0ZW5kZWQpIHtcclxuICAgIGMgKz0gJy0nO1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xyXG4gICAgYyArPSAnLSc7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xyXG4gIH1cclxuICByZXR1cm4gYztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9JU09UaW1lKFxyXG4gIG8sXHJcbiAgZXh0ZW5kZWQsXHJcbiAgc3VwcHJlc3NTZWNvbmRzLFxyXG4gIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxyXG4gIGluY2x1ZGVPZmZzZXQsXHJcbiAgZXh0ZW5kZWRab25lLFxyXG4pIHtcclxuICBsZXQgYyA9IHBhZFN0YXJ0KG8uYy5ob3VyKTtcclxuICBpZiAoZXh0ZW5kZWQpIHtcclxuICAgIGMgKz0gJzonO1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcclxuICAgIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcclxuICAgICAgYyArPSAnOic7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5zZWNvbmQpO1xyXG5cclxuICAgIGlmIChvLmMubWlsbGlzZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzTWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgIGMgKz0gJy4nO1xyXG4gICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taWxsaXNlY29uZCwgMyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoaW5jbHVkZU9mZnNldCkge1xyXG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCAmJiAhZXh0ZW5kZWRab25lKSB7XHJcbiAgICAgIGMgKz0gJ1onO1xyXG4gICAgfSBlbHNlIGlmIChvLm8gPCAwKSB7XHJcbiAgICAgIGMgKz0gJy0nO1xyXG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAvIDYwKSk7XHJcbiAgICAgIGMgKz0gJzonO1xyXG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAlIDYwKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjICs9ICcrJztcclxuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAvIDYwKSk7XHJcbiAgICAgIGMgKz0gJzonO1xyXG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vICUgNjApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChleHRlbmRlZFpvbmUpIHtcclxuICAgIGMgKz0gYFske28uem9uZS5pYW5hTmFtZX1dYDtcclxuICB9XHJcbiAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xyXG5jb25zdCBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcclxuICBtb250aDogMSxcclxuICBkYXk6IDEsXHJcbiAgaG91cjogMCxcclxuICBtaW51dGU6IDAsXHJcbiAgc2Vjb25kOiAwLFxyXG4gIG1pbGxpc2Vjb25kOiAwLFxyXG59O1xyXG5jb25zdCBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XHJcbiAgd2Vla051bWJlcjogMSxcclxuICB3ZWVrZGF5OiAxLFxyXG4gIGhvdXI6IDAsXHJcbiAgbWludXRlOiAwLFxyXG4gIHNlY29uZDogMCxcclxuICBtaWxsaXNlY29uZDogMCxcclxufTtcclxuY29uc3QgZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzID0ge1xyXG4gIG9yZGluYWw6IDEsXHJcbiAgaG91cjogMCxcclxuICBtaW51dGU6IDAsXHJcbiAgc2Vjb25kOiAwLFxyXG4gIG1pbGxpc2Vjb25kOiAwLFxyXG59O1xyXG5cclxuLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXHJcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFsneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJ107XHJcbmNvbnN0IG9yZGVyZWRXZWVrVW5pdHMgPSBbXHJcbiAgJ3dlZWtZZWFyJyxcclxuICAnd2Vla051bWJlcicsXHJcbiAgJ3dlZWtkYXknLFxyXG4gICdob3VyJyxcclxuICAnbWludXRlJyxcclxuICAnc2Vjb25kJyxcclxuICAnbWlsbGlzZWNvbmQnLFxyXG5dO1xyXG5jb25zdCBvcmRlcmVkT3JkaW5hbFVuaXRzID0gWyd5ZWFyJywgJ29yZGluYWwnLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJ107XHJcblxyXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcclxuZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHtcclxuICAgIHllYXI6ICd5ZWFyJyxcclxuICAgIHllYXJzOiAneWVhcicsXHJcbiAgICBtb250aDogJ21vbnRoJyxcclxuICAgIG1vbnRoczogJ21vbnRoJyxcclxuICAgIGRheTogJ2RheScsXHJcbiAgICBkYXlzOiAnZGF5JyxcclxuICAgIGhvdXI6ICdob3VyJyxcclxuICAgIGhvdXJzOiAnaG91cicsXHJcbiAgICBtaW51dGU6ICdtaW51dGUnLFxyXG4gICAgbWludXRlczogJ21pbnV0ZScsXHJcbiAgICBxdWFydGVyOiAncXVhcnRlcicsXHJcbiAgICBxdWFydGVyczogJ3F1YXJ0ZXInLFxyXG4gICAgc2Vjb25kOiAnc2Vjb25kJyxcclxuICAgIHNlY29uZHM6ICdzZWNvbmQnLFxyXG4gICAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZCcsXHJcbiAgICBtaWxsaXNlY29uZHM6ICdtaWxsaXNlY29uZCcsXHJcbiAgICB3ZWVrZGF5OiAnd2Vla2RheScsXHJcbiAgICB3ZWVrZGF5czogJ3dlZWtkYXknLFxyXG4gICAgd2Vla251bWJlcjogJ3dlZWtOdW1iZXInLFxyXG4gICAgd2Vla3NudW1iZXI6ICd3ZWVrTnVtYmVyJyxcclxuICAgIHdlZWtudW1iZXJzOiAnd2Vla051bWJlcicsXHJcbiAgICB3ZWVreWVhcjogJ3dlZWtZZWFyJyxcclxuICAgIHdlZWt5ZWFyczogJ3dlZWtZZWFyJyxcclxuICAgIG9yZGluYWw6ICdvcmRpbmFsJyxcclxuICB9W3VuaXQudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XHJcblxyXG4gIHJldHVybiBub3JtYWxpemVkO1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcclxuLy8gYnV0IGRvZXNuJ3QgZG8gYW55IHZhbGlkYXRpb24sIG1ha2VzIGEgYnVuY2ggb2YgYXNzdW1wdGlvbnMgYWJvdXQgd2hhdCB1bml0c1xyXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxyXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgb3B0cykge1xyXG4gIGNvbnN0IHpvbmUgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gIGNvbnN0IGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xyXG4gIGNvbnN0IHRzTm93ID0gU2V0dGluZ3Mubm93KCk7XHJcblxyXG4gIGxldCB0czsgbGV0XHJcbiAgICBvO1xyXG5cclxuICAvLyBhc3N1bWUgd2UgaGF2ZSB0aGUgaGlnaGVyLW9yZGVyIHVuaXRzXHJcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcclxuICAgIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKG9ialt1XSkpIHtcclxuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludmFsaWQgPSBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHx8IGhhc0ludmFsaWRUaW1lRGF0YShvYmopO1xyXG4gICAgaWYgKGludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpO1xyXG4gICAgW3RzLCBvXSA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cyA9IHRzTm93O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XHJcbiAgICB0cywgem9uZSwgbG9jLCBvLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xyXG4gIGNvbnN0IHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZDtcclxuICBjb25zdCBmb3JtYXQgPSAoYywgdW5pdCkgPT4ge1xyXG4gICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgdHJ1ZSk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcclxuICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xyXG4gIH07XHJcbiAgY29uc3QgZGlmZmVyID0gKHVuaXQpID0+IHtcclxuICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xyXG4gICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xyXG4gICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcclxuICAgICAgfSByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpO1xyXG4gIH07XHJcblxyXG4gIGlmIChvcHRzLnVuaXQpIHtcclxuICAgIHJldHVybiBmb3JtYXQoZGlmZmVyKG9wdHMudW5pdCksIG9wdHMudW5pdCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IHVuaXQgb2Ygb3B0cy51bml0cykge1xyXG4gICAgY29uc3QgY291bnQgPSBkaWZmZXIodW5pdCk7XHJcbiAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHtcclxuICAgICAgcmV0dXJuIGZvcm1hdChjb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmb3JtYXQoc3RhcnQgPiBlbmQgPyAtMCA6IDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhc3RPcHRzKGFyZ0xpc3QpIHtcclxuICBsZXQgb3B0cyA9IHt9O1xyXG4gIGxldCBhcmdzO1xyXG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gJ29iamVjdCcpIHtcclxuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XHJcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KS5zbGljZSgwLCBhcmdMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcclxuICB9XHJcbiAgcmV0dXJuIFtvcHRzLCBhcmdzXTtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBBIERhdGVUaW1lIGlzIGFuIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIGFuZCBhY2NvbXBhbnlpbmcgbWV0aG9kcy4gSXQgY29udGFpbnMgY2xhc3MgYW5kIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXHJcbiAgKlxyXG4gICogQSBEYXRlVGltZSBjb21wcmlzZXMgb2Y6XHJcbiAgKiAqIEEgdGltZXN0YW1wLiBFYWNoIERhdGVUaW1lIGluc3RhbmNlIHJlZmVycyB0byBhIHNwZWNpZmljIG1pbGxpc2Vjb25kIG9mIHRoZSBVbml4IGVwb2NoLlxyXG4gICogKiBBIHRpbWUgem9uZS4gRWFjaCBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWMgem9uZSAoYnkgZGVmYXVsdCB0aGUgbG9jYWwgc3lzdGVtJ3Mgem9uZSkuXHJcbiAgKiAqIENvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IGVmZmVjdCBob3cgb3V0cHV0IHN0cmluZ3MgYXJlIGZvcm1hdHRlZCwgc3VjaCBhcyBgbG9jYWxlYCwgYG51bWJlcmluZ1N5c3RlbWAsIGFuZCBgb3V0cHV0Q2FsZW5kYXJgLlxyXG4gICpcclxuICAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZ1bmN0aW9uYWxpdHkgaXQgcHJvdmlkZXM6XHJcbiAgKlxyXG4gICogKiAqKkNyZWF0aW9uKio6IFRvIGNyZWF0ZSBhIERhdGVUaW1lIGZyb20gaXRzIGNvbXBvbmVudHMsIHVzZSBvbmUgb2YgaXRzIGZhY3RvcnkgY2xhc3MgbWV0aG9kczoge0BsaW5rIERhdGVUaW1lI2xvY2FsfSwge0BsaW5rIERhdGVUaW1lI3V0Y30sIGFuZCAobW9zdCBmbGV4aWJseSkge0BsaW5rIERhdGVUaW1lI2Zyb21PYmplY3R9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBzdGFuZGFyZCBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21JU099LCB7QGxpbmsgRGF0ZVRpbWUjZnJvbUhUVFB9LCBhbmQge0BsaW5rIERhdGVUaW1lI2Zyb21SRkMyODIyfS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgY3VzdG9tIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUZvcm1hdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIG5hdGl2ZSBKUyBkYXRlLCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21KU0RhdGV9LlxyXG4gICogKiAqKkdyZWdvcmlhbiBjYWxlbmRhciBhbmQgdGltZSoqOiBUbyBleGFtaW5lIHRoZSBHcmVnb3JpYW4gcHJvcGVydGllcyBvZiBhIERhdGVUaW1lIGluZGl2aWR1YWxseSAoaS5lIGFzIG9wcG9zZWQgdG8gY29sbGVjdGl2ZWx5IHRocm91Z2gge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSksIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbW9udGh9LFxyXG4gICoge0BsaW5rIERhdGVUaW1lI2RheX0sIHtAbGluayBEYXRlVGltZSNob3VyfSwge0BsaW5rIERhdGVUaW1lI21pbnV0ZX0sIHtAbGluayBEYXRlVGltZSNzZWNvbmR9LCB7QGxpbmsgRGF0ZVRpbWUjbWlsbGlzZWNvbmR9IGFjY2Vzc29ycy5cclxuICAqICogKipXZWVrIGNhbGVuZGFyKio6IEZvciBJU08gd2VlayBjYWxlbmRhciBhdHRyaWJ1dGVzLCBzZWUgdGhlIHtAbGluayBEYXRlVGltZSN3ZWVrWWVhcn0sIHtAbGluayBEYXRlVGltZSN3ZWVrTnVtYmVyfSwgYW5kIHtAbGluayBEYXRlVGltZSN3ZWVrZGF5fSBhY2Nlc3NvcnMuXHJcbiAgKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSB0aGUge0BsaW5rIERhdGVUaW1lI2xvY2FsZX0gYW5kIHtAbGluayBEYXRlVGltZSNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cclxuICAqICogKipUcmFuc2Zvcm1hdGlvbioqOiBUbyB0cmFuc2Zvcm0gdGhlIERhdGVUaW1lIGludG8gb3RoZXIgRGF0ZVRpbWVzLCB1c2Uge0BsaW5rIERhdGVUaW1lI3NldH0sIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0sIHtAbGluayBEYXRlVGltZSNzZXRab25lfSwge0BsaW5rIERhdGVUaW1lI3NldExvY2FsZX0sIHtAbGluayBEYXRlVGltZS5wbHVzfSwge0BsaW5rIERhdGVUaW1lI21pbnVzfSwge0BsaW5rIERhdGVUaW1lI2VuZE9mfSwge0BsaW5rIERhdGVUaW1lI3N0YXJ0T2Z9LCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9LCBhbmQge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9LlxyXG4gICogKiAqKk91dHB1dCoqOiBUbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmV9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZUNhbGVuZGFyfSwge0BsaW5rIERhdGVUaW1lI3RvSlNPTn0sIHtAbGluayBEYXRlVGltZSN0b0lTT30sIHtAbGluayBEYXRlVGltZSN0b0hUVFB9LCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SRkMyODIyfSwge0BsaW5rIERhdGVUaW1lI3RvU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSwge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvSlNEYXRlfS5cclxuICAqXHJcbiAgKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxyXG4gICovXHJcbmNsYXNzIERhdGVUaW1lIHtcclxuICAvKipcclxuICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgY29uc3Qgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lO1xyXG5cclxuICAgIGxldCBpbnZhbGlkID0gY29uZmlnLmludmFsaWRcclxuICAgICAgIHx8IChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IG5ldyBJbnZhbGlkKCdpbnZhbGlkIGlucHV0JykgOiBudWxsKVxyXG4gICAgICAgfHwgKCF6b25lLmlzVmFsaWQgPyB1bnN1cHBvcnRlZFpvbmUoem9uZSkgOiBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy50cyA9IGlzVW5kZWZpbmVkKGNvbmZpZy50cykgPyBTZXR0aW5ncy5ub3coKSA6IGNvbmZpZy50cztcclxuXHJcbiAgICBsZXQgYyA9IG51bGw7XHJcbiAgICBsZXQgbyA9IG51bGw7XHJcbiAgICBpZiAoIWludmFsaWQpIHtcclxuICAgICAgY29uc3QgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7XHJcblxyXG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XHJcbiAgICAgICAgW2MsIG9dID0gW2NvbmZpZy5vbGQuYywgY29uZmlnLm9sZC5vXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvdCA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xyXG4gICAgICAgIGMgPSB0c1RvT2JqKHRoaXMudHMsIG90KTtcclxuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZCgnaW52YWxpZCBpbnB1dCcpIDogbnVsbDtcclxuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xyXG4gICAgICAgIG8gPSBpbnZhbGlkID8gbnVsbCA6IG90O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLl96b25lID0gem9uZTtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMubyA9IG87XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIENPTlNUUlVDVFxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZm9yIHRoZSBjdXJyZW50IGluc3RhbnQsIGluIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUuXHJcbiAgICAqXHJcbiAgICAqIFVzZSBTZXR0aW5ncyB0byBvdmVycmlkZSB0aGVzZSBkZWZhdWx0IHZhbHVlcyBpZiBuZWVkZWQuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy9+PiBub3cgaW4gdGhlIElTTyBmb3JtYXRcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBub3coKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGxvY2FsKCkge1xyXG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcclxuICAgIHJldHVybiBxdWlja0RUKHtcclxuICAgICAgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLFxyXG4gICAgfSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgaW4gVVRDXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaIHdpdGggYSBGcmVuY2ggbG9jYWxlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIHV0YygpIHtcclxuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyk7XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XHJcblxyXG4gICAgb3B0cy56b25lID0gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xyXG4gICAgcmV0dXJuIHF1aWNrRFQoe1xyXG4gICAgICB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQsXHJcbiAgICB9LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdC4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxyXG4gICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3RcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSlNEYXRlKGRhdGUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKCdpbnZhbGlkIGlucHV0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xyXG4gICAgICB0cyxcclxuICAgICAgem9uZTogem9uZVRvVXNlLFxyXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcclxuICAgIGlmICghaXNOdW1iZXIobWlsbGlzZWNvbmRzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXHJcbiAgICAgICAgYGZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICR7dHlwZW9mIG1pbGxpc2Vjb25kc30gd2l0aCB2YWx1ZSAke21pbGxpc2Vjb25kc31gLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAtTUFYX0RBVEUgfHwgbWlsbGlzZWNvbmRzID4gTUFYX0RBVEUpIHtcclxuICAgICAgLy8gdGhpcyBpc24ndCBwZXJmZWN0IGJlY2F1c2UgYmVjYXVzZSB3ZSBjYW4gc3RpbGwgZW5kIHVwIG91dCBvZiByYW5nZSBiZWNhdXNlIG9mIGFkZGl0aW9uYWwgc2hpZnRpbmcsIGJ1dCBpdCdzIGEgc3RhcnRcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoJ1RpbWVzdGFtcCBvdXQgb2YgcmFuZ2UnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xyXG4gICAgICAgIHRzOiBtaWxsaXNlY29uZHMsXHJcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcclxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbVNlY29uZHMoc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAoIWlzTnVtYmVyKHNlY29uZHMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xyXG4gICAgICAgIHRzOiBzZWNvbmRzICogMTAwMCxcclxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxyXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XHJcbiAgICBvYmogPSBvYmogfHwge307XHJcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHNOb3cgPSBTZXR0aW5ncy5ub3coKTtcclxuICAgIGNvbnN0IG9mZnNldFByb3ZpcyA9ICFpc1VuZGVmaW5lZChvcHRzLnNwZWNpZmljT2Zmc2V0KVxyXG4gICAgICA/IG9wdHMuc3BlY2lmaWNPZmZzZXRcclxuICAgICAgOiB6b25lVG9Vc2Uub2Zmc2V0KHRzTm93KTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0KTtcclxuICAgIGNvbnN0IGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhcik7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSk7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1EO1xyXG4gICAgY29uc3QgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XHJcbiAgICBjb25zdCBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcclxuXHJcbiAgICAvLyBjYXNlczpcclxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xyXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXHJcbiAgICAvLyAoZ3JlZ29yaWFuIG1vbnRoIG9yIGRheSkgKyBvcmRpbmFsIC0+IGVycm9yXHJcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxyXG5cclxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcclxuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxyXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xyXG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VXZWVrRGF0YSA9IGRlZmluaXRlV2Vla0RlZiB8fCAobm9ybWFsaXplZC53ZWVrZGF5ICYmICFjb250YWluc0dyZWdvcik7XHJcblxyXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcclxuICAgIGxldCB1bml0cztcclxuICAgIGxldCBkZWZhdWx0VmFsdWVzO1xyXG4gICAgbGV0IG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XHJcbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcclxuICAgICAgdW5pdHMgPSBvcmRlcmVkV2Vla1VuaXRzO1xyXG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xyXG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93KTtcclxuICAgIH0gZWxzZSBpZiAoY29udGFpbnNPcmRpbmFsKSB7XHJcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcclxuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcclxuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9PcmRpbmFsKG9iak5vdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcclxuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRVbml0VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZlxyXG4gICAgbGV0IGZvdW5kRmlyc3QgPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykge1xyXG4gICAgICBjb25zdCB2ID0gbm9ybWFsaXplZFt1XTtcclxuICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2KSkge1xyXG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcclxuICAgICAgICBub3JtYWxpemVkW3VdID0gZGVmYXVsdFZhbHVlc1t1XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcclxuICAgIGNvbnN0IGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhXHJcbiAgICAgID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpXHJcbiAgICAgIDogY29udGFpbnNPcmRpbmFsXHJcbiAgICAgICAgPyBoYXNJbnZhbGlkT3JkaW5hbERhdGEobm9ybWFsaXplZClcclxuICAgICAgICA6IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG5vcm1hbGl6ZWQpO1xyXG4gICAgY29uc3QgaW52YWxpZCA9IGhpZ2hlck9yZGVySW52YWxpZCB8fCBoYXNJbnZhbGlkVGltZURhdGEobm9ybWFsaXplZCk7XHJcblxyXG4gICAgaWYgKGludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcclxuICAgIGNvbnN0IGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhXHJcbiAgICAgID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXHJcbiAgICAgIDogY29udGFpbnNPcmRpbmFsXHJcbiAgICAgICAgPyBvcmRpbmFsVG9HcmVnb3JpYW4obm9ybWFsaXplZClcclxuICAgICAgICA6IG5vcm1hbGl6ZWQ7XHJcbiAgICBjb25zdCBbdHNGaW5hbCwgb2Zmc2V0RmluYWxdID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKTtcclxuICAgIGNvbnN0IGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xyXG4gICAgICB0czogdHNGaW5hbCxcclxuICAgICAgem9uZTogem9uZVRvVXNlLFxyXG4gICAgICBvOiBvZmZzZXRGaW5hbCxcclxuICAgICAgbG9jLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZ3JlZ29yaWFuIGRhdGEgKyB3ZWVrZGF5IHNlcnZlcyBvbmx5IHRvIHZhbGlkYXRlXHJcbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXHJcbiAgICAgICAgJ21pc21hdGNoZWQgd2Vla2RheScsXHJcbiAgICAgICAgYHlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mICR7bm9ybWFsaXplZC53ZWVrZGF5fSBhbmQgYSBkYXRlIG9mICR7aW5zdC50b0lTTygpfWAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JylcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VJU09EYXRlKHRleHQpO1xyXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgJ0lTTyA4NjAxJywgdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbVJGQzI4MjIodGV4dCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpO1xyXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgJ1JGQyAyODIyJywgdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21IVFRQKHRleHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VIVFRQRGF0ZSh0ZXh0KTtcclxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsICdIVFRQJywgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBpbnB1dCBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmcuXHJcbiAgICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvcGFyc2luZz9pZD10YWJsZS1vZi10b2tlbnMpLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIHRoZSBsaW5rIGJlbG93IGZvciB0aGUgZm9ybWF0cylcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XHJcbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ2Zyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0cztcclxuICAgIGNvbnN0IGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcclxuICAgICAgbG9jYWxlLFxyXG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXHJcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRdID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xyXG4gICAgaWYgKGludmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBgZm9ybWF0ICR7Zm10fWAsIHRleHQsIHNwZWNpZmljT2Zmc2V0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcclxuICAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbVNRTCh0ZXh0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlU1FMKHRleHQpO1xyXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgJ1NRTCcsIHRleHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcclxuICAgIGlmICghcmVhc29uKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEYXRlVGltZSBpcyBpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcclxuXHJcbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IGludmFsaWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXHJcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc0RhdGVUaW1lKG8pIHtcclxuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25EYXRlVGltZSkgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUHJvZHVjZSB0aGUgZm9ybWF0IHN0cmluZyBmb3IgYSBzZXQgb2Ygb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0gZm9ybWF0T3B0c1xyXG4gICAgKiBAcGFyYW0gbG9jYWxlT3B0c1xyXG4gICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgcGFyc2VGb3JtYXRGb3JPcHRzKGZvcm1hdE9wdHMsIGxvY2FsZU9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgdG9rZW5MaXN0ID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIExvY2FsZS5mcm9tT2JqZWN0KGxvY2FsZU9wdHMpKTtcclxuICAgIHJldHVybiAhdG9rZW5MaXN0ID8gbnVsbCA6IHRva2VuTGlzdC5tYXAoKHQpID0+ICh0ID8gdC52YWwgOiBudWxsKSkuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICAvLyBJTkZPXHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0KHVuaXQpIHtcclxuICAgIHJldHVybiB0aGlzW3VuaXRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XHJcbiAgICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxyXG4gICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBsb2NhbGUgb2YgYSBEYXRlVGltZSwgc3VjaCAnZW4tR0InLiBUaGUgbG9jYWxlIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxyXG4gICAgKlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbG9jYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcclxuICAgICpcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxyXG4gICAgKlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgb3V0cHV0Q2FsZW5kYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgdGltZSB6b25lIGFzc29jaWF0ZWQgd2l0aCB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAdHlwZSB7Wm9uZX1cclxuICAgICovXHJcbiAgZ2V0IHpvbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IHpvbmVOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5uYW1lIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHllYXJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB5ZWFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgcXVhcnRlclxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucXVhcnRlciAvLz0+IDJcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHF1YXJ0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbW9udGggKDEtMTIpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtb250aCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubW9udGggOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLmRheSAvLz0+IDI1XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBkYXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5KS5ob3VyIC8vPT4gOVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgaG91cigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSkuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1pbnV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWludXRlIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyKS5zZWNvbmQgLy89PiA1MlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgc2Vjb25kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIsIDY1NCkubWlsbGlzZWNvbmQgLy89PiA2NTRcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1pbGxpc2Vjb25kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHdlZWsgeWVhclxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTIsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHdlZWtZZWFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB3ZWVrIG51bWJlciBvZiB0aGUgd2VlayB5ZWFyICgxLTUyaXNoKS5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHdlZWtOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDExLCAzMSkud2Vla2RheSAvLz0+IDRcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHdlZWtkYXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfERhdGVUaW1lfVxyXG4gICAgKi9cclxuICBnZXQgb3JkaW5hbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0Jy5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbW9udGhTaG9ydCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0b2JlcicuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG1vbnRoTG9uZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocygnbG9uZycsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgd2Vla2RheSwgc3VjaCBhcyAnTW9uJy5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheVNob3J0IC8vPT4gTW9uXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrZGF5U2hvcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyB3ZWVrZGF5LCBzdWNoIGFzICdNb25kYXknLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla2RheUxvbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cygnbG9uZycsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBVVEMgb2Zmc2V0IG9mIHRoaXMgRGF0ZVRpbWUgaW4gbWludXRlc1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5vZmZzZXQgLy89PiAtMjQwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDBcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG9mZnNldE5hbWVTaG9ydCgpIHtcclxuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcclxuICAgICAgICBmb3JtYXQ6ICdzaG9ydCcsXHJcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGxvbmcgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcIiBvciBcIkVhc3Rlcm4gRGF5bGlnaHQgVGltZVwiLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG9mZnNldE5hbWVMb25nKCkge1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xyXG4gICAgICAgIGZvcm1hdDogJ2xvbmcnLFxyXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNPZmZzZXRGaXhlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUuaXNVbml2ZXJzYWwgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc0luRFNUKCkge1xyXG4gICAgaWYgKHRoaXMuaXNPZmZzZXRGaXhlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDEsIGRheTogMSB9KS5vZmZzZXRcclxuICAgICAgICAgfHwgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiA1IH0pLm9mZnNldFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuaXNJbkxlYXBZZWFyIC8vPT4gZmFsc2VcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc0luTGVhcFllYXIoKSB7XHJcbiAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyBtb250aFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDMpLmRheXNJbk1vbnRoIC8vPT4gMzFcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGRheXNJbk1vbnRoKCkge1xyXG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBkYXlzSW5ZZWFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMDQpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrc0luV2Vla1llYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gd2Vla3NJbldlZWtZZWFyKHRoaXMud2Vla1llYXIpIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cclxuICAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xyXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHJlc29sdmVkTG9jYWxlT3B0aW9ucyhvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBGb3JtYXR0ZXIuY3JlYXRlKFxyXG4gICAgICB0aGlzLmxvYy5jbG9uZShvcHRzKSxcclxuICAgICAgb3B0cyxcclxuICAgICkucmVzb2x2ZWRPcHRpb25zKHRoaXMpO1xyXG4gICAgcmV0dXJuIHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhciB9O1xyXG4gIH1cclxuXHJcbiAgLy8gVFJBTlNGT1JNXHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gVVRDLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqXHJcbiAgICAqIEVxdWl2YWxlbnQgdG8ge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9KCd1dGMnKVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIG9wdGlvbmFsbHksIGFuIG9mZnNldCBmcm9tIFVUQyBpbiBtaW51dGVzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV0gLSBvcHRpb25zIHRvIHBhc3MgdG8gYHNldFpvbmUoKWBcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHRvVVRDKG9mZnNldCA9IDAsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHRoZSBob3N0J3MgbG9jYWwgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKlxyXG4gICAgKiBFcXVpdmFsZW50IHRvIGBzZXRab25lKCdsb2NhbCcpYFxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgdG9Mb2NhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBzcGVjaWZpZWQgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKlxyXG4gICAgKiBCeSBkZWZhdWx0LCB0aGUgc2V0dGVyIGtlZXBzIHRoZSB1bmRlcmx5aW5nIHRpbWUgdGhlIHNhbWUgKGFzIGluLCB0aGUgc2FtZSB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBEYXRlVGltZSNwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0gYW5kIHtAbGluayBEYXRlVGltZSN0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAnVVRDKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIERhdGVUaW1lI1pvbmV9IGNsYXNzLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHNldFpvbmUoem9uZSwgeyBrZWVwTG9jYWxUaW1lID0gZmFsc2UsIGtlZXBDYWxlbmRhclRpbWUgPSBmYWxzZSB9ID0ge30pIHtcclxuICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICAgIGlmICh6b25lLmVxdWFscyh0aGlzLnpvbmUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSBpZiAoIXpvbmUuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1RTID0gdGhpcy50cztcclxuICAgIGlmIChrZWVwTG9jYWxUaW1lIHx8IGtlZXBDYWxlbmRhclRpbWUpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcclxuICAgICAgY29uc3QgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7XHJcbiAgICAgIFtuZXdUU10gPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0czogbmV3VFMsIHpvbmUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9KTtcclxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IGxvYyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBsb2NhbGUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICogSnVzdCBhIGNvbnZlbmllbnQgYWxpYXMgZm9yIHJlY29uZmlndXJlKHsgbG9jYWxlIH0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5zZXRMb2NhbGUoJ2VuLUdCJylcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHNldExvY2FsZShsb2NhbGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlY29uZmlndXJlKHsgbG9jYWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICogWW91IGNhbiBvbmx5IHNldCB1bml0cyB3aXRoIHRoaXMgbWV0aG9kOyBmb3IgXCJzZXR0aW5nXCIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0uXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xyXG4gICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDE3IH0pXHJcbiAgICAqIEBleGFtcGxlIGR0LnNldCh7IGhvdXI6IDgsIG1pbnV0ZTogMzAgfSlcclxuICAgICogQGV4YW1wbGUgZHQuc2V0KHsgd2Vla2RheTogNSB9KVxyXG4gICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDA1LCBvcmRpbmFsOiAyMzQgfSlcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHNldCh2YWx1ZXMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdCk7XHJcbiAgICBjb25zdCBzZXR0aW5nV2Vla1N0dWZmID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla1llYXIpXHJcbiAgICAgICAgIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtOdW1iZXIpXHJcbiAgICAgICAgIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtkYXkpO1xyXG4gICAgY29uc3QgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCk7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQ7XHJcbiAgICBjb25zdCBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcjtcclxuXHJcbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XHJcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcclxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIixcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcclxuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1peGVkO1xyXG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcclxuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcclxuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcclxuICAgICAgbWl4ZWQgPSBvcmRpbmFsVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1peGVkID0geyAuLi50aGlzLnRvT2JqZWN0KCksIC4uLm5vcm1hbGl6ZWQgfTtcclxuXHJcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcclxuICAgICAgLy8gdXNlIHRoZSBsYXN0IGRheSBvZiB0aGUgcmlnaHQgbW9udGhcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSkge1xyXG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFt0cywgb10gPSBvYmpUb1RTKG1peGVkLCB0aGlzLm8sIHRoaXMuem9uZSk7XHJcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0cywgbyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxyXG4gICAgKlxyXG4gICAgKiBBZGRpbmcgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG9yIG1pbGxpc2Vjb25kcyBpbmNyZWFzZXMgdGhlIHRpbWVzdGFtcCBieSB0aGUgcmlnaHQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4gQWRkaW5nIGRheXMsIG1vbnRocywgb3IgeWVhcnMgc2hpZnRzIHRoZSBjYWxlbmRhciwgYWNjb3VudGluZyBmb3IgRFNUcyBhbmQgbGVhcCB5ZWFycyBhbG9uZyB0aGUgd2F5LiBUaHVzLCBgZHQucGx1cyh7IGhvdXJzOiAyNCB9KWAgbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCB0aW1lIHRoYW4gYGR0LnBsdXMoeyBkYXlzOiAxIH0pYCBpZiB0aGVyZSdzIGEgRFNUIHNoaWZ0IGluIGJldHdlZW4uXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kc1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgbWludXRlczogMTUgfSkgLy9+PiBpbiAxNSBtaW51dGVzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pIC8vfj4gdGhpcyB0aW1lIHRvbW9ycm93XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSAvL34+IGluIDMgaHIsIDEzIG1pblxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMywgbWludXRlczogMTMgfSkpIC8vfj4gaW4gMyBociwgMTMgbWluXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBwbHVzKGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcclxuICAgICogU2VlIHtAbGluayBEYXRlVGltZSNwbHVzfVxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcclxuICAgIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBtaW51cyhkdXJhdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbikubmVnYXRlKCk7XHJcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3dlZWsnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMycsIHdlZWtzIGFsd2F5cyBzdGFydCBvbiBNb25kYXlzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGFydE9mKHVuaXQpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IG8gPSB7fTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRVbml0ID0gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KTtcclxuICAgIHN3aXRjaCAobm9ybWFsaXplZFVuaXQpIHtcclxuICAgICAgY2FzZSAneWVhcnMnOlxyXG4gICAgICAgIG8ubW9udGggPSAxO1xyXG4gICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSAncXVhcnRlcnMnOlxyXG4gICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgIG8uZGF5ID0gMTtcclxuICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgIGNhc2UgJ3dlZWtzJzpcclxuICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgby5ob3VyID0gMDtcclxuICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgIGNhc2UgJ2hvdXJzJzpcclxuICAgICAgICBvLm1pbnV0ZSA9IDA7XHJcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlICdtaW51dGVzJzpcclxuICAgICAgICBvLnNlY29uZCA9IDA7XHJcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgIC8vIG5vIGRlZmF1bHQsIGludmFsaWQgdW5pdHMgdGhyb3cgaW4gbm9ybWFsaXplVW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSAnd2Vla3MnKSB7XHJcbiAgICAgIG8ud2Vla2RheSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSAncXVhcnRlcnMnKSB7XHJcbiAgICAgIGNvbnN0IHEgPSBNYXRoLmNlaWwodGhpcy5tb250aCAvIDMpO1xyXG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNldChvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgZW5kT2YodW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxyXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxyXG4gICAgICAgIC5zdGFydE9mKHVuaXQpXHJcbiAgICAgICAgLm1pbnVzKDEpXHJcbiAgICAgIDogdGhpcztcclxuICB9XHJcblxyXG4gIC8vIE9VVFBVVFxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxyXG4gICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxyXG4gICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcclxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpXHJcbiAgICAgIDogSU5WQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBkYXRlLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXMgYERhdGVUaW1lLkRBVEVfRlVMTGAgb3IgYERhdGVUaW1lLlRJTUVfU0lNUExFYC5cclxuICAgICogVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uXHJcbiAgICAqIG9mIHRoZSBEYXRlVGltZSBpbiB0aGUgYXNzaWduZWQgbG9jYWxlLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxyXG4gICAgKiBAcGFyYW0gZm9ybWF0T3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9uIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiA0LzIwLzIwMTdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdlbi1nYicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gJzIwLzA0LzIwMTcnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgbG9jYWxlOiAnZW4tZ2InIH0pOyAvLz0+ICcyMC8wNC8yMDE3J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0xvY2FsZVN0cmluZyhmb3JtYXRPcHRzID0gREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXHJcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcylcclxuICAgICAgOiBJTlZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXHJcbiAgICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlUGFydHMoKTsgLy89PiBbXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnZGF5JywgdmFsdWU6ICcyNScgfSxcclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ21vbnRoJywgdmFsdWU6ICcwNScgfSxcclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gXVxyXG4gICAgKi9cclxuICB0b0xvY2FsZVBhcnRzKG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxyXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcylcclxuICAgICAgOiBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5leHRlbmRlZFpvbmU9dHJ1ZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MywgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU08oe1xyXG4gICAgZm9ybWF0ID0gJ2V4dGVuZGVkJyxcclxuICAgIHN1cHByZXNzU2Vjb25kcyA9IGZhbHNlLFxyXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcclxuICAgIGluY2x1ZGVPZmZzZXQgPSB0cnVlLFxyXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHQgPSBmb3JtYXQgPT09ICdleHRlbmRlZCc7XHJcblxyXG4gICAgbGV0IGMgPSB0b0lTT0RhdGUodGhpcywgZXh0KTtcclxuICAgIGMgKz0gJ1QnO1xyXG4gICAgYyArPSB0b0lTT1RpbWUodGhpcywgZXh0LCBzdXBwcmVzc1NlY29uZHMsIHN1cHByZXNzTWlsbGlzZWNvbmRzLCBpbmNsdWRlT2Zmc2V0LCBleHRlbmRlZFpvbmUpO1xyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09EYXRlKHsgZm9ybWF0ID0gJ2V4dGVuZGVkJyB9ID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSAnZXh0ZW5kZWQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPV2Vla0RhdGUoKSB7XHJcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwia2tray0nVydXVy1jXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPXRydWVdIC0gYWRkIHRoZSB0aW1lIHpvbmUgZm9ybWF0IGV4dGVuc2lvblxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoKSAvLz0+ICcwNzozNDoxOS4zNjFaJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0LCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzA3OjM0WidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMDczNDE5LjM2MVonXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMDc6MzQ6MTkuMzYxWidcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT1RpbWUoe1xyXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcclxuICAgIHN1cHByZXNzU2Vjb25kcyA9IGZhbHNlLFxyXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXHJcbiAgICBpbmNsdWRlUHJlZml4ID0gZmFsc2UsXHJcbiAgICBleHRlbmRlZFpvbmUgPSBmYWxzZSxcclxuICAgIGZvcm1hdCA9ICdleHRlbmRlZCcsXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjID0gaW5jbHVkZVByZWZpeCA/ICdUJyA6ICcnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgY1xyXG4gICAgICAgKyB0b0lTT1RpbWUoXHJcbiAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgIGZvcm1hdCA9PT0gJ2V4dGVuZGVkJyxcclxuICAgICAgICAgc3VwcHJlc3NTZWNvbmRzLFxyXG4gICAgICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyxcclxuICAgICAgICAgaW5jbHVkZU9mZnNldCxcclxuICAgICAgICAgZXh0ZW5kZWRab25lLFxyXG4gICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIFJGQyAyODIyLWNvbXBhdGlibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwICswMDAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCAtMDQwMCdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1JGQzI4MjIoKSB7XHJcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsICdFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzIFpaWicsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuIFRoZSBvdXRwdXQgaXMgYWx3YXlzIGV4cHJlc3NlZCBpbiBHTVQuXHJcbiAgICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cclxuICAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9IVFRQKCkge1xyXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLnRvVVRDKCksIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyAnR01UJ1wiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMRGF0ZSgpIC8vPT4gJzIwMTQtMDctMTMnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TUUxEYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1NRTFRpbWUoeyBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSwgaW5jbHVkZVpvbmUgPSBmYWxzZSwgaW5jbHVkZU9mZnNldFNwYWNlID0gdHJ1ZSB9ID0ge30pIHtcclxuICAgIGxldCBmbXQgPSAnSEg6bW06c3MuU1NTJztcclxuXHJcbiAgICBpZiAoaW5jbHVkZVpvbmUgfHwgaW5jbHVkZU9mZnNldCkge1xyXG4gICAgICBpZiAoaW5jbHVkZU9mZnNldFNwYWNlKSB7XHJcbiAgICAgICAgZm10ICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5jbHVkZVpvbmUpIHtcclxuICAgICAgICBmbXQgKz0gJ3onO1xyXG4gICAgICB9IGVsc2UgaWYgKGluY2x1ZGVPZmZzZXQpIHtcclxuICAgICAgICBmbXQgKz0gJ1paJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TUUwob3B0cyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7dGhpcy50b1NRTERhdGUoKX0gJHt0aGlzLnRvU1FMVGltZShvcHRzKX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0lTTygpIDogSU5WQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS4gQWxpYXMgb2Yge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfVxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHZhbHVlT2YoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHRvTWlsbGlzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHRvU2Vjb25kcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIC8gMTAwMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIChhcyBhIHdob2xlIG51bWJlcikgb2YgdGhpcyBEYXRlVGltZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB0b1VuaXhJbnRlZ2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguZmxvb3IodGhpcy50cyAvIDEwMDApIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAcmV0dXJuIHtEYXRlfVxyXG4gICAgKi9cclxuICB0b0JTT04oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0pTRGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLCBtb250aCwgZGF5LCBhbmQgc28gb24uXHJcbiAgICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvT2JqZWN0KCkgLy89PiB7IHllYXI6IDIwMTcsIG1vbnRoOiA0LCBkYXk6IDIyLCBob3VyOiAyMCwgbWludXRlOiA0OSwgc2Vjb25kOiA0MiwgbWlsbGlzZWNvbmQ6IDI2OCB9XHJcbiAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICovXHJcbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xyXG5cclxuICAgIGNvbnN0IGJhc2UgPSB7IC4uLnRoaXMuYyB9O1xyXG5cclxuICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHtcclxuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XHJcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xyXG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAcmV0dXJuIHtEYXRlfVxyXG4gICAgKi9cclxuICB0b0pTRGF0ZSgpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcclxuICB9XHJcblxyXG4gIC8vIENPTVBBUkVcclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZXMgYXMgYSBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBEYXRlVGltZSB0byBjb21wYXJlIHRoaXMgb25lIHRvXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIGFycmF5IG9mIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIHZhciBpMSA9IERhdGVUaW1lLmZyb21JU08oJzE5ODItMDUtMjVUMDk6NDUnKSxcclxuICAgICogICAgIGkyID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4My0xMC0xNFQxMDozMCcpO1xyXG4gICAgKiBpMi5kaWZmKGkxKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDQzODA3NTAwMDAwIH1cclxuICAgICogaTIuZGlmZihpMSwgJ2hvdXJzJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDEyMTY4Ljc1IH1cclxuICAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOS4wMzEyNSB9XHJcbiAgICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTksIGhvdXJzOiAwLjc1IH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCA9ICdtaWxsaXNlY29uZHMnLCBvcHRzID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoJ2NyZWF0ZWQgYnkgZGlmZmluZyBhbiBpbnZhbGlkIERhdGVUaW1lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHVyT3B0cyA9IHsgbG9jYWxlOiB0aGlzLmxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgLi4ub3B0cyB9O1xyXG5cclxuICAgIGNvbnN0IHVuaXRzID0gbWF5YmVBcnJheSh1bml0KS5tYXAoRHVyYXRpb24ubm9ybWFsaXplVW5pdCk7XHJcbiAgICBjb25zdCBvdGhlcklzTGF0ZXIgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKSA+IHRoaXMudmFsdWVPZigpO1xyXG4gICAgY29uc3QgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lO1xyXG4gICAgY29uc3QgbGF0ZXIgPSBvdGhlcklzTGF0ZXIgPyBvdGhlckRhdGVUaW1lIDogdGhpcztcclxuICAgIGNvbnN0IGRpZmZlZCA9IGRpZmYoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBkdXJPcHRzKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cclxuICAgICogU2VlIHtAbGluayBEYXRlVGltZSNkaWZmfVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBkaWZmTm93KHVuaXQgPSAnbWlsbGlzZWNvbmRzJywgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWZmKERhdGVUaW1lLm5vdygpLCB1bml0LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgc3Bhbm5pbmcgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCBhbm90aGVyIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgZW5kIHBvaW50IG9mIHRoZSBJbnRlcnZhbFxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgdW50aWwob3RoZXJEYXRlVGltZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWUuXHJcbiAgICAqIEhpZ2hlci1vcmRlciB1bml0cyBtdXN0IGFsc28gYmUgaWRlbnRpY2FsIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAuXHJcbiAgICAqIE5vdGUgdGhhdCB0aW1lIHpvbmVzIGFyZSAqKmlnbm9yZWQqKiBpbiB0aGlzIGNvbXBhcmlzb24sIHdoaWNoIGNvbXBhcmVzIHRoZSAqKmxvY2FsKiogY2FsZW5kYXIgdGltZS4gVXNlIHtAbGluayBEYXRlVGltZSNzZXRab25lfSB0byBjb252ZXJ0IG9uZSBvZiB0aGUgZGF0ZXMgaWYgbmVlZGVkLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIG90aGVyRFQgaXMgaW4gdGhlIHNhbWUgY3VycmVudCBjYWxlbmRhciBkYXlcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgaGFzU2FtZShvdGhlckRhdGVUaW1lLCB1bml0KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcclxuICAgIGNvbnN0IGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pO1xyXG4gICAgcmV0dXJuIGFkanVzdGVkVG9ab25lLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IGFkanVzdGVkVG9ab25lLmVuZE9mKHVuaXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEVxdWFsaXR5IGNoZWNrXHJcbiAgICAqIFR3byBEYXRlVGltZXMgYXJlIGVxdWFsIGlmZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxyXG4gICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZXF1YWxzKG90aGVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzVmFsaWRcclxuICAgICAgICYmIG90aGVyLmlzVmFsaWRcclxuICAgICAgICYmIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKClcclxuICAgICAgICYmIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSlcclxuICAgICAgICYmIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzIFwiaW4gdHdvIGRheXNcIi4gQ2FuIG9ubHkgaW50ZXJuYXRpb25hbGl6ZSBpZiB5b3VyXHJcbiAgICAqIHBsYXRmb3JtIHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LiBSb3VuZHMgZG93biBieSBkZWZhdWx0LlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc3R5bGU9XCJsb25nXCJdIC0gdGhlIHN0eWxlIG9mIHVuaXRzLCBtdXN0IGJlIFwibG9uZ1wiLCBcInNob3J0XCIsIG9yIFwibmFycm93XCJcclxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHM7IGlmIG9taXR0ZWQsIG9yIGFuIGFycmF5LCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgYmVzdCB1bml0LiBVc2UgYW4gYXJyYXkgb3Igb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBvciBcInNlY29uZHNcIlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJvdW5kPXRydWVdIC0gd2hldGhlciB0byByb3VuZCB0aGUgbnVtYmVycyBpbiB0aGUgb3V0cHV0LlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMucGFkZGluZz0wXSAtIHBhZGRpbmcgaW4gbWlsbGlzZWNvbmRzLiBUaGlzIGFsbG93cyB5b3UgdG8gcm91bmQgdXAgdGhlIHJlc3VsdCBpZiBpdCBmaXRzIGluc2lkZSB0aGUgdGhyZXNob2xkLiBEb24ndCB1c2UgaW4gY29tYmluYXRpb24gd2l0aCB7cm91bmQ6IGZhbHNlfSBiZWNhdXNlIHRoZSBkZWNpbWFsIG91dHB1dCB3aWxsIGluY2x1ZGUgdGhlIHBhZGRpbmcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiaW4gMSBkYXlcIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+IFwiZGVudHJvIGRlIDEgZMOtYVwiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGFucyAyMyBoZXVyZXNcIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCIyIGRheXMgYWdvXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoeyB1bml0OiBcImhvdXJzXCIgfSkgLy89PiBcIjQ4IGhvdXJzIGFnb1wiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiBcIjEuNSBkYXlzIGFnb1wiXHJcbiAgICAqL1xyXG4gIHRvUmVsYXRpdmUob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pO1xyXG4gICAgY29uc3QgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/ICh0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcpIDogMDtcclxuICAgIGxldCB1bml0cyA9IFsneWVhcnMnLCAnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ107XHJcbiAgICBsZXQgeyB1bml0IH0gPSBvcHRpb25zO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy51bml0KSkge1xyXG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcclxuICAgICAgdW5pdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG51bWVyaWM6ICdhbHdheXMnLFxyXG4gICAgICB1bml0cyxcclxuICAgICAgdW5pdCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXHJcbiAgICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxyXG4gICAgKi9cclxuICB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiB0aGlzLnpvbmUgfSksIHRoaXMsIHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgbnVtZXJpYzogJ2F1dG8nLFxyXG4gICAgICB1bml0czogWyd5ZWFycycsICdtb250aHMnLCAnZGF5cyddLFxyXG4gICAgICBjYWxlbmRhcnk6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcclxuICAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtaW4oLi4uZGF0ZVRpbWVzKSB7XHJcbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ21pbiByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lcycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5taW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgbWF4IG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xyXG4gICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtYXhpbXVtXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWF4IERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcclxuICAgICovXHJcbiAgc3RhdGljIG1heCguLi5kYXRlVGltZXMpIHtcclxuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbWF4IHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgKGkpID0+IGkudmFsdWVPZigpLCBNYXRoLm1heCk7XHJcbiAgfVxyXG5cclxuICAvLyBNSVNDXHJcblxyXG4gIC8qKlxyXG4gICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcclxuICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcclxuICAgICAgbG9jYWxlLFxyXG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXHJcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXRFeHBsYWluIGluc3RlYWRcclxuICAgICovXHJcbiAgc3RhdGljIGZyb21TdHJpbmdFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8vIEZPUk1BVCBQUkVTRVRTXHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlIDEwLzE0LzE5ODNcclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFX1NIT1JUKCkge1xyXG4gICAgcmV0dXJuIERBVEVfU0hPUlQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVfTUVEKCkge1xyXG4gICAgcmV0dXJuIERBVEVfTUVEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgT2N0IDE0LCAxOTgzJ1xyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSgpIHtcclxuICAgIHJldHVybiBEQVRFX01FRF9XSVRIX1dFRUtEQVk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFX0ZVTEwoKSB7XHJcbiAgICByZXR1cm4gREFURV9GVUxMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURV9IVUdFKCkge1xyXG4gICAgcmV0dXJuIERBVEVfSFVHRTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfU0lNUExFKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfU0lNUExFO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gVElNRV9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NIT1JUX09GRlNFVCgpIHtcclxuICAgIHJldHVybiBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9MT05HX09GRlNFVCgpIHtcclxuICAgIHJldHVybiBUSU1FX1dJVEhfTE9OR19PRkZTRVQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FXzI0X1NJTVBMRSgpIHtcclxuICAgIHJldHVybiBUSU1FXzI0X1NJTVBMRTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVEVCcsIGFsd2F5cyAyNC1ob3VyLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XHJcbiAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQoKSB7XHJcbiAgICByZXR1cm4gVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVCgpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9TSE9SVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRUQoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfTUVEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIDE0IE9jdCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSgpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTCgpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9GVUxMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0UoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfSFVHRTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xyXG4gIGlmIChEYXRlVGltZS5pc0RhdGVUaW1lKGRhdGVUaW1laXNoKSkge1xyXG4gICAgcmV0dXJuIGRhdGVUaW1laXNoO1xyXG4gIH0gaWYgKGRhdGVUaW1laXNoICYmIGRhdGVUaW1laXNoLnZhbHVlT2YgJiYgaXNOdW1iZXIoZGF0ZVRpbWVpc2gudmFsdWVPZigpKSkge1xyXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xyXG4gIH0gaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxyXG4gICAgYFVua25vd24gZGF0ZXRpbWUgYXJndW1lbnQ6ICR7ZGF0ZVRpbWVpc2h9LCBvZiB0eXBlICR7dHlwZW9mIGRhdGVUaW1laXNofWAsXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgVkVSU0lPTiA9ICczLjAuMSc7XHJcblxyXG5leHBvcnQge1xyXG4gIERhdGVUaW1lLCBEdXJhdGlvbiwgRml4ZWRPZmZzZXRab25lLCBJQU5BWm9uZSwgSW5mbywgSW50ZXJ2YWwsIEludmFsaWRab25lLCBTZXR0aW5ncywgU3lzdGVtWm9uZSwgVkVSU0lPTiwgWm9uZSxcclxufTtcclxuLy8gIyBzb3VyY2VNYXBwaW5nVVJMPWx1eG9uLmpzLm1hcFxyXG4iLCJjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHNjb3JlKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiY2xhc3MgU2NvcmVMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVMaXN0OyIsImltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnLi9sdXhvbi5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9zY29yZS5qcyc7XG5pbXBvcnQgU2NvcmVMaXN0IGZyb20gJy4vc2NvcmVsaXN0LmpzJztcblxuLy8gKioqKioqKioqKkdMT0JBTCBWQVJJQUJMRVMqKioqKioqKioqLy9cbmNvbnN0IHNjb3JlTGlzdCA9IG5ldyBTY29yZUxpc3QoKTtcblxuLy8gKioqKioqKioqKkRhdGUgRGlzcGxheSBGdW5jdGlvbioqKioqKioqKiovL1xuY29uc3QgZGlzcGxheURhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5fZGF0ZScpO1xuICBtYWluRGF0ZS5pbm5lclRleHQgPSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpO1xufTtcblxuLy8gKioqKioqKioqKlNjb3JlcyBBUEktRmV0Y2ggRnVuY3Rpb24qKioqKioqKioqLy9cbmNvbnN0IGZldGNoU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9HVmRreno1TkFJZ3MwR0kxV3dKdy9zY29yZXMvJyk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIGpzb24ucmVzdWx0ID0+IGEgbGlzdCBvZiBzY29yZXNcbiAgcmV0dXJuIGpzb24ucmVzdWx0O1xufTtcblxuLy8gKioqKioqKioqKlNjb3JlIFJlbmRlciBGdW5jdGlvbioqKioqKioqKiovL1xuY29uc3QgcmVuZGVyU2NvcmUgPSBhc3luYyAob2JqKSA9PiB7XG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2NvcmUtaXRlbScpO1xuICBzY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjb3JlLWluZm9cIj5cbiAgICAgICAgICAgICAgPGgzPiR7b2JqLnVzZXJ9OiAke29iai5zY29yZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3Jlc19saXN0JykuYXBwZW5kQ2hpbGQoc2NvcmVFbGVtZW50KTtcbn07XG5cbi8vICoqKioqKioqKipTY29yZXMgUmVmcmVzaCBGdW5jdGlvbioqKioqKioqKiovL1xuY29uc3QgcmVmcmVzaFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgc2NvcmVMaXN0Lmxpc3QgPSBhd2FpdCBmZXRjaFNjb3JlcygpO1xuICBjb25zdCBzY29yZXNMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZXNfbGlzdCcpO1xuICBzY29yZXNMaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgc2NvcmVMaXN0Lmxpc3QuZm9yRWFjaCgob2JqKSA9PiByZW5kZXJTY29yZShvYmopKTtcbn07XG5cbi8vICoqKioqKioqKipTY29yZSBBZGRGdW5jdGlvbioqKioqKioqKiovL1xuY29uc3QgYWRkU2NvcmUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpLnZhbHVlO1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZV9maWVsZCcpLnZhbHVlO1xuICBpZiAodXNlciA9PT0gJycgfHwgc2NvcmUgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVzZXR0aW5nIHRoZSBpbnB1dCBmaWVsZHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlX2ZpZWxkJykudmFsdWUgPSAnJztcbiAgICAvLyBDcmVhdGluZyBhIG5ldyBzY29yZSBvYmplY3QgJiBhZGRpbmcgaXQgdG8gdGhlIGxpc3Qgb2Ygc2NvcmVzXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvR1Zka3p6NU5BSWdzMEdJMVd3Sncvc2NvcmVzLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3IFNjb3JlKHVzZXIsIHNjb3JlKSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIFJlZnJlc2hpbmcgc2NvcmVzIGxpc3QgaW4gdGhlIERPTVxuICAgIHJlZnJlc2hTY29yZXMoKTtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBkaXNwbGF5RGF0ZSwgYWRkU2NvcmUsIHJlZnJlc2hTY29yZXMsXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==