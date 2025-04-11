<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('✅ Zarejestrowano service worker:', reg.scope))
        .catch(err => console.error('❌ Błąd SW:', err));
    });
  }
</script>