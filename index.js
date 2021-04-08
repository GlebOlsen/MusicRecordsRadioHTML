const baseUrl = "https://pairprogradiorest.azurewebsites.net/api/radios"

Vue.createApp({
    data(){
        return{
            musicrecords: [],
            musicrecordId: null,
            singlemusicrecord: null,
            addData: { title: "", artist: "", duration: 0, year: 0 },
            addMessage: "",
            deleteId: 0,
            deleteMessage: ""
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
        async addmusicrecord() {
            console.log(this.addData)
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deletemusicrecord(deleteId) {
            const url = baseUrl + "/" + deleteId 
            try{
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllRecords()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")