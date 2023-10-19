describe('Demo Store Tests', () => {
    it('should navigate through the site, register a new user, and perform custom actions', () => {
      // Перехід по сторінкам проєкту
    //   cy.visit('http://demo-store.seleniumacademy.com/');
    //   cy.visit('http://demo-store.seleniumacademy.com/women.html');
    //   cy.visit('http://demo-store.seleniumacademy.com/men.html');
    //   cy.visit('http://demo-store.seleniumacademy.com/accessories.html');
    //   cy.visit('http://demo-store.seleniumacademy.com/home-decor.html');
    //   cy.visit('http://demo-store.seleniumacademy.com/sale.html');
    //   cy.visit('http://demo-store.seleniumacademy.com/vip.html');
    //   // Додайте код для переходу на інші сторінки та виконання потрібних дій
    //   // Наприклад, можна використовувати команду cy.visit() для переходу на інші сторінки проєкту
  
    //   // Реєстрація нового користувача
    //   cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/');
  
    //   cy.get('#firstname').type('John');
    //   cy.get('#lastname').type('Doe');
    //   cy.get('#email_address').type('johndoe@example.com');
    //   cy.get('#password').type('password123');
    //   cy.get('#confirmation').type('password123');
    //   cy.get('[title="Register"]').eq(1).click();
  
      // Додайте свій довільний функціонал
      // Наприклад, якщо вам потрібно здійснити покупку чи здійснити інші дії на сторінці
  
      // Перевірка результатів (можливо, вам потрібно додати додаткові перевірки)
      cy.visit('http://demo-store.seleniumacademy.com/chelsea-tee-703.html');

      cy.get('#option20').click();
      cy.get('#option78').click();
    cy.get('#product_addtocart_form').submit();

    // Відвідуємо сторінку оформлення замовлення
    cy.get('[title="Proceed to Checkout"]').eq(1).click();
        //cy.get('#login:guest').check();
        cy.get('#onepage-guest-register-button').click();
    // Заповнюємо дані для оплати та доставки
    cy.get('[title="First Name"]').eq(0).type('John');
    cy.get('[title="Last Name"]').eq(0).type('Doe');
    cy.get('[title="Company"]').eq(0).type('Example Company');
    cy.get('[title="Email Address"]').eq(0).type('johndoe@example.com');
    cy.get('[title="Street Address"]').eq(0).type('123 Main St');
    cy.get('[title="City"]').eq(0).type('New York');
    cy.get('[title="State/Province"]').eq(0).select('New York');
    cy.get('[title="Zip/Postal Code"]').eq(0).type('10001');
    cy.get('[title="Telephone"]').eq(0).type('1234567890');
    cy.get('[title="Ship to this address"]').check();

    cy.get('[title="Continue"]').eq(1).click();

    // Вибираємо метод доставки
    cy.get('#shipping-method-buttons-container .button').click();

    // Вибираємо метод оплати
    cy.get('#payment-buttons-container .button').click();

    // Перевіряємо, що замовлення прийнято
    cy.get('.success-msg').should('contain', 'Your order has been received.');

    // Відображаємо номер замовлення
    cy.get('.order-number').invoke('text').then((orderNumber) => {
      cy.log(`Order Number: ${orderNumber}`);
    });
    });
  });
  