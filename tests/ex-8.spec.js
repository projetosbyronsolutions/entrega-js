const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 8\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-8.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para acharFatorial(5)`, () => {
          expect(solution(5)).toEqual(120);
        });

        test(`Correto para acharFatorial(4)`, () => {
          expect(solution(4)).toEqual(24);
        });

        test(`Correto para acharFatorial(0)`, () => {
          expect(solution(0)).toEqual(1);
        });

        test(`Correto para acharFatorial(10)`, () => {
          expect(solution(10)).toEqual(3628800);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
