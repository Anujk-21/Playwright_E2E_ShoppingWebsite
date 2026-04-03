Feature: Ecommerce Signup and Checkout

  Scenario: Complete signup and checkout flow
    Given a login to Ecommerce application and SignIn
    When Complete signup process and create account
    Then verify login and add first product with checkout
    When verify address at checkout page
    Then delete account and then verify it deleted
