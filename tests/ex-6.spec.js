const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 6\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-6.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para acharMaior([2, 113, 45, 34565, 6, 8])`, () => {
          expect(solution([2, 113, 45, 34565, 6, 8])).toEqual([34565, 3]);
        });

        test(`Correto para acharMaior([1, 2, 3, 4, 5, 100])`, () => {
          expect(solution([1, 2, 3, 4, 5, 100])).toEqual([100, 5]);
        });

        test(`Correto para acharMaior([10, 20, 30, 40, 50, 1])`, () => {
          expect(solution([10, 20, 30, 40, 50, 1])).toEqual([50, 4]);
        });

        // Adicione mais testes com arrays de tamanhos variáveis aqui

      } else {
        test('skiping', () => { });
      }
    });
  });
});
