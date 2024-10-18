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
          '0%':{transform : 'translateY(75px)'},
          '100%':{transform : 'translateY(-75px)'}
        },
        moveDownZip :{
          '0%':{transform : 'translateY(0px)'},
          '100%':{transform : 'translateY(20px)'}
        },
        moveUpZip :{
          '0%':{transform : 'translateY(20px)'},
          '100%':{transform : 'translateY(0px)'}
        },
        openUp:{
          '0%' : {transform : 'translateY(-20px)',height :'0rem'},
          '100%' : {transform : 'translateY(0px)', height :'6.5rem'},
        },
        closeUp :{
          '0%' : {transform : 'translateY(0px)',height :'6.5rem'},
          '100%' : {transform : 'translateY(-20px)', height :'0rem'},
        },
        rotateDown :{
          '0%' :{transform: 'rotate(0deg)'},
          '100%' :{transform: 'rotate(180deg)'},
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
        'closeZip' :'moveDownZip 0.5s linear forwards',
        'openZip' :'moveUpZip 0.5s linear forwards',
        'showContent' : 'show 1s forwards',
        'hideContent' : 'hide 0.5s forwards',
        'rotateDown' : 'rotateDown 1s linear forwards',
        'openSideMenu' : 'openUp 0.5s linear forwards',
        'closeSideMenu' : 'closeUp 0.5s linear forwards',
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