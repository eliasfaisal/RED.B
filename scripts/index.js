onload = ()=>{
    //css shorcuts decalres
    qs = (s)=>{
        return document.querySelector(s);
    }
    qsa = (s)=>{
        return document.querySelectorAll(s);
    }
    ce = (t)=>{
        return document.createElement(t);
    }
    //--- Slider Section

    //definintons
    mem = {
        width: 900,
        height: 270
    }
    current = 0;
    imgs = qsa('.img')
    sbtn = qsa('.sbtn')
    qs('#bke').on = 1;
    backdata = ['assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/4.png', 'assets/5.png']

    qs('#menu').onclick = ()=>{
        qs('#menu_wnd').style.zIndex = 1;
        qs('#menu_wnd').style.opacity = 1;
    }

    qs('.menu_btn').onclick = ()=>{
        qs('#menu_wnd').style.zIndex = -1;
        qs('#menu_wnd').style.opacity = 0;
    }

    //inits
    //center at the middle img
    qs("#screen").scroll(mem.width, 0)
    imgs[1].style.backgroundImage = `url('${backdata[current]}')`;
    //temp
    timedouted = 1
    tmids = []

    //inits

    qs('#screen').scroll(mem.width, 0)
    var s = ce('style')
    document.head.appendChild(s)
    onresize = ()=>{
        if (outerWidth < 300) {
            qs('div.text').style.fontSize = '22px';
        } else {
            qs('div.text').removeAttribute("style");
        }
        if (outerWidth - 10 >= 900) {
            mem.width = 900;
            s.innerHTML = `*{--width:${(900)}px; --height:${410.625}px;}`
            qsa('.btn')[0].style.margin = 'auto 20px';
            qsa('.btn')[1].style.margin = 'auto 20px';
        } else if (outerWidth - 10 <= 900) {
            mem.width = (outerWidth - 10);
            s.innerHTML = `*{--width:${(outerWidth - 10)}px; --height:${(outerWidth - 10) / 2.191780821917808}px;}`
            qsa('.btn')[0].style.margin = 'auto';
            qsa('.btn')[1].style.margin = 'auto';
        }

        qs('#screen').scroll(0, 0)
        qs('#screen').scroll(mem.width, 0)
    }
    onresize()
    //small init
    for (var e of imgs) {
        e.style.transition = "300ms";
    }

    qs("#next").onclick = ()=>{
        qs('#screen').scroll(mem.width, 0)
        clearInterval(id);
        id = setInterval(()=>{
            qs('#next').click()
        }
        , 2325)
        qs('.sbtn_selected').className = qs('.sbtn_selected').className.replace("sbtn_selected ", "")
        if (timedouted == !1) {
            console.log('out!')
            console.log(tmids)
            for (var e of tmids) {
                clearTimeout(e)
            }
            tmids = [];
            timedouted = !0;
            return 0;
        } else {
            timedouted = !1;
        }
        if (current >= backdata.length - 1) {
            current = 0;
        } else {
            current++;
        }
        imgs[2].style.backgroundImage = `url('${backdata[current]}')`;
        imgs[2].style.marginRight = `${mem.width}px`;
        imgs[0].style.width = "0px";

        //
        tmids.push(setTimeout(()=>{
            sbtn[current].className = "sbtn_selected " + sbtn[current].className;
            for (var e of imgs) {
                e.style.transition = "unset";
            }
            imgs[1].style.backgroundImage = `url('${backdata[current]}')`;
            imgs[0].style.width = "inherit";
            imgs[2].style.marginRight = "";
            imgs[2].style.backgroundImage = "";
            tmids.push(setTimeout(()=>{
                for (var e of imgs) {
                    e.style.transition = "300ms";
                }
            }
            , 25))
            timedouted = !0;
            console.log('reached2!');
        }
        , 300))
    }

    qs("#prev").onclick = ()=>{
        qs('#screen').scroll(mem.width, 0)
        clearInterval(id);
        id = setInterval(()=>{
            qs('#next').click()
        }
        , 2325)
        qs('.sbtn_selected').className = qs('.sbtn_selected').className.replace("sbtn_selected ", "")
        if (timedouted == !1) {
            console.log('out!')
            console.log(tmids)
            for (var e of tmids) {
                clearTimeout(e)
            }
            tmids = [];
            timedouted = !0;
            return 0;
        } else {
            timedouted = !1;
        }
        if (current <= 0) {
            current = backdata.length - 1;
        } else {
            current--;
        }
        imgs[0].style.backgroundImage = `url('${backdata[current]}')`;
        imgs[0].style.marginLeft = `${mem.width}px`;
        imgs[2].style.width = "0px";

        //
        tmids.push(setTimeout(()=>{
            sbtn[current].className = "sbtn_selected " + sbtn[current].className
            for (var e of imgs) {
                e.style.transition = "unset";
            }
            imgs[1].style.backgroundImage = `url('${backdata[current]}')`;
            imgs[2].style.width = "inherit";
            imgs[0].style.marginLeft = "";
            imgs[0].style.backgroundImage = "";
            tmids.push(setTimeout(()=>{
                for (var e of imgs) {
                    e.style.transition = "300ms";
                }
            }
            , 25))
            timedouted = !0;
            console.log('reached2!');
        }
        , 300))
    }

    //
    id = setInterval(()=>{
        qs('#next').click()
    }
    , 2000)

    qs("#contactus").onclick = ()=>{
        qs("#btm_bar").style.animation = "";
        qs('div.menu_btn').click();
        document.location.href = "#btm_bar";
        qs("#btm_bar").style.animation = "btmbar_animation ease-in-out 1s";
    }

    qs('#bke').onclick = (e)=>{
        var me = e.target;
        if (me.on) {
            qs('.slider_back').hidden = 1;
            me.innerHTML = "Background : Off";
            me.on = 0;
        } else {
            qs('.slider_back').hidden = 0;
            me.innerHTML = "Background : On";
            me.on = 1;
        }
    }

    onscroll = ()=>{
        if (scrollY > 100) {
            qs('#up').hidden = 0;
        } else {
            qs('#up').hidden = 1;
        }
    }
    qs('#up').onclick = ()=>{
        scroll(0, 0);
    }
    //finish
    qs("#o_layer").style.opacity = 0;
    qs("#o_layer").style.zIndex = -10;
    qs("body").style.overflow = "";
    qs(".slider_back").hidden = 0;

    //
    GMlink = 'https://google.com/search?q=15.59851075637942, 32.55170909027843'
    qs("#map_ogm").onclick = ()=>{
        window.open(GMlink);
    }

    qs("#map_exit").onclick = ()=>{
        qs('#map_wnd').hidden = 1;
        //qs(".map_form").innerHTML = "";
    }

    initMap = ()=>{
        scr = ce('script');
        scr.src = 'https://www.powr.io/powr.js?platform=html';
        qs('.map_form').innerHTML += '<div style="width:100%;height:100%;" class="powr-map" id="501dcfe9_1622976327"></div>';

        scr.onload = ()=>{
            if (qs('.powrLoaded')) {
                idx = setInterval(()=>{
                    if (qs('iframe')) {
                        qs('iframe').style.height = "100%";
                        qs('iframe').style.width = "100%";
                        console.log('#Loadded!');
                        qs(".map_form").querySelector(".o_layer").remove()
                        clearInterval(idx);
                    }
                }
                , 500);
            }
        }
        qs('.map_form').appendChild(scr);
    }
    //

    qs('.maploc').onclick = ()=>{
        if (qs("iframe") == undefined) {
            qs('.map_form').innerHTML += '<div class="o_layer" id="o_layer" style="position:unset;background-size:60px;"></div>';
            initMap();
        }
        qs('#map_wnd').hidden = 0;

    }
}
