var messageSlider=document.getElementById("messageSlider"),scrollPosition=0;function scrollMessages(s){scrollPosition-=1,messageSlider.style.transform="translateX(".concat(scrollPosition,"px)"),scrollPosition<=-messageSlider.offsetWidth&&(scrollPosition=0),requestAnimationFrame(scrollMessages)}scrollMessages();
//# sourceMappingURL=index.c3d85007.js.map
