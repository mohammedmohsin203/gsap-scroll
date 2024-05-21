"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import style from "./page.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    let details = gsap.utils.toArray("#details");
    let props = gsap.getProperty("#id", "backgroundColor");

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".img", {
      opacity: 1,
      scale: 1,
      y: '100%',
      clipPath: "inset(100% 0% 0%)",
      scale: 1,
    });

    gsap.set(".photo .img", {
      y: 5,
    });

    const animation = gsap.to(".img", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 1,
      y: '0%',
      clipPath: "inset(0% 0% 0%)",
      scale: 1,
      snap: true,
    });

    gsap.to(".photo .img", {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: "#gallery",
      start: "top top",
      end: "bottom bottom",
      pin: "#right",
      animation: animation,
      scrub: 2,
      markers: true,
    });

    gsap.to("#gallery", {
      duration: 1,
      backgroundColor: "#f9d2e5aa",
      scrollTrigger: {
        trigger: "#d1",
        scrub: true,
      },
    });

    gsap.to("#gallery", {
      duration: 1,
      backgroundColor: "#cdd1ffaa",
      scrollTrigger: {
        trigger: "#d2",
        scrub: true,
      },
    });

    gsap.to("#gallery", {
      duration: 1,
      backgroundColor: "#ffe4d3ee",
      scrollTrigger: {
        trigger: "#d3",
        scrub: true,
      },
    });

    gsap.to("#gallery", {
      duration: 1,
      backgroundColor: "#ffb399aa",
      scrollTrigger: {
        trigger: "#d4",
        scrub: true,
      },
    });

    gsap
    .timeline({
      scrollTrigger: {
        trigger: "#text2",
        scrub: 1,
        start: "top 50%",
        markers:true,
        end: "50% 70%",
        
      }
    })
    
    .to("#text2", {
      ease: "none",
      stagger: 0,
      scale:0.25,
      rotate:90,
      borderRadius:"20%",
      yoyo:true,
    });
  });

  return (
    <main>
      <>
        <div className={style.spacer}>
          <div>HEADER</div>
        </div>
        <div className={style.gallery} id="gallery">
          <div className={style.left}>
            <div className={style.detailsWrapper}>
              <div id="details">
                <div className={style.details} id="d1">
                  <div className={style.headline} id={style.col1}></div>
                  <div className={style.text}></div>
                  <div className={style.text}></div>
                  <div className={style.text}></div>
                  <div className={style.text}></div>
                </div>
              </div>
              <div className={style.details} id="d2">
                <div className={style.headline} id={style.col2}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
              </div>
              <div className={style.details} id="d3">
                <div className={style.headline} id={style.col3}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
              </div>
              <div className={style.details} id="d4">
                <div className={style.headline} id={style.col4}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
              </div>
            </div>
          </div>
          <div className={style.right} id="right">
            <div className={style.photos}>
              <div className={style.photos_box}>
                <div className="photo">
                  <div className={style.photo} id={style.col1}>
                    <img src="https://deveb.co/static/media/vim.2c5e9ce4.jpg"className="img"></img>
                  </div>
                </div>
                <div className="photo">

                <div className={style.photo} id={style.col1}>
                  <img src="https://deveb.co/static/media/newdopegood.6e57b4b4.jpg" className="img"></img>
                </div>
                </div>
                <div className="photo">
                <div className={style.photo} id={style.col1}>
                  <img src="https://deveb.co/static/media/am-arc.0bba8786.jpg" className="img"></img>
                </div>
                </div>
                <div className="photo">

                <div className={style.photo} id={style.col1}>
                  <img src="https://deveb.co/static/media/dopegood.b2cad70d.jpg" className="img"></img>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.spacer}>
          <div>FOOTER</div>
        </div>
        <div className="h-screen w-full">
          <div
            className="w-full h-screen flex justify-center items-center text-xl bg-red-400  scale-100 z-[-1]"
            id="text2"
          >
            Box
          </div>
        </div>
      </>
    </main>
  );
}
