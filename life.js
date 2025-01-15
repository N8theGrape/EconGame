var choices = {
    locationType: {
        name: "locationType",
        prompt: "Where do you want to live?",
        options: [
            [
                {
                    name: "Coastal"
                    ,description: `
                        
                    `
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "houseType"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Urban"
                    ,description: `
                        
                    `
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "houseType"
                    ,goToSet: 1
                    ,value: 1
                },
                {
                    name: "Suburban"
                    ,description: `
                        
                    `
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "houseType"
                    ,goToSet: 2
                    ,value: 2
                },
                {
                    name: "Rural"
                    ,description: `
                        
                    `
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "houseType"
                    ,goToSet: 3
                    ,value: 3
                }
            ]
        ]
    },
    houseType: {
        name: "houseType",
        prompt: "What type of house do you want to live in?",
        options: [
            // Coastal
            [
                    {
                        name: "Van Life"
                        ,description: `
                            You chose to live the Van Life! Living in a van gives you freedom to move around and to see the world. 
                            It would cost you between $10,000 and $80,000 to buy the van and then you'll need to spend between $40 and
                            $100 each month to take care of your van and to pay for gas. While many people love the freedom van life gives,
                            it's not for everybody. Van life means you won't have as much space and will need to be able to live with less.
                        `
                        ,cost: "Cost: $10,000 - $80,000"
                        ,rent: "Monthly: $40 - $100"
                        ,goTo: "movingCompany"
                        ,goToSet: 0
                        ,value: 0
                },
                {
                    name: "Boat Life"
                    ,description: `
                        You chose to live the Boat Life! Living on a boat gives you the chance to enjoy the open water and explore new 
                        places. The cost of buying a boat ranges from $100,000 to $1,000,000, and you'll need to spend between $400 and 
                        $1,000 each month on maintenance, fuel, and docking fees. While the boat life offers adventure and the freedom 
                        to live on the water, it also means limited space and constant upkeep. This lifestyle may not be for everyone, 
                        as it requires flexibility and a love for the water.
                    `
                    ,cost: "Cost: $100,000 - $1,000,000"
                    ,rent: "Monthly: $400 - $1,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Condo"
                    ,description: `
                        You chose to live in a Coastal Condo! Coastal condos offer stunning views of the ocean, and they often come with 
                        amenities like private beaches, pools, and gyms. The cost of buying a coastal condo ranges from $600,000 to 
                        $3,600,000, and you'll need to pay between $3,000 and $5,000 each month. Living in a coastal condo 
                        offers the charm of oceanfront living but also comes with higher costs and the potential for more tourists or 
                        crowds. It's ideal for those seeking a relaxed, seaside lifestyle, but the price and location might not be for 
                        everyone.
                    `
                    ,cost: "Cost: $600,000 - $3,600,000"
                    ,rent: "Monthly: $3,000 - $5,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Beach House"
                    ,description: `
                        You chose to live in a Beach House! Beach houses offer unparalleled views of the coastline, with private access 
                        to the beach and a relaxing, luxurious lifestyle. The cost of purchasing a beach house ranges from $1,500,000 to 
                        $108,000,000, and a monthly expense from $10,000 to $20,000. Living in a beach house provides a serene 
                        escape with all the comforts of seaside living, but it comes at a premium price. This lifestyle is perfect for 
                        those who want exclusivity and natural beauty, though it might be out of reach for some due to the high costs.
                    `
                    ,cost: "Cost: $1,500,000 - $108,000,000"
                    ,rent: "Monthly: $10,000 - $20,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 3
                }
            ],
            // Urban
            [
                {
                    name: "A Cardboard Box"
                    ,description: `
                        You chose to live in a Cardboard Box! This is a basic, minimalist living situation with almost no amenities. 
                        It costs very little to get started, ranging from $1 to $10, and upkeep can be as low as $0 to $5 per month. 
                        While this option is incredibly affordable, it comes with significant downsides, such as a lack of privacy, 
                        comfort, and protection from the elements. This living space is only a temporary solution and not a sustainable 
                        long-term option.
                    `
                    ,cost: "Cost: $1 - $10"
                    ,rent: "Monthly: $0 - $5"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Studio Apartment"
                    ,description: `
                        You chose to live in a Studio Apartment! Studio apartments offer a compact and affordable living space, with a 
                        cost ranging from $3,000 to $4,000 to secure one. Costs typically falls between $1,500 and $2,000 per month. 
                        While this option provides basic living amenities and is generally more affordable than larger apartments, you 
                        may feel a bit cramped due to the limited space. It's a great choice for those who want a simple, independent 
                        lifestyle in an urban setting, but it may lack the extra room for entertainment or larger furniture.
                    `
                    ,cost: "Cost: $3,000 - $4,000"
                    ,rent: "Monthly: $1,500 - $2,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "High Rise Condo"
                    ,description: `
                        You chose to live in a High Rise Condo! High rise condos offer modern amenities with scenic views of the city. 
                        They typically cost between $300,000 and $400,000 to purchase and have a monthly cost of $1,500 to $2,500. 
                        Living in a high-rise provides the convenience of urban living with extra space and great facilities, such as 
                        gyms, pools, and 24-hour security. However, you may face higher costs for maintenance and HOA fees, and the 
                        bustle of city life might not offer the peace and quiet some people prefer.
                    `
                    ,cost: "Cost: $300,000 - $400,000"
                    ,rent: "Monthly: $1,500 - $2,500"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Penthouse"
                    ,description: `
                        You chose to live in a Penthouse! Penthouses offer luxury living at the top of the building, with panoramic 
                        views and premium finishes. They typically cost between $1,250,000 and $1,750,000 to purchase and have a monthly 
                        cost of $5,000 to $6,000. Penthouses are ideal for those who desire exclusivity, spacious living areas, and 
                        high-end amenities. However, the price comes with a premium, and maintenance fees can be high. Additionally, 
                        living in such an upscale setting might not provide the privacy or peaceful atmosphere that some people seek.
                    `
                    ,cost: "Cost: $1,250,000 - $1,750,000"
                    ,rent: "Monthly: $5,000 - $6,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 3
                }
            ],
            // Suburban
            [
                {
                    name: "Small Bungalow"
                    ,description: `
                        You chose to live in a Small Bungalow! A cozy, compact space that's perfect for a more laid-back lifestyle, 
                        small bungalows typically cost between $750,000 and $1,100,000 to buy and have a monthly cost of $3,000 to 
                        $5,000. These homes offer charm and simplicity, often with a small yard or garden. While they provide more 
                        privacy and a quieter environment than urban living, the space is limited, and upkeep might be more frequent. 
                        If you value comfort and community, this is a great option, but you'll need to adjust to a smaller living area.
                    `
                    ,cost: "Cost: $750,000 - $1,100,000"
                    ,rent: "Monthly: $3,000 - $5,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Apartment Suite"
                    ,description: `
                        You chose to live in an Apartment Suite! These spaces typically cost between $400,000 and $900,000 to buy and 
                        have monthly costs ranging from $1,000 to $3,000. Apartment suites offer a more modern living experience with 
                        conveniences such as amenities and easier access to shops, public transport, and other urban features. While 
                        they are more affordable than larger homes, the space can still be quite limited, and you might have to deal 
                        with more noise or less privacy compared to suburban living. It's a solid choice for those looking for a balance 
                        between space and convenience
                    `
                    ,cost: "Cost: $400,000 - $900,000"
                    ,rent: "Monthly: $1,000 - $3,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Cottage"
                    ,description: `
                        You've chosen to live in a Cottage! These charming homes typically cost between $500,000 and $1,500,000 to buy, 
                        with a monthly cost ranging from $1,000 to $6,000. Cottages often offer a cozy, rustic feel with more space and 
                        a connection to nature. They are ideal for those looking for peace and a slower pace of life, with access to 
                        outdoor activities. However, cottages may be located farther from urban centers, which can mean longer commutes 
                        to work or fewer amenities nearby. It's a great choice if you're seeking a quiet retreat while still having 
                        modern comforts.
                    `
                    ,cost: "Cost: $500,000 - $1,500,000"
                    ,rent: "Monthly: $1,000 - $6,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Mansion"
                    ,description: `
                        You've chosen to live in a Mansion! A mansion is a luxurious home with vast space and high-end amenities. The 
                        cost of buying a mansion can range from $1,500,000 to $5,000,000, with monthly costs ranging from $30,000 to 
                        $75,000. Mansions typically feature multiple bedrooms, expansive living areas, private gardens, and premium 
                        features such as pools or home theaters. However, owning or renting a mansion comes with its own set of 
                        challenges, including high maintenance costs and the need for a large, sometimes overwhelming space to manage. 
                        It's perfect for those looking for ultimate luxury, but not for everyone.
                    `
                    ,cost: "Cost: $1,500,000 - $5,000,000"
                    ,rent: "Monthly: $30,000 - $75,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 3
                }
            ],
            // Rural
            [
                {
                    name: "Bunker"
                    ,description: `
                        You've chosen to live in a Bunker! A bunker is a secure, underground living space designed for safety and privacy. 
                        The cost of purchasing a bunker can range from $40,000 to $80,000, with a monthly cost between $750 and $1,000. 
                        While it may not offer the luxury of a traditional home, a bunker provides an escape from the outside world, 
                        often built to withstand extreme conditions. It's ideal for those who prioritize security and isolation, but it 
                        may lack comfort and space compared to other living options.
                    `
                    ,cost: "Cost: $40,000 - $80,000"
                    ,rent: "Monthly: $750 - $1,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Cabin"
                    ,description: `
                        You've chosen to live in a Cabin! A cabin offers a cozy, rustic living experience often set in rural or 
                        forested areas. The cost of purchasing a cabin ranges from $60,000 to $90,000, with monthly costs between 
                        $1,250 and $1,750. Cabins are perfect for those who enjoy a simple, peaceful lifestyle surrounded by nature. 
                        While they provide more comfort and space than a bunker, they may not be as luxurious as other urban or 
                        suburban options. It's a great choice for those looking to disconnect from city life.
                    `
                    ,cost: "Cost: $60,000 - $90,000"
                    ,rent: "Monthly: $1,250 - $1,750"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Ranch"
                    ,description: `
                        You've chosen to live on a Ranch! A ranch offers vast open spaces and a lifestyle often associated with farming 
                        or livestock. The cost to purchase a ranch ranges from $2,500,000 to $3,500,000, with a monthly cost between 
                        $2,000 and $4,000. Ranches provide a lot of room to roam and are perfect for those who love rural living, 
                        outdoor activities, and a self-sufficient lifestyle. While more expensive, ranches offer a unique combination 
                        of tranquility and land ownership, making them ideal for those seeking space and privacy.
                    `
                    ,cost: "Cost: $2,500,000 - $3,500,000"
                    ,rent: "Monthly: $2,000 - $4,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Manor"
                    ,description: `
                        You've chosen to live in a Manor! A manor is an elegant, stately residence often set in picturesque, rural 
                        surroundings. The cost to purchase a manor ranges from $17,500,000 to $22,500,000, with monthly upkeep between 
                        $3,000 and $5,000. Manors typically offer luxurious living spaces, vast grounds, and a sense of old-world charm. 
                        If you appreciate classic architecture, grandeur, and serenity, this could be your perfect home. However, 
                        maintaining such a property can be costly and time-consuming, requiring attention to both the estate and its 
                        upkeep.
                    `
                    ,cost: "Cost: $17,500,000 - $22,500,000"
                    ,rent: "Monthly: $3,000 - $5,000"
                    ,goTo: "movingCompany"
                    ,goToSet: 0
                    ,value: 3
                }
            ]
        ]
    },
    movingCompany: {
        name: "movingCompany",
        prompt: "Which moving company do you want?",
        options: [
            [
                {
                    name: "JK Moving"
                    ,description: `
                        
                    `
                    ,cost: "Cost: $5,000 - $15,000"
                    ,rent: "Monthly: NA"
                    ,goTo: "jobField"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "North American Van Lines"
                    ,description: `
                        
                    `
                    ,cost: "Cost: $3,000 - $6,000"
                    ,rent: "Monthly: NA"
                    ,goTo: "jobField"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "National Vans"
                    ,description: `
                        
                    `
                    ,cost: "Cost: $700 - $1,400"
                    ,rent: "Monthly: NA"
                    ,goTo: "jobField"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Pods"
                    ,description: `
                        
                    `
                    ,cost: "Cost: $300 - $3,000"
                    ,rent: "Monthly: $NA"
                    ,goTo: "jobField"
                    ,goToSet: 0
                    ,value: 3
                }
            ]
        ]
    },
    jobField: {
        name: "jobField",
        prompt: "What field would you like to work in?",
        options: [
            [
                {
                    name: "Medicine"
                    ,description: ``
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "job"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Trade"
                    ,description: ``
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "job"
                    ,goToSet: 1
                    ,value: 1
                },
                {
                    name: "Public Work"
                    ,description: ""
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "job"
                    ,goToSet: 2
                    ,value: 2
                },
                {
                    name: "Business"
                    ,description: ""
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "job"
                    ,goToSet: 3
                    ,value: 3
                }
            ]
        ]
    },
    job: {
        name: "job",
        prompt: "What job are you going to get?",
        options: [
            [
                {
                    name: "EMT"
                    ,description: `
                        Going into the medical field, you got a job as an EMT. Being an EMT (Emergency Medical Technician), you get paid 
                        between $40,000 and $100,000 each year. Being an EMT 
                        has some downsides, though. The job is physically and emotionally demanding, as you are often the first 
                        responder to life-threatening emergencies. You may work long, irregular hours, including nights, weekends, and 
                        holidays. The pay is relatively low compared to the high level of stress and responsibility, and there's a risk 
                        of exposure to infectious diseases or hazardous environments.
                    `
                    ,cost: "Salary: $40,000 - $100,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Dietician"
                    ,description: `
                        Going into the medical field, you got a job as a dietician. Being a dietitian, you get paid between $70,000 and 
                        $125,000 each year, with no significant tips 
                        or bonus pay. Being a dietitian has some downsides, though. The job often involves dealing with clients who 
                        may be resistant to making dietary changes, which can be frustrating. You may need to work evenings or weekends 
                        to accommodate clients' schedules. Additionally, staying updated with the latest nutritional science and 
                        managing administrative tasks, like detailed record-keeping, can be time-consuming.
                    `
                    ,cost: "Salary: $70,000 - $125,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Nurse"
                    ,description: `
                        Going into the medical field, you got a job as a nurse. Being a nurse, you get paid between $260,000 and $450,000 
                        each year, depending on your specialization and 
                        location, with some earning up to $50,000 in tips and bonus pay throughout the year. Being a nurse has some 
                        downsides, though. The job often involves long hours, including night shifts, weekends, and holidays. Nurses 
                        frequently work in high-stress environments, especially in emergency or critical care settings. The work can 
                        be physically demanding, requiring long periods of standing and patient lifting, as well as emotionally 
                        challenging due to exposure to trauma, illness, and loss.
                    `
                    ,cost: "Salary: $260,000 - $450,000"
                    ,rent: "Tips & Bonus: $50,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Neurosurgeon"
                    ,description: `
                        Going into the medical field, you got a job as a neurosurgeon. Being a neurosurgeon, you get paid between 
                        $325,000 and $750,000 each year, with no significant tips 
                        or bonus pay. . Being a neurosurgeon has some downsides though, you often have to work in stressful conditions 
                        and a simple mistake on your part can lead to someone losing their life. You also have long working hours and 
                        would have little to no free time.
                    `
                    ,cost: "Salary: $325,000 - $750,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 3
                }
            ],
            [
                {
                    name: "Burger Flipper"
                    ,description: `
                        Going into your trade, you got a job being a burger flipper. Being a "Burger Flipper" in a fast-food establishment, 
                        you earn between $30,000 and $50,000 per year, with no 
                        significant tips or bonus pay. The job is physically demanding, requiring long hours on your feet and repetitive 
                        tasks. It can be low-paying for the amount of work and responsibility involved, with the potential for limited 
                        job satisfaction or career growth. The work environment is often fast-paced and may involve dealing with customer 
                        complaints and difficult situations. Additionally, you may have to work nights, weekends, and holidays, further 
                        affecting work-life balance.
                    `
                    ,cost: "Salary: $30,000 - $50,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Plumber"
                    ,description: `
                        Going into your trade, you got a job as a plumber. Being a plumber, you can expect to earn between $55,000 
                        and $75,000 per year, with the possibility of receiving 
                        $2,000 to $7,000 in tips and bonus pay annually. The job involves diagnosing and repairing plumbing systems, 
                        installing pipes, and ensuring water systems function properly. While the pay is competitive, the job can be 
                        physically demanding, requiring you to work in confined spaces or at odd hours, especially during emergencies. 
                        You may also have to deal with high-pressure situations, and there is a risk of injury. Overall, it's a skilled 
                        trade that can provide good job security, but it requires significant hands-on work and expertise.
                    `
                    ,cost: "Salary: $55,000 - $75,000"
                    ,rent: "Tips & Bonus: $2,000 - $7,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Barber"
                    ,description: `
                        Going into your trade, you got a job as a barber. Being a barber, you can expect to earn between $30,000 and 
                        $50,000 annually, with tips and bonuses ranging 
                        from $5,000 to $20,000 per year. As a barber, your job revolves around cutting, styling, and grooming hair, 
                        often forming personal connections with clients. You may also offer additional services such as shaves and 
                        beard trims. While the work can be rewarding, it often requires long hours, especially if you own your own 
                        shop or work in a high-traffic area. There's also the challenge of maintaining customer satisfaction and 
                        adapting to the latest styles and trends. The job is physically demanding and requires strong customer service 
                        skills, but it can also be a lucrative and flexible career choice, especially if you build a loyal client base.
                    `
                    ,cost: "Salary: $30,000 - $50,000"
                    ,rent: "Tips & Bonus: $5,000 - $20,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Mechanic"
                    ,description: `
                        Going into your trade, you got a job as a mechanic. Being a mechanic, you can earn a salary between $40,000 and 
                        $60,000 annually, with tips and bonuses ranging 
                        from $1,000 to $5,000 per year. Mechanics are responsible for diagnosing, repairing, and maintaining vehicles 
                        or machinery, depending on their specialty. The job can be physically demanding, often requiring long hours in 
                        a workshop or garage with the possibility of dealing with hazardous materials and heavy machinery. While the 
                        work can be fulfilling, especially when solving complex problems, it can also be stressful, with a risk of 
                        injury due to the hands-on nature of the job. It's important to stay up-to-date with new technologies and 
                        repair methods, which may require continuous learning and certifications. Despite these challenges, the role 
                        can be rewarding for those who enjoy working with their hands and problem-solving.
                    `
                    ,cost: "Salary: $40,000 - $60,000"
                    ,rent: "Tips & Bonus: $1,000 - $5,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 3
                }
            ],
            [
                {
                    name: "Secretary"
                    ,description: `
                        After a long time looking for a job, you finally got a position as a secretary. Deciding to get a job in the As 
                        a secretary, you can expect to earn a salary ranging from $35,000 to $50,000 per year, with tips and bonuses 
                        varying from $500 to $2,000 annually. Secretaries are responsible for a wide range of administrative tasks, such 
                        as answering phones, scheduling appointments, organizing files, and assisting with various office duties. This 
                        role is often vital for maintaining smooth operations within an office or business. While the job can offer 
                        steady work, the downsides include long hours spent at a desk, repetitive tasks, and potential stress when 
                        handling multiple requests or urgent deadlines. Depending on the company or industry, secretaries may need to 
                        adapt to new technologies or systems frequently. However, for individuals who enjoy organization and 
                        communication, this role can offer a balanced and structured work environment.
                    `
                    ,cost: "Salary: $35,000 - $50,000"
                    ,rent: "Tips & Bonus: $500 - $2,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Teacher"
                    ,description: `
                        You were able to follow through and become a teacher. As a teacher, you can expect a salary range between $55,000 
                        and $100,000 annually, depending on experience, 
                        location, and the level of education taught. Unfortunately, tips and bonuses are generally not part of the 
                        compensation for this role. Being a teacher can be highly rewarding as you shape the minds of students and 
                        contribute to their growth. However, the role comes with challenges such as long working hours, grading, lesson 
                        planning, and potentially dealing with large class sizes or behavioral issues. Teachers often work beyond regular 
                        school hours, and the job can be emotionally demanding. Despite these challenges, the sense of fulfillment and 
                        impact on students' lives can make teaching a highly meaningful profession.
                    `
                    ,cost: "Salary: $55,000 - $100,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Police Officer"
                    ,description: `
                        Wanting to keep people safe, you decided to become a police officer. As a police officer, the salary typically 
                        ranges from $50,000 to $75,000 annually, depending on your rank, 
                        location, and experience. In addition to the salary, you might also receive tips and bonuses, ranging from 
                        $1,000 to $5,000 throughout the year. While being a police officer can be rewarding in terms of helping to 
                        protect the community and ensuring public safety, it also comes with several challenges. The job can be 
                        dangerous, as you may encounter life-threatening situations. It often requires working long and irregular hours, 
                        including nights, weekends, and holidays. Emotional and physical stress can be high, and the job can take a toll 
                        on mental health due to exposure to difficult situations, including violence or traumatic events. Despite these 
                        challenges, many officers find a sense of purpose in their work and the ability to make a meaningful difference 
                        in society.
                    `
                    ,cost: "Salary: $50,000 - $75,000"
                    ,rent: "Tips & Bonus: $1,000 - $5,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Psychiatrist"
                    ,description: `
                        Wanting to help people, you got a job as a psychiatrist. As a psychiatrist, the salary typically ranges from $200,000 to $300,000 annually, with the potential for 
                        additional tips and bonuses ranging from $10,000 to $50,000, depending on the type of practice, client base, 
                        and geographic location. Being a psychiatrist can be both fulfilling and challenging. On the one hand, 
                        psychiatrists play a crucial role in helping individuals with mental health issues, providing essential care and 
                        support for those dealing with conditions such as depression, anxiety, and trauma. They often have a flexible 
                        work schedule and the potential to earn a high income, especially in private practice or specialized areas. 
                        However, the role also comes with significant downsides. The job can be emotionally taxing, as you deal with 
                        patients who may be in severe distress, and the work can take an emotional toll on your mental health. Long 
                        hours, dealing with difficult or resistant patients, and the administrative burden of paperwork can also add 
                        stress to the job. Furthermore, the need for continuous education and keeping up-to-date with new treatments 
                        and practices is essential in this ever-evolving field.
                    `
                    ,cost: "Salary: $200,000 - $300,000"
                    ,rent: "Tips & Bonus: $10,000 - $50,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 3
                },
            ],
            [
                {
                    name: "Logistician"
                    ,description: `
                        Going into a business related occupation, you got a job as a logistician. A logistician typically earns a salary 
                        between $60,000 and $80,000, with additional tips and bonuses ranging 
                        from $2,000 to $10,000, depending on the industry and job position. Being a logistician can offer a stable and 
                        rewarding career. In this role, you would be responsible for managing the supply chain, organizing the movement 
                        of goods, and ensuring that operations run smoothly. It involves problem-solving, planning, and the ability to 
                        handle complex logistics systems, often in sectors such as transportation, retail, or manufacturing. However, 
                        there are challenges as well. Logistics work can sometimes be fast-paced and stressful, especially when unexpected 
                        problems arise, such as delays or disruptions in supply chains. The job can also require long hours, including 
                        nights or weekends, to ensure everything operates efficiently. Additionally, logisticians often have to work 
                        under tight deadlines and handle complex systems, which can be mentally exhausting at times.
                    `
                    ,cost: "Salary: $60,000 - $80,000"
                    ,rent: "Tips & Bonus: $2,000 - $10,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Researcher"
                    ,description: `
                        Going into a business related occupation, you got a job as a researcher.
                        As a researcher, the salary typically ranges from $50,000 to $85,000 annually, with the potential for additional 
                        tips and bonuses ranging from $1,000 to $8,000, depending on the type of research, industry, and funding sources. 
                        Being a researcher can be both intellectually stimulating and rewarding. Researchers play a vital role in 
                        advancing knowledge and contributing to scientific discoveries, technological innovations, or social advancements. 
                        The work is often independent, allowing for deep focus on experiments, data analysis, and publication of findings. 
                        Additionally, researchers have the opportunity to make a significant impact in their respective fields, whether 
                        it's developing new treatments in medicine or contributing to policy changes in social science. However, the role 
                        also comes with its challenges. Research can be a long and solitary process, often requiring persistence and 
                        patience, as experiments may fail or take time to yield results. Funding can be competitive and uncertain, 
                        especially in academic and public research sectors. Furthermore, the pressure to publish and secure grants can 
                        be stressful, and the work may not always be as financially rewarding as other careers in science or technology. 
                        Additionally, researchers must stay up-to-date with constant developments in their field, which can involve 
                        continued education and ongoing training.
                    `
                    ,cost: "Salary: $50,000 - $85,000"
                    ,rent: "Tips & Bonus: $1,000 - $8,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Financial Manager"
                    ,description: `
                        Going into a business related occupation, you got a job as a financial manager.
                        As a "Financial Manager," the salary typically ranges from $110,000 to $160,000 annually, with the potential for 
                        additional tips and bonuses ranging from $10,000 to $50,000, depending on the company size, industry, and 
                        performance. Being a financial manager can be both rewarding and demanding. Financial managers are responsible 
                        for overseeing the financial health of organizations, developing strategies to ensure profitability, managing 
                        budgets, and making key decisions that impact the company's financial future. The role offers opportunities for 
                        career growth, high earnings, and the chance to work in various industries such as banking, insurance, corporate 
                        finance, and consulting. However, the role comes with significant challenges. Financial managers often work long 
                        hours, especially during fiscal year-end or when deadlines are approaching. The pressure to make critical 
                        financial decisions can be stressful, and the job requires a high level of responsibility and attention to detail. 
                        Additionally, financial managers must continuously stay informed about changes in financial regulations, market 
                        trends, and economic conditions. This fast-paced and high-stakes environment can take a toll on work-life balance.
                    `
                    ,cost: "Salary: $110,000 - $160,000"
                    ,rent: "Tips & Bonus: $10,000 - $50,000"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "CEO"
                    ,description: `
                        Going into a business related occupation, you rose the corporate ladder and eventually became the CEO.
                        As a "CEO," the salary typically ranges from $400,000 to $1,500,000 annually, with compensation often including 
                        significant bonuses, stock options, or profit-sharing, though direct tips are not common for this role. Being a 
                        CEO is both prestigious and highly demanding. CEOs are the highest-ranking executives in a company, responsible 
                        for making major decisions that influence the direction and success of the organization. They manage corporate 
                        strategies, oversee company operations, handle key relationships, and make decisions that impact employees, 
                        stakeholders, and the bottom line. The role often offers substantial financial rewards and a high level of 
                        influence. However, being a CEO comes with significant pressures. The responsibility for the company's performance 
                        and the welfare of its employees can be overwhelming, especially during difficult times. CEOs often face intense 
                        scrutiny from the public, investors, and the media, and the position can be emotionally taxing, requiring constant 
                        decision-making and problem-solving. The job also involves long hours and frequent travel, which can affect 
                        personal life and work-life balance. Additionally, dealing with crises, making unpopular decisions, and managing 
                        large teams can be stressful.
                    `
                    ,cost: "Salary: $400,000 - $1,500,000"
                    ,rent: "Tips & Bonus: $0"
                    ,goTo: "occupants"
                    ,goToSet: 0
                    ,value: 3
                }
            ]
        ]
    },
    occupants: {
        name: "occupants",
        prompt: "Who are you going to live with?",
        options: [
            [
                {
                    name: "Single roomate"
                    ,description: "You have chosen to live with a roommate; maybe it's your friend. You only have to pay half for rent and utilities!"
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "end"
                    ,goToSet: 0
                    ,value: 0
                },
                {
                    name: "Live alone"
                    ,description: "You have chosen to live alone, that's okay, you get the whole space to your self."
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "end"
                    ,goToSet: 0
                    ,value: 1
                },
                {
                    name: "Multiple roommates"
                    ,description: "You have chosen to live with multiple roommates. The more you choose to live with, the less you have to pay. On the other hand, the more you live with, the less space you get."
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "end"
                    ,goToSet: 0
                    ,value: 2
                },
                {
                    name: "Significant other"
                    ,description: "You have chosen to live with your significant other. It's like having a roommate, but you love each other."
                    ,cost: "--"
                    ,rent: "--"
                    ,goTo: "end"
                    ,goToSet: 0
                    ,value: 3
                }
            ]
        ]
    }
};