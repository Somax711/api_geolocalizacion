document.getElementById('getIP').addEventListener('click', function() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ipResults').innerHTML = `
        <div class="col-12">
          <p><strong>IP:</strong> ${data.ip}</p>
          <p><strong>Ciudad:</strong> ${data.city}</p>
          <p><strong>Región:</strong> ${data.region}</p>
          <p><strong>País:</strong> ${data.country_name}</p>
          <p><strong>Proveedor:</strong> ${data.org}</p>
        </div>
      `;
    })
    .catch(error => {
      document.getElementById('ipResults').innerHTML = '<p>Error al obtener los datos.</p>';
    });
});

 document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    if (video) {
      video.playbackRate = 0.5;
    }
  });