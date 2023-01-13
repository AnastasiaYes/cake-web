export function getProducts() {
    return [
        {
            name: "Цветы в коробке",
            price: 1300,
            currency: "₽",
            img: "/img/catalog/zephyr/peonies_in_box.jpg",
            description: "Вкусный и нежный домашний зефир,который сделан из натурального ягодного пюре. Оформлен в коробке 23*16",
            category: "Зефир",
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        },
        {
            name: "Медовик",
            price: 1200,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/honeyСake.jpg",
            description: "Медовые коржи и сочный сметанно-сливочный крем, который их пропитывает насквозь. Как в детстве, у любимых медовиков, которые пекли наши мамы и бабушки.",
            category: "Торты",
            sale: true,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 600
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1200
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 2400
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 3600
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 4800
                        }
                    ]
                }
            ],
        },
        {
            name: "Киевский",
            price: 1500,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/kyiv.jpg",
            description: "Хрустящие, хрупкие и нежные белково-ореховые коржи и воздушный крем - Шарлотт, который одновременно увлажняет текстуру торта, но не делает коржи мокрыми. ",
            category: "Торты",
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 750
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1500
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3000
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4500
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6000
                        }
                    ]
                }
            ],
        },
        {
            name: "Наполеон",
            price: 1200,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/napoleon.jpg",
            description: "Это всеми любимая классика не подвластная моде и времени. Нежные, рассыпчатые, слоёные  коржи и очень вкусный крем Пломбир. Торт не приторный! И очень ароматный! ",
            category: "Торты",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 600
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1200
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 2400
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 3600
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 4800
                        }
                    ]
                }
            ],
        },
        {
            name: "Шоколадный ломтик",
            price: 1500,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/chocolateSlice.jpg",
            description: "Лёгкие шоколадные коржи и воздушный сливочный крем-идеальное сочетание! Очень простой и понятный вкус, наверное, именно за это его очень любят дети.",
            category: "Торты",
            sale: true,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 750
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1500
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3000
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4500
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6000
                        }
                    ]
                }
            ],
        },
        {
            name: "Топперы",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/gingerbread/toper.jpg",
            description: "Топперы на торт на любую тему и с картинкой по вашему желанию",
            category: "Пряники / печенье",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                },
            ],
        },
        {
            name: "Арлекин",
            price: 1600,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/arlikin.jpg",
            description: "В этом торте сочетаются два вида коржей- из медового и слоёного теста, много орехов и два вида крема. Торт очень вкусный, насыщенный, прекрасно смотрится на разрезе.",
            category: "Торты",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 800
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1600
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3200
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4800
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6400
                        }
                    ]
                }
            ],
        },
        {
            name: "Мой сникерс",
            price: 1600,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/snickers.jpg",
            description: "Воздушный шоколадный бисквит, карамельный сливочный крем на основе варёной сгущёнки, и хрустящая прослойка безе с арахисом. Эффектный в разрезе. ",
            category: "Торты",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 800
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1600
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3200
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4800
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6400
                        }
                    ]
                }
            ],
        },
        {
            name: "Raffaello",
            price: 1800,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/raffaello.jpg",
            description: "Роскошный торт по мотивам конфет Raffaello. Состоит из ароматных кокосовых бисквитов, очень вкусной хрустящей начинки с миндалём и нежным сливочным кремом.",
            category: "Торты",
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 900
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1800
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3600
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 5400
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 7200
                        }
                    ]
                }
            ],
        },
        {
            name: "Вишневые соты",
            price: 1700,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/cherryHoneycombs.jpg",
            description: "Это вишнёвый торт, в котором трубочки из песочного теста с кисло-сладкой ягодной начинкой, покрыты очень вкусным и нежным сметанным кремом. Эффектный, аппетитный торт в разрезе.",
            category: "Торты",
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 850
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1700
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3400
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 5100
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6800
                        }
                    ]
                }
            ],
        },
        {
            name: "Шоколадный Наполеон",
            price: 1350,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/chocolateNapoleon.jpg",
            description: "Любимая классика в новом исполнении. Нежные, рассыпчатые, слоёные шоколадные коржи и очень вкусный шоколадный крем. Очень вкусный ,ароматный торт! ",
            category: "Торты",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 675
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1350
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 2700
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4050
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 5400
                        }
                    ]
                }
            ],
        },
        {
            name: "Тирамису",
            price: 1400,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/tiramisu.jpg",
            description: "Очень сочный и нежный торт с кофейным вкусом. Пористый ванильный бисквит, кофейно-коньячная пропитка, какао и воздушный сливочный крем.",
            category: "Торты",
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 700
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1400
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 2800
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4200
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 5600
                        }
                    ]
                }
            ],
        },
        {
            name: "Пинчер",
            price: 1700,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/pinscher.jpg",
            description: " Этот торт состоит из кусочков суперпористого необыкновенного шоколадного бисквита ( приготовленного на сметане и сгущённом молоке), вишни (или по вашему желанию ананас или киви) и грецкого ореха( или другие орехи по вашему вкусу). Пропитывается нежным сметанным кремом и получается очень вкусный сочный торт.",
            category: "Торты",
            sale: true,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 850
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1700
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3400
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 5100
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6800
                        }
                    ]
                }
            ],
        },
        {
            name: "Молочная девочка",
            price: 1550,
            currency: "₽",
            pricePostfix: "/ кг",
            img: "/img/catalog/cakes/milkGerl.jpg",
            description: "Торт с нежным сливочным вкусом, напоминающим мороженое. Идеален для детей и кормящих мам. Особенные бисквиты на сгущённом молоке и лёгкий сливочный крем Пломбир. Этот торт можно использовать на определение пола крем будет подкрашен в нужный цвет.",
            category: "Торты",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вес торта",
                    selectName: "weight",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "1 кг (до 5 порций)",
                            value: "1kg"
                        },
                        {
                            text: "1,5 кг (до 8 порций)",
                            value: "1.5kg",
                            addedPrice: 775
                        },
                        {
                            text: "2 кг (до 10 порций)",
                            value: "2kg",
                            addedPrice: 1550
                        },
                        {
                            text: "3 кг (до 15 порций)",
                            value: "3kg",
                            addedPrice: 3100
                        },
                        {
                            text: "4 кг (до 20 порций)",
                            value: "4kg",
                            addedPrice: 4650
                        },
                        {
                            text: "5 кг (до 25 порций)",
                            value: "5kg",
                            addedPrice: 6200
                        }
                    ]
                }
            ],
        },
        {
            name: "Шоколадные капкейки",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/cupcakes/chocolateCupcake.jpg",
            description: "Рассыпчатый шоколадный бисквит, по желанию начинку можно сделать ягодной, кремовая шапочка и украшение на ваш вкус и усмотрение",
            category: "Капкейки",
            sale: false,
            popular: true,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 200
                },
                {
                    name: '4 шт.',
                    price: 800
                },
                {
                    name: "6 шт.",
                    price: 1050
                },
                {
                    name: "8 шт.",
                    price: 1250
                }
            ],
            options: [
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Вишня (50 p.)",
                            value: "cherry",
                            addedPrice: 50
                        },
                        {
                            text: "Шоколад (50 p.)",
                            value: "chocolate",
                            addedPrice: 50
                        },
                        {
                            text: "Клубника (50 p.)",
                            value: "strawberry",
                            addedPrice: 50
                        },
                        {
                            text: "Карамель (50 p.)",
                            value: "caramel",
                            addedPrice: 50
                        },
                        {
                            text: "Орехи и ягоды (70 p.)",
                            value: "nuts and berries",
                            addedPrice: 70
                        }
                    ]
                }
            ],
        },
        {
            name: "Ванильные капкейки",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/cupcakes/vanillaCupcake.jpg",
            description: "Рассыпчатый ванильный бисквит, по желанию начинку можно сделать ягодной, кремовая шапочка и украшение на ваш вкус и усмотрение",
            category: "Капкейки",
            sale: true,
            popular: false,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 200
                },
                {
                    name: '4 шт.',
                    price: 800
                },
                {
                    name: "6 шт.",
                    price: 1050
                },
                {
                    name: "8 шт.",
                    price: 1250
                }
            ],
            options: [
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Вишня (50 p.)",
                            value: "cherry",
                            addedPrice: 50
                        },
                        {
                            text: "Шоколад (50 p.)",
                            value: "chocolate",
                            addedPrice: 50
                        },
                        {
                            text: "Клубника (50 p.)",
                            value: "strawberry",
                            addedPrice: 50
                        },
                        {
                            text: "Карамель (50 p.)",
                            value: "caramel",
                            addedPrice: 50
                        },
                        {
                            text: "Орехи и ягоды (70 p.)",
                            value: "nuts and berries",
                            addedPrice: 70
                        }
                    ]
                }
            ],
        },
        {
            name: "Raffaello капкейки",
            price: 300,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/cupcakes/raffaelloCupcak.jpg",
            description: "Рассыпчатый кокосовый бисквит, внутри капкейка конфетка Raffaello, сверху очень нежный и воздушный крем на основе белого шоколада.",
            category: "Капкейки",
            sale: false,
            popular: false,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 300
                },
                {
                    name: '4 шт.',
                    price: 1200
                },
                {
                    name: "6 шт.",
                    price: 1650
                },
                {
                    name: "8 шт.",
                    price: 2050
                }
            ],
            options: [],
        },
        {
            name: "Цитрусовые капкейки",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/cupcakes/limeCupcake.jpg",
            description: "Рассыпчатый цитрусовый бисквит, по желанию начинку можно сделать ягодной, кремовая шапочка и украшение на ваш вкус и усмотрени",
            category: "Капкейки",
            sale: false,
            popular: true,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 200
                },
                {
                    name: '4 шт.',
                    price: 800
                },
                {
                    name: "6 шт.",
                    price: 1050
                },
                {
                    name: "8 шт.",
                    price: 1250
                }
            ],
            options: [
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Вишня (50 p.)",
                            value: "cherry",
                            addedPrice: 50
                        },
                        {
                            text: "Шоколад (50 p.)",
                            value: "chocolate",
                            addedPrice: 50
                        },
                        {
                            text: "Клубника (50 p.)",
                            value: "strawberry",
                            addedPrice: 50
                        },
                        {
                            text: "Карамель (50 p.)",
                            value: "caramel",
                            addedPrice: 50
                        },
                        {
                            text: "Орехи и ягоды (70 p.)",
                            value: "nuts and berries",
                            addedPrice: 70
                        }
                    ]
                }
            ],
        },
        {
            name: "Домашний зефир",
            price: 400,
            currency: "₽",
            pricePostfix: "/ 300 гр",
            img: "/img/catalog/zephyr/zepher.jpg",
            description: "Вкусный и нежный домашний зефир,который сделан из натурального ягодного пюре станет прекрасным подарком на любой случай.",
            category: "Зефир",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вкус",
                    selectName: "taste",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Яблоко",
                            value: "apple"
                        },
                        {
                            text: "Цитрус",
                            value: "citrus"
                        },
                        {
                            text: "Смородина",
                            value: "currant"
                        },
                        {
                            text: "Микс",
                            value: "mix"
                        }
                    ]
                }
            ],
        },
        {
            name: "Печатный пряник (печенье) \"Роза прованс\"",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/gingerbread/gingerbreadRose.jpg",
            description: "Ароматное тесто, при желании можно добавить начинку",
            category: "Пряники / печенье",
            sale: true,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread",
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                },
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Цитрусовый джем (50 p.)",
                            value: "citrus jam",
                            addedPrice: 50
                        },
                        {
                            text: "Клубничный джем (50 p.)",
                            value: "strawberry jam",
                            addedPrice: 50
                        },
                        {
                            text: "Смородиновый джем (50 p.)",
                            value: "currant jam",
                            addedPrice: 50
                        },
                        {
                            text: "Без начинки",
                            value: "without stuffing"
                        },
                    ]
                }
            ],
        },
        {
            name: "Печатный пряник (печенье) \"Букет\"",
            price: 400,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/gingerbread/gingerbreadBouquet.jpg",
            description: "Ароматное тесто, при желании можно добавить начинку",
            category: "Пряники / печенье",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                },
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Цитрусовый джем (50 p.)",
                            value: "citrus jam",
                            addedPrice: 50
                        },
                        {
                            text: "Клубничный джем (50 p.)",
                            value: "strawberry jam",
                            addedPrice: 50
                        },
                        {
                            text: "Смородиновый джем (50 p.)",
                            value: "currant jam",
                            addedPrice: 50
                        },
                        {
                            text: "Без начинки",
                            value: "without stuffing"
                        },
                    ]
                }
            ],
        },
        {
            name: "Печатный пряник (печенье) \"Ландыши\"",
            price: 400,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/gingerbread/gingerbreadMay-lily.jpg",
            description: "Ароматное тесто, при желании можно добавить начинку",
            category: "Пряники / печенье",
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                },
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Цитрусовый джем (50 p.)",
                            value: "citrus jam",
                            addedPrice: 50
                        },
                        {
                            text: "Клубничный джем (50 p.)",
                            value: "strawberry jam",
                            addedPrice: 50
                        },
                        {
                            text: "Смородиновый джем (50 p.)",
                            value: "currant jam",
                            addedPrice: 50
                        },
                        {
                            text: "Без начинки",
                            value: "without stuffing",
                            addedPrice: 0
                        },
                    ]
                }
            ],
        },
        {
            name: "Пряник (печенье) с глазурью",
            price: 200,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/gingerbread/gingerbreadGlaze.jpg",
            description: "Ароматное тесто покрытое глазурью",
            category: "Пряники / печенье",
            sale: false,
            popular: true,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                },
                {
                    header: "Начинка",
                    selectName: "filling",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Цитрусовый джем (50 p.)",
                            value: "citrus jam",
                            addedPrice: 50
                        },
                        {
                            text: "Клубничный джем (50 p.)",
                            value: "strawberry jam",
                            addedPrice: 50
                        },
                        {
                            text: "Смородиновый джем (50 p.)",
                            value: "currant jam",
                            addedPrice: 50
                        },
                        {
                            text: "Без начинки",
                            value: "without stuffing"
                        },
                    ]
                }
            ],
        },

        {
            name: "Профитроли с сюрпризом",
            price: 1200,
            currency: "₽",
            pricePostfix: "/ 200г",
            img: "/img/catalog/eclairs/profiterolesWithSurprise.jpg",
            description: "Воздушное заварное тесто в сочетании нежного ванильного крема, внутри ягодный джем.",
            category: ["Наборы", "Эклеры / профитроли"],
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        },
        {
            name: "Шоколадные эклеры",
            price: 150,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/eclairs/chocolateEclair.jpg",
            description: "Воздушное заварное тесто в сочетании нежного шоколадным крема и глазурью.",
            category: ["Наборы", "Эклеры / профитроли"],
            sale: false,
            popular: true,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 150
                },
                {
                    name: '4 шт.',
                    price: 600
                },
                {
                    name: "6 шт.",
                    price: 750
                },
                {
                    name: "8 шт.",
                    price: 850
                }
            ],
            options: [],
        },
        {
            name: "Ванильные профитроли",
            price: 1000,
            currency: "₽",
            pricePostfix: "/ 200 г",
            img: "/img/catalog/eclairs/vanillaProfiteroles.jpg",
            description: "Десертные профитроли из вкусного заварного теста, начиненные нежным заварным кремом с ароматом ванили.",
            category: ["Наборы", "Эклеры / профитроли"],
            sale: true,
            popular: false,
            bundles: [],
            options: [],
        },
        {
            name: "Ягодные эклеры",
            price: 150,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/catalog/eclairs/berryEclair.jpg",
            description: "Эклеры с заварным кремом с добавлением ягодного пюре и красносмородиновой помадкой.",
            category: ["Наборы", "Эклеры / профитроли"],
            sale: false,
            popular: false,
            bundles: [
                {
                    name: "Выбрать опцию",
                    price: 150
                },
                {
                    name: '4 шт.',
                    price: 600
                },
                {
                    name: "6 шт.",
                    price: 750
                },
                {
                    name: "8 шт.",
                    price: 850
                }
            ],
            options: [],
        },

        {
            name: 'Набор "Ежик"',
            price: 600,
            currency: "₽",
            img: "/img/dessertSets/cookie_hedgehog.jpg",
            description: "Милый ,чудесный набор печенья(или пряников по вашему желанию). Приятный и вкусный, подарок для детей и взрослых...",
            category: ["Наборы", "Пряники / печенье"],
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                }
            ],
        },

        {
            name: 'Набор "Мишки"',
            price: 600,
            currency: "₽",
            img: "/img/dessertSets/cookie_mouse.jpg",
            description: "Милый ,чудесный набор печенья(или пряников по вашему желанию). Приятный и вкусный, подарок для детей и взрослых.",
            category: ["Наборы", "Пряники / печенье"],
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                }
            ],
        },

        {
            name: 'Набор "Мама"',
            price: 400,
            currency: "₽",
            img: "/img/dessertSets/cookie_mom.jpg",
            description: "Милый ,чудесный набор печенья(или пряников по вашему желанию) для наших любимых мам, приятный и вкусный знак внимания.",
            category: ["Наборы", "Пряники / печенье"],
            sale: false,
            popular: false,
            bundles: [],
            options: [
                {
                    header: "Вид теста",
                    selectName: "testo",
                    classes: "",
                    id: "",
                    answers: [
                        {
                            text: "Выбрать опцию",
                            value: ""
                        },
                        {
                            text: "Пряничное",
                            value: "gingerbread"
                        },
                        {
                            text: "Шоколадное печенье",
                            value: "chocolate cookie"
                        },
                        {
                            text: "Ванильное печенье",
                            value: "vanilla cookie"
                        }
                    ]
                }
            ],
        },

        {
            name: 'Набор "Все включено"',
            price: 1000,
            currency: "₽",
            img: "/img/dessertSets/set_of_all_positions.jpg",
            description: "В наборе два пряника, минипрофитроли, минизефир и леденец в подарок!",
            category: "Наборы",
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        },

        {
            name: 'Набор леденцов',
            price: 60,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/dessertSets/lollipops.jpg",
            description: "Набор леденцов для торта или для детского сладкого стола",
            category: "Наборы",
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        },

        {
            name: 'Корзинки с суфле',
            price: 150,
            currency: "₽",
            pricePostfix: "/ 1 шт",
            img: "/img/dessertSets/baskets.jpg",
            description: "Тонкое,рассыпчатое, песочное тесто, смазанное шоколадом. Начинка: ананасы и нежное воздушное сливочно-сметанное суфле.",
            category: "Наборы",
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        },

        {
            name: "Букет пионов",
            price: 2500,
            currency: "₽",
            img: "/img/catalog/zephyr/bouquet_of_peonies.jpg",
            description: "Вкусный и нежный домашний зефир,который сделан из натурального ягодного пюре. Оформлен в виде нежного букета пионов, диаметр по шапке цветов 22-25 см",
            category: "Зефир",
            sale: false,
            popular: false,
            bundles: [],
            options: [],
        }
    ]
}
