const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 10\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-10.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para formarTriangulo(3, 4, 5)`, () => {
          expect(solution(3, 4, 5)).toBe("sim");
        });

        test(`Correto para formarTriangulo(1, 1, 2)`, () => {
          expect(solution(1, 1, 2)).toBe("não");
        });

        test(`Correto para formarTriangulo(7, 10, 5)`, () => {
          expect(solution(7, 10, 5)).toBe("sim");
        });

        test(`Correto para formarTriangulo(1, 10, 12)`, () => {
          expect(solution(1, 10, 12)).toBe("não");
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
