const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 9\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-9.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para acharFibonacci(5)`, () => {
          expect(solution(5)).toEqual([0, 1, 1, 2, 3]);
        });

        test(`Correto para acharFibonacci(4)`, () => {
          expect(solution(4)).toEqual([0, 1, 1, 2]);
        });

        test(`Correto para acharFibonacci(0)`, () => {
          expect(solution(0)).toEqual([0]);
        });

        test(`Correto para acharFibonacci(10)`, () => {
          expect(solution(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
