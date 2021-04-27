var app= new Vue({
    el:"#Сabb",
    data:{
        products:[{id:1,title:"Broccoli ", short_text:'Broccoli (Brassica oleracea var. italica) is an edible green plant ', image:"imgonline-com-ua-Resize-vRrYsunm8Z.jpg",desc:"Full desc"},
        {id:2,title:"Kohlrabi", short_text:"is a biennial vegetable, a low, stout cultivar of wild cabbage.", image:"imgonline-com-ua-Resize-WagTmCE7b9.jpg",desc:"full desc"},
        {id:3,title:"Cauliflower", short_text:"Cauliflower is one of several vegetables in the species Brassica ", image:"imgonline-com-ua-Resize-5zNfjlyqgxY4.jpg",desc:"full desc"},
        {id:4,title:"Sauerkraut", short_text:"Sauerkraut is finely cut raw cabbage that has been fermented by various ", image:"imgonline-com-ua-Resize-DZ9HQC7PWm6u.jpg",desc:"full desc"},
        {id:5,title:"Kale ", short_text:"Kale is a vegetable with green or purple leaves. It is also called borecole", image:"imgonline-com-ua-Resize-zcbdgAyOJo67gD.jpg",desc:"full desc"}],
        product: [{}],
            car: [],
            contFields: [
                { caption: 'Name', text:''},
                { caption: 'Company Name', text:''},
                { caption: 'Position', text:'' },
                { caption: 'City', text:''},
                { caption: 'Country', text:''},
                { caption: 'Telephone', text:''},
                { caption: 'Email', text:''},
                { caption: 'You are a', text:''},
                { caption: 'If other, please specify', text: '' },
                { caption: 'You are interested in', text: '' },
            ],
            btnVisible: 0,
            formVisible: 1,
        },
    
        methods: {
            getProduct: function () {
                if (window.location.hash) {
                    var id = window.location.hash.replace('#', '');
                    if (this.products && this.products.length > 0) {
                        for (i in this.products) {
                            if (this.products[i] && this.products[i].id && id == this.products[i].id)
                                this.product = this.products[i];
                        }
                    }
                }
            },
    
            addToCar: function (id) {
                var car = [];
    
                if (window.localStorage.getItem('car')) {
                    car = window.localStorage.getItem('car').split(',');
                }
    
                if (car.indexOf(String(id)) == -1) {
                    car.push(id);
                    window.localStorage.setItem('car', car.join());
                    this.btnVisible = 1;
                }
            },
    
            checkInCar: function () {
                if (this.product && this.product.id && window.localStorage.getItem('car').split(',').indexOf(String(this.product.id)) != -1) 
                    this.btnVisible = 1;
            },
    
            getCar: function () {
                var storage = [];
                storage = localStorage.getItem('car').split(',')
                for (i in this.products) {
                    if (storage.indexOf(String(this.products[i].id)) != -1) {
                        this.car.push(this.products[i])
                    }
                }
            },
            
            removeFromCar: function (id) {
                var storage = [];
                storage = window.localStorage.getItem('car').split(',')
    
                storage = storage.filter(storageId => storageId != id)
                window.localStorage.setItem('car', storage.join())
    
                this.car = this.car.filter(item => item.id != id)
            },
    
            makeOrder: function () {
                localStorage.clear();
                this.car.splice(0, this.car.length)
                this.formVisible = 0
            },
            btnClick: function(event) {
                window.open("contactus.html");
            }
        },
    
        mounted: function () {
            this.getProduct();
            this.checkInCar();
            this.getCar();
        },
    
    });