const path = require("path");
const fs = require("fs");
const getParticipantFolders = require("./helper");

describe("Problema 4\n============================\n", () => {
  const participants = getParticipantFolders();

  participants.forEach((participant) => {
    const solutionPath = path.join(
      __dirname,
      `../src/${participant}/solution-4.js`,
    );
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test('Test 1: Raízes reais e distintas', () => {
            expect(solution(10.0, 20.1, 5.1)).toEqual([-0.29788, -1.71212]);
          });
          
          test('Test 2: Coeficiente A igual a zero', () => {
            expect(solution(0.0, 20.0, 5.0)).toBe('Impossivel calcular');
          });
          
          test('Test 3: Raízes reais e distintas com valores grandes', () => {
            expect(solution(10.3, 203.0, 5.0)).toEqual([-0.02466, -19.68408]);
          });
          
          test('Test 4: Discriminante negativo', () => {
            expect(solution(10.0, 3.0, 5.0)).toBe('Impossivel calcular');
          });



      } else {
        test("skiping", () => { });
      }
    });
  });
});
