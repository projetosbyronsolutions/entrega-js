const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 5\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-5.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para ordenarValores(7, 21, -3)`, () => {
          expect(solution(7, 21, -3)).toEqual([-3, 7, 21]);
        });

        test(`Correto para ordenarValores(0, 0, 0)`, () => {
          expect(solution(0, 0, 0)).toEqual([0, 0, 0]);
        });

        test(`Correto para ordenarValores(10, 8, 9)`, () => {
          expect(solution(10, 8, 9)).toEqual([8, 9, 10]);
        });

        test(`Correto para ordenarValores(5, 4, 3)`, () => {
          expect(solution(5, 4, 3)).toEqual([3, 4, 5]);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
