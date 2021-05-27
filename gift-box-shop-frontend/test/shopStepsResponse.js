export const stepsResponse = {
    "basePrice" : 15,
    "steps" : [ {
      "id" : "box-type-step",
      "isInitial" : true,
      "options" : [ {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "id" : "box-shape-dropdown",
          "name" : "Box Shape",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Box Shape & Size"
          }, {
            "id" : "rb4030",
            "image" : {
              "alt" : "40cm by 30cm Rectangle Box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "title" : "Rectangle Box (40cm x 30cm)"
          }, {
            "id" : "rb2015",
            "image" : {
              "alt" : "20cm by 15cm Rectangle Box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 0,
            "title" : "Rectangle Box (20cm x 15cm)"
          }, {
            "id" : "sb30",
            "image" : {
              "alt" : "30cm by 30cm Square Box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 2.5,
            "title" : "Square Box (30cm x 30cm)"
          }, {
            "id" : "cb15",
            "image" : {
              "alt" : "15cm radius Circle Box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 2.5,
            "title" : "Circle Box (15cm radius)"
          } ]
        }, {
          "dependencyId" : "box-shape-dropdown",
          "id" : "box-contents-dropdown",
          "name" : "Box Contents",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select the Box Contents"
          }, {
            "dependencies" : [ "rb4030" ],
            "id" : "6p",
            "image" : {
              "alt" : "6 Pastries",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 6,
              "id" : "pastries-step"
            } ],
            "title" : "6 Pastries"
          }, {
            "dependencies" : [ "rb4030" ],
            "id" : "4p1bl",
            "image" : {
              "alt" : "4 Pastries & 1 liquor bottle",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 4,
              "id" : "pastries-step"
            }, {
              "amount" : 1,
              "id" : "liquor-step"
            } ],
            "title" : "4 Pastries & 1 liquor bottle"
          }, {
            "dependencies" : [ "rb4030" ],
            "id" : "3p1s1bl",
            "image" : {
              "alt" : "3 Pastries, 1 Homemade soap & 1 Liquor bottle",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 3,
              "id" : "pastries-step"
            }, {
              "amount" : 1,
              "id" : "soap-step"
            }, {
              "amount" : 1,
              "id" : "liquor-step"
            } ],
            "title" : "3 Pastries, 1 Homemade soap & 1 Liquor bottle"
          }, {
            "dependencies" : [ "sb30" ],
            "id" : "5p",
            "image" : {
              "alt" : "5 Pastries",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 5,
              "id" : "pastries-step"
            } ],
            "title" : "5 Pastries"
          }, {
            "dependencies" : [ "sb30" ],
            "id" : "3p1bl",
            "image" : {
              "alt" : "3 Pastries & 1 liquor bottle",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 3,
              "id" : "pastries-step"
            }, {
              "amount" : 1,
              "id" : "liquor-step"
            } ],
            "title" : "3 Pastries & 1 liquor bottle"
          }, {
            "dependencies" : [ "sb30" ],
            "id" : "2p1s1bl",
            "image" : {
              "alt" : "2 Pastries, 1 Skin Product & 1 Liquor bottle",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 2,
              "id" : "pastries-step"
            }, {
              "amount" : 1,
              "id" : "skin-step"
            }, {
              "amount" : 1,
              "id" : "liquor-step"
            } ],
            "title" : "2 Pastries, 1 Skin Product & 1 Liquor bottle"
          }, {
            "dependencies" : [ "rb2015", "cb15" ],
            "id" : "4p",
            "image" : {
              "alt" : "4 Pastries",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 4,
              "id" : "pastries-step"
            } ],
            "title" : "4 Pastries"
          }, {
            "dependencies" : [ "rb2015", "cb15" ],
            "id" : "2p1bl",
            "image" : {
              "alt" : "2 Pastries & 1 liquor bottle",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "steps" : [ {
              "amount" : 2,
              "id" : "pastries-step"
            }, {
              "amount" : 1,
              "id" : "liquor-step"
            } ],
            "title" : "2 Pastries & 1 liquor bottle"
          } ]
        } ],
        "id" : "box-shape",
        "title" : "Box Shape & Content"
      }, {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "dependencyId" : "box-shape-dropdown",
          "id" : "box-design-dropdown",
          "name" : "Box Design",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Box Design"
          }, {
            "dependencies" : [ "rb4030", "rb2015", "cb15" ],
            "id" : "colored",
            "image" : {
              "alt" : "Colored design gift box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 0,
            "suboptions" : {
              "name" : "Choose the box's color",
              "options" : [ {
                "default" : true,
                "dependencies" : [ "rb4030", "rb2015", "cb15" ],
                "hex" : "#FFF",
                "name" : "White"
              }, {
                "dependencies" : [ "rb4030", "rb2015", "cb15" ],
                "hex" : "#000",
                "name" : "Black"
              }, {
                "dependencies" : [ "rb4030", "rb2015" ],
                "hex" : "#F00",
                "name" : "Red"
              }, {
                "dependencies" : [ "cb15" ],
                "hex" : "#F77",
                "name" : "Pink"
              }, {
                "dependencies" : [ "cb15" ],
                "hex" : "#99F",
                "name" : "Sky Blue"
              } ],
              "type" : "picker"
            },
            "title" : "Color"
          }, {
            "dependencies" : [ "sb30" ],
            "id" : "wooden",
            "image" : {
              "alt" : "Wooden design gift box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "suboptions" : {
              "name" : "Choose the box's color",
              "options" : [ {
                "default" : true,
                "dependencies" : [ "sb30" ],
                "hex" : "#A47449",
                "name" : "Wooden"
              } ],
              "type" : "picker"
            },
            "title" : "Wooden"
          }, {
            "dependencies" : [ "rb4030", "rb2015" ],
            "fileUploader" : true,
            "id" : "colored-with-design-lid",
            "image" : {
              "alt" : "Colored box with custom design on lid",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 10,
            "suboptions" : {
              "name" : "Choose the box's color",
              "options" : [ {
                "default" : true,
                "dependencies" : [ "rb4030", "rb2015" ],
                "hex" : "#FFF",
                "name" : "White"
              }, {
                "dependencies" : [ "rb4030", "rb2015" ],
                "hex" : "#000",
                "name" : "Black"
              }, {
                "dependencies" : [ "rb4030", "rb2015" ],
                "hex" : "#F00",
                "name" : "Red"
              } ],
              "type" : "picker"
            },
            "title" : "Colored box with custom design on lid"
          } ]
        } ],
        "id" : "box-design",
        "title" : "Box Design"
      } ],
      "title" : "Box Type"
    }, {
      "id" : "pastries-step",
      "options" : [ {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "id" : "pastry-type-dropdown",
          "name" : "Pastry Type",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Pastry Type"
          }, {
            "id" : "regular",
            "image" : {
              "alt" : "Regular type pastry (might have gluten and regular sugar)",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "title" : "Regular (might have glutten)"
          }, {
            "id" : "diet",
            "image" : {
              "alt" : "Diet (sweetened with sugar substitute)",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "title" : "Diet (sweetened with sugar substitute)"
          }, {
            "id" : "gluten-free",
            "image" : {
              "alt" : "Gluten Free",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "title" : "Gluten Free"
          } ]
        }, {
          "dependencyId" : "pastry-type-dropdown",
          "id" : "pastry-dropdown",
          "name" : "Pastry",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Pastry"
          }, {
            "dependencies" : [ "regular" ],
            "id" : "croissant",
            "image" : {
              "alt" : "2 Croissants",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 7.5,
            "title" : "2 Croissants"
          }, {
            "dependencies" : [ "regular" ],
            "id" : "brigadeiro",
            "image" : {
              "alt" : "6 Brigadeiros",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 10,
            "title" : "6 Brigadeiros"
          }, {
            "dependencies" : [ "regular", "diet", "gluten-free" ],
            "id" : "chocolate-chip-cookies",
            "image" : {
              "alt" : "4 Chocolate Chip Cookies",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "title" : "4 Chocolate Chip Cookies"
          }, {
            "dependencies" : [ "regular", "diet" ],
            "id" : "brownies",
            "image" : {
              "alt" : "2 Brownies",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "title" : "2 Brownies"
          }, {
            "dependencies" : [ "regular", "gluten-free" ],
            "id" : "quiche",
            "image" : {
              "alt" : "2 Quiches",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 7.5,
            "title" : "2 Quiches"
          }, {
            "dependencies" : [ "regular", "diet" ],
            "id" : "cornbread",
            "image" : {
              "alt" : "1 Cornbread Slice",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "title" : "1 Cornbread Slice"
          }, {
            "dependencies" : [ "regular", "diet", "gluten-free" ],
            "id" : "chocolate-strawberries",
            "image" : {
              "alt" : "4 Chocolate Covered Strawberries",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 2.5,
            "title" : "4 Chocolate Covered Strawberries"
          }, {
            "dependencies" : [ "diet", "gluten-free" ],
            "id" : "cheesecake",
            "image" : {
              "alt" : "1 Small Cheesecake",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 7.5,
            "title" : "1 Small Cheesecake"
          }, {
            "dependencies" : [ "regular", "diet" ],
            "id" : "cupcakes",
            "image" : {
              "alt" : "2 Small Cupcakes with frosting",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 7.5,
            "title" : "2 Small Cupcakes with frosting"
          } ]
        } ],
        "id" : "pastry",
        "title" : "Pastry"
      } ],
      "title" : "Pastries"
    }, {
      "id" : "liquor-step",
      "options" : [ {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "id" : "liquor-dropdown",
          "name" : "Liquor",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Liquor Type"
          }, {
            "id" : "orange-liquor",
            "image" : {
              "alt" : "Artisan Orange Infused Liquor",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 30,
            "title" : "Artisan Orange Infused Liquor"
          }, {
            "id" : "coffee-liquor",
            "image" : {
              "alt" : "Artisan Coffee Infused Liquor",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 35,
            "title" : "Artisan Coffee Infused Liquor"
          }, {
            "dependencies" : [ "regular", "diet", "gluten-free" ],
            "id" : "mint-liquor",
            "image" : {
              "alt" : "'Artisan Mint Infused Liquor',",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 30,
            "title" : "Artisan Mint Infused Liquor"
          } ]
        } ],
        "id" : "liquor",
        "title" : "Liquor"
      } ],
      "title" : "Liquor"
    }, {
      "id" : "soap-step",
      "options" : [ {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "id" : "soap-dropdown",
          "name" : "Homemade Soap",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Homemade Soap"
          }, {
            "id" : "orange-soap",
            "image" : {
              "alt" : "Homemade Orange Infused Soap",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 15,
            "title" : "Homemade Orange Infused Soap"
          }, {
            "id" : "coffee-soap",
            "image" : {
              "alt" : "Homemade Coffee Infused Soap",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 20,
            "title" : "Homemade Coffee Infused Soap"
          }, {
            "id" : "mint-soap",
            "image" : {
              "alt" : "Homemade Mint Infused Soap",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 15,
            "title" : "Homemade Mint Infused Soap"
          } ]
        } ],
        "id" : "soap",
        "title" : "Homemade Soap"
      } ],
      "title" : "Homemade Soap"
    }, {
      "id" : "skin-step",
      "options" : [ {
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, justo rhoncus pharetra porttitor, nibh augue pellentesque dolor, sit amet viverra orci leo vitae nulla. Donec ac efficitur odio, ut sollicitudin est. Phasellus suscipit semper massa lobortis molestie. Fusce facilisis magna a metus lacinia, ac dapibus turpis mattis. Mauris malesuada vulputate maximus. Integer diam metus, molestie vel accumsan at, pharetra vitae lacus. Curabitur bibendum mattis nibh, non luctus ipsum imperdiet nec. Quisque sem eros, luctus vel augue non, scelerisque varius nulla. Pellentesque nec arcu dui. Proin enim mi, pellentesque non orci vel, hendrerit efficitur diam. Cras fermentum libero in risus rhoncus venenatis. Morbi sit amet commodo odio. Vestibulum justo ante, molestie et odio laoreet, faucibus condimentum nunc.",
        "descriptionPosition" : "bottom",
        "dropdowns" : [ {
          "id" : "skin-dropdown",
          "name" : "Skin Products",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select a Skin Product"
          }, {
            "id" : "hand-lotion",
            "image" : {
              "alt" : "Moisturizing Hand Lotion",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 15,
            "title" : "Moisturizing Hand Lotion"
          }, {
            "id" : "bubble-bath",
            "image" : {
              "alt" : "Relaxing Bubble Bath",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 15,
            "title" : "Relaxing Bubble Bath"
          }, {
            "id" : "face-wash",
            "image" : {
              "alt" : "Face Cleansing Liquid Soap",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 15,
            "title" : "Face Cleansing Liquid Soap"
          } ]
        } ],
        "id" : "skin",
        "title" : "Skin Products"
      } ],
      "title" : "Skin Products"
    }, {
      "canAddMore" : true,
      "id" : "extra-step",
      "isDefault" : true,
      "maxAmount" : 3,
      "options" : [ {
        "dropdowns" : [ {
          "id" : "extra-dropdown",
          "name" : "Extras",
          "options" : [ {
            "disabled" : true,
            "id" : "default",
            "selected" : true,
            "title" : "Select an Extra (optional)"
          }, {
            "id" : "roses",
            "image" : {
              "alt" : "A single rose inside the box",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "suboptions" : {
              "name" : "Choose the roses's color",
              "options" : [ {
                "default" : true,
                "hex" : "#F00",
                "name" : "Red"
              }, {
                "hex" : "#FFF",
                "name" : "White"
              }, {
                "hex" : "#000",
                "name" : "Black"
              }, {
                "hex" : "#F99",
                "name" : "Pink"
              } ],
              "type" : "picker"
            },
            "title" : "A single rose inside the box"
          }, {
            "fileUploader" : true,
            "id" : "custom-letter",
            "image" : {
              "alt" : "A Letter you designed",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 5,
            "title" : "A Letter you designed"
          }, {
            "fileUploader" : true,
            "id" : "photo",
            "image" : {
              "alt" : "A photo you want printed",
              "url" : "https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg"
            },
            "price" : 10,
            "title" : "A photo you want printed"
          } ]
        } ],
        "id" : "extra",
        "title" : "Extra"
      } ],
      "title" : "Extras"
    }, {
      "id" : "review-step",
      "isDefault" : true,
      "isReview" : true,
      "title" : "Review"
    } ]
  }
  