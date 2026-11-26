// ===================================================
// Karigar - Artisan Handicrafts Store
// Simple JavaScript: arrays, loops, functions only
// NOTE: artisan names and stories are sample data.
// Replace them with your own data and photos.
// ===================================================

// ---------- ARTISAN DATA ----------
var artisans = [
  {
    name: "Parmjit Kaur",
    place: "Barnala",
    state: "Punjab",
    photo: "images/a1.jpg",
    heritage: "4th generation weaver",
    story: "Parmjit Kaur learned weaving from his grandfather on a wooden pit loom. One silk saree takes him almost three weeks, because every gold thread (zari) is woven in by hand."
  },
  {
    name: "Jaswant Singh",
    place: "Dasuya",
    state: "Punjab",
    photo: "images/a2.jpg",
    heritage: "Ikat dyeing master",
    story: "Jaswnat Singh ties and dyes the threads before weaving, so the pattern forms inside the fabric. This tie-and-dye method is called Ikat and needs great patience."
  },
  {
    name: "Sukhram",
    place: "Chennai",
    state: "Tamil Nadu",
    photo: "images/a3.jpg",
    heritage: "Tribal metal caster",
    story: "Sukhram makes Dhokra brass figures with the lost-wax method. A clay mould is made over a wax model, the wax melts away and molten brass takes its place."
  },
  {
    name: "Kulwant Singh",
    place: "Ratia",
    state: "Haryana",
    photo: "images/a4.jpg",
    heritage: "3rd generation brass maker",
    story: "Kulwant Singh is known as the Brass City. Rafiq casts, hammers and engraves each lamp by hand in his small family workshop."
  },
  {
    name: "Mohan Gupta",
    place: "Molela",
    state: "Rajasthan",
    photo: "images/a5.jpg",
    heritage: "Village potter family",
    story: "Mohan Lal shapes clay plaques of village gods by hand, without a potter's wheel. The plaques are dried in the sun and fired in a traditional kiln."
  },
  {
    name: "Nagaraj Achari",
    place: "Channapatna",
    state: "Karnataka",
    photo: "images/a6.jpeg",
    heritage: "Toy-making family",
    story: "Nagaraj turns wood on a hand lathe and colours it with safe natural lacquer. Channapatna is famous as the Toy Town of India."
  },
  {
    name: "Shamshad Ali",
    place: "Saharanpur",
    state: "Uttar Pradesh",
    photo: "images/a7.jpeg",
    heritage: "Master wood carver",
    story: "Shamshad carves floral lattice work (jaali) into sheesham wood. He uses simple chisels that were handed down from his father."
  },
  {
    name: "Meena Kumari",
    place: "Hoshiarpur",
    state: "Punjab",
    photo: "images/a8.png",
    heritage: "Women's craft group leader",
    story: "Meena leads a group of village women who tie macrame knots from cotton cord. The craft gives them a regular income from home."
  },
  {
    name: "Ramesh Prajapati",
    place: "Kutch",
    state: "Gujarat",
    photo: "images/a9.png",
    heritage: "Hand-thrown pottery",
    story: "Ramesh makes clay water pots on a wheel. The clay keeps water naturally cool, and the pots are decorated with simple painted lines."
  }
];

