import { jsPDF } from 'jspdf';

const doc = new jsPDF();

export const savePdf = (referenceTest) => {
  doc.text(50, 10, `${referenceTest.category}`);
  // doc.setFontSize(10);
  referenceTest &&
    referenceTest.answers.map((answer, index) => {
      doc.setFontSize(10);
      doc.text(
        5,
        index === 0 ? 23 : index * 18 + 23,
        `${index + 1} - [${answer.difficulty}] - ${answer.question}`
      );
      if (answer.correct_answer === answer.selected_answer) {
        doc.setTextColor(10, 255, 0);
        doc.text(
          20,
          index === 0 ? 28 : index * 18 + 28,
          `CHECKED: ${answer.correct_answer}`
        );
        doc.setTextColor(0, 0, 0);
      } else {
        doc.setTextColor(0, 0, 0);
        doc.text(
          20,
          index === 0 ? 28 : index * 18 + 28,
          `CORRECT: ${answer.correct_answer}`
        );
        doc.setTextColor(255, 0, 0);
        doc.text(
          20,
          index === 0 ? 33 : index * 18 + 33,
          `CHECKED: ${answer.selected_answer}`
        );
        doc.setTextColor(0, 0, 0);
      }
      doc.setFontSize(6);
      doc.text(
        20,
        index === 0 ? 36 : index * 18 + 36,
        `Date/time: ${answer.date_answered ? answer.date_answered : '-'}`
      );
      doc.setFontSize(10);
    });

  doc.save('arquivo.pdf');
  doc.deletePage();
};
