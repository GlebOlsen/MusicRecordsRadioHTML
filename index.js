const baseUrl = "https://pairprogram-radiorest.azurewebsites.net/api/radios"

Vue.createApp({
    data(){
        return{
            musicrecords: [],
            musicrecordId: null,
            singlemusicrecord: null
        }
    },
    methods: {
        getAllRecords(){
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(url){
            try{
                const response = await axios.get(url)
                this.musicrecords = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getmusicrecordById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singlemusicrecord = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
    
}).mount("#app")