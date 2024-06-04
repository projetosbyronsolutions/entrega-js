const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 1\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-1.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para areaTriangulo(3, 2)`, () => {
          expect(solution(3, 2)).toBe(3);
        });

        test(`Correto para areaTriangulo(10, 10)`, () => {
          expect(solution(10, 10)).toBe(50);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});

