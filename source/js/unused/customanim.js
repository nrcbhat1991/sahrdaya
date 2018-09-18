// vars
const topLogo = document.querySelector('.top-half'),
      bottomLogo = document.querySelector('.bottom-half'),
      star = document.querySelector('.star'),
      triangle = document.querySelector('.triangle'),
      btn = document.querySelector('.btn'),
      master = new TimelineMax({
        paused: true
      });

// Set some values before animation begins
master.set([topLogo, bottomLogo], {
  transformOrigin: '50% 50%',
});

// Use MorphSVGPlugin to morph the star into 
// the bottom half of SitePoint logo
// and the triangle into the top half of the logo
function enterLogo() {
  const tl = new TimelineMax();
  
  tl.add('startLogo')
    .to('.star', 1, {
      morphSVG: '.bottom-half',
      fill: 'red',
      ease: Elastic.easeOut
  }, 'startLogo+=0.5')
    .to('.triangle', 1, {
      morphSVG: '.top-half',
      fill: '#1650ad',
      ease: Power4.easeIn
  }, 'startLogo-=0.1');
  return tl;
}

// The animation fires when the button is clicked
btn.addEventListener('click', function() {
  master.restart();
});

// Use MorphSVGPlugin.convertToPath() function 
// to change the shape into a path before morphing
MorphSVGPlugin.convertToPath('polygon');

// Add function to master timeline
master.add(enterLogo());