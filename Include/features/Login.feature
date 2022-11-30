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
Feature: Iniciar sesión en portal mercadeo
  Como usuario del portal mercadeo, deseo ingresar al introducir las credenciales

  @tag1
  Scenario Outline: Validacion inicio sesion con credenciales correctas
    Given El usuario navega la pagina de inicio de sesion de mercadeo
    When ingresa usuario <username> y contrasena <password>
    And Clic sobre el boton ingresar
    Then el sistema verifica el status

    Examples: 
      | username  | password                 |
      | ldpappsl3 | r1vjgeft2cxJ7NAvIwi5jQ== |
