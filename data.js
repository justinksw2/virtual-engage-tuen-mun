var APP_DATA = {
  "scenes": [
    {
      //Tung Chung - Chi
      "id": "Tung Chung Chi",
      "name": "Tung Chung Chi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5995994960041475,
        "pitch": 0.15227611823160814,
        "fov": 1.9666892330979586

      },
      "linkHotspots": [],
      "textHotspots": [],
      "infoHotspots": [


        {
          "yaw": -2.2734579044971213,
          "pitch": -0.16549354180301677,
          "title": "港鐵東涌綫延綫概覽",
          "type": "video",
          "image": "img/banners/Explainer-video-cover.PNG",
          "link": "https://youtu.be/TYOSAD06ehk",
          "alt": "港鐵公司正在設計東涌綫延綫，將新增東涌東和東涌西站。",
          "order": "1"
        },
        {
          "yaw": -1.33161493258044,
          "pitch": -0.0692345793969289,
          "title": "「社區鐵路」 - 港鐵東涌綫延綫",
          "type": "video",
          "image": "img/banners/marketing-video-cover.PNG",
          "link": "https://www.youtube.com/watch?v=Q6zPgElKoTE",
          "alt": "港鐵東涌綫延綫是一條社區鐵路。",
          "order": "2"
        },
        {
          "yaw": -0.9533446783720194,
          "pitch": -0.0692345793969289,  // larger, down
          "title": "鐵路。讓城市前行",
          "type": "image",
          "image": "img/panels/Chi/P1.jpg",
          "order": "3",
          "gallery": [
            {
              "image": "img/panels/Chi/P1.jpg",
              "caption": "鐵路。讓城市前行",
              "alt": ""
            }
          ]
        },
        {
          "yaw": -0.06087073337594262,
          "pitch": -0.0692345793969289,
          "title": "屯門南延綫概覽",
          "type": "image",
          "image": "img/panels/Chi/P2.jpg",
          "order": "4",
          "gallery": [
            {
              "image": "img/panels/Chi/P2.jpg",
              "caption": "屯門南延綫概覽",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 0.4838613859037473,
          "pitch": -0.0692345793969289,
          "title": "設計特色",
          "type": "image",
          "image": "img/panels/Chi/P3.jpg",
          "order": "5",
          "gallery": [
            {
              "image": "img/panels/Chi/P3.jpg",
              "caption": "設計特色",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 0.8856312512831259,
          "pitch": -0.0692345793969289,
          "title": "鐵路延伸",
          "type": "image",
          "image": "img/panels/Chi/P4.jpg",
          "order": "6",
          "gallery": [
            {
              "image": "img/panels/Chi/P4.jpg",
              "caption": "鐵路延伸",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 1.3547675363481222,
          "pitch": -0.0692345793969289,
          "title": "設施換新",
          "type": "image",
          "image": "img/panels/Chi/P5.jpg",
          "order": "7",
          "gallery": [
            {
              "image": "img/panels/Chi/P5.jpg",
              "caption": "設施換新",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 1.8463200026451299,
          "pitch": -0.0692345793969289,
          "title": "時間表",
          "type": "image",
          "image": "img/panels/Chi/P6.jpg",
          "order": "7",
          "gallery": [
            {
              "image": "img/panels/Chi/P6.jpg",
              "caption": "時間表",
              "alt": ""
            },
          ]
        },
        // {
        //   "yaw": 1.8891110158952502,
        //   "pitch": -0.11704531658559841,
        //   "title": "時間表",
        //   "type": "image",
        //   "image": "img/panels/Chi/P7.jpg",
        //   "order":"8",
        //   "gallery": [
        //     {
        //       "image": "img/panels/Chi/P7.jpg",
        //       "caption": "時間表"
        //     },
        //   ]
        // },
        {
          "yaw": -1.0304647290410698,
          "pitch": 0.09003330480693151,
          "title": "屯門南站立體模型",
          "type": "model",
          "external": true,
          // "filename": "https://tungchunglineextension.virtual-engage.com/ThreeJSModel/index.html",
          "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCLX",
          "order": "9"
        },
        {
          "yaw": 2.140901022390954,
          "pitch": 0.09008539578129317,
          "title": "查詢 / 提交意見",
          "type": "feedback",
          "external": true,
          "link": "https://forms.office.com/r/79e5xbR3mx",
          "order": "10"
        },
        {
          "yaw": 2.295470892986015,
          "pitch": 0.0948020703894268,
          "title": "暂无",
          "type": "radial",
          "external": true,
          "hotspots": [
            //Justin 02/10/2022
            {
              "type": "homeIcon",
              "link": "doc/InfoCentre.pdf",
              "external": true,
              "order": "13",
              "title": "東涌綫延綫資訊中心"
            }, {
              "type": "ecoIcon",
              "link": "https://arup-tue-eia-3d-visualization-prod-web.azurewebsites.net/#/",
              "external": true,
              "order": "13",
              "title": "互動環境影響評估" + "<br>" + "(只限英文)"
            }, {
              "type": "docIcon",
              "link": "https://www.hyd.gov.hk/tc/road_and_railway/railway_projects/tcle/index.html",
              "external": true,
              "order": "13",
              "title": "刊憲文件"
            }, {
              "type": "linkWeb",
              "link": "http://mtrtungchunglineextension.hk/",
              "external": true,
              "order": "13",
              "title": "項目網站"
            },
          ],
          "order": "12"
        },
        {
          "yaw": -1.6125671079424446,
          "pitch": 0.0645899554613063,
          "title": "展覽導賞",
          "type": "GuidedTour",
          "htmlId": "GuidedTour",
          "image": "",
          "filename": "ve-room-large/Water.pdf",
          "order": "11" //不要改
        },
        // {
        //   "yaw": -0.40087073337594262,  // "yaw": -0.06087073337594262,
        //   "pitch": 0.09287763958809904,  // "pitch": 0.13287763958809904,
        //   "title": "東涌西站立體模型",
        //   "type": "kiosksIcon",
        //   "external": true,
        //   "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCW",
        //   "order": "9"
        // },
        // {
        //   "yaw": 0.33087073337594262,
        //   "pitch": 0.09287763958809904,
        //   "title": "東涌東站立體模型",
        //   "type": "kiosksIcon",
        //   "external": true,
        //   "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCE",
        //   "order": "9"
        // },
      ]
    },
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

var APP_DATA_EN = {
  "scenes": [
    {
      // Tung Chung - Eng
      "id": "Tung Chung Eng",
      "name": "Tung Chung Eng",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5995994960041475,
        "pitch": 0.15227611823160814,
        "fov": 1.9666892330979586
      },
      "linkHotspots": [],
      "textHotspots": [],
      "infoHotspots": [
        {
          "yaw": -2.2734579044971213,
          "pitch": -0.16549354180301677,
          "title": "MTR Tung Chung Line Extension",
          "type": "video",
          "image": "img/banners/Explainer-video-cover.PNG",
          "link": "https://youtu.be/MV0dV59RuWk",
          "order": "1"
        },
        {
          "yaw": -1.33161493258044,
          "pitch": -0.0692345793969289,
          "title": "Community Railway - MTR Tung Chung Line Extension",
          "type": "video",
          "image": "img/banners/marketing-video-cover.PNG",
          "link": "https://www.youtube.com/watch?v=_ZoAsajzxzA",
          "order": "2"
        },
        {
          "yaw": -0.9533446783720194,
          "pitch": -0.0692345793969289,
          "title": "The Railway Keeps the City Moving",
          "type": "image",
          "image": "img/panels/Eng/P1.jpg",
          "order": "3",
          "gallery": [
            {
              "image": "img/panels/Eng/P1.jpg",
              "caption": "The Railway Keeps the City Moving",
              "alt": ""
            }
          ]
        },
        {
          "yaw": -0.06087073337594262,
          // "pitch": -0.13287763958809904,
          "pitch": -0.0692345793969289,
          "title": "Tuen Mun South Extension at a Glance",
          "type": "image",
          "image": "img/panels/Eng/P2.jpg",
          "order": "4",
          "gallery": [
            {
              "image": "img/panels/Eng/P2.jpg",
              "caption": "Tuen Mun South Extension at a Glance",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 0.4838613859037473,
          // "pitch": -0.11939070469195966,
          "pitch": -0.0692345793969289,
          "title": "Design Features",
          "type": "image",
          "image": "img/panels/Eng/P3.jpg",
          "order": "5",
          "gallery": [
            {
              "image": "img/panels/Eng/P3.jpg",
              "caption": "Design Features",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 0.8856312512831259,
          // "pitch": -0.11099622137841557,
          "pitch": -0.0692345793969289,
          "title": "Railway Extension",
          "type": "image",
          "image": "img/panels/Eng/P4.jpg",
          "order": "6",
          "gallery": [
            {
              "image": "img/panels/Eng/P4.jpg",
              "caption": "Railway Extension",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 1.3547675363481222,
          // "pitch": -0.11717409477731564,
          "pitch": -0.0692345793969289,
          "title": "Re-provisioning of Facilities",
          "type": "image",
          "image": "img/panels/Eng/P5.jpg",
          "order": "7",
          "gallery": [
            {
              "image": "img/panels/Eng/P5.jpg",
              "caption": "Re-provisioning of Facilities",
              "alt": ""
            },
          ]
        },
        {
          "yaw": 1.8463200026451299,
          // "pitch": -0.11513563362007172,
          "pitch": -0.0692345793969289,
          "title": "Timetable",
          "type": "image",
          "image": "img/panels/Eng/P6.jpg",
          "order": "7",
          "gallery": [
            {
              "image": "img/panels/Eng/P6.jpg",
              "caption": "Timetable",
              "alt": "Consultation for preliminary design phase is in progress. The Tung Chung Line Extension is expected to be completed in 2029."
            },
          ]
        },
        {
          "yaw": -1.0304647290410698,
          "pitch": 0.09003330480693151,
          "title": "3D Model of Tung Chung Line Extension",
          "type": "model",
          "external": true,
          // "filename": "https://tungchunglineextension.virtual-engage.com/ThreeJSModel/index.html",
          "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCLX",
          "order": "9"
        },
        {
          "yaw": 2.140901022390954,
          "pitch": 0.09008539578129317,
          "title": "Enquiry / Submit Feedback",
          "type": "feedback",
          "external": true,
          "link": "https://forms.office.com/r/79e5xbR3mx",
          "order": "10"
        },
        {
          "yaw": 2.295470892986015,
          "pitch": 0.0948020703894268,
          "title": "暂无",
          "type": "radial",
          "external": true,
          "hotspots": [
            //Justin 02/10/2022
            {
              "type": "homeIcon",
              "link": "doc/InfoCentre.pdf",
              "external": true,
              "order": "13",
              "title": "Tung Chung Line Extension Information Centre"
            }, {
              "type": "ecoIcon",
              "link": "https://arup-tue-eia-3d-visualization-prod-web.azurewebsites.net/#/",
              "external": true,
              "order": "13",
              "title": "Interactive EIA",
            }, {
              "type": "docIcon",
              "link": "https://www.hyd.gov.hk/en/road_and_railway/railway_projects/tcle/index.html",
              "external": true,
              "order": "13",
              "title": "Gazettal Documents"
            }, {
              "type": "linkWeb",
              "link": "http://mtrtungchunglineextension.hk/",
              "external": true,
              "order": "13",
              "title": "Project Website"
            },
          ],
          "order": "12"
        },
        {
          "yaw": -1.6125671079424446,
          "pitch": 0.0645899554613063,
          "title": "Guided Tour",
          "type": "GuidedTour",
          "htmlId": "GuidedTour",
          "image": "",
          "filename": "ve-room-large/Water.pdf",
          "order": "11"
        },
        // {
        //   "yaw": -0.40087073337594262,  // "yaw": -0.06087073337594262,
        //   "pitch": 0.09287763958809904,  // "pitch": 0.13287763958809904,
        //   "title": "3D Model of <br>Tung Chung West Station",
        //   "type": "kiosksIcon",
        //   "external": true,
        //   "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCW",
        //   "order": "9"
        // },
        // {
        //   "yaw": 0.33087073337594262,
        //   "pitch": 0.09287763958809904,
        //   "title": "3D Model of <br>Tung Chung East Station",
        //   "type": "kiosksIcon",
        //   "external": true,
        //   "filename": "https://arup-group.github.io/Tung-Chung-3D-Map/ThreeJSModel/index.html?model=TCE",
        //   "order": "9"
        // },
      ]
    },
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

