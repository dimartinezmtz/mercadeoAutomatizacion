$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/dimartinez/Katalon Studio/Mercadeo_BDD/Include/features/ConsultarAfiliado.feature");
formatter.feature({
  "name": "Consultar Afiliado",
  "description": "  Como usuario del portal mercadeo, deseo consultar la información de un afiliado",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario navega la pagina de consulta de Afiliado",
  "keyword": "Given "
});
formatter.step({
  "name": "ingresa el numero de documento \u003cnumeroDoc\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clic sobre el boton buscarAfiliado",
  "keyword": "And "
});
formatter.step({
  "name": "el sistema muestra la información referente al afiliado",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "numeroDoc"
      ]
    },
    {
      "cells": [
        "1007740082"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
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
  "name": "El usuario navega la pagina de consulta de Afiliado",
  "keyword": "Given "
});
formatter.match({
  "location": "ConsultaAfiliadoSteps.navegarConsultaAfiliado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresa el numero de documento 1007740082",
  "keyword": "When "
});
formatter.match({
  "location": "ConsultaAfiliadoSteps.ingresarNumDocAfiliado(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic sobre el boton buscarAfiliado",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaAfiliadoSteps.darClicBtnContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el sistema muestra la información referente al afiliado",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultaAfiliadoSteps.verificarDatosAfiliado()"
});
formatter.result({
  "status": "passed"
});
});