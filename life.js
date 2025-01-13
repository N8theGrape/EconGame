var choices = {
    locationType: {
        name: "<br>locationType",
        prompt: "Where do you want to live?",
        options: [
            {
                name: "<br><br>Coastal<br>",
                description: "<br>Living on a high-rise upscale home overlooking the Pacific Ocean.<br><br>",
                cost: "$5,000 - $7,500",
                goTo: "houseType",
                value: 0
            },
            {
                name: "<br><br>Urban<br>",
                description: "<br>Small apartment in the downtown area of San Diego, small space for living.<br><br>",
                cost: "$1,000 - $3,000",
                goTo: "houseType",
                value: 1
            },
            {
                name: "<br><br>Suburban<br>",
                description: "<br>Medium sized home in an HOA-run community on the outskirts of the city.<br><br>",
                cost: "$2,600 - $3,000",
                goTo: "houseType",
                value: 2
            },
            {
                name: "<br><br>Rural<br>",
                description: "<br>Large open area living in a secluded area away from the majority of the public.<br><br>",
                cost: "$1,500 - $2,000",
                goTo: "houseType",
                value: 3
            }
        ]
    },
    houseType: {
        name: "<br>houseType",
        prompt: "What type of house do you want to live in?",
        options: [
            {
                name: "<br><br>Trailer<br>",
                description: "<br>Small, moveable home located in a trailer park with other trailer-living dwellers.<br><br>",
                cost: "$1,500 - $3,000",
                goTo: "movingCompany",
                value: 0
            },
            {
                name: "<br><br>Apartment<br>",
                description: "<br>Small suite in a complex and a small area to store vehicles like bikes and cars.<br><br>",
                cost: "$1,750 - $3,500",
                goTo: "movingCompany",
                value: 1
            },
            {
                name: "<br><br>Condo<br>",
                description: "<br>An Apartment-style residence that is privately owned and operated by you.<br><br>",
                cost: "$400,000 - $700,000",
                goTo: "movingCompany",
                value: 2
            },
            {
                name: "<br><br>House<br>",
                description: "<br>Residence built for the purpose of holding a family or large group of occupants.<br><br>",
                cost: "$850,000 - $1,500,000",
                goTo: "movingCompany",
                value: 3
            }
        ]
    },
    movingCompany: {
        name: "<br>movingCompany",
        prompt: "Which moving company do you want?",
        options: [
            {
                name: "<br><br>JK Moving<br>",
                description: "Full-service moving company offering local, long-distance, and international moves with professional packing and storage solutions.",
                cost: "$5,000 - $15,000",
                goTo: "job",
                value: 0
            },
            {
                name: "North<br>American<br>Van Lines",
                description: "Nationwide moving service specializing in residential and corporate moves with customizable options and shipment tracking.",
                cost: "$3,000 - $6,000",
                goTo: "job",
                value: 1
            },
            {
                name: "<br><br>National Vans<br>",
                description: "Long-distance moving company providing residential and commercial relocation services, including storage options.",
                cost: "$700 - $1,400",
                goTo: "job",
                value: 2
            },
            {
                name: "<br><br>Pods<br>",
                description: "Portable storage and moving company offering weather-resistant containers for DIY or professional moving and storage.",
                cost: "$300 - $3,000",
                goTo: "job",
                value: 3
            }
        ]
    },
    job: {
        name: "<br>job",
        prompt: "What job are you going to get?",
        options: [
            {
                name: "<br><br>Neuroscientist<br>",
                description: "Highly specialized scientist researching the brain and nervous system, often working in labs, universities, or hospitals.",
                cost: "$80,000 - $150,000+",
                goTo: "occupants",
                value: 0
            },
            {
                name: "<br><br>Barber<br>",
                description: "<br>Personal grooming professional skilled in cutting, styling, and shaving hair for men and women.<br>",
                cost: "$30,000 - $60,000",
                goTo: "occupants",
                value: 1
            },
            {
                name: "<br><br>Mechanic<br>",
                description: "<br>Skilled technician specializing in vehicle repair and maintenance, working in shops or dealerships.<br>",
                cost: "$40,000 - $70,000",
                goTo: "occupants",
                value: 2
            },
            {
                name: "<br>McDonalds Fry Cook<br>",
                description: "Fast-food worker preparing and frying menu items, maintaining kitchen cleanliness, and ensuring quick service.",
                cost: "$20,000 - $35,000",
                goTo: "occupants",
                value: 3
            }
        ]
    },
    occupants: {
        name: "<br>occupants",
        prompt: "Who are you going to live with?",
        options: [
            {
                name: "<br>Single roomate<br>",
                description: "<br>Sharing a residence with a close companion, typically splitting rent and chores.<br><br>",
                cost: "NA",
                goTo: "end",
                value: 0
            },
            {
                name: "<br><br>Live alone<br>",
                description: "<br>Independent living in a solo apartment or house, offering maximum privacy but higher costs.<br>",
                cost: "NA",
                goTo: "end",
                value: 1
            },
            {
                name: "<br>Multiple roommates<br>",
                description: "<br>Residing in a shared house or apartment with several individuals, often the most budget-friendly option.<br>",
                cost: "NA",
                goTo: "end",
                value: 2
            },
            {
                name: "<br>Significant other<br>",
                description: "<br>Sharing a home with a romantic partner, combining finances and responsibilities.<br><br>",
                cost: "NA",
                goTo: "end",
                value: 3
            }
        ]
    }
};
