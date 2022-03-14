/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
  const Marzipano = window.Marzipano;
  let lan = sessionStorage.getItem('MTRLANGUAGE') || 'lan_CH_0';
  let data = {};
  if (lan == 'lan_CH_0') {
    data = window.APP_DATA;
  } else {
    data = window.APP_DATA_EN;
  }

  const hotspotDefaults = {
    "questionnaire": {
      "color": "#3FB498",
      "iconSrc": "img/icons/Feedback.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "model": {
      "color": "rgba(186, 214, 221,1)",
      "iconSrc": "img/icons/Button_AR.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createModelContent(config.filename, config.order, config.imageSrc, config.title); },
    },
    "GuidedTour": {
      "color": "rgb(247, 147, 32)",
      "iconSrc": "img/icons/Button_info.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createModelContent(config.filename, config.order, config.imageSrc, config.title, config.htmlId); },
    },
    "PopUpWindow": {
      "color": "rgba(130, 61, 95,1)",
      "iconSrc": "img/icons/Button_Link.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createModelContent(config.filename, config.order, config.imageSrc, config.title, config.htmlId); },
    },
    "introduce": {
      "color": "rgb(239 90 39)",
      "iconSrc": "img/icons/Button_VR.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createModelContent(config.filename, config.order, config.imageSrc, config.title); },
    },
    "vr": {
      "color": "#661FB2",
      "iconSrc": "img/icons/vr.png",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "video": {
      "color": "rgb(211, 26, 36)",
      "iconSrc": "img/icons/Button_video.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createVideoContent(config.url, config.order, config.imageSrc, config.title); },
    },
    "image": {
      "color": "rgb(0, 148, 169)",
      "iconSrc": "img/icons/Button_image.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createImageContent(config.gallery, config.order, config.imageSrc, config.title); },
    },
    "map": {
      "color": "#E4003A",
      "iconSrc": "img/icons/Map.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "pdf": {
      "color": "#36A9E1",
      "iconSrc": "img/icons/Booklet.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createPDFContent(config.filename, config.order, config.imageSrc, config.title); },
    },
    "web": {
      "color": "#36A9E1",
      "iconSrc": "img/icons/Examine.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "feedback": {
      "color": "rgba(104, 117, 126,1)",
      "iconSrc": "img/icons/Button_Feedback.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    //链接
    "linkWeb": {
      "color": "rgba(130, 61, 95,1)",
      "iconSrc": "img/icons/Button_Link.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "list": {
      "color": "#E4003A",
      "iconSrc": "img/icons/Examine.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createListContent(config.list); },
    },
    "radial": {
      "color": "#4EC0EB",
      "iconSrc": "img/icons/Radial_Blue.svg",
      "hotspotGenerator": function (config) { return _createBaseSelectHotspot(config.title, config.iconSrc, config.order, config.rotation, config.radius, config.hotspots, config.scene); }
    },
    "custom": {
      "color": "#E4003A",
      "iconSrc": "img/icons/Examine.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createCustomContent(config.filename, config.order, config.imageSrc, config.title, config.id); },
    },
    "docIcon": {
      "color": "rgba(130, 61, 95,1)",
      "iconSrc": "img/icons/Room_Icons_19.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "homeIcon": {
      "color": "rgba(130, 61, 95,1)",
      "iconSrc": "img/icons/Room_Icons_20.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "ecoIcon": {
      "color": "rgba(130, 61, 95,1)",
      "iconSrc": "img/icons/Room_Icons_21.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createIFrameContent(config.url, config.order, config.external, config.imageSrc, config.title); },
    },
    "kiosksIcon": {
      "color": "rgb(240, 90, 39)",
      "iconSrc": "img/icons/kiosks.svg",
      "hotspotGenerator": function (config) { return _createBaseExpandingHotspot(config.title, config.color, config.iconSrc); },
      "contentGenerator": function (config) { return _createModelContent(config.filename, config.order, config.imageSrc, config.title); },
    },
  };

  // Grab elements from DOM.
  const panoElement = document.querySelector('#pano');

  // Viewer options.
  const viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  const scenes = data.scenes.map(function (data) {
    const urlPrefix = "tiles";
    const source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    const geometry = new Marzipano.CubeGeometry(data.levels);

    const limiter = Marzipano.RectilinearView.limit.traditional(6048, 90 * Math.PI / 180);
    const view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    const scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });
    viewChangeEvent(scene);

    // Create link hotspots.
    data.linkHotspots.forEach(function (hotspot) {
      const element = createLinkHotspotElement(hotspot, scene);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function (hotspot) {

      // if(hotspot.type=="videoTest"){
      //   var container = scene.hotspotContainer();
      //
      //   container.createHotspot(document.getElementById('welcome-video1'), {  yaw: hotspot.yaw, pitch: hotspot.pitch},
      //       { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
      // }else{
      const element = _createHotspot(hotspot, scene);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch, }, hotspot.hasOwnProperty("embedded") &&
        { perspective: { radius: hotspot.embedded.radius, extraTransforms: hotspot.embedded.extraTransforms } });

      // }

    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // DOM elements for view controls.
  const viewLeftElement = document.querySelector('#viewLeft');
  const viewRightElement = document.querySelector('#viewRight');

  // Dynamic parameters for controls.
  const velocity = 0.7;
  const friction = 3;

  // Associate view controls with elements.
  const controls = viewer.controls();
  controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
  controls.enableMethod('leftArrowKey');
  controls.enableMethod('rightArrowKey');
  controls.enableMethod('minusKey');
  controls.enableMethod('plusKey');
  controls.enableMethod('aKey');
  controls.enableMethod('dKey');

  function switchScene(scene, initialViewParameters) {
    const viewParams = initialViewParameters ? initialViewParameters : scene.data.initialViewParameters;
    $.fancybox.close();
    scene.view.setParameters(viewParams);
    scene.scene.switchTo();
  }

  // function createLinkHotspot(hotspot, scene) {
  //
  //   const wrapper = document.createElement('div');
  //   wrapper.id = 'link-hotspot';
  //   wrapper.setAttribute('data-title', hotspot.title);
  //   if (hotspot.color) {
  //     wrapper.style.backgroundColor = hotspot.color;
  //   }
  //
  //   // Create anchor element
  //   const link = document.createElement('a');
  //   link.setAttribute('tabindex', hotspot.order);
  //   wrapper.appendChild(link);
  //
  //   const icon = document.createElement('img');
  //   if (hotspot.icon) {
  //     icon.src = hotspot.icon;
  //   } else {
  //     icon.src = 'img/icons/Inspect.svg';
  //   }
  //   const transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
  //   for (let i = 0; i < transformProperties.length; i++) {
  //     const property = transformProperties[i];
  //     if (typeof hotspot.rotation === 'object') {
  //       icon.style[property] = 'rotateX(' + hotspot.rotation.x + 'rad)' + 'rotateY(' + hotspot.rotation.y + 'rad)' + 'rotateZ(' + hotspot.rotation.z + 'rad)';
  //     } else {
  //       icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
  //     }
  //   }
  //   wrapper.appendChild(icon);
  //
  //   // Create Text Hotspot
  //   const labelWrapper = document.createElement('div');
  //   labelWrapper.classList.add('label-wrapper');
  //   if (hotspot.width) {
  //     const translateX = -((hotspot.width - 44) / 2);
  //     labelWrapper.style.width = hotspot.width + "px";
  //     labelWrapper.style.transform = "translateX(" + translateX + "px)";
  //   }
  //   const labelText = document.createElement('p')
  //   labelText.classList.add('label-text')
  //   if (hotspot.label){
  //     labelText.innerHTML = hotspot.label;
  //   } else {
  //     labelText.innerHTML = findSceneDataById(hotspot.target).name;
  //   }
  //   labelWrapper.appendChild(labelText);
  //   wrapper.appendChild(labelWrapper);
  //
  //   wrapper.addEventListener('click', function() {
  //       switchScene(findSceneById(hotspot.target), hotspot.initialViewParameters);
  //   });
  //   wrapper.addEventListener('keydown', function(e) {
  //       const keyDownEvent = e || window.e;
  //       const keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
  //       switch (keycode) {
  //       case 13:
  //           switchScene(findSceneById(hotspot.target), hotspot.initialViewParameters);
  //           return true;
  //
  //       default:
  //           return true;
  //       }
  //   });
  //
  //   focusHotspotEvent(wrapper, hotspot, scene);
  //
  //   return wrapper;
  // }

  function createLinkHotspotElement(hotspot, scene) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    if (hotspot.color) {
      wrapper.style.backgroundColor = hotspot.color;
    }
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');
    wrapper.setAttribute('data-title', hotspot.title);

    // Create anchor element
    const linkWrapper = document.createElement('div');
    const link = document.createElement('a');
    link.setAttribute('tabindex', hotspot.order);
    linkWrapper.appendChild(link);
    wrapper.appendChild(linkWrapper);


    // Create image element.
    var icon = document.createElement('img');
    if (hotspot.icon) {
      icon.src = hotspot.icon;
    } else {
      icon.src = 'img/icons/Inspect.svg';
    }
    icon.classList.add('link-hotspot-icon');


    // Set rotation transform.
    var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      if (typeof hotspot.rotation === 'object') {
        icon.style[property] = 'rotateX(' + hotspot.rotation.x + 'rad)' + 'rotateY(' + hotspot.rotation.y + 'rad)' + 'rotateZ(' + hotspot.rotation.z + 'rad)';
      } else {
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
      }
    }
    // Create Text Hotspot
    var label = document.createElement('p')
    label.classList.add('label')
    if (hotspot.label) {
      label.innerHTML = hotspot.label;
    } else {
      label.innerHTML = findSceneDataById(hotspot.target).name;
    }




    // Add click event handler.
    wrapper.addEventListener('click', function () {
      switchScene(findSceneById(hotspot.target), hotspot.initialViewParameters);
    });
    // Add keydown event handler.
    wrapper.addEventListener('keydown', function (e) {
      var keyDownEvent = e || window.e,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
      //ENTER = 13
      switch (keycode) {
        case 13:
          switchScene(findSceneById(hotspot.target), hotspot.initialViewParameters);
          return true;

        default:
          return true;
      }
      e.preventDefault();
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(label);
    // wrapper.appendChild(tooltip);
    focusHotspotEvent(wrapper, hotspot, scene);
    return wrapper;
  }

  function focusHotspotEvent(element, hotspot, scene) {
    let anchors = element.querySelectorAll("div > div > a")
    if (element.id === "radial-hotspot") {
      anchors = element.querySelectorAll("a");
    }
    let inputs = document.querySelectorAll(".radial-hotspot-input")

    anchors.forEach(function (anchor) {
      anchor.addEventListener('focus', function (e) {
        $(anchor).keyup(function (e) {
          const code = (e.keyCode ? e.keyCode : e.which);
          if (code == 9) {
            element.classList.add('hotspot-focus')
            if (hotspot.yaw != undefined) {
              for (let input = 0; input < inputs.length; input++) {
                const event = new CustomEvent('change');
                const element = inputs[input];
                element.checked = false;
                element.dispatchEvent(event);
                document.getElementById('pano').scrollLeft = 0;
                document.getElementById('pano').scrollTop = 0;
              }
            }

            document.getElementById('pano').scrollLeft = 0;
            document.getElementById('pano').scrollTop = 0;


            const destinationViewParameters = {
              yaw: hotspot.yaw,
              pitch: 0.1,
              fov: 80 * Math.PI / 180
            };

            const options = {
              transitionDuration: 300
            }

            if (hotspot.yaw !== null) {
              scene.lookTo(destinationViewParameters, options);
            }

            setTimeout(function () {
              document.getElementById('pano').scrollLeft = 0;
              document.getElementById('pano').scrollTop = 0;
            }, 1)
          }
        })
      });
      anchor.addEventListener('blur', function (e) {
        element.classList.remove('hotspot-focus'),
          $(anchor).keyup(function (e) {
            const code = (e.keyCode ? e.keyCode : e.which);
            if (code == 9) {
              element.classList.remove('hotspot-focus')
            }
          });
      });
    });
  }

  function viewChangeEvent(scene) {
    scene.addEventListener("viewChange", function (e) {
      let inputs = document.querySelectorAll(".radial-hotspot-input")
      for (let input = 0; input < inputs.length; input++) {
        const event = new CustomEvent('change');
        const element = inputs[input];
        element.checked = false;
        element.classList.remove('hotspot-focus')
        element.dispatchEvent(event);
      }
    })
  }

  function _createVideo(config) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('expanding-hotspot');
    wrapper.setAttribute('data-title', config.title);
    const video = document.createElement('video');
    video.setAttribute('id', 'welcome-video1');
    video.setAttribute('width', '280px');
    video.setAttribute('height', '200px');
    video.setAttribute('muted', true);
    video.setAttribute('controls', true);

    const source = document.createElement('source');
    source.setAttribute('src', 'video/video-test.mp4');
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);
    wrapper.appendChild(video);

    return wrapper;

  }

  function _createBaseExpandingHotspot(title, color, iconSrc) {

    const wrapper = document.createElement('div');
    wrapper.classList.add('expanding-hotspot');
    wrapper.setAttribute('data-title', title);
    wrapper.style.backgroundColor = color;

    const icon = document.createElement('img');
    icon.src = iconSrc;
    wrapper.appendChild(icon);

    return wrapper;
  }

  function _createBaseSelectHotspot(title, iconSrc, order, rotation, radius, hotspots, scene) {

    const wrapper = document.createElement('div');
    wrapper.id = 'radial-hotspot';
    wrapper.classList.add('select-hotspot');
    wrapper.setAttribute('data-title', title);

    // Create anchor element
    const link = document.createElement('a');
    link.setAttribute('tabindex', order);
    wrapper.appendChild(link);

    const input = document.createElement('input');
    input.id = title;
    input.classList.add('radial-hotspot-input');
    input.classList.add('select-hotspot-input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', title);
    input.setAttribute('href', '#');
    wrapper.appendChild(input);

    const label = document.createElement('label');
    label.classList.add('radial-hotspot-label');
    label.classList.add('select-hotspot-label');
    label.setAttribute('for', title);
    const icon = document.createElement('img');
    icon.src = iconSrc;
    label.appendChild(icon);
    wrapper.appendChild(label);

    const content = [];
    hotspots.forEach(function (element) {
      const createdHotspot = _createHotspot(element, scene);
      createdHotspot.classList.add('radial-hotspot-child-hotspot');
      createdHotspot.classList.add('radial-hotspot-content');
      content.push(createdHotspot);
    });

    content.forEach(function (createdHotspot) {
      createdHotspot.addEventListener('keydown', function (e) {
        const event = new CustomEvent('change');
        var keyDownEvent = e || window.e,
          keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

        switch (keycode) {
          // Esc:
          case 27:
            input.checked = false;
            break;
          default:
            return true;
        }
        input.dispatchEvent(event);
        e.preventDefault();
      });
      wrapper.appendChild(createdHotspot);
    });

    link.addEventListener('keydown', function (e) {
      let checked = input.checked;
      const event = new CustomEvent('change');

      const keyDownEvent = e || window.e;
      const keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

      switch (keycode) {
        // Enter:
        case 13:
          input.checked = !checked;
          break;
        // Esc:
        case 27:
          input.checked = false;
          break;
        default:
          return true;
      }
      input.dispatchEvent(event);
      e.preventDefault();
    });

    input.addEventListener('change', function (ev) {
      if (ev.isTrusted) {
        let inputs = document.querySelectorAll(".radial-hotspot-input")
        for (let input = 0; input < inputs.length; input++) {
          const element = inputs[input];
          if (element !== this) {
            const elementHotspots = element.parentElement.querySelectorAll(".radial-hotspot-content");
            element.checked = false;
            elementHotspots.forEach(function (createdHotspot) {
              createdHotspot.style.transform = "translate(0 , 0)";
              createdHotspot.style.visibility = "hidden";
            });
            element.parentElement.classList.remove('radial-hotspot-checked');
          }
        }
      }
      if (this.checked) {
        content.forEach(function (createdHotspot, idx, arr) {
          const theta = ((Math.PI * 2) / arr.length);
          const angle = (rotation ? rotation : 0) + (theta * idx);
          const x = (((radius && !isNaN(radius)) ? radius : 60) * Math.cos(angle));
          const y = (((radius && !isNaN(radius)) ? radius : 60) * Math.sin(angle))
          createdHotspot.style.transform = "translate(" + x + "px, " + y + "px)";
          createdHotspot.style.visibility = "visible";
        });
        wrapper.classList.add('radial-hotspot-checked');
        wrapper.classList.add('select-hotspot-checked');
      } else {
        content.forEach(function (createdHotspot) {
          createdHotspot.style.transform = "translate(0 , 0)";
          createdHotspot.style.visibility = "hidden";
        });
        wrapper.classList.remove('radial-hotspot-checked');
        wrapper.classList.remove('select-hotspot-checked');
      }
    });

    return wrapper;
  }


  function _createIFrameContent(url, order, external, imageSrc, title) {

    const content = document.createElement('div');
    content.classList.add('iframe-content');

    const link = document.createElement('a');
    if (external) {
      link.setAttribute('href', url);
      link.setAttribute('tabindex', order);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    } else {
      link.setAttribute('data-fancybox', '');
      link.setAttribute('tabindex', order);
      link.setAttribute('data-type', 'iframe');
      link.setAttribute('data-src', url);
      link.setAttribute('href', 'javascript:;');
    }
    if (imageSrc) {
      const image = document.createElement('img');
      image.src = imageSrc;
      link.appendChild(image);
    }
    const text = document.createElement('p');
    text.innerHTML = title;
    link.appendChild(text);
    content.appendChild(link);

    return content;
  }

  function _createVideoContent(url, order, imageSrc, title) {
    const content = document.createElement('div');
    content.classList.add('video-hotspot-content');
    content.classList.add('video-content');

    const link = document.createElement('a');
    link.setAttribute('data-fancybox', '');
    link.setAttribute('href', url);
    link.setAttribute('tabindex', order);

    if (imageSrc) {
      const image = document.createElement('img');
      image.src = imageSrc;
      link.appendChild(image);
    }
    const text = document.createElement('p');
    text.innerHTML = title;
    link.appendChild(text);
    content.appendChild(link);

    return content;
  }

  function _createImageContent(gallery, order, imageSrc, title) {

    console.log(gallery)
    console.log(imageSrc)
    const content = document.createElement('div');
    content.classList.add('image-content');

    const link = document.createElement('a');
    link.setAttribute('data-fancybox', title);
    link.setAttribute('data-caption', gallery[0].caption);
    link.setAttribute('href', gallery[0].image);
    link.setAttribute('tabindex', order);
    if (imageSrc) {
      const image = document.createElement('img');
      image.src = imageSrc;
      image.alt = gallery[0].alt;
      console.log(image)
      link.appendChild(image);
    }
    const text = document.createElement('p');
    text.innerHTML = title;
    link.appendChild(text);
    content.appendChild(link);

    if (gallery.length > 1) {
      const galleryElements = document.createElement('div');
      galleryElements.style.display = "none";
      gallery.slice(1).forEach(function (item) {
        const link = document.createElement('a');
        link.setAttribute('data-fancybox', title);
        link.setAttribute('data-caption', item.caption);
        link.setAttribute('href', item.image);
        link.setAttribute('tabindex', "-1");
        galleryElements.appendChild(link);
      })
      content.appendChild(galleryElements);
    }
    return content;
  }

  function _createPDFContent(filename, order, imageSrc, title) {

    const content = document.createElement('div');
    content.classList.add('pdf-hotspot-content');
    content.classList.add('pdf-content');

    const link = document.createElement('a');
    link.setAttribute('tabindex', order);
    link.setAttribute('data-fancybox', '');
    link.setAttribute('data-type', 'iframe');
    link.setAttribute('data-src', 'pdf/web/viewer.html?file=file/' + filename);
    link.setAttribute('href', 'javascript:;');
    if (imageSrc) {
      const image = document.createElement('img');
      image.src = imageSrc;
      link.appendChild(image);
    }
    const text = document.createElement('p');
    text.innerHTML = title;
    link.appendChild(text);
    content.appendChild(link);

    return content;
  }

  function _createModelContent(filename, order, imageSrc, title, htmlId) {
    const content = document.createElement('div');
    content.classList.add('model-hotspot-content');
    content.classList.add('model-content');

    if (htmlId) {
      //Guided Tour
      const link = document.createElement('a');
      link.setAttribute('tabindex', order);
      link.setAttribute('data-modal-target', '#gif');
      link.setAttribute('id', htmlId);
      link.setAttribute('href', 'javascript:void(0)');
      const text = document.createElement('p');
      text.innerHTML = title;
      link.appendChild(text);
      content.appendChild(link);

      return content;
    } else {
      //other
      const link = document.createElement('a');
      link.setAttribute('tabindex', order);
      link.setAttribute('data-fancybox', '');
      link.setAttribute('data-type', 'iframe');

      if (filename.indexOf('http') != -1) {
        //model link
        link.setAttribute('data-src', filename);
      } else {
        //model filename
        link.setAttribute('data-src', 'model/index.html?model=' + filename);
      }
      link.setAttribute('href', 'javascript:;');
      if (imageSrc) {
        const image = document.createElement('img');
        image.src = imageSrc;
        link.appendChild(image);
      }
      const text = document.createElement('p');
      text.innerHTML = title;
      link.appendChild(text);
      content.appendChild(link);

      return content;
    }

  }

  function _createListContent(list) {

    const content = document.createElement('div');
    content.classList.add('list-content');

    list.forEach(function (element, idx, arr) {
      const setup = hotspotDefaults[element.type];
      const contentGeneratorConfig = {
        title: element.text,
        order: element.order ? element.order : null,
        imageSrc: element.image ? element.image : null,
        url: element.link ? element.link : null,
        filename: element.filename ? element.filename : null,
        external: element.external ? element.external : null,
        htmlId: element.htmlId ? element.htmlId : null,
        hotspots: null,
        scene: null
      };
      if (setup.hasOwnProperty("contentGenerator")) {
        const contentElement = setup.contentGenerator(contentGeneratorConfig);
        content.appendChild(contentElement);
      }

      if ((idx + 1) !== arr.length) {
        const horizontalRule = document.createElement("hr");
        content.appendChild(horizontalRule);
      }
    });

    return content;
  }

  function _createCustomContent(order, imageSrc, title, id) {

    const content = document.createElement('div');
    content.classList.add('pdf-hotspot-content');
    content.classList.add('custom-content');

    const link = document.createElement('a');
    link.setAttribute('tabindex', order);
    link.setAttribute('data-fancybox', '');
    link.setAttribute('href', '#' + hotspot.id);
    if (imageSrc) {
      const image = document.createElement('img');
      image.src = imageSrc;
      link.appendChild(image);
    }
    const text = document.createElement('p');
    text.innerHTML = title;
    link.appendChild(text);
    content.appendChild(link);

    return content;
  }

  function _createHotspot(hotspot, scene) {

    const setup = hotspotDefaults[hotspot.type];
    const hotspotGeneratorConfig = {
      title: hotspot.title,
      color: hotspot.color ? hotspot.color : setup.color,
      iconSrc: hotspot.icon ? hotspot.icon : setup.iconSrc,
      order: hotspot.order,
      rotation: hotspot.rotation ? hotspot.rotation : null,
      radius: hotspot.radius ? hotspot.radius : null,
      hotspots: hotspot.hotspots ? hotspot.hotspots : null,
      scene: scene ? scene : null,
      htmlId: hotspot.htmlId ? hotspot.htmlId : null,

    };
    const contentGeneratorConfig = {
      title: hotspot.title,
      order: hotspot.order ? hotspot.order : null,
      imageSrc: hotspot.image ? hotspot.image : null,
      url: hotspot.link ? hotspot.link : null,
      filename: hotspot.filename ? hotspot.filename : null,
      external: hotspot.external ? hotspot.external : null,
      gallery: hotspot.gallery ? hotspot.gallery : null,
      list: hotspot.content ? hotspot.content : null,
      hotspots: hotspot.hotspots ? hotspot.hotspots : null,
      id: hotspot.id ? hotspot.id : null,
      htmlId: hotspot.htmlId ? hotspot.htmlId : null,
      scene: scene ? scene : null
    }

    const hotspotElement = setup.hotspotGenerator(hotspotGeneratorConfig);
    if (setup.hasOwnProperty("contentGenerator")) {
      const contentElement = setup.contentGenerator(contentGeneratorConfig);
      hotspotElement.appendChild(contentElement);
    }

    focusHotspotEvent(hotspotElement, hotspot, scene);

    return hotspotElement;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element) {
    const eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
      'wheel', 'mousewheel'];
    for (let i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (let i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  $('[data-fancybox]').fancybox({
    fullScreen: false,
    smallBtn: true,
    iframe: {
      preload: false,
      keys: {
        close: [27] // escape key
      },
    },
    afterShow: function () {
      $(".fancybox-iframe")
        .contents()
        .keydown(function (e) {
          const keyDownEvent = e || window.e;
          const keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
          switch (keycode) {
            case ESC:
              if ($.fancybox.getInstance()) {
                $.fancybox.close();
              }
              break;

            default:
              break;
          }
          e.preventDefault();
        });

      console.log(controls)
      controls.disableMethod('leftArrowKey');
      controls.disableMethod('rightArrowKey');
      controls.disableMethod('minusKey');
      controls.disableMethod('plusKey');
      controls.disableMethod('aKey');
      controls.disableMethod('dKey');
    },
    afterClose: function () {
      controls.enableMethod('leftArrowKey');
      controls.enableMethod('rightArrowKey');
      controls.enableMethod('minusKey');
      controls.enableMethod('plusKey');
      controls.enableMethod('aKey');
      controls.enableMethod('dKey');
    }
  })

  // Display the initial scene.
  switchScene(scenes[0]);

})();
