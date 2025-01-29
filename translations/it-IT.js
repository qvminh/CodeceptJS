const { gherkinTranslations } = require('./utils')
const langCode = 'it'

module.exports = {
  I: 'io',
  contexts: {
    ...gherkinTranslations(langCode),
    Before: 'Prima',
    After: 'Dopo',
    BeforeSuite: 'Prima_della_suite',
    AfterSuite: 'Dopo_la_suite',
  },
  actions: {
    amOutsideAngularApp: 'sono_fuori_dalla_applicazione_angular',
    amInsideAngularApp: 'sono_dentro_la_applicazione_angular',
    waitForElement: 'aspetto_lo_elemento',
    waitForClickable: 'aspetto_che_sia_cliccabile',
    waitForVisible: 'aspetto_che_sia_visibile',
    waitForText: 'aspetto_il_testo',
    moveTo: 'mi_muovo_su',
    refresh: 'aggiorno',
    haveModule: 'ho_il_modulo',
    resetModule: 'ripristino_il_modulo',
    amOnPage: 'sono_sulla_pagina',
    click: 'faccio_click_su',
    doubleClick: 'faccio_doppio_click_su',
    see: 'vedo',
    dontSee: 'non_vedo',
    selectOption: 'seleziono_la_opzione',
    fillField: 'compilo_il_campo',
    pressKey: 'premo_il_tasto',
    triggerMouseEvent: 'attivare_levento_del_mouse',
    attachFile: 'allego_il_file',
    seeInField: 'vedo_nel_campo',
    dontSeeInField: 'non_vedo_nel_campo',
    appendField: 'aggiungo_il_campo',
    checkOption: 'spunto_la_opzione',
    seeCheckboxIsChecked: 'vedo_la_checkbox_spuntata',
    dontSeeCheckboxIsChecked: 'non_vedo_la_checkbox_spuntata',
    grabTextFrom: 'prendo_il_testo_da',
    grabValueFrom: 'prendo_il_valore_da',
    grabAttributeFrom: 'prendo_lo_attributo_da',
    seeInTitle: 'vedo_nel_titolo',
    dontSeeInTitle: 'non_vedo_nel_titolo',
    grabTitle: 'prendo_il_titolo',
    seeElement: 'vedo_lo_elemento',
    dontSeeElement: 'non_vedo_lo_elemento',
    seeInSource: 'vedo_nel_sorgente',
    dontSeeInSource: 'non_vedo_nel_sorgente',
    executeScript: 'eseguo_lo_script',
    executeAsyncScript: 'eseguo_lo_script_asincrono',
    seeInCurrentUrl: 'vedo_nella_url',
    dontSeeInCurrentUrl: 'non_vedo_nella_url',
    seeCurrentUrlEquals: 'la_url_e_uguale_a',
    dontSeeCurrentUrlEquals: 'la_url_non_e_uguale_a',
    saveScreenshot: 'salvo_la_schermata',
    setCookie: 'imposto_il_cookie',
    clearCookie: 'rimuovo_il_cookie',
    seeCookie: 'vedo_il_cookie',
    dontSeeCookie: 'non_vedo_il_cookie',
    grabCookie: 'prendo_il_cookie',
    resizeWindow: 'ridimesiono_la_finestra',
    wait: 'aspetto',
  },
}
