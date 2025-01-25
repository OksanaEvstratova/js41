import {healthLevel} from '../health';

const charList = [
    {name: 'Маг', health: 90, val: 'healthy'},
    {name: 'Варвар', health: 10, val: 'critical'},
    {name: 'Лучник', health: 40, val: 'wounded'},
];

const healthStat = test.each(charList);

healthStat('health test %s', (charListIt) => {
    const result = healthLevel(charListIt);
    //eslint-disable-next-line
    expect(result).toBe(charListIt.val);
});