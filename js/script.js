window.onload = function() {
  const overlay = document.getElementById('overlay');
  const character = document.getElementById('character');
  const graphic = document.getElementById('graphic');
  const fair = document.getElementById('fair');
  const crafts = document.getElementById('crafts');
  const characterDesign = document.getElementById('characterDesign');
  const graphicPoster = document.getElementById('graphicPoster');
  const fairPoster = document.getElementById('fairPoster');
  const craftsDesign = document.getElementById('craftsDesign');

  
  character.addEventListener('mouseenter', () => {
    character.style.overflow = 'auto';
  });
  characterDesign.addEventListener('click', function() {
    overlay.style.display = 'flex'; 
    character.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
  });  

  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) { 
      overlay.style.display = 'none';  
      character.style.display = 'none';  
      document.body.style.overflow = 'auto';
    }
  });


  crafts.addEventListener('mouseenter', () => {
    crafts.style.overflow = 'auto';
  });
    craftsDesign.addEventListener('click', function() {
      overlay.style.display = 'flex'; 
      crafts.style.display = 'block'; 
      document.body.style.overflow = 'hidden';
    });
  
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {  
        overlay.style.display = 'none';  
        crafts.style.display = 'none'; 
        document.body.style.overflow = 'auto';
      }
  });


  graphic.addEventListener('mouseenter', () => {
    graphic.style.overflow = 'auto';
  });
    graphicPoster.addEventListener('click', function() {
      overlay.style.display = 'flex'; 
      graphic.style.display = 'block'; 
      document.body.style.overflow = 'hidden';
    });
  
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {  
        overlay.style.display = 'none';  
        graphic.style.display = 'none'; 
        document.body.style.overflow = 'auto';
      }
  });


  fair.addEventListener('mouseenter', () => {
    fair.style.overflow = 'auto';
  });
    fairPoster.addEventListener('click', function() {
      overlay.style.display = 'flex'; 
      fair.style.display = 'block'; 
      document.body.style.overflow = 'hidden';
    });
  
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {  
        overlay.style.display = 'none';  
        fair.style.display = 'none'; 
        document.body.style.overflow = 'auto';
      }
  });
};