// ---------- PRODUCT DATA ----------
// artisan = position of the artisan in the list above (starts at 0)
// gi = text of the GI tag. Leave it empty "" if the product has no GI tag.
var products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    craft: "Handloom Silk",
    price: 8500,
    gi: "Banarasi Brocades and Sarees - Varanasi, Uttar Pradesh",
    artisan: 0,
    desc: "Pure silk saree with hand-woven gold zari motifs. Look at the close-up photo to see the tight weave.",
    images: ["images/p1_1.jpg", "images/p1_2.png"]
  },
  {
    id: 2,
    name: "Pochampally Ikat Dupatta",
    craft: "Handloom Silk",
    price: 2400,
    gi: "Pochampally Ikat - Telangana",
    artisan: 1,
    desc: "Soft silk dupatta with geometric Ikat patterns, tie-dyed before weaving.",
    images: ["images/p2_1.jpg", "images/p2_2.jpg"]
  },
  {
    id: 3,
    name: "Dhokra Brass Elephant",
    craft: "Brassware",
    price: 3200,
    gi: "Bastar Dhokra - Chhattisgarh",
    artisan: 2,
    desc: "Elephant figure made with the 4000-year-old lost-wax casting method. No two pieces are the same.",
    images: ["images/p3_1.jpg", "images/p3_2.jpg"]
  },
  {
    id: 4,
    name: "Engraved Brass Diya Lamp",
    craft: "Brassware",
    price: 1800,
    gi: "Moradabad Metal Craft - Uttar Pradesh",
    artisan: 3,
    desc: "Hand-engraved brass lamp for festivals and home temples.",
    images: ["images/p4_1.jpg", "images/p4_2.jpg"]
  },
  {
    id: 5,
    name: "Molela Terracotta Plaque",
    craft: "Terracotta",
    price: 950,
    gi: "Molela Clay Work - Rajasthan",
    artisan: 4,
    desc: "Hand-moulded clay wall plaque showing a village deity, fired in a traditional kiln.",
    images: ["images/p5_1.jpg", "images/p5_2.jpeg"]
  },
  {
    id: 6,
    name: "Terracotta Water Pot",
    craft: "Terracotta",
    price: 650,
    gi: "",
    artisan: 8,
    desc: "Wheel-thrown clay pot that keeps drinking water naturally cool.",
    images: ["images/p6_1.jpg", "images/p6_2.jpg"]
  },
  {
    id: 7,
    name: "Channapatna Wooden Toy Set",
    craft: "Woodcraft",
    price: 1100,
    gi: "Channapatna Toys - Karnataka",
    artisan: 5,
    desc: "Set of colourful lacquered wooden toys, safe for children.",
    images: ["images/p7_1.jpg", "images/p7_2.jpg"]
  },
  {
    id: 8,
    name: "Carved Sheesham Wood Box",
    craft: "Woodcraft",
    price: 2700,
    gi: "Saharanpur Wood Craft - Uttar Pradesh",
    artisan: 6,
    desc: "Jewellery box with a hand-carved floral lattice on the lid.",
    images: ["images/p8_1.jpg", "images/p8_2.jpg"]
  },
  {
    id: 9,
    name: "Macrame Wall Hanging",
    craft: "Macrame",
    price: 1450,
    gi: "",
    artisan: 7,
    desc: "Cotton cord wall hanging made with hand-tied knots.",
    images: ["images/p9_1.jpg", "images/p9_2.jpg"]
  },
  {
    id: 10,
    name: "Macrame Plant Hanger",
    craft: "Macrame",
    price: 550,
    gi: "",
    artisan: 7,
    desc: "Strong cotton plant hanger. Holds a medium pot.",
    images: ["images/p10_1.jpg", "images/p10_2.jpg"]
  }
];

// ---------- VARIABLES ----------
var cartCount = 0;
var zoomed = false;

// ---------- BACKUP PICTURE ----------
// If a .jpg photo is missing, show the sample drawing (.svg) with the same name.
function useBackup(img) {
  img.onerror = null;
  img.src = img.src.replace(".jpg", ".svg");
}

// ---------- SHOW PRODUCTS ----------
function showProducts(craftName) {
  var html = "";
  var count = 0;

  for (var i = 0; i < products.length; i++) {
    var p = products[i];

    // show the product if "All" is selected or the craft matches
    if (craftName == "All" || p.craft == craftName) {
      count = count + 1;
      var a = artisans[p.artisan];

      html = html + '<div class="card">';
      if (p.gi != "") {
        html = html + '<span class="gi-badge">GI Certified</span>';
      }
      html = html + '<img src="' + p.images[0] + '" alt="' + p.name + '" onerror="useBackup(this)">';
      html = html + '<div class="card-info">';
      html = html + '<span class="craft-tag">' + p.craft + '</span>';
      html = html + '<h3>' + p.name + '</h3>';
      html = html + '<p class="small-text">By ' + a.name + ', ' + a.place + '</p>';
      html = html + '<p class="price">Rs. ' + p.price + '</p>';
      html = html + '<button class="btn" onclick="openModal(' + p.id + ')">View Details</button>';
      html = html + '</div></div>';
    }
  }

  document.getElementById("productList").innerHTML = html;
  document.getElementById("resultText").innerHTML = "Showing " + count + " product(s) - " + craftName;
}

// ---------- FILTER BUTTONS ----------
function filterProducts(craftName, button) {
  // remove "active" from all buttons
  var buttons = document.getElementsByClassName("filter-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = "filter-btn";
  }
  // add "active" to the clicked button
  button.className = "filter-btn active";

  showProducts(craftName);
}

