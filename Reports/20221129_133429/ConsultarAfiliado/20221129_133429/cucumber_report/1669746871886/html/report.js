$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/dimartinez/Katalon Studio/Mercadeo_BDD/Include/features/Login.feature");
formatter.feature({
  "name": "Iniciar sesión en portal mercadeo",
  "description": "  Como usuario del portal mercadeo, deseo ingresar al introducir las credenciales",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validacion inicio sesion con credenciales correctas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega la pagina de inicio de sesion de mercadeo",
  "keyword": "Given "
});
formatter.step({
  "name": "ingresa usuario \u003cusername\u003e y contrasena \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Clic sobre el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema verifica el status",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ldpappsl3",
        "r1vjgeft2cxJ7NAvIwi5jQ\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validacion inicio sesion con credenciales correctas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega la pagina de inicio de sesion de mercadeo",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navegarPaginaInicioSesion()"
});
