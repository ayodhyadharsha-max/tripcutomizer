const fs = require('fs');
const path = require('path');

const domesticDests = [
  { region: "Agra & Golden Triangle", cities: ["Agra", "Fatehpur Sikri", "Delhi", "Jaipur"], count: 80, min: 5999, max: 22000, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=50&fm=webp&fit=crop" },
  { region: "Ahmedabad & Rann of Kutch", cities: ["Ahmedabad", "Bhuj", "Rann of Kutch", "Statue of Unity"], count: 100, min: 9500, max: 32000, img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&q=50&fm=webp&fit=crop" },
  { region: "Alleppey & Backwaters", cities: ["Alleppey", "Kumarakom", "Cochin"], count: 90, min: 7999, max: 24000, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=50&fm=webp&fit=crop" },
  { region: "Almora & Ranikhet", cities: ["Almora", "Ranikhet", "Kausani", "Nainital"], count: 70, min: 8500, max: 21000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Amritsar & Wagah Border", cities: ["Amritsar", "Jallianwala Bagh", "Wagah Border"], count: 80, min: 4999, max: 15000, img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=500&q=50&fm=webp&fit=crop" },
  { region: "Andaman & Havelock", cities: ["Port Blair", "Havelock Island", "Neil Island"], count: 140, min: 17999, max: 78000, img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=500&q=50&fm=webp&fit=crop" },
  { region: "Auli & Chopta", cities: ["Auli", "Chopta", "Joshimath", "Rishikesh"], count: 90, min: 11500, max: 32000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Ayodhya & Varanasi", cities: ["Ayodhya", "Varanasi", "Prayagraj"], count: 110, min: 8999, max: 26000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Badrinath & Kedarnath Yatra", cities: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath"], count: 130, min: 17500, max: 55000, img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&q=50&fm=webp&fit=crop" },
  { region: "Bandhavgarh & Kanha Wildlife", cities: ["Jabalpur", "Bandhavgarh", "Kanha"], count: 80, min: 12000, max: 35000, img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Coorg & Mysore", cities: ["Bangalore", "Mysore", "Coorg", "Chikmagalur"], count: 130, min: 8999, max: 26000, img: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=500&q=50&fm=webp&fit=crop" },
  { region: "Corbett National Park", cities: ["Jim Corbett", "Nainital", "Ramnagar"], count: 90, min: 6500, max: 19000, img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&q=50&fm=webp&fit=crop" },
  { region: "Darjeeling & Kalimpong", cities: ["Darjeeling", "Kalimpong", "Mirik"], count: 110, min: 9999, max: 28000, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=50&fm=webp&fit=crop" },
  { region: "Dharamshala & Mcleodganj", cities: ["Dharamshala", "Mcleodganj", "Triund"], count: 100, min: 7500, max: 21000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Dwarka & Somnath Temple Tour", cities: ["Ahmedabad", "Rajkot", "Dwarka", "Somnath"], count: 100, min: 10500, max: 28000, img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&q=50&fm=webp&fit=crop" },
  { region: "Gangtok & Sikkim High Altitudes", cities: ["Gangtok", "Lachen", "Lachung", "Pelling"], count: 150, min: 15500, max: 42000, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=50&fm=webp&fit=crop" },
  { region: "Goa North & South Beach Getaways", cities: ["Panaji", "Calangute", "Baga", "Colva", "Dudhsagar"], count: 250, min: 6999, max: 32000, img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=50&fm=webp&fit=crop" },
  { region: "Gokarna & Murudeshwar Beach Treks", cities: ["Gokarna", "Murudeshwar", "Honnavar"], count: 80, min: 5999, max: 17000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Gulmarg & Pahalgam Valley", cities: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"], count: 240, min: 14499, max: 52000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Hampi & Badami Heritage", cities: ["Hospet", "Hampi", "Badami", "Pattadakal"], count: 80, min: 7999, max: 22000, img: "https://images.unsplash.com/photo-1600100397608-f090742f40c7?w=500&q=50&fm=webp&fit=crop" },
  { region: "Haridwar & Rishikesh Spiritual", cities: ["Haridwar", "Rishikesh", "Dehradun"], count: 100, min: 4999, max: 16000, img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&q=50&fm=webp&fit=crop" },
  { region: "Himachal Manali & Shimla Circuit", cities: ["Shimla", "Manali", "Dharamshala", "Dalhousie", "Kasol"], count: 300, min: 8999, max: 42000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Hyderabad & Ramoji Film City", cities: ["Hyderabad", "Golconda", "Ramoji"], count: 90, min: 6999, max: 21000, img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&q=50&fm=webp&fit=crop" },
  { region: "Jaipur & Ajmer Heritage", cities: ["Jaipur", "Pushkar", "Ajmer"], count: 120, min: 5999, max: 18000, img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=500&q=50&fm=webp&fit=crop" },
  { region: "Jaisalmer Sand Dunes & Desert", cities: ["Jaisalmer", "Sam Dunes", "Kuldhara"], count: 110, min: 7500, max: 22000, img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=50&fm=webp&fit=crop" },
  { region: "Jodhpur & Udaipur Palaces", cities: ["Jodhpur", "Ranakpur", "Udaipur"], count: 140, min: 11500, max: 35000, img: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kabini & Nagarhole Jungle", cities: ["Mysore", "Kabini", "Nagarhole"], count: 70, min: 13500, max: 38000, img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kanyakumari & Rameshwaram", cities: ["Madurai", "Rameshwaram", "Kanyakumari"], count: 110, min: 9999, max: 25000, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kasol & Parvati Valley Treks", cities: ["Bhuntar", "Kasol", "Manikaran", "Tosh"], count: 100, min: 5500, max: 15000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kashmir Paradise & Lakes", cities: ["Srinagar", "Gulmarg", "Pahalgam", "Yusmarg"], count: 220, min: 13999, max: 58000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Katra & Vaishno Devi Shrine", cities: ["Jammu", "Katra", "Vaishno Devi"], count: 110, min: 4499, max: 14000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kerala Backwaters & Hills Grand", cities: ["Munnar", "Alleppey", "Cochin", "Thekkady", "Kovalam"], count: 320, min: 11999, max: 45000, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kodaikanal Hill Station", cities: ["Madurai", "Kodaikanal"], count: 90, min: 7500, max: 19000, img: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kovalam Beach & Poovar", cities: ["Trivandrum", "Kovalam", "Poovar"], count: 90, min: 8500, max: 24000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Ladakh High Altitude & Lakes", cities: ["Leh", "Sham Valley", "Nubra", "Pangong"], count: 180, min: 19999, max: 58000, img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=500&q=50&fm=webp&fit=crop" },
  { region: "Lonavala & Mahabaleshwar", cities: ["Mumbai", "Lonavala", "Khandala", "Mahabaleshwar"], count: 110, min: 6500, max: 19000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Meghalaya Living Root Bridges", cities: ["Shillong", "Cherrapunji", "Dawki"], count: 120, min: 13500, max: 35000, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=50&fm=webp&fit=crop" },
  { region: "Mussoorie & Dhanaulti", cities: ["Dehradun", "Mussoorie", "Dhanaulti"], count: 100, min: 6999, max: 19000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Mysore & Ooty Hills", cities: ["Bangalore", "Mysore", "Ooty", "Coonoor"], count: 140, min: 10500, max: 28000, img: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=500&q=50&fm=webp&fit=crop" },
  { region: "Nainital & Lakes Tour", cities: ["Kathgodam", "Nainital", "Bhimtal", "Mukteshwar"], count: 110, min: 7500, max: 21000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Pondicherry French Colony", cities: ["Chennai", "Pondicherry", "Mahabalipuram"], count: 90, min: 5999, max: 17000, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&q=50&fm=webp&fit=crop" },
  { region: "Puri & Konark Temple Circuit", cities: ["Bhubaneswar", "Puri", "Konark", "Chilika"], count: 100, min: 7500, max: 21000, img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&q=50&fm=webp&fit=crop" },
  { region: "Rajasthan Royal Palaces & Forts", cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"], count: 220, min: 12500, max: 48000, img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=500&q=50&fm=webp&fit=crop" },
  { region: "Shimla & Kufri Snow Escape", cities: ["Chandigarh", "Shimla", "Kufri", "Chail"], count: 120, min: 7500, max: 21000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Shirdi & Shanisingnapur", cities: ["Pune", "Shirdi", "Shanisingnapur", "Nashik"], count: 90, min: 4500, max: 13000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Statue of Unity & Gujarat", cities: ["Ahmedabad", "Vadodara", "Kevadia"], count: 80, min: 5999, max: 16000, img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&q=50&fm=webp&fit=crop" },
  { region: "Udaipur City of Lakes", cities: ["Udaipur", "Mount Abu", "Kumbhalgarh"], count: 130, min: 9500, max: 28000, img: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=500&q=50&fm=webp&fit=crop" },
  { region: "Ujjain Mahakal & Omkareshwar", cities: ["Indore", "Ujjain", "Omkareshwar", "Mandu"], count: 100, min: 6999, max: 19000, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=50&fm=webp&fit=crop" },
  { region: "Varanasi Ganga Aarti & Ghats", cities: ["Varanasi", "Sarnath", "Vindhyachal"], count: 110, min: 5500, max: 16000, img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500&q=50&fm=webp&fit=crop" },
  { region: "Wayanad Nature & Waterfalls", cities: ["Calicut", "Wayanad", "Vythiri"], count: 100, min: 7999, max: 22000, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=50&fm=webp&fit=crop" }
];

const intlDests = [
  { region: "Abu Dhabi & Ferrari World", cities: ["Abu Dhabi", "Dubai", "Yas Island"], count: 90, min: 27999, max: 85000, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=50&fm=webp&fit=crop" },
  { region: "Almaty Snow & Lakes (Kazakhstan)", cities: ["Almaty", "Shymbulak", "Kok Tobe"], count: 80, min: 29999, max: 68000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Amsterdam & Tulip Gardens", cities: ["Amsterdam", "Zaanse Schans", "Keukenhof"], count: 70, min: 45000, max: 98000, img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=500&q=50&fm=webp&fit=crop" },
  { region: "Athens & Greek Islands", cities: ["Athens", "Santorini", "Mykonos"], count: 90, min: 69999, max: 185000, img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&q=50&fm=webp&fit=crop" },
  { region: "Auckland & Fjords (New Zealand)", cities: ["Auckland", "Rotorua", "Queenstown"], count: 80, min: 135000, max: 325000, img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=500&q=50&fm=webp&fit=crop" },
  { region: "Baku & Caucasian Mountains", cities: ["Baku", "Gabala", "Shahdag"], count: 90, min: 31999, max: 72000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Bali Tropical Beaches & Swings", cities: ["Ubud", "Kuta", "Seminyak", "Nusa Penida"], count: 220, min: 19999, max: 65000, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=50&fm=webp&fit=crop" },
  { region: "Bangkok & Pattaya Coral Islands", cities: ["Bangkok", "Pattaya", "Coral Island"], count: 240, min: 16999, max: 45000, img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&q=50&fm=webp&fit=crop" },
  { region: "Barcelona & Madrid Flamenco", cities: ["Madrid", "Barcelona", "Seville", "Granada"], count: 90, min: 79999, max: 198000, img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&q=50&fm=webp&fit=crop" },
  { region: "Cairo Pyramids & Nile Cruise", cities: ["Cairo", "Giza", "Luxor", "Aswan"], count: 90, min: 58000, max: 145000, img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=500&q=50&fm=webp&fit=crop" },
  { region: "Cape Town & Big 5 Safari", cities: ["Cape Town", "Sun City", "Kruger"], count: 80, min: 99999, max: 255000, img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=50&fm=webp&fit=crop" },
  { region: "Cappadocia Hot Air Balloon & Cave", cities: ["Istanbul", "Cappadocia", "Pamukkale"], count: 110, min: 52000, max: 138000, img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&q=50&fm=webp&fit=crop" },
  { region: "Colombo & Bentota Beach", cities: ["Colombo", "Kandy", "Nuwara Eliya", "Bentota"], count: 110, min: 16999, max: 48000, img: "https://images.unsplash.com/photo-1546708973-b339540b5162?w=500&q=50&fm=webp&fit=crop" },
  { region: "Da Nang Golden Bridge & Halong", cities: ["Hanoi", "Halong Bay", "Da Nang", "Hoi An"], count: 140, min: 24999, max: 72000, img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=50&fm=webp&fit=crop" },
  { region: "Doha Desert & Malls (Qatar)", cities: ["Doha", "Souq Waqif", "Katara"], count: 70, min: 32000, max: 78000, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=50&fm=webp&fit=crop" },
  { region: "Dubai Desert Safari & Burj", cities: ["Dubai City", "Marina", "Desert Camp"], count: 240, min: 26999, max: 82000, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=50&fm=webp&fit=crop" },
  { region: "Europe Grand Capitals Tour", cities: ["Paris", "Lucerne", "Rome", "Venice", "Amsterdam"], count: 180, min: 89999, max: 285000, img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&q=50&fm=webp&fit=crop" },
  { region: "Fiji Island Resorts", cities: ["Nadi", "Mamanuca Islands"], count: 50, min: 115000, max: 275000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Florence & Gondola Venice", cities: ["Rome", "Florence", "Venice", "Milan"], count: 90, min: 82000, max: 195000, img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&q=50&fm=webp&fit=crop" },
  { region: "Genting Theme Park & KL", cities: ["Kuala Lumpur", "Genting Highlands", "Batu Caves"], count: 130, min: 19999, max: 52000, img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&q=50&fm=webp&fit=crop" },
  { region: "Hanoi & Mekong Delta", cities: ["Hanoi", "Ninh Binh", "Ho Chi Minh City"], count: 110, min: 22999, max: 65000, img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&q=50&fm=webp&fit=crop" },
  { region: "Hong Kong Disneyland & Macao", cities: ["Hong Kong City", "Disneyland", "Macao"], count: 90, min: 49999, max: 125000, img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&q=50&fm=webp&fit=crop" },
  { region: "Interlaken & Swiss Alps", cities: ["Zurich", "Lucerne", "Interlaken", "Mt Titlis"], count: 130, min: 99999, max: 245000, img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=500&q=50&fm=webp&fit=crop" },
  { region: "Kathmandu & Pokhara Himalayas", cities: ["Kathmandu", "Pokhara", "Nagarkot"], count: 110, min: 10999, max: 34000, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=50&fm=webp&fit=crop" },
  { region: "Krabi & Phi Phi Island", cities: ["Phuket", "Krabi", "Phi Phi Island"], count: 160, min: 21999, max: 62000, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=50&fm=webp&fit=crop" },
  { region: "London Big Ben & Scotland", cities: ["London", "Oxford", "Edinburgh", "Highlands"], count: 110, min: 105000, max: 265000, img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=50&fm=webp&fit=crop" },
  { region: "Maldives Overwater Luxury Villa", cities: ["Male", "Overwater Villa", "Beach Resort"], count: 150, min: 34999, max: 135000, img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=50&fm=webp&fit=crop" },
  { region: "Mauritius White Sand Beaches", cities: ["North Island", "South Island", "Ile Aux Cerfs"], count: 110, min: 39999, max: 98000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Melbourne & Sydney Opera", cities: ["Sydney", "Melbourne", "Great Ocean Road"], count: 90, min: 125000, max: 295000, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&q=50&fm=webp&fit=crop" },
  { region: "Muscat Desert Dunes (Oman)", cities: ["Muscat", "Nizwa", "Wahiba Sands"], count: 70, min: 34999, max: 85000, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=50&fm=webp&fit=crop" },
  { region: "Nairobi Maasai Mara Safari", cities: ["Nairobi", "Maasai Mara", "Lake Nakuru"], count: 70, min: 89999, max: 215000, img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=50&fm=webp&fit=crop" },
  { region: "Paris Eiffel & Disneyland", cities: ["Paris", "Versailles", "Disneyland Paris"], count: 110, min: 59999, max: 148000, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=50&fm=webp&fit=crop" },
  { region: "Prague & Danube River Cruise", cities: ["Prague", "Vienna", "Budapest"], count: 90, min: 72000, max: 178000, img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=50&fm=webp&fit=crop" },
  { region: "Rome Colosseum & Amalfi", cities: ["Rome", "Naples", "Amalfi", "Positano"], count: 90, min: 78000, max: 188000, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&q=50&fm=webp&fit=crop" },
  { region: "San Francisco & Vegas Strip", cities: ["San Francisco", "Las Vegas", "Los Angeles"], count: 80, min: 155000, max: 385000, img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&q=50&fm=webp&fit=crop" },
  { region: "Seoul & K-Pop Palace Tour", cities: ["Seoul", "Nami Island", "Jeju Island"], count: 80, min: 68000, max: 165000, img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=500&q=50&fm=webp&fit=crop" },
  { region: "Seychelles Granite Beaches", cities: ["Mahé", "Praslin", "La Digue"], count: 70, min: 59999, max: 148000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Singapore Universal Studios", cities: ["Singapore City", "Sentosa Island"], count: 160, min: 27999, max: 72000, img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=50&fm=webp&fit=crop" },
  { region: "Tbilisi Caucasus Mountains", cities: ["Tbilisi", "Kazbegi", "Gudauri"], count: 90, min: 34999, max: 78000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Thimphu & Tiger's Nest Bhutan", cities: ["Thimphu", "Paro", "Punakha Valley"], count: 100, min: 21999, max: 62000, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=50&fm=webp&fit=crop" },
  { region: "Tokyo Cherry Blossom & Mt Fuji", cities: ["Tokyo", "Mt Fuji", "Kyoto", "Osaka"], count: 110, min: 89999, max: 225000, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=50&fm=webp&fit=crop" },
  { region: "Tashkent Silk Road Tour", cities: ["Tashkent", "Samarkand", "Bukhara"], count: 70, min: 29999, max: 65000, img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&q=50&fm=webp&fit=crop" },
  { region: "Zurich & Matterhorn Mountain", cities: ["Zurich", "Geneva", "Zermatt"], count: 80, min: 115000, max: 275000, img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=500&q=50&fm=webp&fit=crop" }
];

const themes = [
  "Honeymoon Special",
  "Family Fun Package",
  "Super Budget Explorer",
  "Luxury Escapes",
  "Adventure & Treks",
  "Pilgrimage Yatra",
  "Wildlife Safari",
  "Weekend Getaway",
  "All-Inclusive Resort Stay"
];

const durations = ["2N/3D", "3N/4D", "4N/5D", "5N/6D", "6N/7D", "7N/8D", "9N/10D", "11N/12D"];

const highlightsByTheme = {
  "Honeymoon Special": ["Private Pool Villa", "Candlelight Dinner", "Flower Bed Decor", "Couple Spa"],
  "Family Fun Package": ["4-Star Resort", "Buffet Breakfast & Dinner", "Sightseeing Cab", "Kids Stay Free"],
  "Super Budget Explorer": ["Clean 3-Star Stay", "Daily Breakfast", "Shared Transfers", "Top Sightseeing"],
  "Luxury Escapes": ["5-Star Luxury Resort", "VIP Fastrack Entry", "Private Luxury SUV", "Butler Service"],
  "Adventure & Treks": ["Camp Stay & Treks", "Guided Hiking", "Bonfire & BBQ", "Equipment Provided"],
  "Pilgrimage Yatra": ["VIP Sugam Darshan Pass", "Sattvik Pure Veg Dining", "Aarti Boat Seat", "Temple Transfer"],
  "Wildlife Safari": ["Jeep Safari Pass", "Resort Stay Near Jungle", "Naturalist Guide", "All Meals Included"],
  "Weekend Getaway": ["Express Sightseeing", "Late Checkout", "Breakfast Included", "AC Cab"],
  "All-Inclusive Resort Stay": ["All Meals Included", "Unlimited Drinks/Snacks", "Resort Activities", "Airport Transfer"]
};

let code = `// TripCustomizer Web Master Catalog Dataset
import { HolidayPackage } from './packagesData';

export interface WebRegionDef {
  region: string;
  cities: string[];
  count: number;
  min: number;
  max: number;
  img: string;
}

export const DOMESTIC_REGIONS: WebRegionDef[] = ${JSON.stringify(domesticDests, null, 2)};
export const INTERNATIONAL_REGIONS: WebRegionDef[] = ${JSON.stringify(intlDests, null, 2)};

export const THEMES = ${JSON.stringify(themes, null, 2)};
export const DURATIONS = ${JSON.stringify(durations, null, 2)};
export const HIGHLIGHTS_MAP: Record<string, string[]> = ${JSON.stringify(highlightsByTheme, null, 2)};

export function generateWebPackage(isInternational: boolean, regIndex: number, pkgIndex: number): HolidayPackage {
  const regions = isInternational ? INTERNATIONAL_REGIONS : DOMESTIC_REGIONS;
  const reg = regions[regIndex % regions.length];
  const c1 = reg.cities[pkgIndex % reg.cities.length];
  const c2 = reg.cities[(pkgIndex + 1) % reg.cities.length];
  const cityStr = c1 !== c2 ? \`\${c1} \${c2}\` : c1;
  const theme = THEMES[pkgIndex % THEMES.length];
  const durStr = DURATIONS[pkgIndex % DURATIONS.length];
  const days = parseInt(durStr.split('/')[1]) || 4;
  const nights = parseInt(durStr.split('N')[0]) || 3;
  
  const count = reg.count;
  const step = (reg.max - reg.min) / Math.max(1, count - 1);
  const price = Math.round(reg.min + (pkgIndex * step));
  
  const highlights = HIGHLIGHTS_MAP[theme] || ['Sightseeing Cab', 'Daily Breakfast', 'Guided Tour'];
  const title = \`\${reg.region}: \${cityStr} \${theme}\`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const prefix = isInternational ? 'intl' : 'dom';

  return {
    id: \`web-\${prefix}-\${regIndex}-\${pkgIndex}\`,
    name: title,
    slug,
    destination: cityStr,
    destinationSlug: reg.region.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    country: isInternational ? 'International' : 'India',
    region: reg.region,
    isInternational,
    durationDays: days,
    durationNights: nights,
    startingPrice: price,
    discountPrice: Math.round(price * 1.25),
    rating: 4.8,
    reviewsCount: 120 + (pkgIndex * 7) % 500,
    heroImage: reg.img,
    gallery: [reg.img],
    highlights,
    inclusions: ['Hotel Stay', 'Breakfast & Dinner', 'Private Cab Sightseeing', 'GST & Taxes'],
    exclusions: ['Airfare / Train fare unless specified', 'Personal Expenses', 'Tips & Gratuities'],
    theme,
    hotelCategory: '4-Star / Deluxe Stays',
    mealPlan: 'CP / MAP Plan',
    flightsIncluded: isInternational,
    transfersIncluded: true,
    departureCity: 'Delhi / Mumbai / Bangalore / Kolkata',
    itinerary: Array.from({ length: days }).map((_, dIdx) => ({
      dayNumber: dIdx + 1,
      title: dIdx === 0 ? \`Arrival in \${c1} & Hotel Check-in\` : dIdx === days - 1 ? \`Departure from \${c2}\` : \`\${cityStr} Sightseeing & Local Experiences\`,
      description: \`Enjoy curated sightseeing, private vehicle transfer, and guided local tour in \${cityStr}.\`,
      meals: ['Breakfast', 'Dinner'],
      activities: highlights,
      hotel: \`Standard 4-Star Deluxe Resort in \${c1}\`,
      transfers: 'Private AC Vehicle Transfer'
    })),
    hotels: [
      { name: \`Grand \${c1} Resort & Spa\`, city: c1, rating: '4★', nights }
    ],
    faqs: [
      { question: 'What is included in this package price?', answer: 'This package includes hotel stay, breakfast & dinner, private vehicle transfers, and sightseeing.' },
      { question: 'Can this itinerary be customized?', answer: 'Yes! You can customize dates, hotel tier, meal plan, and vehicle type using our Trip Customizer.' }
    ]
  };
}


export function findWebMasterPackage(slugOrId: string): HolidayPackage | undefined {
  if (!slugOrId) return undefined;
  const target = slugOrId.toLowerCase().trim();

  // 1. Direct ID match like web-dom-0-5 or web-intl-2-10
  const idMatch = target.match(/^web-(dom|intl)-(\d+)-(\d+)$/);
  if (idMatch) {
    const isIntl = idMatch[1] === "intl";
    const regIdx = parseInt(idMatch[2], 10);
    const pkgIdx = parseInt(idMatch[3], 10);
    return generateWebPackage(isIntl, regIdx, pkgIdx);
  }

  // 2. Scan all generated packages
  const allRegions = [
    ...DOMESTIC_REGIONS.map((r, idx) => ({ ...r, isIntl: false, regIdx: idx })),
    ...INTERNATIONAL_REGIONS.map((r, idx) => ({ ...r, isIntl: true, regIdx: idx }))
  ];

  for (const reg of allRegions) {
    for (let i = 0; i < reg.count; i++) {
      const pkg = generateWebPackage(reg.isIntl, reg.regIdx, i);
      if (pkg.slug === target || pkg.id === target || pkg.slug.includes(target) || target.includes(pkg.slug)) {
        return pkg;
      }
    }
  }

  return undefined;
}

export function searchWebMasterPackages(query: string = '', category: string = 'All', page: number = 1, pageSize: number = 20) {
  const queryLower = query.toLowerCase().trim();
  const matched: HolidayPackage[] = [];
  
  const allRegions = [
    ...DOMESTIC_REGIONS.map((r, idx) => ({ ...r, isIntl: false, regIdx: idx })),
    ...INTERNATIONAL_REGIONS.map((r, idx) => ({ ...r, isIntl: true, regIdx: idx }))
  ];

  for (const reg of allRegions) {
    for (let i = 0; i < reg.count; i++) {
      const pkg = generateWebPackage(reg.isIntl, reg.regIdx, i);
      
      const matchesCat = category === 'All' || 
        pkg.theme.toLowerCase().includes(category.toLowerCase()) || 
        (category === 'International' && reg.isIntl) || 
        (category === 'Domestic' && !reg.isIntl);

      const matchesQuery = !queryLower || 
        pkg.name.toLowerCase().includes(queryLower) || 
        pkg.destination.toLowerCase().includes(queryLower) ||
        reg.region.toLowerCase().includes(queryLower);

      if (matchesCat && matchesQuery) {
        matched.push(pkg);
      }
    }
  }

  const totalMatches = matched.length;
  const totalPages = Math.ceil(totalMatches / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedItems = matched.slice(startIndex, startIndex + pageSize);

  return {
    items: paginatedItems,
    totalCount: totalMatches,
    totalPages,
    currentPage: page
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'masterCatalog.ts'), code);
console.log('Successfully generated travel-platform src/data/masterCatalog.ts');
