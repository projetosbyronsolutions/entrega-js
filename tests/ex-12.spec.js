const path = require('path');
const fs = require('fs');
const getParticipantFolders = require('./helper');

describe('Problema 12\n============================\n', () => {
  const participants = getParticipantFolders();

  participants.forEach(participant => {
    const solutionPath = path.join(__dirname, `../src/${participant}/solution-12.js`);
    describe(`${participant.toUpperCase()}`, () => {
      if (fs.existsSync(solutionPath)) {
        const solution = require(solutionPath);

        test(`Correto para separarCPF("123.456.789-10")`, () => {
          expect(solution("123.456.789-10")).toEqual([123, 456, 789, 10]);
        });

        test(`Correto para separarCPF("111.222.333-44")`, () => {
          expect(solution("111.222.333-44")).toEqual([111, 222, 333, 44]);
        });

        test(`Correto para separarCPF("000.000.000-00")`, () => {
          expect(solution("000.000.000-00")).toEqual([0, 0, 0, 0]);
        });

        test(`Correto para separarCPF("999.888.777-66")`, () => {
          expect(solution("999.888.777-66")).toEqual([999, 888, 777, 66]);
        });
      } else {
        test('skiping', () => { });
      }
    });
  });
});
