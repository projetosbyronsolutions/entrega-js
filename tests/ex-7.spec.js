const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 7\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-7.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para DivideXY(3, 3)`, () => {
          expect(solution(3, 3)).toEqual(1.0);
        });

        test(`Correto para DivideXY(3, -2)`, () => {
          expect(solution(3, -2)).toEqual(-1.5);
        });

        test(`Correto para DivideXY(-8, 0)`, () => {
          expect(solution(-8, 0)).toEqual("divisao impossivel");
        });

        test(`Correto para DivideXY(0, 8)`, () => {
          expect(solution(0, 8)).toEqual(0.0);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
