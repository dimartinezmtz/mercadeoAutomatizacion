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
formatter.result({
  "error_message": "groovy.lang.MissingMethodException: No signature of method: static com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent() is applicable for argument types: (java.lang.String, java.lang.Integer) values: [Object Repository/Vtn_InicioSesion/txt_Username, 3]\nPossible solutions: verifyElementPresent(com.kms.katalon.core.testobject.TestObject, int), verifyElementPresent(com.kms.katalon.core.testobject.TestObject, int, com.kms.katalon.core.model.FailureHandling), verifyElementNotPresent(com.kms.katalon.core.testobject.TestObject, int), verifyAlertPresent(int), verifyElementNotPresent(com.kms.katalon.core.testobject.TestObject, int, com.kms.katalon.core.model.FailureHandling)\r\n\tat groovy.lang.MetaClassImpl.invokeStaticMissingMethod(MetaClassImpl.java:1518)\r\n\tat groovy.lang.MetaClassImpl.invokeStaticMethod(MetaClassImpl.java:1504)\r\n\tat org.codehaus.groovy.runtime.callsite.StaticMetaClassSite.call(StaticMetaClassSite.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\r\n\tat login.LoginSteps.navegarPaginaInicioSesion(LoginSteps.groovy:56)\r\n\tat ✽.El usuario navega la pagina de inicio de sesion de mercadeo(C:/Users/dimartinez/Katalon Studio/Mercadeo_BDD/Include/features/Login.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "ingresa usuario ldpappsl3 y contrasena r1vjgeft2cxJ7NAvIwi5jQ\u003d\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.ingresarCredenciales(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clic sobre el boton ingresar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.darClicBtnContinuar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el sistema verifica el status",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verificarLogueo()"
});
formatter.result({
  "status": "skipped"
});
});