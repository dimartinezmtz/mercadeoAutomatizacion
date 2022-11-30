package consultaAfiliado
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class ConsultaAfiliadoSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("El usuario navega la pagina de consulta de Afiliado")
	def navegarConsultaAfiliado() {
		println "pagina de consulta de Afiliado"
	}

	@When("ingresa el numero de documento (.*)")
	def ingresarNumDocAfiliado(String numeroDoc) {
		println ("\n Ingeresamos número documento afiliado")
		WebUI.setText(findTestObject('Object Repository/Vtn_ConsultarAfiliado/txt_NroDoc'), numeroDoc)
	}

	@And("clic sobre el boton buscarAfiliado")
	def darClicBtnContinuar() {
		println ("\n Damos clic en boton consultar afiliado")
		WebUI.click(findTestObject('Object Repository/Vtn_ConsultarAfiliado/btn_BuscarAfiliado'))
	}

	@Then("el sistema muestra la información referente al afiliado")
	def verificarDatosAfiliado() {
		println ("\n Muestra Datos Afiliado")
	}
}