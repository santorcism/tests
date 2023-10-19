describe('Math Test', () => {
  it('should automate the required actions', () => {
    // Відкриваємо сторінку
    cy.visit('http://suninjuly.github.io/math.html');

    // Зчитуємо значення змінної x та обчислюємо результат
    cy.get('#input_value').then(($element) => {
      const x = parseFloat($element.text());
      const result = Math.log(Math.abs(12 * Math.sin(x)));
      return result;
    }).as('result');

    // Вводимо результат в текстове поле
    cy.get('@result').then((result) => {
      cy.get('#answer').type(result);
    });

    // Вибираємо checkbox "I'm the robot"
    cy.get('#robotCheckbox').check();

    // Вибираємо radiobutton "Robots rule!"
    cy.get('[for="robotsRule"]').click();

    // Натискаємо кнопку Submit
    cy.get('[type="submit"]').click();
  });
});
