#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Consultar Afiliado
  Como usuario del portal mercadeo, deseo consultar la información de un afiliado

  @tag1
  Scenario Outline: Title of your scenario outline
    Given El usuario navega la pagina de consulta de Afiliado
    When ingresa el numero de documento <numeroDoc>
    And clic sobre el boton buscarAfiliado
    Then el sistema muestra la información referente al afiliado

    Examples: 
      |numeroDoc | 
      |1007740082| 