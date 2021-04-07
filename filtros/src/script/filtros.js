
const filtros = [{
    "ACF": [
        {
            "id": 1,
            "modelo": "ACF 20",
            "carga": 20
        },
        {
            "id": 2,
            "modelo": "ACF 30",
            "carga": 25
        },
        {
            "id": 3,
            "modelo": "ACF 40",
            "carga": 50
        },
        {
            "id": 4,
            "modelo": "ACF 50",
            "carga": 100
        },
        {
            "id": 5,
            "modelo": "ACF 60",
            "carga": 150
        },
        {
            "id": 6,
            "modelo": "ACF 75",
            "carga": 240
        }
    ],

    "Albacete": [
        {
            "id": 1,
            "modelo": "AQ - 210",
            "carga": 20
        },
        {
            "id": 2,
            "modelo": "AQ - 212",
            "carga": 30
        },
        {
            "id": 3,
            "modelo": "AQ - 214",
            "carga": 60
        },
        {
            "id": 4,
            "modelo": "AQ - 216",
            "carga": 90
        },
        {
            "id": 5,
            "modelo": "AQ - 220",
            "carga": 150
        },
        {
            "id": 6,
            "modelo": "AQ - 225",
            "carga": 180
        }
    ],

    "Jacuzzi": [
        {
            "id": 1,
            "modelo": "15TP1-M",
            "carga": 50
        },
        {
            "id": 2,
            "modelo": "19TP2-M",
            "carga": 125
        },
        {
            "id": 3,
            "modelo": "22TP3-M",
            "carga": 150
        },
        {
            "id": 4,
            "modelo": "26TP4-M",
            "carga": 200
        },
        {
            "id": 5,
            "modelo": "30TP5-M",
            "carga": 250
        }
    ],

    "Veico": [
        {
            "id": 1,
            "modelo": "V-20",
            "carga": 20
        },
        {
            "id": 2,
            "modelo": "V-30",
            "carga": 30
        },
        {
            "id": 3,
            "modelo": "V-40",
            "carga": 75
        },
        {
            "id": 4,
            "modelo": "V-50",
            "carga": 100
        },
        {
            "id": 5,
            "modelo": "V-60",
            "carga": 125
        },
        {
            "id": 6,
            "modelo": "V-70",
            "carga": 175
        },
        {
            "id": 7,
            "modelo": "V-80",
            "carga": 250
        }
    ],

    "Nautilus": [
        {
            "id": 1,
            "modelo": "F300P",
            "carga": 16
        },
        {
            "id": 2,
            "modelo": "F280P",
            "carga": 25
        },
        {
            "id": 3,
            "modelo": "F350P/X",
            "carga": 45
        },
        {
            "id": 4,
            "modelo": "F450P/X",
            "carga": 75
        },
        {
            "id": 5,
            "modelo": "F550P/X",
            "carga": 125
        },
        {
            "id": 6,
            "modelo": "F650P/X",
            "carga": 175
        },
        {
            "id": 7,
            "modelo": "F750P/X",
            "carga": 250
        },
        {
            "id": 8,
            "modelo": "F950P",
            "carga": 500
        },
        {
            "id": 9,
            "modelo": "F1150P",
            "carga": 875
        }
    ],

    "Sodramar": [
        {
            "id": 1,
            "modelo": "FM 25",
            "carga": 18
        },
        {
            "id": 2,
            "modelo": "FM 30",
            "carga": 25
        },
        {
            "id": 3,
            "modelo": "FM 36",
            "carga": 40
        },
        {
            "id": 4,
            "modelo": "FM 40",
            "carga": 65
        },
        {
            "id": 5,
            "modelo": "FM 50",
            "carga": 125
        },
        {
            "id": 6,
            "modelo": "FM 60",
            "carga": 200
        },
        {
            "id": 7,
            "modelo": "FM 75",
            "carga": 300
        }
    ],

    "Dancor": [
        {
            "id": 1,
            "modelo": "DFR-11",
            "carga": 14
        },
        {
            "id": 2,
            "modelo": "DFR-12",
            "carga": 28
        },
        {
            "id": 3,
            "modelo": "DFR-12-4",
            "carga": 28
        },
        {
            "id": 4,
            "modelo": "DFR-15",
            "carga": 45
        },
        {
            "id": 5,
            "modelo": "DFR-15-17",
            "carga": 45
        },
        {
            "id": 6,
            "modelo": "DFR-19",
            "carga": 100
        },
        {
            "id": 7,
            "modelo": "DFR-19-10",
            "carga": 100
        },
        {
            "id": 8,
            "modelo": "DFR-22",
            "carga":140
        },
        {
            "id": 9,
            "modelo": "DFR-22-11",
            "carga": 140
        },
        {
            "id": 10,
            "modelo": "DFR-24",
            "carga":160
        },
        {
            "id": 11,
            "modelo": "DFR-24-13",
            "carga": 160
        },
        {
            "id": 12,
            "modelo": "DFR-30",
            "carga":240
        },
        {
            "id": 13,
            "modelo": "DFR-30-18",
            "carga": 240
        },
        {
            "id": 14,
            "modelo": "DFR-2-22",
            "carga":280
        },
        {
            "id": 15,
            "modelo": "DFR-2-24",
            "carga": 320
        },
        {
            "id": 16,
            "modelo": "DFR-2-30",
            "carga":480
        }
    ],

    "Pentair - SIBRAPE (Antiga mark)": [
        {
            "id": 1,
            "modelo": "BR - 20R",
            "carga": 18
        },
        {
            "id": 2,
            "modelo": "BR - 30R",
            "carga": 25
        },
        {
            "id": 3,
            "modelo": "BR - 40R",
            "carga": 50
        },
        {
            "id": 4,
            "modelo": "BR - 50R",
            "carga": 100
        },
        {
            "id": 5,
            "modelo": "BR - 60R",
            "carga": 150
        },
        {
            "id": 6,
            "modelo": "F28-R",
            "carga": 25
        },
        {
            "id": 7,
            "modelo": "F35-R",
            "carga": 50
        },
        {
            "id": 8,
            "modelo": "F45-R",
            "carga": 100
        },
        {
            "id": 9,
            "modelo": "F55-R",
            "carga": 150
        },
        {
            "id": 10,
            "modelo": "F65-R",
            "carga": 175
        },
        {
            "id": 11,
            "modelo": "F75-R",
            "carga": 275
        }
    ]
}]

export default filtros;