// ---------- SHOW ARTISANS ----------
function showArtisans() {
  var html = "";
  for (var i = 0; i < artisans.length; i++) {
    var a = artisans[i];
    html = html + '<div class="artisan-card" onclick="toggleStory(' + i + ')">';
    html = html + '<img src="' + a.photo + '" alt="' + a.name + '" onerror="useBackup(this)">';
    html = html + '<h3>' + a.name + '</h3>';
    html = html + '<p>' + a.place + ', ' + a.state + '</p>';
    html = html + '<p class="heritage">' + a.heritage + '</p>';
    html = html + '<p class="artisan-story" id="story' + i + '" style="display:none;">' + a.story + '</p>';
    html = html + '</div>';
  }
  document.getElementById("artisanList").innerHTML = html;
}

function toggleStory(index) {
  var story = document.getElementById("story" + index);
  if (story.style.display == "none") {
    story.style.display = "block";
  } else {
    story.style.display = "none";
  }
}

// ---------- PRODUCT POPUP ----------
function openModal(id) {
  // find the product with this id
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      p = products[i];
    }
  }
  var a = artisans[p.artisan];

  // fill product details
  document.getElementById("mCraft").innerHTML = p.craft;
  document.getElementById("mName").innerHTML = p.name;
  document.getElementById("mPrice").innerHTML = "Rs. " + p.price;
  document.getElementById("mDesc").innerHTML = p.desc;

  // GI badge or heritage tag
  if (p.gi != "") {
    document.getElementById("mGI").innerHTML =
      '<span class="gi-badge">GI Certified</span>' +
      '<p class="gi-note">Verified authentic origin: ' + p.gi + '</p>';
  } else {
    document.getElementById("mGI").innerHTML =
      '<p class="no-gi-note">Handmade Heritage tag: made by hand using traditional methods.</p>';
  }

  // artisan bio card
  document.getElementById("mPhoto").src = a.photo;
  document.getElementById("mArtisan").innerHTML = a.name;
  document.getElementById("mOrigin").innerHTML = a.place + ", " + a.state;
  document.getElementById("mHeritage").innerHTML = a.heritage;
  document.getElementById("mStory").innerHTML = a.story;

  // thumbnails for the gallery
  var thumbs = "";
  for (var j = 0; j < p.images.length; j++) {
    thumbs = thumbs + '<img src="' + p.images[j] + '" onclick="changeImage(this.src)" onerror="useBackup(this)" alt="Photo ' + (j + 1) + '">';
  }
  document.getElementById("thumbs").innerHTML = thumbs;

  // main image
  changeImage(p.images[0]);

  // add to cart button
  document.getElementById("mAddBtn").onclick = function () {
    addToCart(p.name);
  };

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  resetZoom();
}

// ---------- ZOOM GALLERY ----------
function changeImage(src) {
  document.getElementById("mainImage").src = src;
  resetZoom();
}

function toggleZoom(event) {
  var img = document.getElementById("mainImage");
  if (zoomed == false) {
    zoomed = true;
    moveZoom(event);
    img.style.transform = "scale(2.5)";
    document.getElementById("zoomBox").style.cursor = "zoom-out";
  } else {
    resetZoom();
  }
}

function moveZoom(event) {
  if (zoomed == true) {
    var box = document.getElementById("zoomBox");
    var rect = box.getBoundingClientRect();
    var x = ((event.clientX - rect.left) / rect.width) * 100;
    var y = ((event.clientY - rect.top) / rect.height) * 100;
    document.getElementById("mainImage").style.transformOrigin = x + "% " + y + "%";
  }
}

function resetZoom() {
  zoomed = false;
  var img = document.getElementById("mainImage");
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center";
  document.getElementById("zoomBox").style.cursor = "zoom-in";
}

// ---------- CART ----------
function addToCart(name) {
  cartCount = cartCount + 1;
  document.getElementById("cartCount").innerHTML = cartCount;
  alert(name + " added to cart!");
}

// ---------- CONTACT FORM ----------
function sendMessage() {
  var name = document.getElementById("cName").value;
  var msg = document.getElementById("cMsg").value;

  if (name == "" || msg == "") {
    document.getElementById("contactReply").innerHTML = "Please fill in both boxes.";
  } else {
    document.getElementById("contactReply").innerHTML = "Thank you, " + name + "! We will contact you soon.";
  }
}

// ---------- RUN WHEN PAGE LOADS ----------
showProducts("All");
showArtisans();
