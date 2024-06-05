const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 11\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-11.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para classificarTriangulo(3, 3, 3)`, () => {
          expect(solution(3, 3, 3)).toBe("equilatero");
        });

        test(`Correto para classificarTriangulo(3, 4, 4)`, () => {
          expect(solution(3, 4, 4)).toBe("isosceles");
        });

        test(`Correto para classificarTriangulo(3, 4, 5)`, () => {
          expect(solution(3, 4, 5)).toBe("escaleno");
        });

        test(`Correto para classificarTriangulo(5, 5, 5)`, () => {
          expect(solution(5, 5, 5)).toBe("equilatero");
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
