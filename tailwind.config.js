module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      keyframes:{
        moveUp :{
          '0%':{transform : 'translateY(200px) scale(5)'},
          '10%':{transform : 'translateY(200px) scale(5)'},
          '100%':{transform : 'translateY(0px) scale(1)'}
        },
        moveZip :{
          '0%':{transform : 'translateY(288px)'},
          '100%':{transform : 'translateY(-288px)'}
        },
        showZip :{
          '0%':{transform : 'translateY(-100px)'},
          '100%':{transform : 'translateY(0px)'}
        },
        hideZip :{
          '0%':{transform : 'translateY(0px)'},
          '100%':{transform : 'translateY(-300px)'}
        },
        bounceHigh :{
          '0%':{transform : 'translateY(-10rem)'},
          '50%':{transform : 'translateY(10rem)'},
          '100%':{transform : 'translateY(-10rem)'},
        },
        show :{
          '0%':{ opacity:'0'},
          '100%':{opacity:'1'}
        },
        hide :{
          '0%':{ opacity:'1'},
          '100%':{opacity:'0'}
        },
        expand: {
          '0%':{transform : 'scaleX(0.2)', opacity:'0'},
          '50%':{transform : 'scaleX(0.2)', opacity:'0'},
          '100%':{transform : 'scale(1)' ,opacity:'1'}
        }
      },
      animation :{
        'titleAnime' : 'moveUp 1s forwards',
        'showTitle' : 'show 1s forwards',
        'show' : 'show 1s forwards',
        'hide' : 'hide 1s forwards',
        'expandNavBar':'expand 2s forwards',
        'phoneExpandNavBar':'expand 1s forwards',
        'bounceUpAndDown': 'bounceHigh 1.5s linear infinite',
        'zipAnimation' : 'moveZip 3s linear infinite',
        'closeZip' : 'showZip 1s linear forwards',
        'openZip' : 'hideZip 1s linear forwards',
        'showContent' : 'show 1s forwards',
        'hideContent' : 'hide 0.5s forwards',
      },
      backgroundImage: {
        'city': "url('@/assets/images/darkCity.jpg')"
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }