var APP_DATA = {
  "scenes": [
    {
      "id": "0-predsie",
      "name": "Predsieň",
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
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.3208726425098227,
        "pitch": 0.01796020287982536,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 0.09205831515019547,
          "pitch": 0.05609461196504206,
          "rotation": 0,
          "target": "2-kpea"
        },
        {
          "yaw": -0.6745999206443187,
          "pitch": 0.05104872518002246,
          "rotation": 0,
          "target": "1-obvacia-as-s-kuchyou"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-obvacia-as-s-kuchyou",
      "name": "Obývacia časť s kuchyňou",
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
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.8480572474217478,
        "pitch": -0.00055372792942876,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 2.42057651651045,
          "pitch": 0.011462987897303378,
          "rotation": 0,
          "target": "0-predsie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kpea",
      "name": "Kúpeľňa",
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
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.5239190852156597,
        "pitch": 0.00381824852654411,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -2.546718190599554,
          "pitch": 0.06046036427822088,
          "rotation": 0,
          "target": "0-predsie"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
