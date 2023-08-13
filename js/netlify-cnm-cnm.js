(()=>{
  if (!window.__cnmjsInvoked){
    try{
      var cnmSettings = JSON.parse('{"signal":"1:69350086-d20e-4b5a-84cf-bf367a848374:64b1a3d8b714c200080ebf30:1689363481252","cnmSettingsLocation":"/netlify-cnm/cnm-settings.json","cnmMainClientLocation":"https://client-network-manager.netlify.app/cnm-main-client.js","cnmSWLocation":"/cnm-sw.js","cnmSnippetScriptLocation":"/netlify-cnm/cnm.js","clientCaching":"static-only","cachingOptions":{"navResourceAffinity":"disabled","precachingLookahead":"enabled","precachingCacheUpgrades":"enabled","precachingConfiguredRoutes":[]}}');
      window.netlify = window.netlify || {};
      window.netlify.cnm = window.netlify.cnm || {};
      window.netlify.cnm.settings = cnmSettings;
      var cnmScript = document.createElement('script');
      cnmScript.src = cnmSettings.cnmMainClientLocation;
      cnmScript.async = true;
      document.body.appendChild(cnmScript);
    }catch(e){
      console.error(e);
    }
  }
})();