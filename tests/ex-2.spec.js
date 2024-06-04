const path = require("path");
const fs = require("fs");
const getParticipantFolders = require("./helper");

describe("Problema 2\n============================\n", () => {
  const participants = getParticipantFolders();

  participants.forEach((participant) => {
    const solutionPath = path.join(
      __dirname,
      `../src/${participant}/solution-2.js`,
    );
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para qtdTruthy([true, false])`, () => {
          expect(solution([true, false])).toBe(1);
        });

        test(`Correto para qtdTruthy([2, [], true, 'false'])`, () => {
          expect(solution([2, [], true, 'false'])).toBe(4);
        });

        test(`Correto para qtdTruthy([0, false, null, undefined, -0, "", NaN])`, () => {
          expect(solution([0, false, null, undefined, -0, "", NaN])).toBe(0);
        });

        test(`Correto para qtdTruthy(['0', false, null, undefined])`, () => {
          expect(solution(['0', false, null, undefined])).toBe(1);
        });


      } else {
        test("skiping", () => { });
      }
    });
  });
});
