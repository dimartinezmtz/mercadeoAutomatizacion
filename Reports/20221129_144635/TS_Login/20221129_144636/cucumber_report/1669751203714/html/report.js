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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://192.168.200.66:12000/#/login\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:187)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat login.LoginSteps.navegarPaginaInicioSesion(LoginSteps.groovy:55)\r\n\tat ✽.El usuario navega la pagina de inicio de sesion de mercadeo(C:/Users/dimartinez/Katalon Studio/Mercadeo_BDD/Include/features/Login.feature:25)\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_TIMED_OUT\n  (Session info: chrome\u003d107.0.5304.107)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ANA-DTI-DIM-BNT\u0027, ip: \u0027192.168.1.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\DIMART~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 40953e5e572991659ca5130cf3a8bbe6\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:187)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat login.LoginSteps.navegarPaginaInicioSesion(LoginSteps.groovy:55)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:108)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:75)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:248)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat TC_Login.run(TC_Login:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1669751196851.run(TempTestSuite1669751196851.groovy:36)\r\n",
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