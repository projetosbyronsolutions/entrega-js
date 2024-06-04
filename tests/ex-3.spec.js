const path = require("path");
const fs = require("fs");
const getParticipantFolders = require("./helper");

describe("Problema 3\n============================\n", () => {
  const participants = getParticipantFolders();

  participants.forEach((participant) => {
    const solutionPath = path.join(
      __dirname,
      `../src/${participant}/solution-3.js`,
    );
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para podeContratar(1.74, 'm')`, () => {
          expect(solution(1.74, 'm')).toBe("nao");
        });

        test(`Correto para podeContratar(1.76, 'm')`, () => {
          expect(solution(1.76, 'm')).toBe("sim");
        });

        test(`Correto para podeContratar(1.79, 'f')`, () => {
            expect(solution(1.76, 'm')).toBe("sim");
          });

        test(`Correto para podeContratar(1.81, 'f')`, () => {
        expect(solution(1.81, 'f')).toBe("sim");
        });



      } else {
        test("skiping", () => { });
      }
    });
  });
});
