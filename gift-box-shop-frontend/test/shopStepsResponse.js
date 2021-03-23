export const stepsResponse = {
    basePrice: 15,
    steps: [
        {
            id: 'box-type',
            title: 'Box Type',
            options: [
                {
                    id: 'box-shape',
                    title: 'Box Shape & Content',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Box Shape',
                            options: [
                                {
                                    id: 'rb4030',
                                    title: 'Rectangle Box (40cm x 30cm)',
                                    image: {
                                        url: '',
                                        alt: '40cm by 30cm Rectangle Box',
                                    },
                                    price: 5,
                                },
                                {
                                    id: 'rb2015',
                                    title: 'Rectangle Box (20cm x 15cm)',
                                    image: {
                                        url: '',
                                        alt: '20cm by 15cm Rectangle Box',
                                    },
                                    price: 0,
                                },
                                {
                                    id: 'sb30',
                                    title: 'Square Box (30cm x 30cm)',
                                    image: {
                                        url: '',
                                        alt: '30cm by 30cm Square Box',
                                    },
                                    price: 2.5,
                                },
                                {
                                    id: 'cb15',
                                    title: 'Circle Box (15cm radius)',
                                    image: {
                                        url: '',
                                        alt: '15cm radius Circle Box',
                                    },
                                    price: 2.5,
                                },
                            ],
                        },
                        {
                            name: 'Box Contents',
                            options: [
                                {
                                    id: '6p',
                                    title: '6 Pastries',
                                    boxCompatible: ['rb4030'],
                                    image: {
                                        url: '',
                                        alt: '6 Pastries',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 6,
                                        },
                                        {
                                            id: 'extras',
                                            amount: 3,
                                        },
                                    ],
                                },
                                {
                                    id: '4p1bl',
                                    title: '4 Pastries & 1 liquor bottle',
                                    boxCompatible: ['rb4030'],
                                    image: {
                                        url: '',
                                        alt: '4 Pastries & 1 liquor bottle',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 4,
                                        },
                                        {
                                            id: 'liquor',
                                            amount: 1,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '3p1s1bl',
                                    title: '3 Pastries, 1 Homemade soap & 1 Liquor bottle',
                                    boxCompatible: ['rb4030'],
                                    image: {
                                        url: '',
                                        alt: '3 Pastries, 1 Homemade soap & 1 Liquor bottle',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 3,
                                        },
                                        {
                                            id: 'soap',
                                            amount: 1,
                                        },
                                        {
                                            id: 'liquor',
                                            amount: 1,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '5p',
                                    title: '5 Pastries',
                                    boxCompatible: ['sb30'],
                                    image: {
                                        url: '',
                                        alt: '5 Pastries',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 5,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '3p1bl',
                                    title: '3 Pastries & 1 liquor bottle',
                                    boxCompatible: ['sb30'],
                                    image: {
                                        url: '',
                                        alt: '3 Pastries & 1 liquor bottle',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 3,
                                        },
                                        {
                                            id: 'liquor',
                                            amount: 1,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '3p1s1bl',
                                    title: '2 Pastries, 1 Skin Product & 1 Liquor bottle',
                                    boxCompatible: ['sb30'],
                                    image: {
                                        url: '',
                                        alt: '2 Pastries, 1 Skin Product & 1 Liquor bottle',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 2,
                                        },
                                        {
                                            id: 'skin',
                                            amount: 1,
                                        },
                                        {
                                            id: 'liquor',
                                            amount: 1,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '4p',
                                    title: '4 Pastries',
                                    boxCompatible: ['rb2015', 'cb15'],
                                    image: {
                                        url: '',
                                        alt: '4 Pastries',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 4,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                                {
                                    id: '2p1bl',
                                    title: '2 Pastries & 1 liquor bottle',
                                    boxCompatible: ['rb2015', 'cb15'],
                                    image: {
                                        url: '',
                                        alt: '2 Pastries & 1 liquor bottle',
                                    },
                                    steps: [
                                        {
                                            id: 'pastries',
                                            amount: 2,
                                        },
                                        {
                                            id: 'liquor',
                                            amount: 1,
                                        },
                                        {
                                            id: 'extras',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'box-design',
                    title: 'Box Design',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Box Design',
                            options: [
                                {
                                    id: 'colored',
                                    title: 'Color',
                                    image: {
                                        url: '',
                                        alt: 'Colored design gift box',
                                    },
                                    price: 0,
                                    boxCompatible: ['rb4030', 'rb2015', 'cb15'],
                                    suboptions: {
                                        name: "Choose the box's color",
                                        type: 'picker',
                                        options: [
                                            {
                                                name: 'White',
                                                default: true,
                                                hex: '#FFF',
                                                boxCompatible: ['rb4030', 'rb2015', 'cb15'],
                                            },
                                            {
                                                name: 'Black',
                                                hex: '#000',
                                                boxCompatible: ['rb4030', 'rb2015', 'cb15'],
                                            },
                                            {
                                                name: 'Red',
                                                hex: '#F00',
                                                boxCompatible: ['rb4030', 'rb2015'],
                                            },
                                            {
                                                name: 'Pink',
                                                hex: '#F77',
                                                boxCompatible: ['cb15'],
                                            },
                                            {
                                                name: 'Sky Blue',
                                                hex: '#99F',
                                                boxCompatible: ['cb15'],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: 'wooden',
                                    title: 'Wooden',
                                    image: {
                                        url: '',
                                        alt: 'Wooden design gift box',
                                    },
                                    price: 5,
                                    boxCompatible: ['sb30'],
                                    suboptions: {
                                        name: "Choose the box's color",
                                        type: 'picker',
                                        options: [
                                            {
                                                name: 'Wooden',
                                                default: true,
                                                hex: '#A47449',
                                                boxCompatible: ['sb30'],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: 'colored-with-design-lid',
                                    title: 'Colored box with custom design on lid',
                                    image: {
                                        url: '',
                                        alt: 'Colored box with custom design on lid',
                                    },
                                    price: '10',
                                    boxCompatible: ['rb4030', 'rb2015'],
                                    fileUploader: true,
                                    suboptions: {
                                        name: "Choose the box's color",
                                        type: 'picker',
                                        options: [
                                            {
                                                name: 'White',
                                                default: true,
                                                hex: '#FFF',
                                                boxCompatible: ['rb4030', 'rb2015'],
                                            },
                                            {
                                                name: 'Black',
                                                hex: '#000',
                                                boxCompatible: ['rb4030', 'rb2015'],
                                            },
                                            {
                                                name: 'Red',
                                                hex: '#F00',
                                                boxCompatible: ['rb4030', 'rb2015'],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'pastries',
            title: 'Pastries',
            options: [
                {
                    id: 'pastry',
                    title: 'Pastry',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Pastry Type',
                            options: [
                                {
                                    id: 'regular',
                                    title: 'Regular (might have glutten)',
                                    image: {
                                        url: '',
                                        alt:
                                            'Regular type pastry (might have gluten and regular sugar)',
                                    },
                                },
                                {
                                    id: 'diet',
                                    title: 'Diet (sweetened with sugar substitute)',
                                    image: {
                                        url: '',
                                        alt: 'Diet (sweetened with sugar substitute)',
                                    },
                                },
                                {
                                    id: 'gluten-free',
                                    title: 'Gluten Free',
                                    image: {
                                        url: '',
                                        alt: 'Gluten Free',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'Pastry',
                            options: [
                                {
                                    id: 'croissant',
                                    price: 7.5,
                                    title: '2 Croissants',
                                    pastryType: ['regular'],
                                    image: {
                                        url: '',
                                        alt: '2 Croissants',
                                    },
                                },
                                {
                                    id: 'brigadeiro',
                                    price: 10,
                                    title: '6 Brigadeiros',
                                    pastryType: ['regular'],
                                    image: {
                                        url: '',
                                        alt: '6 Brigadeiros',
                                    },
                                },
                                {
                                    id: 'chocolate-chip-cookies',
                                    price: 5,
                                    title: '4 Chocolate Chip Cookies',
                                    pastryType: ['regular', 'diet', 'gluten-free'],
                                    image: {
                                        url: '',
                                        alt: '4 Chocolate Chip Cookies',
                                    },
                                },
                                {
                                    id: 'brownies',
                                    price: 5,
                                    title: '2 Brownies',
                                    pastryType: ['regular', 'diet'],
                                    image: {
                                        url: '',
                                        alt: '2 Brownies',
                                    },
                                },
                                {
                                    id: 'quiche',
                                    price: 7.5,
                                    title: '2 Quiches',
                                    pastryType: ['regular', 'gluten-free'],
                                    image: {
                                        url: '',
                                        alt: '2 Quiches',
                                    },
                                },
                                {
                                    id: 'cornbread',
                                    price: 5,
                                    title: '1 Cornbread Slice',
                                    pastryType: ['regular', 'diet'],
                                    image: {
                                        url: '',
                                        alt: '1 Cornbread Slice',
                                    },
                                },
                                {
                                    id: 'chocolate-strawberries',
                                    price: 2.5,
                                    title: '4 Chocolate Covered Strawberries',
                                    pastryType: ['regular', 'diet', 'gluten-free'],
                                    image: {
                                        url: '',
                                        alt: '4 Chocolate Covered Strawberries',
                                    },
                                },
                                {
                                    id: 'cheesecake',
                                    price: 7.5,
                                    title: '1 Small Cheesecake',
                                    pastryType: ['diet', 'gluten-free'],
                                    image: {
                                        url: '',
                                        alt: '1 Small Cheesecake',
                                    },
                                },
                                {
                                    id: 'cupcakes',
                                    price: 7.5,
                                    title: '2 Small Cupcakes with frosting',
                                    pastryType: ['regular', 'diet'],
                                    image: {
                                        url: '',
                                        alt: '2 Small Cupcakes with frosting',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'liquor',
            title: 'Liquor',
            options: [
                {
                    id: 'liquor',
                    title: 'Liquor',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Liquor',
                            options: [
                                {
                                    id: 'orange-liquor',
                                    price: 30,
                                    title: 'Artisan Orange Infused Liquor',
                                    image: {
                                        url: '',
                                        alt: 'Artisan Orange Infused Liquor',
                                    },
                                },
                                {
                                    id: 'coffee-liquor',
                                    price: 35,
                                    title: 'Artisan Coffee Infused Liquor',
                                    image: {
                                        url: '',
                                        alt: 'Artisan Coffee Infused Liquor',
                                    },
                                },
                                {
                                    id: 'mint-liquor',
                                    price: 30,
                                    title: 'Artisan Mint Infused Liquor',
                                    pastryType: ['regular', 'diet', 'gluten-free'],
                                    image: {
                                        url: '',
                                        alt: 'Artisan Mint Infused Liquor',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'soap',
            title: 'Homemade Soap',
            options: [
                {
                    id: 'soap',
                    title: 'Homemade Soap',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Homemade Soap',
                            options: [
                                {
                                    id: 'orange-soap',
                                    price: 15,
                                    title: 'Homemade Orange Infused Soap',
                                    image: {
                                        url: '',
                                        alt: 'Homemade Orange Infused Soap',
                                    },
                                },
                                {
                                    id: 'coffee-soap',
                                    price: 20,
                                    title: 'Homemade Coffee Infused Soap',
                                    image: {
                                        url: '',
                                        alt: 'Homemade Coffee Infused Soap',
                                    },
                                },
                                {
                                    id: 'mint-soap',
                                    price: 15,
                                    title: 'Homemade Mint Infused Soap',
                                    image: {
                                        url: '',
                                        alt: 'Homemade Mint Infused Soap',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'skin',
            title: 'Skin Products',
            options: [
                {
                    id: 'skin',
                    title: 'Skin Products',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.',
                    descriptionPosition: 'bottom',
                    dropdowns: [
                        {
                            name: 'Skin Products',
                            options: [
                                {
                                    id: 'hand-lotion',
                                    price: 15,
                                    title: 'Moisturizing Hand Lotion',
                                    image: {
                                        url: '',
                                        alt: 'Moisturizing Hand Lotion',
                                    },
                                },
                                {
                                    id: 'bubble-bath',
                                    price: 15,
                                    title: 'Relaxing Bubble Bath',
                                    image: {
                                        url: '',
                                        alt: 'Relaxing Bubble Bath',
                                    },
                                },
                                {
                                    id: 'face-wash',
                                    price: 15,
                                    title: 'Face Cleansing Liquid Soap',
                                    image: {
                                        url: '',
                                        alt: 'Face Cleansing Liquid Soap',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'extra',
            title: 'Extras',
            canAddMore: true,
            maxAmount: 3,
            options: [
                {
                    id: 'extra',
                    title: 'Extra',
                    dropdowns: [
                        {
                            name: 'Extras',
                            options: [
                                {
                                    id: 'roses',
                                    price: 5,
                                    title: 'A single rose inside the box',
                                    image: {
                                        url: '',
                                        alt: 'A single rose inside the box',
                                    },
                                    suboptions: {
                                        name: "Choose the roses's color",
                                        type: 'picker',
                                        options: [
                                            {
                                                name: 'Red',
                                                default: true,
                                                hex: '#F00',
                                            },
                                            {
                                                name: 'White',
                                                hex: '#FFF',
                                            },
                                            {
                                                name: 'Black',
                                                hex: '#000',
                                            },
                                            {
                                                name: 'Pink',
                                                hex: '#F99',
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: 'custom-letter',
                                    price: 5,
                                    title: 'A Letter you designed',
                                    image: {
                                        url: '',
                                        alt: 'A Letter you designed',
                                    },
                                    fileUploader: true,
                                },
                                {
                                    id: 'photo',
                                    price: 10,
                                    title: 'A photo you want printed',
                                    image: {
                                        url: '',
                                        alt: 'A photo you want printed',
                                    },
                                    fileUploader: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
