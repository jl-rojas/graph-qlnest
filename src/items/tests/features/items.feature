Feature: Items
  Test All ItemService methods

  Scenario: Get All Items
    When User want all Items
    Then result should be an array of Items

  Scenario: Get One Item
    When User want to get an Item
    And Items array is not null
    Given 123 like id of the Item
    Then result be an Item returned

  Scenario: Update One Item
    When User want to update an Item
    And Items array is not null
    Given 123 like id of the Item
    And name Pepsi like data of the Item
    Then result be an Item updated

  Scenario: Delete One Item
    When User want to delete an Item
    And Items array is not null
    Given 123 like id of the Item
    Then result be an Item deleted

