
describe('Тестирование работы компонентов интернет- магазина HobbyGames', function () {
   it('Проверка поиска игры Мачикоро', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.input').type('мачикоро').type('{enter}');
        cy.get('#fl-297418').click();
        cy.contains('товара');   
    })

   it('Проверка возможности добавления игры в корзину', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.input').type('мачикоро').type('{enter}');
        cy.get('#fl-297418').click();
        cy.get(':nth-child(2) > .product-item > .product-item__content > .image > a > picture > img').click();
        cy.get('.col-md-4 > .product-info__wrapper > .product-info__cart > .price-card > .buttons > .btn').click();
        cy.get('#js-openCartModal > .cart-text').click();
        cy.contains('Итого: 1599')   
    })

   it('Проверка возможности удаления товара из корзины', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.input').type('мачикоро').type('{enter}');
        cy.get('#fl-297418').click();
        cy.get(':nth-child(2) > .product-item > .product-item__content > .image > a > picture > img').click();
        cy.get('.col-md-4 > .product-info__wrapper > .product-info__cart > .price-card > .buttons > .btn').click();
        cy.get('#js-openCartModal > .cart-text').click();
        cy.get('.col-sm-1 > .icon').click();
        cy.contains('Вернуть в корзину')

    })

    it('Проверка возможности добавления товара в избранное', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.input').type('мачикоро').type('{enter}');
        cy.get('#fl-297418').click();
        cy.get(':nth-child(2) > .product-item > .product-item__content > .image > a > picture > img').click();
        cy.get('.col-md-4 > .product-info__wrapper > .product-info__cart > .price-card > .append-to-favorites').click();
        cy.contains('Удалить из избранного')

    })

    it('Проверка возможности удаления товара из избранного', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.input').type('мачикоро').type('{enter}');
        cy.get('#fl-297418').click();
        cy.get(':nth-child(2) > .product-item > .product-item__content > .image > a > picture > img').click();
        cy.get('.col-md-4 > .product-info__wrapper > .product-info__cart > .price-card > .append-to-favorites').click();
        cy.contains('Удалить из избранного');
        cy.get('.col-md-4 > .product-info__wrapper > .product-info__cart > .price-card > .remove-from-favorites').click();
        cy.contains('В избранное');

    })



      it('Проверка авторизации с верными данными', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.profile-icon').click();
        cy.get('[data-scenario="login"] > input').type('wapimaf232@talmetry.com');
        cy.get('.password').type('VFE7fZQn');
        cy.get('#login-form > .text-center > .btn').click();
        cy.wait(3000);
        cy.get('#fl-297418').click();
        cy.contains('Профиль')

    })

         it('Проверка авторизации с неверными данными', function () {
        cy.visit('https://hobbygames.ru/');
        cy.get('.profile-icon').click();
        cy.get('[data-scenario="login"] > input').type('qwe@qwe.com');
        cy.get('.password').type('aqaqswswed11');
        cy.get('#login-form > .text-center > .btn').click();
        cy.wait(5000);
        // cy.get('#fl-297418').click();
        cy.contains('Неверный телефон/e-mail');
        cy.contains('Неверный пароль');


    })
  
})
