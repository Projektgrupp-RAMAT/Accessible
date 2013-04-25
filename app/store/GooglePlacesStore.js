Ext.define('Accessible.store.GooglePlacesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Accessible.model.GooglePlaces'
    ],

    config: {
        storeId: 'GooglePlacesStore',
        model: 'Accessible.model.GooglePlaces',
        autoLoad: true,

        data:  [

            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1660060,
                        "lng" : 18.1354590
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "197b1009ae8e7bdfce47207b8df218a2e57d72a8",
                "name" : "Quality Hotel Winn Haninge",
                "photos" : [
                    {
                        "height" : 300,
                        "html_attributions" : [],
                        "photo_reference" : "CpQBgQAAACjNOOkCdZSpoDc0gKzXUnXzb8QAr0yS2jYFn3ZCMma91OiIbiNzNMjEmD1aVo2AIk0RYqxCX04xp9cgZ64EJvQq9Wkt_c_XJuQr_ye0jjMV_k2zN9w38X6u8yszlCbKjjmtzbnaOOHTxeWWDYQuGOPminW2wBlHaLZsJt7MjKMTLK4gslgyo0gJD7i3GrJH2hIQBzHAwBzG3BZT_TsgZPFWxhoUH-9g800k4ZEMg6P4c_xGW7MYTcc",
                        "width" : 426
                    }
                ],
                "reference" : "CoQBdwAAACThvQYKuKeTzxIVn_dTUwY7z8ZrHLAvL7I6sYtg2LQ3VKODiOlJayMaSN2QE08stI4ARcBoGX-9lmmC7Yd90Apu6eY2xE2HLKL6tqvddMTZegSugvqjg8k4y6Mj6OKDBgMEDFd7ra4r5ZzLbGlIvyV17DR-_eL4pqlu9BZ52kI0EhDe6elUNvXhjBcMFqMTGskNGhQCn69-Vmur7ZVBvMpCbQZPwnlo9g",
                "types" : [ "restaurant", "lodging", "food", "establishment" ],
                "vicinity" : "Rudsjöterrassen 3A, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1768040,
                        "lng" : 18.1495340
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "20ce295ba3f2c52e8d0ca8f10bce19fdb317b487",
                "name" : "Pizza Hut Haninge",
                "opening_hours" : {
                    "open_now" : true
                },
                "price_level" : 1,
                "rating" : 4.0,
                "reference" : "CnRvAAAASFSuwZBoFnlX5eIkmDgXk4SJPT49fp0FEi-TKmgYu2qJK2uzqf8Pm1QQhz-OQFLR75A46868fxhENEF7v_Ir0zVUlFYbCEKLJazEzaWLNmZZb0O7IPg_gYtNOMB7zfHREw2S_psC1pRLiRbsyGfkEBIQtUvG5SCadjbAo9yDCdwWahoUR902VqVgg-_8ywKVWQ2t-Y0qRb4",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "Vendelsövägen 17, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1768530,
                        "lng" : 18.1488590
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "08b1aed8c65f2fdfbd071d5c981046dbcef1159a",
                "name" : "McDonald's",
                "price_level" : 1,
                "rating" : 2.60,
                "reference" : "CnRnAAAAgyvCN7UhhAqDXN6rGGXH-NY8E50cqvbmcAEtfi1EkbIVqsY4bsX_Z-zcng7WEzocF90XTzvdy0njQ5nEmNLY7rHDazzyaogiiO95YuTY7zxAIASVwKM4JyCOAV50kYzy2lBjWYrS1kyuewZ31ShHpxIQ4fgGlZZlaAoXFi8dBXv9FxoUZYLy3mRSt1iDH3UjDrVgRjSnOoE",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "Vendelsövägen 15, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1693360,
                        "lng" : 18.140560
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
                "id" : "e48ee39a696d96642b040651ec0c237502aa0b2b",
                "name" : "Cafe Momo i Haninge Centrum",
                "reference" : "CoQBeQAAAG9Wce8y9Y_PXByQo6fQdrZ8qwJreyPrjg-YVzEkJoqjp8w-rbtyiYGA5le-V1xbKMYJFjgHXZPDxAcJLyoM3K7s_ZCUzHZaRGy74c5zVZBImF2pEpYrVoGmJDA1tfx8acHvN8XHLsiNwEAjUKOFKn1scS4s5YCXsljsZi33_7uGEhB0qpwXSMrAoMONkeP9lg6aGhSPM9L73BByw4TGLqjQnbQsURy5NQ",
                "types" : [ "cafe", "restaurant", "food", "establishment" ],
                "vicinity" : "Anunds Gränd, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1559420,
                        "lng" : 18.1342580
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "1ce945a1448c531fa94ccd1258a92300383e6c8d",
                "name" : "OKQ8 Handen",
                "opening_hours" : {
                    "open_now" : true
                },
                "photos" : [
                    {
                        "height" : 264,
                        "html_attributions" : [],
                        "photo_reference" : "CqQBmAAAAKmhA9Sw87wx6d-NH0pWOGZQJbooh5IRbnPecWA38nZaCxBMpVMM4acAXsLbNPCQpjcDM0MvgqqRvxSEwsT2I5CkpGlrybQeXhd0GYF_ctIr9el18wGS8YI-qPlNFgBmR2eT8gcvZllYsaRy6zqMmdIut50ki3KvMuAdFLpsYg3OBJGBDQysMnEMtmWA1AZ1rCbKtcbEA9AUjASIblrEtjESEEi0Uz9mBPmN1QIOhr9YYHIaFEbn3_ljOwn-Lgcs3fehnrraaOVi",
                        "width" : 264
                    }
                ],
                "rating" : 4.0,
                "reference" : "CnRpAAAAJxcy-stNvu0d49BI74AM6pzejhuDc8AkSDoMPVhOE5suGHl8Oobm0DPZjVo6KCs_hO_HmXtlK6uOG7mQVBoIyDMKEU7OoFs4mjtJDBLZ0_vYOizrYInY-d3QKFsWBooxosURwjwZNuKgNt6yJwnmdxIQVhmjEaKZVqXOSFfwz53jrxoUeuRSNMgmknmWk5PX3DSWJn1uTNA",
                "types" : [
                    "store",
                    "meal_takeaway",
                    "restaurant",
                    "food",
                    "gas_station",
                    "establishment"
                ],
                "vicinity" : "Nynäsvägen 130, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1681180,
                        "lng" : 18.1399980
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "3e07d9affb376b7954e3223004cb08a50577b2ed",
                "name" : "Mcdonald's",
                "opening_hours" : {
                    "open_now" : false
                },
                "price_level" : 1,
                "reference" : "CnRoAAAAYwfAgy_mSXrYTuZIISQQZQ8AKvdYa8-C2LET2TpR15RXk802c3l0l8f-u8O6UhglI9O2HyGuxFvnAbpx4p4CGCwuBWxCmMflZbvPsMWRBgAJaq-8cTTi1dbTrjkEdKBSLfbhss2sannS0xlo-mi6hhIQa-4UJWtBRICxEgF2rYddGRoUnb6rW6idbtVpAby8rKpq5H7sU3I",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "Stores Gränd 28, Haninge"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1713160,
                        "lng" : 18.1437720
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
                "id" : "171b89a1bde50434f1d005b2fd8dadc281a3bc91",
                "name" : "Bönorna i Handen",
                "opening_hours" : {
                    "open_now" : false
                },
                "reference" : "CnRuAAAAieg_bS4tgU-JpK_1EQyR5QB0qjjWufQIhWWuV7fuLiR-pWvqvN1d8tiIk1yVPHP4FODEHjjr5kWMCG62SJGUTYGAiZ4R_8sYMCxo1xRA0Bj2IObrU7CEx1gfdnkT0OFl_qRDXq0SdfE61ZsP0zk0rBIQqe8JYQ0rJ-H_4dtCh_z5bxoU5iERhjBDtHZxvwq-JwYhlEIm2xo",
                "types" : [ "cafe", "restaurant", "food", "establishment" ],
                "vicinity" : "Runstensvägen 22, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1700730,
                        "lng" : 18.1394150
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "02b80ded48cbf6c3e479d77d5824644a51c1ad81",
                "name" : "Talaat Thai Thaifood Deli HB",
                "opening_hours" : {
                    "open_now" : false
                },
                "reference" : "CoQBeQAAAEy6vxwCjcBSIvzG4vFYVRQ-Ramulvsr7VHfbBj8VHDlCskxy6pElmM7oaffq-LyLFGgqwTTTfko-6Gl1cn0TiVxZbhd3pufhuJuCtMfDZ8ogZ021Ad4w3Ccxrmse9JwE12qXGHJjxcFes6MSpDpizpXiuzhl-wwjAvGWlE_b--iEhA8o3QA61AdbetYGj3LBTmSGhSjICB5GKBcfXuBHTSSdFkwjPJUpg",
                "types" : [ "meal_takeaway", "restaurant", "food", "establishment" ],
                "vicinity" : "Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1696140,
                        "lng" : 18.1401160
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "98271fead1d1515cf0cd3bfc1d7302ac53a09b98",
                "name" : "Taco Bar",
                "opening_hours" : {
                    "open_now" : false
                },
                "reference" : "CnRmAAAASBGi4P4NvKW-5jc6yvZDKqmYdqA3m6-zFVRPwRlOb64emqzhIfYWEd5IpEVW-mCGLwLBwK-ukE8JHgper3lrb2sJQ9FKjIuK3LKBPgmsB0XIldzb8pf1X6Ei2H9r6vxrjVAm-UOyLGVVhVJfgpdLhRIQa-97dZgl9O6QqJVynKMpAhoUikZpBuPc3VlYd4LSvbfVAW7kzl8",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "Haninge Centrum, Haninge"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1754780,
                        "lng" : 18.1451240
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                "id" : "c87c6a22f73390989a70b7706411e2f0a079b6ea",
                "name" : "Stavsnäs Grill & Kiosk HB",
                "reference" : "CoQBeAAAAMgu2UyIDqZe4ZDA4RbeuATJGOjEmYBYTKzyfAhx5NXFs1MWmQDeJAQyGDx2CwBGnxQzXgj1TU8mRPK3GOHqGULyVriURQWleg87mh_0EqPS7DTRsl87xydGrpswEQyP659UrCY9Yc_3Tm1wG0oUB9NjbgmG4-066iSMsBIW_7JzEhCRLGgZoqx2Oj6QeGEEa0rdGhSBSx2D8Zk-hC5BcsjvEonzaXM2zw",
                "types" : [ "food", "establishment" ],
                "vicinity" : "Runstensvägen 21, C/o Deniz, Handen"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1683280,
                        "lng" : 18.1402240
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "6c6445b14e895888d577fc51cd1f50f3619483d4",
                "name" : "Grekiska Kolgrillen",
                "reference" : "CoQBcQAAAKbXg-6lnPFNXlMfTorG4R9Zdi9pBAyak0POkdVvc2js-EObg0KxJJKXh8QCoutPZpv7soRHFUvXzD72SoWwZLolXhKB0Mn8uxwIPbCsF2v65RsZewYn01tW2puNbB2m7LegVZF895H7HWmC5men1C7I7Q0pB9VpIL1fKjeUzvlNEhBfTz8QXTf5JWGsvVzU2ycaGhQsySUhj6L-s7KWlDF-_5buJqCKRA",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1692880,
                        "lng" : 18.1409010
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "868ac50f32db197df7ac85d453fff69a9af41153",
                "name" : "Haninge Grill & Kebab",
                "reference" : "CoQBcwAAAKWiwaUJmgZZekIh8SpjtyonENZs-ZMF9JSB8ebMsLsv47nRvbyOEQYuGZi2y53MF8PB_7FIl5gpn6ZqEoxQ1mz_vgkcFmItbcA2Bjpcf4vxeYVgbnEHEiu3gcdJmzVp6TH3XoZeb2RGBG6Y8rvwxm1waqRSLoXm28JkCEIyuHtuEhDhOJFSf0GmxY3eIlDykZfhGhTblQvPXvni4U7HAxFaNSYK8KgicA",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.169570,
                        "lng" : 18.1404220
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "1eb93955ea75d3b49ae5663872fd9ffbd1e0c09c",
                "name" : "Espresso House",
                "reference" : "CnRsAAAAFCkEqYCpMA0Jk0kmVtnkEUclgeYdMeMQubApnoyk2QF3xCrJF6NpEg4XtN9lA2hUwhcxCZpO72kaLqg2ypfAjDb3mOL165HTMz1Ob1W6NM0uMvHLdxXvPp3SsIR2yv2yTVSmLptD-L-BwP3nHWt3rRIQrXA3YLWgh992DEm1TQul0xoUw37Eadm8_U604CNZQdP3HPT3fCk",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1693580,
                        "lng" : 18.1403780
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "8f61fc6c8e97b4a844f87d96aa040957a09e023f",
                "name" : "Café Momo",
                "reference" : "CnRnAAAAv7PuApBADx8BcXhByQ3wWiHEhQjF3s6Cs_pxWq2tGTtC0qPLoezMJHUaeR-Wp8biywyPY_36GqgU7-k_P30fnkycf10BiaYSedo392IDM35wL55LMGtPl6icg67gmHGVAzVNAO-cMDfe_UY_8lqksRIQO4oB_o22dCHnMygrEiNyUxoUj9EGnwHMPA4oVT5DTY68MDCExlI",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1682180,
                        "lng" : 18.1396060
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "19d902a651accef58e7eccf92fbe93adf65bb65f",
                "name" : "Café Espresso",
                "reference" : "CnRsAAAA3IuA5xfQRxpf7a2E1GRR5ShMLRJTfInusDKMjcpoBaTZXSHXK7SWvCYeIQQJNXtlJ16qyuJlz_M_MeJ3YNFVtVwXI328X9JBhdxLZnZx4Yn-d6ffp1pR0oF8KsdMRv2ok96WlYrg_46TaWKSUEPirBIQ924Kvy9P0VfN7EyBIgv49xoUHURi-GNTSdx5CnTCWZ_jyZ-VoEY",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1686360,
                        "lng" : 18.1396070
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "2a35400885d8890d94bfbf393d964218d3022485",
                "name" : "Sabis",
                "photos" : [
                    {
                        "height" : 984,
                        "html_attributions" : [ "Från användare" ],
                        "photo_reference" : "CnRoAAAAoMuQwVd-LqFgvyHfAB84cSNJKZXW43ir8B-y37ft506mFLwMeWR5NRmdu4B7etc8wPi0BqLLJogHVESerxWQs5wXfjT7JC5rP6YgQ3bXGMV9b3GvwU7O4Ha3WYqbSbNfEb7PvMrgM-Jx_wMwzvmQhBIQ50GcjiK57okpzKOE9CnVkRoU_H6TepeOWkHEMSqVpdfjtUhaW24",
                        "width" : 1632
                    }
                ],
                "reference" : "CnRiAAAACAHeAD5LEXFZ_QfcfBGPPQ8K_5BBnBx4mvqEWx7Q5lFNflhZwuV5WGtzoDccmFzaCcEVMZvThME2bk9LnyLz8qLT_djiktKmLRbEH7dftHV4uMnUzOIk3VSv3jzhZ4_37lYCL5Dy2q7JHJsQxTgatBIQWulrtFll6-eIXy4arqTF7xoUCU9XXuuAaRQitIIPSAzgDF-xHCE",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1694060,
                        "lng" : 18.1402840
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "702186daefd0923ef1ceefca756ff30d6a48e7bb",
                "name" : "Himalaya Café & Tea",
                "reference" : "CoQBcgAAAOoNCXwoaRuGiw2Py5xEzBt4J33aTL2njHi7tcj6xrPLVLE4_40sAS2R5wya83TfhF200pCDSs3eliNFaxvaegMgoakCGigktVUd6jpQR954LsndtXPqHDHLKsh1bZlw1MD_PiB0X49g9-yqwXFmnZbzjtvvwcn1WvZIw1RDBPRMEhDsyciDD7o9_DRibl-gUBw2GhQtbJGzB0f_baj3EinykXyVnpR8Mg",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1701680,
                        "lng" : 18.1396180
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "c8fa7815adc2dcdbcadbcab2688cb8da713f857e",
                "name" : "Ruyi Sushi & Wok",
                "reference" : "CnRuAAAAvl7ngIjJAzfc6wwz3n-fQigdWckvXIfK5tIUB8O3MoAIsS6efOIxu9xmRklvKkCnKA301XqmX2-O6SwEDskzw8xgggFk_aTtqBoG5lzzajeS1i6OR6usu1KllTC4ZDtg8L5BxOFzcKPC50aiClY9_xIQugftRVj5q9zghdaEP2tX-BoUfcW3lNvCSc32EDT0qfbascH6Qb4",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                "geometry" : {
                    "location" : {
                        "lat" : 59.1689470,
                        "lng" : 18.1399380
                    }
                },
                "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                "id" : "ba35bbc63e490b556ab06588753ed8a8140cde06",
                "name" : "Subway",
                "reference" : "CnRjAAAATIvCErfqFkp0ST9XVXU2s_Qqur2NxVxOF9LzG7QLCsdy5OHf07tr18RTRSEP0IYXlB0mUuxwHfYeTrwtjuElhqHSrJ0bFrFvNUA6w2yrDEICLT-2WkNJ3e529g7-o2_GxgiU5BB9vRy7M9fsFCrfphIQmHoZuBDLJhTgeMMoYZIvXhoU3TJETfSSxHn8I6W4_Ue2SbeSPH0",
                "types" : [ "restaurant", "food", "establishment" ],
                "vicinity" : "1"
            },
            {
                    geometry: {
                        location: {
                            lat: 59.2962720,
                            lng: 18.0787850
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: '901280896851d04f857882b82f64ce7ff2852779',
                    name: 'Peony Restaurang',
                    opening_hours: {
                        open_now: true
                    },
                    photos: [
                        {
                            height: 396,
                            html_attributions: [

                            ],
                            photo_reference: 'CpQBhwAAAOinJSBei0Ul7uZjDCpm520Y-Q2bhBF6AT6iI_PKpkmzZZiOF8_cqK2_bQWSRFWiHu6ZPO6Vi6xyA0xItnVrSTmBnI8bZ3k7DOOjb5vPtkPaPvtG_b9Hu9dxbySBC8XKlbtRiPIYLBk3u-vqzahtLDeu6bWUwmlZ-5XcXW5pWsqAGsVbF-djifX3i3dRW8vDzxIQP4b4Hw7WfQNWSG-q4hCEIxoUiPaHJBpnZqEKEyvBeWrCYyDb9Ks',
                            width: 550
                        }
                    ],
                    rating: 3.80,
                    reference: 'CnRuAAAASusfwKbYF79T4p-Odv37KXrchGIaYipI0GQKnr2Rh-JO8fVQKsrv5zyY2NQ879NjvHuvhIMAHVS-8EpCoZ3MiTz8aMVis00Lxp4yg8dcW2BhoGapk_5EPhcItmVAf5sT_Nk2gnikiOncj45fCDvRyBIQDgMb1T2LGr6O_mP9TZrUUBoUQAQtSWjGQDsjQT2oYBhxStHYRoM',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: 'Skulptörvägen 4, Johanneshov'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.290070,
                            lng: 18.0916240
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: 'a337416fd0bd5fd6239b982817df751c84c3e194',
                    name: 'Restaurang Pizzeria Il Coure',
                    rating: 4.10,
                    reference: 'CoQBegAAAAmUSvzH1_w1qPthyBtoXT_IIZDbBwDNyrM51NOYksQ-xWUaza_LQN9NPQQkE4VhnYuvRfbCcFWzpchvi-c_qe8ayTPHLWysGxatmIYO2JVn8N0b4UdZpicSm-iyicy9AGsbCc-aIHGmJDc6awU0hPtSYSwGn_Qy4yRecugo2vu9EhAo-4Ic_E1NU2EjXfyuwt5LGhQ8V040xZbFTCSFMzhQr_v1w5dawQ',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: 'Fyrvaktarkroken 16, Enskededalen'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.2940050,
                            lng: 18.0804810
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: '495fdf30a87d51e898782ae539d3fc45284d7ed0',
                    name: 'Mcdonald\'s',
                    price_level: 1,
                    reference: 'CnRoAAAAG8Tr4lqilZB6vlaXxYEyOww-6D7uvfEn6Gctf24PFRdt0jwIWmKmvZJapRMkINaPQQv83E2Fm8McbjJp1gS3oDTsemcEGCOGnTY2C5RuBWjMvEAc2UeCvYvLm260k7b0PhR3ugRH3UAbC9r0UPMiSxIQNB1hPXG922XmrUba66EfNRoU_fPpkNOsAT-Nzwnuc3_PieZjHVQ',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: '61'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.295450,
                            lng: 18.0855280
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: 'be1d1d6c1d54df81dc80ba85bb9fb7b8d14ed833',
                    name: 'Chilipizza',
                    opening_hours: {
                        open_now: true
                    },
                    reference: 'CnRpAAAAtQZ_pnxDpk0ozKz4ce9VofDojf92CboddSL4XTgYNuILElmwjO6rmGshBIr2YzvfiYzJ6RnTWBJpIfrjfz9n223WdjuDIR2zPD-3lI5WWg0lTWtr0Ai7p4WdWO9VRxkSc3Am5ciK8O-DSYrcw_dYihIQJFNKQwLCVRwhfT40mPlv5BoU4_UDSBlZKCA_7Ci0oSyYKakyvFc',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: 'Burspråksvägen 6, Johanneshov'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.2942050,
                            lng: 18.0824760
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: '3acd67756b076adb9549a14c7e74c683f251a26f',
                    name: 'Global Eatertainment',
                    photos: [
                        {
                            height: 504,
                            html_attributions: [

                            ],
                            photo_reference: 'CoQBcQAAAApRQ9Ewc0QiXNJW1zloeeK8DFZpak8W40Eu9b9WLiDcEeZCRb0QHUzUe-6_aOOsaut1HDUiAmqeR-mpex2vWdJaffd9pCodrdgGRKggKLljedSrbh--SRmspIJo0O7GObpBF_7yWSEdjet260jnO8gzbS3ef1mW63bg2SAgrFCUEhCsyoi8mltyuN4ZfQpLXpb-GhRRQ2PpKlu6A8XKcrsH5ZrQGmtdKg',
                            width: 756
                        }
                    ],
                    reference: 'CoQBcgAAAKTErBI7psdB7k9Phoc7_Ze3JHlqr9e17EjNzreXcCA9j_fwDg4_MnR7fwHNM34NG0r-efnDps5WgJAnKoNxzLNO4G_F5F8uWrFM80xCH4CAMy0CA4ppoj-0pzpH04EuiHV0I50Pek136j1RzEWAMJqHla36qtGKp_AErJAaIi-pEhCTpg0yO9dyokbR5vy6iBteGhQN7MeE19e7UGPdbVA4IgNZTQlcSg',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: 'Globentorget 2, Johanneshov'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.2926090,
                            lng: 18.0824230
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: '1ce304e947c2b94b52e09cf165dd917fb7c124f1',
                    name: 'Cafe Garcon',
                    reference: 'CnRpAAAAxDTR6o3AHWVGOgf0CLOAi4gtV7BvRQ9MI2-nrAtBUx4JmxuWdwsws5RZvy7gMbyDEOQkWdC_g7OLIEiS6HOsv6aEGNx9As6jt8u8X0DN0Txzhhgxg5moGyVgExL-e-skbSro4TORqWl9DVGbMXxU3xIQy5ojw4yvEhc77jLntFOLShoUMslQhwYXDWaChD3UBPL05rVUJUA',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: '61'
                },
                {
                    geometry: {
                        location: {
                            lat: 59.2941290,
                            lng: 18.0802440
                        }
                    },
                    icon: 'http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
                    id: '5a229ed9e68efcf553c0a7271c860272ef3297c0',
                    name: 'The Coffee House',
                    reference: 'CnRuAAAAIRxSvra-vbSzQOz1Pb8vs_KmCwhgm0DKEfSfFrOaPmKTWBp6ynsQAc_AApVm9vT4VUCdN5ESAn8cIEcvW-RF9gwanerprkuZT49ANvFIoZF_satzv_HLbOhSXvIvZnxH1tCVQvSltWoxBnKqfqAN6RIQIaKAmU0OUT2SjRScKl813hoUPIVJ3ZRnBtJ3v66vjLA123R9MWM',
                    types: [
                        'restaurant',
                        'food',
                        'establishment'
                    ],
                    vicinity: '61'
                }
            ]





    }
});