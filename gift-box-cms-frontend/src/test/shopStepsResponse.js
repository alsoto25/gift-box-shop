export const stepsResponse = {
  basePrice: 15,
  steps: [
    {
      id: "box-type-step",
      title: "Box Type",
      isInitial: true,
      options: [
        {
          id: "box-shape",
          title: "Box Shape & Content",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              id: "box-shape-dropdown",
              name: "Box Shape",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Box Shape & Size",
                },
                {
                  id: "rb4030",
                  title: "Rectangle Box (40cm x 30cm)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "40cm by 30cm Rectangle Box",
                  },
                  price: 5,
                },
                {
                  id: "rb2015",
                  title: "Rectangle Box (20cm x 15cm)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "20cm by 15cm Rectangle Box",
                  },
                  price: 0,
                },
                {
                  id: "sb30",
                  title: "Square Box (30cm x 30cm)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "30cm by 30cm Square Box",
                  },
                  price: 2.5,
                },
                {
                  id: "cb15",
                  title: "Circle Box (15cm radius)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "15cm radius Circle Box",
                  },
                  price: 2.5,
                },
              ],
            },
            {
              id: "box-contents-dropdown",
              name: "Box Contents",
              dependencyId: "box-shape-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select the Box Contents",
                },
                {
                  id: "6p",
                  title: "6 Pastries",
                  dependencies: ["rb4030"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "6 Pastries",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 6,
                    },
                  ],
                },
                {
                  id: "4p1bl",
                  title: "4 Pastries & 1 liquor bottle",
                  dependencies: ["rb4030"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "4 Pastries & 1 liquor bottle",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 4,
                    },
                    {
                      id: "liquor-step",
                      amount: 1,
                    },
                  ],
                },
                {
                  id: "3p1s1bl",
                  title: "3 Pastries, 1 Homemade soap & 1 Liquor bottle",
                  dependencies: ["rb4030"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "3 Pastries, 1 Homemade soap & 1 Liquor bottle",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 3,
                    },
                    {
                      id: "soap-step",
                      amount: 1,
                    },
                    {
                      id: "liquor-step",
                      amount: 1,
                    },
                  ],
                },
                {
                  id: "5p",
                  title: "5 Pastries",
                  dependencies: ["sb30"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "5 Pastries",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 5,
                    },
                  ],
                },
                {
                  id: "3p1bl",
                  title: "3 Pastries & 1 liquor bottle",
                  dependencies: ["sb30"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "3 Pastries & 1 liquor bottle",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 3,
                    },
                    {
                      id: "liquor-step",
                      amount: 1,
                    },
                  ],
                },
                {
                  id: "2p1s1bl",
                  title: "2 Pastries, 1 Skin Product & 1 Liquor bottle",
                  dependencies: ["sb30"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Pastries, 1 Skin Product & 1 Liquor bottle",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 2,
                    },
                    {
                      id: "skin-step",
                      amount: 1,
                    },
                    {
                      id: "liquor-step",
                      amount: 1,
                    },
                  ],
                },
                {
                  id: "4p",
                  title: "4 Pastries",
                  dependencies: ["rb2015", "cb15"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "4 Pastries",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 4,
                    },
                  ],
                },
                {
                  id: "2p1bl",
                  title: "2 Pastries & 1 liquor bottle",
                  dependencies: ["rb2015", "cb15"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Pastries & 1 liquor bottle",
                  },
                  steps: [
                    {
                      id: "pastries-step",
                      amount: 2,
                    },
                    {
                      id: "liquor-step",
                      amount: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "box-design",
          title: "Box Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              name: "Box Design",
              id: "box-design-dropdown",
              dependencyId: "box-shape-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Box Design",
                },
                {
                  id: "colored",
                  title: "Color",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Colored design gift box",
                  },
                  price: 0,
                  dependencies: ["rb4030", "rb2015", "cb15"],
                  suboptions: {
                    name: "Choose the box's color",
                    type: "picker",
                    options: [
                      {
                        name: "White",
                        default: true,
                        hex: "#FFF",
                        dependencies: ["rb4030", "rb2015", "cb15"],
                      },
                      {
                        name: "Black",
                        hex: "#000",
                        dependencies: ["rb4030", "rb2015", "cb15"],
                      },
                      {
                        name: "Red",
                        hex: "#F00",
                        dependencies: ["rb4030", "rb2015"],
                      },
                      {
                        name: "Pink",
                        hex: "#F77",
                        dependencies: ["cb15"],
                      },
                      {
                        name: "Sky Blue",
                        hex: "#99F",
                        dependencies: ["cb15"],
                      },
                    ],
                  },
                },
                {
                  id: "wooden",
                  title: "Wooden",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Wooden design gift box",
                  },
                  price: 5,
                  dependencies: ["sb30"],
                  suboptions: {
                    name: "Choose the box's color",
                    type: "picker",
                    options: [
                      {
                        name: "Wooden",
                        default: true,
                        hex: "#A47449",
                        dependencies: ["sb30"],
                      },
                    ],
                  },
                },
                {
                  id: "colored-with-design-lid",
                  title: "Colored box with custom design on lid",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Colored box with custom design on lid",
                  },
                  price: 10,
                  dependencies: ["rb4030", "rb2015"],
                  fileUploader: true,
                  suboptions: {
                    name: "Choose the box's color",
                    type: "picker",
                    options: [
                      {
                        name: "White",
                        default: true,
                        hex: "#FFF",
                        dependencies: ["rb4030", "rb2015"],
                      },
                      {
                        name: "Black",
                        hex: "#000",
                        dependencies: ["rb4030", "rb2015"],
                      },
                      {
                        name: "Red",
                        hex: "#F00",
                        dependencies: ["rb4030", "rb2015"],
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
      id: "pastries-step",
      title: "Pastries",
      options: [
        {
          id: "pastry",
          title: "Pastry",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              name: "Pastry Type",
              id: "pastry-type-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Pastry Type",
                },
                {
                  id: "regular",
                  title: "Regular (might have glutten)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt:
                      "Regular type pastry (might have gluten and regular sugar)",
                  },
                },
                {
                  id: "diet",
                  title: "Diet (sweetened with sugar substitute)",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Diet (sweetened with sugar substitute)",
                  },
                },
                {
                  id: "gluten-free",
                  title: "Gluten Free",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Gluten Free",
                  },
                },
              ],
            },
            {
              name: "Pastry",
              id: "pastry-dropdown",
              dependencyId: "pastry-type-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Pastry",
                },
                {
                  id: "croissant",
                  price: 7.5,
                  title: "2 Croissants",
                  dependencies: ["regular"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Croissants",
                  },
                },
                {
                  id: "brigadeiro",
                  price: 10,
                  title: "6 Brigadeiros",
                  dependencies: ["regular"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "6 Brigadeiros",
                  },
                },
                {
                  id: "chocolate-chip-cookies",
                  price: 5,
                  title: "4 Chocolate Chip Cookies",
                  dependencies: ["regular", "diet", "gluten-free"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "4 Chocolate Chip Cookies",
                  },
                },
                {
                  id: "brownies",
                  price: 5,
                  title: "2 Brownies",
                  dependencies: ["regular", "diet"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Brownies",
                  },
                },
                {
                  id: "quiche",
                  price: 7.5,
                  title: "2 Quiches",
                  dependencies: ["regular", "gluten-free"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Quiches",
                  },
                },
                {
                  id: "cornbread",
                  price: 5,
                  title: "1 Cornbread Slice",
                  dependencies: ["regular", "diet"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "1 Cornbread Slice",
                  },
                },
                {
                  id: "chocolate-strawberries",
                  price: 2.5,
                  title: "4 Chocolate Covered Strawberries",
                  dependencies: ["regular", "diet", "gluten-free"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "4 Chocolate Covered Strawberries",
                  },
                },
                {
                  id: "cheesecake",
                  price: 7.5,
                  title: "1 Small Cheesecake",
                  dependencies: ["diet", "gluten-free"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "1 Small Cheesecake",
                  },
                },
                {
                  id: "cupcakes",
                  price: 7.5,
                  title: "2 Small Cupcakes with frosting",
                  dependencies: ["regular", "diet"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "2 Small Cupcakes with frosting",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "liquor-step",
      title: "Liquor",
      options: [
        {
          id: "liquor",
          title: "Liquor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              name: "Liquor",
              id: "liquor-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Liquor Type",
                },
                {
                  id: "orange-liquor",
                  price: 30,
                  title: "Artisan Orange Infused Liquor",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Artisan Orange Infused Liquor",
                  },
                },
                {
                  id: "coffee-liquor",
                  price: 35,
                  title: "Artisan Coffee Infused Liquor",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Artisan Coffee Infused Liquor",
                  },
                },
                {
                  id: "mint-liquor",
                  price: 30,
                  title: "Artisan Mint Infused Liquor",
                  dependencies: ["regular", "diet", "gluten-free"],
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Artisan Mint Infused Liquor",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "soap-step",
      title: "Homemade Soap",
      options: [
        {
          id: "soap",
          title: "Homemade Soap",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              name: "Homemade Soap",
              id: "soap-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Homemade Soap",
                },
                {
                  id: "orange-soap",
                  price: 15,
                  title: "Homemade Orange Infused Soap",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Homemade Orange Infused Soap",
                  },
                },
                {
                  id: "coffee-soap",
                  price: 20,
                  title: "Homemade Coffee Infused Soap",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Homemade Coffee Infused Soap",
                  },
                },
                {
                  id: "mint-soap",
                  price: 15,
                  title: "Homemade Mint Infused Soap",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Homemade Mint Infused Soap",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "skin-step",
      title: "Skin Products",
      options: [
        {
          id: "skin",
          title: "Skin Products",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
          descriptionPosition: "bottom",
          dropdowns: [
            {
              name: "Skin Products",
              id: "skin-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select a Skin Product",
                },
                {
                  id: "hand-lotion",
                  price: 15,
                  title: "Moisturizing Hand Lotion",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Moisturizing Hand Lotion",
                  },
                },
                {
                  id: "bubble-bath",
                  price: 15,
                  title: "Relaxing Bubble Bath",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Relaxing Bubble Bath",
                  },
                },
                {
                  id: "face-wash",
                  price: 15,
                  title: "Face Cleansing Liquid Soap",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "Face Cleansing Liquid Soap",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "extra-step",
      title: "Extras",
      isDefault: true,
      canAddMore: true,
      maxAmount: 3,
      options: [
        {
          id: "extra",
          title: "Extra",
          dropdowns: [
            {
              name: "Extras",
              id: "extra-dropdown",
              options: [
                {
                  id: "default",
                  disabled: true,
                  selected: true,
                  title: "Select an Extra (optional)",
                },
                {
                  id: "roses",
                  price: 5,
                  title: "A single rose inside the box",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "A single rose inside the box",
                  },
                  suboptions: {
                    name: "Choose the roses's color",
                    type: "picker",
                    options: [
                      {
                        name: "Red",
                        default: true,
                        hex: "#F00",
                      },
                      {
                        name: "White",
                        hex: "#FFF",
                      },
                      {
                        name: "Black",
                        hex: "#000",
                      },
                      {
                        name: "Pink",
                        hex: "#F99",
                      },
                    ],
                  },
                },
                {
                  id: "custom-letter",
                  price: 5,
                  title: "A Letter you designed",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "A Letter you designed",
                  },
                  fileUploader: true,
                },
                {
                  id: "photo",
                  price: 10,
                  title: "A photo you want printed",
                  image: {
                    url:
                      "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg",
                    alt: "A photo you want printed",
                  },
                  fileUploader: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "review-step",
      title: "Review",
      isDefault: true,
      isReview: true,
    },
  ],
};
