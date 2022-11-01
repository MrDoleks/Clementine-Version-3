
//set the program to use axios - HTTP request library 
const axios = require("axios")

const baseUrl = 'https://api.wolframalpha.com/v2/query';

async function wolframApiRequest(inputString) {
    const params = {
        appid: "YE2GH2-7XEH8PPG7R", 
        output:"json",
        input: inputString
    };

    //Calls get function on axios - makes GET request
    const response = await axios.get(baseUrl, { params });
    return response.data; // wolfram api response
}

module.exports = {
    wolframApiRequest,
}

// const EXAMPLE_WOLFRAM_DATA = {
// 	"queryresult":{
// 		"success":true,
// 		"error":false,
// 		"numpods":11,
// 		"datatypes":"Cemetery,HistoricalSite,Leader,Person,USCounty",
// 		"timedout":"",
// 		"timedoutpods":"",
// 		"timing":2.414,
// 		"parsetiming":0.263,
// 		"parsetimedout":false,
// 		"recalculate":"",
// 		"id":"MSP279911c36fa657bb49560000306he2ei852a35i5",
// 		"host":"https:\/\/www6b3.wolframalpha.com",
// 		"server":"4",
// 		"related":"https:\/\/www6b3.wolframalpha.com\/api\/v1\/relatedQueries.jsp?id=MSPa280011c36fa657bb495600002f5hb6463572dd436430556393126808734",
// 		"version":"2.6",
// 		"inputstring":"who was george washington",
// 		"pods":[
// 			{
// 				"title":"Input interpretation",
// 				"scanner":"Identity",
// 				"id":"Input",
// 				"position":100,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280111c36fa657bb495600005e0g31f51d8h8eg3?MSPStoreType=image\/gif&s=4",
// 							"alt":"George Washington (politician)",
// 							"title":"George Washington (politician)",
// 							"width":208,
// 							"height":19,
// 							"type":"Default",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"George Washington (politician)"
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Default"
// 				}
// 			},
// 			{
// 				"title":"Basic information",
// 				"scanner":"Data",
// 				"id":"BasicInformation:PeopleData",
// 				"position":200,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":[
// 								"CemeteryData",
// 								"PeopleData",
// 								"USCountyData"
// 							]
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280211c36fa657bb495600005fh6568h13f536h4?MSPStoreType=image\/gif&s=4",
// 							"alt":"full name | George Washington\ndate of birth | Friday, February 11, 1732 (Julian calendar) (290 years ago)\nplace of birth | Westmoreland County, Virginia\ndate of death | Saturday, December 14, 1799 (Gregorian calendar) (age: 67 years) \n (222 years ago)\nplace of death | Mount Vernon, Virginia\nplace of burial | Washington Family Tomb (Virginia)",
// 							"title":"full name | George Washington\ndate of birth | Friday, February 11, 1732 (Julian calendar) (290 years ago)\nplace of birth | Westmoreland County, Virginia\ndate of death | Saturday, December 14, 1799 (Gregorian calendar) (age: 67 years) \n (222 years ago)\nplace of death | Mount Vernon, Virginia\nplace of burial | Washington Family Tomb (Virginia)",
// 							"width":546,
// 							"height":238,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"full name | George Washington\ndate of birth | Friday, February 11, 1732 (Julian calendar) (290 years ago)\nplace of birth | Westmoreland County, Virginia\ndate of death | Saturday, December 14, 1799 (Gregorian calendar) (age: 67 years) \n (222 years ago)\nplace of death | Mount Vernon, Virginia\nplace of burial | Washington Family Tomb (Virginia)"
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Grid"
// 				},
// 				"states":[
// 					{
// 						"count":3,
// 						"value":"Local historical calendar",
// 						"delimiters":"",
// 						"states":[
// 							{
// 								"name":"Local historical calendar",
// 								"input":"BasicInformation:PeopleData__Local historical calendar"
// 							},
// 							{
// 								"name":"Gregorian calendar",
// 								"input":"BasicInformation:PeopleData__Gregorian calendar"
// 							},
// 							{
// 								"name":"Julian calendar",
// 								"input":"BasicInformation:PeopleData__Julian calendar"
// 							}
// 						]
// 					}
// 				]
// 			},
// 			{
// 				"title":"Image",
// 				"scanner":"Data",
// 				"id":"Image:PeopleData",
// 				"position":300,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"imagesource":"http:\/\/en.wikipedia.org\/wiki\/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280311c36fa657bb495600005fa0a74033dih804?MSPStoreType=image\/gif&s=4",
// 							"alt":"Image",
// 							"title":"",
// 							"width":125,
// 							"height":150,
// 							"type":"Default",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":false,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":""
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Default"
// 				}
// 			},
// 			{
// 				"title":"Leadership positions",
// 				"scanner":"Data",
// 				"id":"Position:LeaderData",
// 				"position":400,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":"LeaderData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280411c36fa657bb495600005b08ig0g6eae1ei1?MSPStoreType=image\/gif&s=4",
// 							"alt":"official position | country | start date | end date\nsenior officer (Department of Defense) | United States | July 13, 1798 | December 14, 1799\npresident (1st) | United States | April 30, 1789 | March 4, 1797\ncontinental Army general and commander in chief (Department of Defense) | United States | June 15, 1775 | December 23, 1783",
// 							"title":"official position | country | start date | end date\nsenior officer (Department of Defense) | United States | July 13, 1798 | December 14, 1799\npresident (1st) | United States | April 30, 1789 | March 4, 1797\ncontinental Army general and commander in chief (Department of Defense) | United States | June 15, 1775 | December 23, 1783",
// 							"width":546,
// 							"height":244,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"official position | country | start date | end date\nsenior officer (Department of Defense) | United States | July 13, 1798 | December 14, 1799\npresident (1st) | United States | April 30, 1789 | March 4, 1797\ncontinental Army general and commander in chief (Department of Defense) | United States | June 15, 1775 | December 23, 1783"
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Grid"
// 				}
// 			},
// 			{
// 				"title":"Timeline",
// 				"scanner":"Data",
// 				"id":"Timeline:PeopleData",
// 				"position":500,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280511c36fa657bb4956000016ai0hgf461f055e?MSPStoreType=image\/gif&s=4",
// 							"alt":"Timeline",
// 							"title":"",
// 							"width":550,
// 							"height":38,
// 							"type":"Default",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":""
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Default"
// 				},
// 				"states":[
// 					{
// 						"name":"Include today",
// 						"input":"Timeline:PeopleData__Include today"
// 					}
// 				]
// 			},
// 			{
// 				"title":"Notable facts",
// 				"scanner":"Data",
// 				"id":"NotableFacts:PeopleData",
// 				"position":600,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"datasources":{
// 							"datasource":"TheWikimediaFoundationIncWikipedia"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280611c36fa657bb495600001eh076i7ii7f56a6?MSPStoreType=image\/gif&s=4",
// 							"alt":"First US president and preeminent military and political leader during formative years of the country\nChampion of Federalist policies, including strong national government, who oversaw drafting of the US Constitution\nFamously led troops across icy Delaware River for significant victory over British at Trenton\nCommander in chief of the Continental Army during the Revolutionary War",
// 							"title":"First US president and preeminent military and political leader during formative years of the country\nChampion of Federalist policies, including strong national government, who oversaw drafting of the US Constitution\nFamously led troops across icy Delaware River for significant victory over British at Trenton\nCommander in chief of the Continental Army during the Revolutionary War",
// 							"width":533,
// 							"height":170,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"First US president and preeminent military and political leader during formative years of the country\nChampion of Federalist policies, including strong national government, who oversaw drafting of the US Constitution\nFamously led troops across icy Delaware River for significant victory over British at Trenton\nCommander in chief of the Continental Army during the Revolutionary War"
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Grid"
// 				}
// 			},
// 			{
// 				"title":"Physical characteristics",
// 				"scanner":"Data",
// 				"id":"PhysicalCharacteristics:PeopleData",
// 				"position":700,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280711c36fa657bb495600004h73i6e2h294e576?MSPStoreType=image\/gif&s=4",
// 							"alt":"height | 6' 2\"",
// 							"title":"height | 6' 2\"",
// 							"width":126,
// 							"height":37,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"height | 6' 2\""
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Grid"
// 				},
// 				"states":[
// 					{
// 						"name":"Show metric",
// 						"input":"PhysicalCharacteristics:PeopleData__Show metric"
// 					}
// 				]
// 			},
// 			{
// 				"title":"Familial relationships",
// 				"scanner":"Data",
// 				"id":"FamilialRelationships:PeopleData",
// 				"position":800,
// 				"error":false,
// 				"numsubpods":3,
// 				"subpods":[
// 					{
// 						"title":"Parents",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280811c36fa657bb495600004f30ec4b81245112?MSPStoreType=image\/gif&s=4",
// 							"alt":"Augustine Washington | Mary Ball Washington",
// 							"title":"Augustine Washington | Mary Ball Washington",
// 							"width":323,
// 							"height":19,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"Augustine Washington | Mary Ball Washington"
// 					},
// 					{
// 						"title":"Siblings",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP280911c36fa657bb4956000056fagh885e5189c0?MSPStoreType=image\/gif&s=4",
// 							"alt":"John Augustine Washington | Betty Washington Lewis | Samuel Washington | Charles Washington | Mildred Washington | ...",
// 							"title":"John Augustine Washington | Betty Washington Lewis | Samuel Washington | Charles Washington | Mildred Washington | ...",
// 							"width":448,
// 							"height":40,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"John Augustine Washington | Betty Washington Lewis | Samuel Washington | Charles Washington | Mildred Washington | ..."
// 					},
// 					{
// 						"title":"Spouse",
// 						"microsources":{
// 							"microsource":"PeopleData"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP281011c36fa657bb495600001e36h9058dg7g865?MSPStoreType=image\/gif&s=4",
// 							"alt":"Martha Washington (1759-1799)",
// 							"title":"Martha Washington (1759-1799)",
// 							"width":221,
// 							"height":19,
// 							"type":"Default",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"Martha Washington (1759-1799)"
// 					}
// 				],
// 				"expressiontypes":[
// 					{
// 						"name":"Grid"
// 					},
// 					{
// 						"name":"Grid"
// 					},
// 					{
// 						"name":"Grid"
// 					}
// 				],
// 				"states":[
// 					{
// 						"name":"Show full dates",
// 						"input":"FamilialRelationships:PeopleData__Show full dates"
// 					},
// 					{
// 						"name":"More",
// 						"input":"FamilialRelationships:PeopleData__More"
// 					}
// 				]
// 			},
// 			{
// 				"title":"Associated historical sites",
// 				"scanner":"Data",
// 				"id":"AssociatedHistoricalSites:PeopleData",
// 				"position":900,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"microsources":{
// 							"microsource":[
// 								"HistoricalSiteData",
// 								"PeopleData",
// 								"USCountyData"
// 							]
// 						},
// 						"datasources":{
// 							"datasource":"Freebase"
// 						},
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP281111c36fa657bb495600000fgf96f608624a2f?MSPStoreType=image\/gif&s=4",
// 							"alt":"Mount Rushmore (Pennington County, South Dakota) | George Washington Masonic National Memorial (Alexandria, Virginia, United States) | George Washington Birthplace National Monument (Westmoreland County, Virginia) | Tomb of the Unknown Revolutionary War Soldier (Philadelphia, Pennsylvania, United States) | Washington Memorial Chapel (Montgomery County, Pennsylvania) | ... (total: 8)",
// 							"title":"Mount Rushmore (Pennington County, South Dakota) | George Washington Masonic National Memorial (Alexandria, Virginia, United States) | George Washington Birthplace National Monument (Westmoreland County, Virginia) | Tomb of the Unknown Revolutionary War Soldier (Philadelphia, Pennsylvania, United States) | Washington Memorial Chapel (Montgomery County, Pennsylvania) | ... (total: 8)",
// 							"width":537,
// 							"height":100,
// 							"type":"Grid",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"Mount Rushmore (Pennington County, South Dakota) | George Washington Masonic National Memorial (Alexandria, Virginia, United States) | George Washington Birthplace National Monument (Westmoreland County, Virginia) | Tomb of the Unknown Revolutionary War Soldier (Philadelphia, Pennsylvania, United States) | Washington Memorial Chapel (Montgomery County, Pennsylvania) | ... (total: 8)"
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Grid"
// 				},
// 				"states":[
// 					{
// 						"name":"More",
// 						"input":"AssociatedHistoricalSites:PeopleData__More"
// 					}
// 				]
// 			},
// 			{
// 				"title":"Wikipedia summary",
// 				"scanner":"Data",
// 				"id":"WikipediaSummary:PeopleData",
// 				"position":1000,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP281211c36fa657bb495600004ac43bgbc877i77e?MSPStoreType=image\/gif&s=4",
// 							"alt":"George Washington (February 22, 1732 - December 14, 1799) was an American soldier, statesman, and Founding Father, who served as the first president of the United States from 1789 to 1797. Appointed by the Continental Congress as commander of the Continental Army, Washington led the Patriot forces to victory in the American Revolutionary War, and presided at the Constitutional Convention ...",
// 							"title":"George Washington (February 22, 1732 - December 14, 1799) was an American soldier, statesman, and Founding Father, who served as the first president of the United States from 1789 to 1797. Appointed by the Continental Congress as commander of the Continental Army, Washington led the Patriot forces to victory in the American Revolutionary War, and presided at the Constitutional Convention ...",
// 							"width":536,
// 							"height":120,
// 							"type":"Default",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":"George Washington (February 22, 1732 - December 14, 1799) was an American soldier, statesman, and Founding Father, who served as the first president of the United States from 1789 to 1797. Appointed by the Continental Congress as commander of the Continental Army, Washington led the Patriot forces to victory in the American Revolutionary War, and presided at the Constitutional Convention ...",
// 						"infos":{
// 							"links":{
// 								"url":"http:\/\/en.wikipedia.org\/wiki?curid=11968",
// 								"text":"Full entry"
// 							}
// 						}
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Default"
// 				},
// 				"states":[
// 					{
// 						"name":"More",
// 						"input":"WikipediaSummary:PeopleData__More"
// 					}
// 				]
// 			},
// 			{
// 				"title":"Wikipedia page hits history",
// 				"scanner":"Data",
// 				"id":"PopularityPod:WikipediaStatsData",
// 				"position":1100,
// 				"error":false,
// 				"numsubpods":1,
// 				"subpods":[
// 					{
// 						"title":"",
// 						"img":{
// 							"src":"https:\/\/www6b3.wolframalpha.com\/Calculate\/MSP\/MSP281311c36fa657bb49560000556693a1d8gf7f68?MSPStoreType=image\/gif&s=4",
// 							"alt":"Wikipedia page hits history",
// 							"title":"",
// 							"width":546,
// 							"height":170,
// 							"type":"TimeSeriesPlot_1",
// 							"themes":"1,2,3,4,5,6,7,8,9,10,11,12",
// 							"colorinvertable":true,
// 							"contenttype":"image\/gif"
// 						},
// 						"plaintext":""
// 					}
// 				],
// 				"expressiontypes":{
// 					"name":"Default"
// 				},
// 				"states":[
// 					{
// 						"name":"Log scale",
// 						"input":"PopularityPod:WikipediaStatsData__Log scale"
// 					}
// 				]
// 			}
// 		],
// 		"assumptions":{
// 			"type":"SubCategory",
// 			"word":"george washington",
// 			"template":"Assuming ${desc1}. Use ${desc2} instead",
// 			"count":2,
// 			"values":[
// 				{
// 					"name":"GeorgeWashington::7v7hm",
// 					"desc":"George Washington (politician)",
// 					"input":"*DPClash.PersonE.george+washington-_*GeorgeWashington%3A%3A7v7hm-"
// 				},
// 				{
// 					"name":"GeorgeWashington::z6zk7",
// 					"desc":"George Washington (baseball player)",
// 					"input":"*DPClash.PersonE.george+washington-_*GeorgeWashington%3A%3Az6zk7-"
// 				}
// 			]
// 		},
// 		"sources":[
// 			{
// 				"url":"https:\/\/www6b3.wolframalpha.com\/sources\/CemeteryDataSourceInformationNotes.html",
// 				"text":"Cemetery data"
// 			},
// 			{
// 				"url":"https:\/\/www6b3.wolframalpha.com\/sources\/HistoricalSiteDataSourceInformationNotes.html",
// 				"text":"Historical site data"
// 			},
// 			{
// 				"url":"https:\/\/www6b3.wolframalpha.com\/sources\/LeaderDataSourceInformationNotes.html",
// 				"text":"Leader data"
// 			},
// 			{
// 				"url":"https:\/\/www6b3.wolframalpha.com\/sources\/PeopleDataSourceInformationNotes.html",
// 				"text":"People data"
// 			},
// 			{
// 				"url":"https:\/\/www6b3.wolframalpha.com\/sources\/USCountyDataSourceInformationNotes.html",
// 				"text":"US county data"
// 			}
// 		]
// 	}
// }