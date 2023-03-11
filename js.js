const video = document.getElementById("video");

const callback = (e) =>{
    if(e[0].isIntersecting){
        video.play()
    }else{
        video.pause()
    }
}

const observer = new IntersectionObserver(callback)

observer.observe(video)
