import { atom } from "recoil";

export let chatBotAttributes=atom({
    key: "chatBotAttributes",
    default:{}
    //default: {backendUrl:null,geminiApi:null,title:null,prompt:null,theme:null,botIcon:null,userIcon:null,stylizeTitle:null,description:null,cta:null}
})