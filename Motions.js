const tl=gsap.timeline({});
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(CSSAnimation);
tl.to(".initial2",{y:"50%",opacity:1, duration:0.2});
tl.to(".initial2",{x:"30%",opacity:1,rotationZ:180,duration:0.35},"<");
tl.to(".initial1",{x:"-380%",rotationZ:180,opacity:1,duration:0.35},"<");
tl.to(".text",{x:"10%", opacity:1, duration:0.35},"<");
tl.to(".text",{opacity:0,duration:0.5, delay:0.2});
tl.to(".initial1",{x:"-50%",rotationZ:720,duration:0.6},"<");
tl.to(".initial2",{x:"35%",duration:0.6},"<")
tl.to(".initial2",{rotationZ:-720,duration:0.25},"<");
tl.from(".intro",{y:"50%",duration:1})
tl.to("header,footer, .About",{opacity:1, duration:1,delay:1},"<");
tl.to(".intro",{opacity:0, duration:0.5},"<");
tl.to(".intro",{display:"none"},"<");
tl.to("#Home, #About, #Contact",{opacity:1,duration:0.6,delay:0.1},"<")
