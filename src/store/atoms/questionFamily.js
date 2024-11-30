import { atomFamily } from 'recoil'

export let questionFamily=atomFamily({
    key:"questionFamily",
    default:(id)=>{
      return {
        id,
        question:"Ask whatever you want"
      }
    }
})