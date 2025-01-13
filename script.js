var checkbox = document.getElementById("check-box");
var checkicon = document.getElementById("check-icon");
const checkedicon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="#0C7D69" d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"/></svg>';
const uncheckedicon = '<svg width="18" height="18" fill="none" viewBox="0 0 18 18" version="1.1" id="svg3273" sodipodi:docname="icon-checkbox-uncheck.svg" inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs3277" /><sodipodi:namedview id="namedview3275" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" showgrid="false" inkscape:zoom="16.184889" inkscape:cx="-7.0745004" inkscape:cy="11.214164" inkscape:window-width="1920" inkscape:window-height="1009" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg3273" /><path fill="#0C7D69" d="M 16.5,0 H 1.5 C 0.67157288,0 0,0.67157288 0,1.5 v 15 C 0,17.328427 0.67157288,18 1.5,18 h 15 C 17.328427,18 18,17.328427 18,16.5 V 1.5 C 18,0.67157288 17.328427,0 16.5,0 Z" id="path3271" style="fill:none;stroke:#87a3a6;stroke-opacity:1;fill-opacity:1" sodipodi:nodetypes="sssssssss" /></svg>';

var isChecked = false;

checkbox.onclick = function() {
  isChecked = !isChecked;
  if (isChecked) {
    checkicon.innerHTML = checkedicon;
  } else {
    checkicon.innerHTML = uncheckedicon;
  }
};

const selectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#0C7D69" d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"/></svg>`;
const defaultSVG = `<svg width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#0c7d69" d="M 10,0.75 C 1.3130736,0.75 -3.0357809,11.252101 3.1060591,17.393941 9.2478991,23.535781 19.75,19.186926 19.75,10.5 19.744488,5.1175085 15.382491,0.75551203 10,0.75 Z m 0,18 C 2.6495238,18.75 -1.0302761,9.8636069 4.1666654,4.6666654 9.3636069,-0.53027614 18.25,3.1495238 18.25,10.5 18.24449,15.054065 14.554065,18.74449 10,18.75 Z" id="path2" sodipodi:nodetypes="cscccscc" style="fill:#87a3a6;fill-opacity:1" /></svg>`;

document.getElementById('general-enquiry').addEventListener('click', function() {
  if (this.classList.contains('selected-option')) {
    this.classList.remove('selected-option');
    this.querySelector('svg').outerHTML = defaultSVG;
  } else {
    this.classList.add('selected-option');
    this.querySelector('svg').outerHTML = selectedSVG;
    document.getElementById('support-request').classList.remove('selected-option');
    document.getElementById('support-request').querySelector('svg').outerHTML = defaultSVG;
  }
});

document.getElementById('support-request').addEventListener('click', function() {
  if (this.classList.contains('selected-option')) {
    this.classList.remove('selected-option');
    this.querySelector('svg').outerHTML = defaultSVG;
  } else {
    this.classList.add('selected-option');
    this.querySelector('svg').outerHTML = selectedSVG;
    document.getElementById('general-enquiry').classList.remove('selected-option');
    document.getElementById('general-enquiry').querySelector('svg').outerHTML = defaultSVG;
  }
});
