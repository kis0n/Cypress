
describe('Тестирование работы компонентов интернет- магазина HobbyGames', function () {

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
  
})