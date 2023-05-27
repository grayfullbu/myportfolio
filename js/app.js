const skillsSection = document.getElementById("skill-bar");

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
      progressBars.foreach(progressbar=>{
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width = '${value}%';
      })
}
function hideProgress(){
      progressBars.forEach(p=>{
            p.style.opacity = 0;
            p.style.width = 0;
      });
}
window.addEventListener('scroll',()=>{
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 2;
      if(sectionPos < sectionPos){
           showProgress();
      }else{
            hideProgress();
      }
});